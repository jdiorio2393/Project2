const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Forum = require('../models/testmodel');
const Sequelize = require('sequelize');

// Get gig list
router.get("/api/posts/", function(req, res) {
    Forum.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

// // Display add gig form
// router.get('/add', (req, res) => res.render('add'));

// // Add a gig
// router.post('/add', (req, res) => {
//   let { title, technologies, budget, description, contact_email } = req.body;
//   let errors = [];

//   // Validate Fields
//   if(!title) {
//     errors.push({ text: 'Please add a title' });
//   }
//   if(!technologies) {
//     errors.push({ text: 'Please add some technologies' });
//   }
//   if(!description) {
//     errors.push({ text: 'Please add a description' });
//   }
//   if(!contact_email) {
//     errors.push({ text: 'Please add a contact email' });
//   }

//   // Check for errors
//   if(errors.length > 0) {
//     res.render('add', {
//       errors,
//       title, 
//       technologies, 
//       budget, 
//       description, 
//       contact_email
//     });
//   } else {
//     if(!budget) {
//       budget = 'Unknown';
//     } else {
//       budget = `$${budget}`;
//     }

//     // Make lowercase and remove space after comma
//     technologies = technologies.toLowerCase().replace(/, /g, ',');

//     // Insert into table
//     Gig.create({
//       title,
//       technologies,
//       description,
//       budget,
//       contact_email
//     })
//       .then(gig => res.redirect('/gigs'))
//       .catch(err => console.log(err));

module.exports = router;