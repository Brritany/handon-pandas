from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/level1')
def level1():
    return render_template('level1.html')
