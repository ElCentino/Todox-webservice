const express = require('express')
const Todo = require('../models/Todo')

const router = express.Router()

router.post('/todos/add', async (req, res) => {
    
    try {

        const todo = new Todo(req.body)
    
        await todo.save()

        return res.json({
            status: 200,
            message: "Success"
        })
    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }    
})

router.get('/todos/get/:UserId', async (req, res) => {

    let todos = []

    const { UserId } = req.params

    try {

        todos = await Todo.find({ UserId })

        console.log('Todos accessed', todos)

        return res.json(todos)

    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.get('/todos/get/completed/:UserId', async (req, res) => {

    let todos = []

    const { UserId } = req.params

    try {

        todos = await Todo.find({ IsCompleted: true, UserId })

        console.log('Todos accessed', todos)

        return res.json(todos)

    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.get('/todos/get', async (req, res) => {

    let todos = []

    const { UserId } = req.params

    try {

        todos = await Todo.find({})

        console.log('Todos accessed', todos)

        return res.json(todos)

    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.get('/todos/get/:Id/:UserId', async (req, res) => {

    const { Id, UserId } = req.params

    let todo;

    try {

        todo = await Todo.findOne({ Id, UserId })

        return res.json(todo)

    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.put('/todos/update', async (req, res) => {

    const { Id, Title, Description, UserId } = req.body

    try {

        await Todo.findOneAndUpdate({ Id, UserId }, { Title, Description, UpdatedAt: Date.now() })

        return res.send({
            status: 200,
            message: "Sucesss",
        })
    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.put('/todos/complete', async (req, res) => {

    const { Id, UserId } = req.body

    try {

        await Todo.findOneAndUpdate({ Id, UserId }, { IsCompleted: true, CompletedAt: Date.now() })

        return res.send({
            status: 200,
            message: "Sucesss",
        })
    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.put('/todos/uncomplete', async (req, res) => {

    const { Id, UserId } = req.body

    try {

        await Todo.findOneAndUpdate({ Id, UserId }, { IsCompleted: false, CompletedAt: null })

        return res.send({
            status: 200,
            message: "Sucesss",
        })
    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

router.delete('/todos/delete/:Id/:UserId', async (req, res) => {

    const { Id, UserId } = req.params

    try {

        await Todo.findOneAndDelete({ Id, UserId })

        return res.send({
            status: 200,
            message: "Sucesss",
        })
    }
    catch(e) {

        return res.json({
            status: 400,
            message: e
        })
    }
})

module.exports = router;