// Dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./routes");

const sequelize = require("./config/connection");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

// Initialise and set port for server.
const app = express();
const PORT = process.env.PORT || 3000;

// Initialise session.
const sessionInit = {
  secret: "Shh secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sessionInit));

// Set handlebars as the engine for the app.
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Initialise the parsing of json and string data through express.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Identify routes for app.
app.use(routes);

// Turn on connection to database and then to the server.
// Have force: set to false so that server keeps data when app is run.
// Change to true if you want database reset to default.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}/eTrade`)
  );
});
