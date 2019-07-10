const express = require('express');
const router = express.Router();

//2. Item Model
const Item = require('../../models/Item'); //../ to come out of api folder ../to come out of routes folder, then go to models and refer to Items.js

//2. Create Some Routes

// @route   GET api/Items
// @desc    Get all items
// @access  Public
//router.get('/', (req, res) => {
//  Item.find()
//    .sort({ date: -1 })    //sort w.r.t date and -1 for ascending
//    .then(items => res.json(items));
//});

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});



// @route   POST api/Items
// @desc    Add new item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});


module.exports = router;
