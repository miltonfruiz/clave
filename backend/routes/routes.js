const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const authenticate = require('../middleware/auth');

router.get('/api/passwords', authenticate, controller.getAll);
router.post('/api/passwords', authenticate, controller.create);
router.get('/api/passwords/:id', authenticate, controller.getById);
router.put('/api/passwords/:id', authenticate, controller.update);
router.delete('/api/passwords/:id', authenticate, controller.delete);

module.exports = router;