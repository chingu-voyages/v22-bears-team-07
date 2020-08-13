from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return ('Hello World from the backend')

@app.route('/index')
def index():
    return render_template('SAS_index.html')


if __name__ == "__main__":
  app.run(debug=True)
