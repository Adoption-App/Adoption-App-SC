const express = require("express");
const Router = express.Router();
const AdoptionPostsController = require("../Controllers/AdoptionPostsController.js");

Router.route("/")
  .post( AdoptionPostsController.postAdoptionPosts)
  ;



module.exports = Router;
