const AdoptionPosts = require("../Models/AdoptionPosts.js");


module.exports.postAdoptionPostService = async (data) => {
  const AdoptionPost = await AdoptionPosts.create(data);


  return AdoptionPost;
  
};
module.exports.getByIdAdoptionPostService = async (id, data) => {
  const AdoptionPost = await AdoptionPosts.findById(id);

  return AdoptionPost;
};

module.exports.updateAdoptionPostService = async (id, data) => {
 const AdoptionPostId = await AdoptionPosts.findById(id);
 const AdoptionPost = await AdoptionPostId.set(data).save();
 return AdoptionPost;
};
