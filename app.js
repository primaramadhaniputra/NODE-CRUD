const { urlencoded } = require('express');
const express = require('express')
const app = express()
var expressLayouts = require('express-ejs-layouts');
const port = 3000
const { loadContact, detailContact } = require('./utils/contact')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts)
app.get('/', (req, res) => {
   res.render('home', {
      title: 'home',
      layout: 'layouts/main'
   })
})
app.get('/about', (req, res) => {
   res.render('about', {
      title: 'about',
      layout: 'layouts/main'
   })
})
app.get('/contact', (req, res) => {
   const contacts = loadContact()
   res.render('contact', {
      title: 'contact',
      layout: 'layouts/main',
      contacts
   })
})

app.get('/detail/:nama', (req, res) => {
   const contact = detailContact(req.params.nama)
   if (contact !== undefined) {
      res.render('detail', {
         title: 'detail contact',
         layout: "layouts/main",
         contact
      })
   } else {
      res.redirect('/eror')
   }
})

app.get('/addContact', (req, res) => {
   res.render('add-contact', {
      title: 'add contact',
      layout: "layouts/main",
   })
})

app.use('/', (req, res) => {
   res.status(404)
   res.render('404', {
      title: 'page not found',
      layout: 'layouts/main'
   })
})
app.listen(port, () => {
   console.log(`listening at http://localhost:${port}`)
})