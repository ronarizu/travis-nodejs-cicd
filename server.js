/**
 * Project: travis-nodejs-cicd
 * Description: nodejs web api project with continuos integration using TravisCI
 * Author: Ronny Arias
 */

 /** importing modules and 3rd party libraries */
 const express = require('express');

 /** api initilization */
 const app = express();

 /** setting the enviroment and port  */
 const port = process.env.PORT || 3010;
 const env = process.env.NODE_ENV;

 /** run the application */
 app.listen(port, ()=> {
    console.log('travis-nodejs-cicd API have been started in the port: ' + port + ' running on the ' + env + ' enviroment.');
 });