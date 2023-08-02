from flask import Flask
from flask_cors import CORS
import requests
import json
import xmltodict

app = Flask(__name__)
CORS(app)
"""


request_url = urllib.request.urlopen('https://www.geeksforgeeks.org/')
print(request_url.read())
"""


@app.route('/')
def home():
    request_url = requests.get(
        'https://inciweb.nwcg.gov/incidents/rss.xml')

    data_dict = xmltodict.parse(request_url.text)
    return json.dumps(data_dict)


if __name__ == '__main__':
    app.run(debug=True)
