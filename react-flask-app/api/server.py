from flask import Flask

logs = [
    {
        "id": "1",
        'title': 'intrusion',
        'subtitle': 'brute force',
        'description': 'une tentative de brute force a été détectée',
        'time': '15h30',
        'crit': 70,
        'data': '',
        'ip_source': "192.168.1.74",
        "ip_dest": "192.168.1.114"
    },
    {
        "id": "2",
        'title': 'intrusion',
        'subtitle': 'cross site scripting',
        'description': 'une tentative de cross site scripting a été détectée',
        'time': '23h30',
        'crit': 75,
        'ip_source': "192.168.1.147",
        "ip_dest": "192.168.1.94"
    },
    {
        "id": "3",
        'title': 'possible intrusion',
        'subtitle': 'paquet mal formé',
        'description': 'un paquet mal formé a été détectée',
        'time': '11h26',
        'crit': 1,
        'ip_source': "192.168.1.147",
        "ip_dest": "192.168.1.114"
    },
    {
        "id": "4",
        'title': 'intrusion',
        'subtitle': 'injection',
        'description': 'une donnée avec des caractères spéciaux injectée  a été détectée',
        'time': '5h47',
        'crit': 70,
        'ip_source': "192.168.1.174",
        "ip_dest": "192.168.1.112"
    },
    {
        "id": "5",
        'title': 'Configuration',
        'subtitle': 'port ouvert',
        'description': 'un port ouvert a été détectée sur le serveur',
        'time': '2h58',
        'crit': 0,
        'ip_source': "192.168.1.12",
        "ip_dest": "192.168.1.45"
    }

]
app = Flask(__name__)


@app.route('/data', methods=['GET'])
def get_data():
    return logs


if __name__ == '__main__':
    app.run(debug=True)
