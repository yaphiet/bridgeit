var express = require('express');
var router = express.Router();
var eventsCtrl = require('../controllers/events');

/* GET users listing. */
router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.new);
router.get('/:id', eventsCtrl.show);
router.post('/', eventsCtrl.create);
router.put('/:id', eventsCtrl.update)
router.get('/:id/edit', eventsCtrl.edit)
router.delete('/:id', eventsCtrl.delete)

module.exports = router;