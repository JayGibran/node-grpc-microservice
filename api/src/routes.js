const {Router} = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PurchaseController = require('./controllers/PurchaseController');

const authMiddleware = require('./middlewares/auth');

const router = Router();
 
 router.get('/users/:id', UserController.show);
 router.post('/users', UserController.store);
 router.get('/sessions', SessionController.store);

 router.use(authMiddleware);
// router.get('/users/:userId/purchase', PurchaseController.list);
 router.post('/purchases',  PurchaseController.store);
 router.get('/purchases/:id', PurchaseController.show);
 router.get('/purchases',  PurchaseController.index);

 module.exports = router;