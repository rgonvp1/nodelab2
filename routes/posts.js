const express =require('express')
const filters = require ('../filters.js')
module.exports = {
    getPosts(req, res) {
        //get individual post
        if(req.params.postId){
            if(req.store.posts.length > req.params.postId){
                res.status(200).send(req.store.posts[req.params.postId])
            } else{
                res.sendStatus(404)
            }
        } else{
        // or get all posts
        posts = req.store.posts
        res.status(200).send(posts)
        }
    },
    addPost(req, res) {
            if (!req.body.name || !req.body.url) return res.sendStatus(400)
            //cleanup and create new post
            aNewPost ={
                name: req.body.name.trim(),
                url: req.body.url.trim(),
                text: req.body.text.trim(),
                comments: []
            }
        id = req.store.posts.length
        req.store.posts.push(aNewPost)
        res.status(201).send({postId: id})
    },
    updatePost(req, res) {
        try{
            filters.filterPosts(req,res)
            //validate and cleanup input
            if (!req.body.name || !req.body.url) return res.sendStatus(400)
                req.store.posts[req.params.postId].name = req.body.name.trim()
                req.store.posts[req.params.postId].url = req.body.url.trim()
                req.store.posts[req.params.postId].text = req.body.text.trim()
                res.status(200)
                res.send(req.store.posts[req.params.postId])
        }
        catch(err){
            return res.sendStatus(404)
        }
    },

    removePost(req, res) {
        try{
            filters.filterPosts(req,res)
            req.store.posts.splice(req.params.postId, 1)
            res.status(204).send()
        }
        catch(err){
            return res.sendStatus(404)
        }
    }
}