// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Koa = require("koa").default;
var Curry = require("rescript/lib/js/curry.js");

var app = new Koa();

app.env = "development";

app.use(function (context, next) {
      console.log("1");
      console.log(context.request.ip);
      context.body = "hello";
      Curry._1(next, undefined).then(function (param) {
            console.log("2");
            return Promise.resolve(undefined);
          });
    });

app.use(function (param, next) {
      console.log("3");
      Curry._1(next, undefined).then(function (param) {
            console.log("4");
            return Promise.resolve(undefined);
          });
    });

app.listen(8080, (function (param) {
        console.log("server is start success!");
      }));

exports.app = app;
/* app Not a pure module */
