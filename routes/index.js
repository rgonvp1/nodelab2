
const express = require('express')
const posts = require('./posts')
const comments = require('./comments')

const router = express.Router()

router.get('/posts', posts.getPosts)
router.get('/posts/:postId', posts.getPosts)
router.post('/posts', posts.addPost)
router.put('/posts/:postId', posts.updatePost)
router.delete('/posts/:postId',posts.removePost)

router.get('/posts/:postId/comments', comments.getComments)
router.post('/posts/:postId/comments', comments.addComment)
router.put('/posts/:postId/comments/:commentId', comments.updateComment)
router.delete('/posts/:postId/comments/:commentId',comments.removeComment)

module.exports = router

