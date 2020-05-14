const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// specify and configure template engines
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
// this middleware allows us to be able to use and read static files such as css from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// add 404 page for unhandled routes
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
