from flask import Flask

logs=[
    {
        'title':'intrusion',
        'subtitle':'brute force',
        'description':'une tentative de brute force a été détectée',
        'time':'15h30',
        'crit':70,
        'data':''
    },
    {
        'title':'intrusion',
        'subtitle':'cross site scripting',
        'description':'une tentative de cross site scripting a été détectée',
        'time':'23h30',
        'crit':75,
        'data':''
    },
    {
        'title':'possible intrusion',
        'subtitle':'paquet mal formé',
        'description':'un paquet mal formé a été détectée',
        'time':'11h26',
        'crit':1,
        'data':''
    },
    {
        'title':'intrusion',
        'subtitle':'injection',
        'description':'une donnée avec des caractères spéciaux injectée  a été détectée',
        'time':'5h47',
        'crit':70,
        'data':''
    },
    {
        'title':'Configuration',
        'subtitle':'port ouvert',
        'description':'un port ouvert a été détectée sur le serveur',
        'time':'2h58',
        'crit':0,
        'data':''
    }
    
]
app = Flask(__name__)

@app.route('/data',methods=['GET'])
def get_data():
    return logs
    

if __name__ == '__main__':
    app.run(debug=True)

