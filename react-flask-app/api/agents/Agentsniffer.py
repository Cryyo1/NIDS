import json
from spade import agent, quit_spade
from spade.message import Message
from spade.template import Template
from spade.behaviour import CyclicBehaviour
from scapy.all import *
from scapy.layers.http import HTTPRequest
import colorama as cr
from datetime import datetime, timedelta
# initialize colorama
cr.init()
# define colors
GREEN = cr.Fore.GREEN
RED   = cr.Fore.RED
RESET = cr.Fore.RESET
#define constants
show_raw = True
captured_data=[]
failed_attempts={}

class AgentSniffer(agent.Agent):
    
    ### making agent capture packets from the network with cyclic behaviour
    
    class sniffBehaviour(CyclicBehaviour):

        async def on_start(self,iface="Ethernet",port=80):
            # port 80 for http request capture (generally)
            self.iface = iface
            self.port =port
            self.detected=False
            
        async def run(self):
        
            sniff(filter=f"port {self.port}", prn=self.process_packet,count=1, iface=self.iface, store=False,)
            
            
        ### This function is executed whenever a packet is sniffed
        def process_packet(self,packet):
            if packet.haslayer(HTTPRequest):
                # if this packet is an HTTP Request
                # get the requested URL 
                url = packet[HTTPRequest].Host.decode() + packet[HTTPRequest].Path.decode()
                # get the requester's IP Address
                ip = packet[scapy.all.IP].src
                # get the request method
                method = packet[HTTPRequest].Method.decode() 
                data={
                    "ip source":packet[scapy.all.IP].src,
                    "ip destination":packet[scapy.all.IP].dst,
                    "port source":packet[TCP].sport,
                    "port destination":packet[TCP].dport,
                    "method":method,
                    "url": url,
                    "paylod": packet[Raw].load if((show_raw and method=="POST" and packet.haslayer(Raw))) else '',
                }
                print(data)
                now = datetime.now()
                if ip in failed_attempts:
                    if failed_attempts[ip]['count'] > 50 and now - failed_attempts[ip]['time'] < timedelta(hours=1) and not self.detected:
                            outfile=open('.\\logs.json', 'r')
                            logs_data=json.load(outfile)
                            outfile.close()
                            log={
                                "id": str(len(logs_data)+1),
                                'title': 'intrusion',
                                'subtitle': 'brute force',
                                'description': 'une tentative de brute force a été détectée {}'.format(data['url']),
                                'time': datetime.now().strftime("%Hh%M"),
                                'crit': 75,
                                'data': '',
                                'ip_source': data['ip source'],
                                "ip_dest": data['ip destination']
                            }
                            outfile=open(".\\logs.json", 'w')
                            logs_data[str(len(logs_data)+1)]=log
                            json.dump(logs_data,outfile,sort_keys=True, indent=4)
                            outfile.close()
                            self.detected=True
                else:
                  failed_attempts[ip] = {'count': 1, 'time': now}
        
                        
                failed_attempts[ip]['count'] += 1
                failed_attempts[ip]['time'] = now
                    
    async def setup(self):
        print("Hello World! I'm agent {}".format(str(self.jid)))
        capture = self.sniffBehaviour()
        self.add_behaviour(capture)


            
                               
    


# sniffer agent
jid_sniffer = "sniffer@hot-chilli.eu"
passwd_sniffer = "sniffer1234"
sniffer = AgentSniffer(jid_sniffer, passwd_sniffer)
future_sniffer = sniffer.start()
future_sniffer.result()

while sniffer.is_alive():
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            sniffer.stop()
            break

sniffer.stop()
quit_spade()
