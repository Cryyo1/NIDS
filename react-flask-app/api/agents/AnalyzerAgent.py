import json
from spade import agent, quit_spade
from spade.message import Message
from spade.template import Template
from spade.behaviour import CyclicBehaviour
import time

class AgentAnalyzer(agent.Agent):
  class Analyzerbehaviour(CyclicBehaviour):
      
    async def run(self):
        msg=await self.receive()
        if msg:
            print("message received")
            print("Reciever Agent:",json.load(msg.body))

  async def setup(self):
        print("Hello World! I'm agent {}".format(str(self.jid)))
        
        analyz=self.Analyzerbehaviour()
        template = Template()
        template.set_metadata("performative", "inform")
        self.add_behaviour(analyz)

## analyzer agent
jid_analyzer = "Analyzer@jabber.hot-chilli.eu"
passwd_analyzer = "Analyzer1234"

analyzer = AgentAnalyzer(jid_analyzer, passwd_analyzer)
future_analyzer = analyzer.start()
future_analyzer.result()

while analyzer.is_alive():
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            analyzer.stop()
            break


analyzer.stop()