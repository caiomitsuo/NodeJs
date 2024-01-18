const { Router } = require('express');

const ContactController = require('./app/contorllers/ContactController.js');

const router = Router();

router.get('/contacts', ContactController.index);

module.exports = router;
