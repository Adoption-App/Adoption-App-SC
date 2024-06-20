const AdoptionPosts = require("../Models/AdoptionPosts.js");


module.exports.postAdoptionPostService = async (data) => {
  const AdoptionPost = await AdoptionPosts.create(data);


  return AdoptionPost;
  
};
module.exports.getByIdAdoptionPostService = async (id, data) => {
  const AdoptionPost = await AdoptionPosts.findById(id);

  return AdoptionPost;
};
module.exports.getAdoptionPostService = async () => {
  const adoptionPosts = await AdoptionPosts.find({});
  return adoptionPosts;
 };




 module.exports.deleteAdoptionPostService = async (id,data) => 
  
  {
    const AdoptionPost = await AdoptionPosts.deleteOne({ _id: id }); 

    return AdoptionPost;

    
  };
