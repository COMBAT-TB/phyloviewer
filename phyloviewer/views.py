from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def phyloviewer():
    return render_template('phyloviewer.html')
