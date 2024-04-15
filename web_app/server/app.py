import requests, uuid, json

from flask import Flask, request, render_template
from flask_cors import CORS
import os

app = Flask(__name__, static_url_path='', static_folder='client_web_build', template_folder='client_web_build')

CORS(app)

@app.route('/ping')
def api_ping_pong():
    return 'Pong!'

@app.route('/api/v1/db_test_operation')
def api_db_test_operation():
    return 'API'