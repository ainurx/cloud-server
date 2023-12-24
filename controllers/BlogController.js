const Blog = require('../models/Blog')

const { IfEmptyThrowError } = require('../common/check')

const createBlog = async (req, res) =>{
    try{
        const { id } = req.params

        const { title, content } = req.body
        const image = req.file

        IfEmptyThrowError(title, 'Title is required.')
        IfEmptyThrowError(content, 'Contect is required.')

        const payload = {
            userId: id,
            title,
            content
        }

        const result = await Blog.create(payload)

        res.status(201).send(result)
    } catch(err){
        res.status(501).send(err.message)
    }
}

module.exports = {
    createBlog
}