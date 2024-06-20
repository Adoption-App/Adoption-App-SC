const express = require("express");
const Router = express.Router();
const AdoptionPostsController = require("../Controllers/AdoptionPostsController.js");

Router.route("/")
  .post( AdoptionPostsController.postAdoptionPosts)
  ;


  Router.route("/:id")
  .get( AdoptionPostsController.getByIdAdoptionPosts).delete(AdoptionPostsController.deleteAdoptionPosts)
 

module.exports = Router ;
