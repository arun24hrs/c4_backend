const express = require("express");
const postRouter = express.Router();
const {PostModel} = require("../model/post.model");

postRouter.post("/add", (req, res)=>{
    try {
        const newPost = new PostModel(req.body);
    newPost.save();
    res.status(200).send({message: "Post added successfully!"})
    } catch (error) {
        res.status(400).send({message: "Bad Request"})
    }
})

postRouter.get("/", async(req, res) => {
    const posts = await PostModel.find();
    res.status(200).send(posts);
})



module.exports = postRouter;