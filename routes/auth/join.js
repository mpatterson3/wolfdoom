const router = require('express').Router();
router.get('/', (req, res, next) => {
    res.render('auth/join'); // changed view path to point to the correct location
});
module.exports = router;
router.post('/', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
