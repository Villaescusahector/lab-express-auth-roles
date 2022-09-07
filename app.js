// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");
const isLogedin = require('./middleware/is_logedin.middleware');
// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

app.locals.siteTitle = `IronLearn`;

// Session config
require('./config/session.config')(app)
require('./utils/utils')
// Routes
require("./routes")(app)
// app.use((req, res, next) => {
//     if (req.session.user) {
//         app.locals.username = req.session.user.username;
//         app.locals.description = req.session.user.description;
//     } else {
//         app.locals.username = null;
//         app.locals.description = null;
//     }
//     next();
// })



// app.use('/', isLogedin);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
