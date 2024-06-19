const AdoptionPostService = require("../Services/AdoptionPostsServices.js");
module.exports.postAdoptionPosts = async (req, res) => {
    try {
  
  
   const requestData = JSON.parse(req.body.name);
  
     const result = await AdoptionPostService.postAdoptionPostService(requestData);
      console.log(result);
      res.status(200).send({
        data:   result
        ,
      });
    } catch (error) {
      res.status(400).json({
        status: "false",
        message: error,
      });
    }
  };