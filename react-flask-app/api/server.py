from flask import Flask
import json

app = Flask(__name__)


@app.route('/data', methods=['GET'])
def get_data():
    with open('.\\logs.json', 'r') as outfile:
        saved_logs=json.load(outfile)
        logs=[]
        for key in saved_logs.keys():
            logs.append(saved_logs[key])
    return logs[::-1]


if __name__ == '__main__':
    app.run(debug=True)
