from flask import Flask
import serverless_wsgi

app = Flask(__name__)

from app import routes

def handler(event, context):
    return serverless_wsgi.handle_request(app, event, context)
