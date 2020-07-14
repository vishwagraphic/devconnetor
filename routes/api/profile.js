const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Here we are handling the profile api"
    });
});

module.exports = router;