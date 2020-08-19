from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return ('Hello World from the backend')

@app.route('/index')
def index():
    return render_template('SAS_index.html')

@app.route('/color', methods=['GET', 'POST'])
def color():

    if request.method == 'GET':
        return render_template('color.html')
    if request.method == 'POST':
        pass
        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        #return redirect(url_for('index'))

    # redirect to home
    return render_template('SAS_index.html')

if __name__ == "__main__":
  app.run(debug=True)
