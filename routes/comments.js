const express =require('express')
const filters = require ('../filters.js')

module.exports = {
    getComments(req, res) {
      try{
        filters.filterPosts(req,res)
        res.status(200).send(req.store.posts[req.params.postId].comments)
      }
      catch(err){
          return res.sendStatus(404)
      }
    }, 
    addComment(req, res) {
        try{
            filters.filterPosts(req,res)
            if (!req.body.text) return res.sendStatus(400)
            newComment = {
                text: req.body.text.trim()
            }
            id = req.store.posts[req.params.postId].comments.length
            req.store.posts[req.params.postId].comments.push(newComment)
            res.status(201).send({commentId: id})
        }
        catch(err){
            return res.sendStatus(404)
        }
    },
    updateComment(req, res) {
        try{
            filters.filterPosts(req,res)
            filters.filterComments(req,res)
            req.store.posts[req.params.postId].comments[req.params.commentId].text = req.body.text.trim()
            res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
        }
        catch(err){
            return res.sendStatus(404)
        }
    },
    removeComment(req, res) {
        try{
            filters.filterPosts(req,res)
            filters.filterComments(req,res)
            req.store.posts[req.params.postId].comments.slice(req.params.commentId, 1)
            res.status(200).send()
        }
        catch(err){
            return res.sendStatus(404)
        }
    }  
}