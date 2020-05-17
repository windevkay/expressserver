const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.route');
const shopRoutes = require('./routes/shop.route');
const errorContoller = require('./controllers/error.controller');

const app = express();

const { get404 } = errorContoller;
// specify and configure template engines
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
// this middleware allows us to be able to use and read static files such as css from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
// add 404 page for unhandled routes
app.use(get404);

app.listen(3000);
