"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.send('soy la ruta get!');
});
router.post('/', (req, res, next) => {
    res.send('soy la ruta post!');
});
router.use('/', (req, res, next) => {
    res.send('hello world =)');
});
exports.default = router;
