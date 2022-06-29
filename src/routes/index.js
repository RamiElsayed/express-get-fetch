const {Router} = require('express');


const api = require('./api');
const view = require('./view');

const router = Router();

router.get('/api', api);
router.get('/', view);

module.exports= router;