const express = require('express');
const router = express.Router();

const {
    GetAll,
} = require('../areas/directory/controllers/usercontroller');

///:username&:email are not needed
router.route('/getall').get(GetAll);


module.exports = router;