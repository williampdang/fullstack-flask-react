from flask import Flask, send_from_directory
import json 

app = Flask(__name__, static_folder='ReactDemo/build', static_url_path='/') # namespace, where the files live, where you are served no leading and ending slash

@app.route("/api/getter/", methods = ['GET']) # single route that supports get methods 
# response
# route is an endpoint
# get request
def getter_api():
    return json.dumps({"data_from_backend": 20}) # takes data structure and turns it into a string

@app.route('/', methods = ['GET'])
def index():
    return send_from_directory(app.static_folder, 'index.html')