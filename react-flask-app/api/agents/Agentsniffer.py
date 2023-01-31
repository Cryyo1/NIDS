import asyncio
from spade import agent, quit_spade
from spade.behaviour import CyclicBehaviour
from scapy.all import *
from scapy.layers.http import HTTPRequest
import colorama as cr


# initialize colorama
cr.init()
# define colors
GREEN = cr.Fore.GREEN
RED   = cr.Fore.RED
RESET = cr.Fore.RESET
#define constants
show_raw = True

class AgentSniffer(agent.Agent):
    
    ### making agent capture packets from the network with cyclic behaviour
    
    class sniffBehaviour(CyclicBehaviour):
        async def on_start(self,iface="Ethernet",port=80):
            # port 80 for http request capture (generally)
            self.iface = iface
            self.port =port
            

        async def run(self):
            sniff(filter=f"port {self.port}", prn=self.process_packet, iface=self.iface, store=True)
    
        ### This function is executed whenever a packet is sniffed
        def process_packet(self,packet):
            if packet.haslayer(HTTPRequest):
                # if this packet is an HTTP Request
                # get the requested URL 
                url = packet[HTTPRequest].Host.decode() + packet[HTTPRequest].Path.decode()
                # get the requester's IP Address
                ip = packet[IP].src
                # get the request method
                method = packet[HTTPRequest].Method.decode()
                print(f"\n{GREEN}[+] {ip} Requested {url} with {method}{RESET}")
                if show_raw and packet.haslayer(Raw) and method == "POST":
                    # print raw data if the it is a POST request
                    print(f"\n{RED}[*] Post Request Body: {packet[Raw].load}{RESET}") 
            
    async def setup(self):
        print("Hello World! I'm agent {}".format(str(self.jid)))
        capture = self.sniffBehaviour()
        self.add_behaviour(capture)


jid = "sniffer@hot-chilli.eu"
passwd = "sniffer1234"

sniffer = AgentSniffer(jid, passwd)
future = sniffer.start()
future.result()
while sniffer.is_alive():
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            sniffer.stop()
            break


sniffer.stop()
quit_spade()