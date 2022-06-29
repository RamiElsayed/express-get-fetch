const {Router} = require('express');
const {getPets} = require('../../controllers/api/pets.js');

const router = Router();

router.get('/', getPets);

module.exports= router;