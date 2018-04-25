//filter functions to validate input for postId and commentId
const express = require('express')
module.exports = {
    filterPosts : function(req,res){
        if(req.params.postId && req.store.posts[req.params.postId] == undefined){
            throw("Non existing post")
        }
        return
    },
    filterComments: function(req,res){
        if(req.params.postId && req.store.posts[req.params.postId] == undefined){
            throw("Non existing post")
        }
        if(req.params.commentId && re.s.posts[req.params.postId[req.params.commentId] == undefined]){
            throw("Non existing comment")
        }
        return
    }
}
