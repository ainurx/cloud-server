const express = require('express')
const router = express.Router()

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const UserMiddleware = require('../middleware/UserMiddleware')

const UserController = require('../controllers/UserController')
const BlogController = require('../controllers/BlogController')

router.post('/signup', UserController.signUp)
router.post('/signin', UserController.signIn)

router.get('/user', UserMiddleware.decodeToken, UserController.findUser)

router.post('/blog', upload.single('image'), UserMiddleware.decodeToken, BlogController.createBlog)

module.exports = router