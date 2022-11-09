from flask import Flask
from flask_cors import CORS
from routers import door

app = Flask(__name__)
CORS(app)

@app.route('/unlock')
def unlock():
    return door.unlock()

@app.route('/lock')
def lock():
    return door.lock()

if __name__ == "__main__":
    app.run(debug=True)