from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('SAS_index.html')

@app.route('/color', methods=['GET', 'POST'])
def color():

    if request.method == 'GET':
        return render_template('colorV2.html')
    if request.method == 'POST':
        pass
        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        #return redirect(url_for('index'))

    # redirect to home
    return render_template('SAS_index.html')
@app.route('/asl', methods=['GET'])
def asl():
    return render_template('asl.html')
if __name__ == "__main__":
  app.run(debug=True)
