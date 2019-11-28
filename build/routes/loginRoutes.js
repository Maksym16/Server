"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n        <div>\n          <lable>Email</lable>\n          <input name=\"email\" type=\"email\" />\n        </div>\n        <div>\n          <lable>Password</lable>\n          <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email &&
        password &&
        email === 'mfedorenko16@gmail.com' &&
        password === '123456') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div> You are Logged In</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div> You are not authorized</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
