"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //adding types for req and res
var app = express_1.default();
app.get('/', function (req, res) {
    res.send("\n    <div>\n      <h1>Hello</h1>\n    </div>\n  ");
});
app.listen(3000, function () {
    //adding server listener with server port
    console.log('listening on port 3000');
});
