# page-serving-with-express
https://pageserving.herokuapp.com/
the issue is now resolved by adding build statement in package.json of server this is the statement ,"build": "cd web && npm install && npm run build", waht it does is redownloads all the dependencies and runs build before deploying to the server, the reason for the app not to work before was whenever we create a react app with create-react-app it initializes git init and adds .gitignore init which consists of multiple things but "/build" was the file which hindering our app to run, we can run our app through removing "/build" from the gitignore of the react file and then our app will be deployed working.

i have deployed this app to the heroku server and i am using express static to serve the react app and it is running fine in local server but after the deployment to heroku the "/"
request is not working for the rendering of app through express.static, while the rest of four methods i have created for https://pageserving.herokuapp.com/profile route are working 
fine please suggest me something to make it work on the deployed server.
The issue is now 
