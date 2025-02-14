from flask import Flask, render_template
import os

app =  Flask(__name__)

@app.route("/") # define the route for the home page
def home():
  return render_template('index.html') # Render the index.html template

if __name__ == "__main__": # check if the script is being run directly
  # app.run(debug=True) # Run the appication in debug mode
  
  # Use the PORT environment variable provided by Heroku
  port = int(os.environ.get("PORT", 5000))
  app.run(host='0.0.0.0', port=port)