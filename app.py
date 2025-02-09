from flask import Flask, render_template

app =  Flask(__name__)

@app.route("/") # define the route for the home page
def home():
  return render_template('index.html') # Render the index.html template

if __name__ == "__main__": # check if the script is being run directly
  app.run(debug=True) # Run the appication in debug mode