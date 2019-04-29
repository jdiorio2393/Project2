// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These Are NOT Handlebar Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/forum-api-routes.js")(app);

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Thread routes
app.use('/threads', require('./routes/gigs'));



app.get("/", function(req, res) {
  db.forums.findAll({}).then(function(threads) {
    res.json(dbAuthor);
  });
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() { // pass { force: true } parameter to overwrite the table with an empty one
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
