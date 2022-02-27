const router = require('express').Router();

const usersRoutes = require('./users-routes');
const thoughtsRoutes = require('./thoughts-routes');

router.use('/Users', usersRoutes);

router.use('/Thoughts', thoughtsRoutes);

module.exports = router;