from flask import Flask, render_template, redirect, request
from flask_app import app

@app.route("/")
def index():

    return render_template("index.html")

@app.route("/send", methods=["POST"])
def receive():
    print(request.form["username"])

    return redirect("/")