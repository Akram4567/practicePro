const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')
const authVerifyMiddleware = require('../middleware/authVerifyMiddleware')
const todoListController = require('../controllers/todoListController')

router.post("/createProfile", profileController.createProfile)
router.post("/userLogin", profileController.userLogin)
router.get("/selectProfile", authVerifyMiddleware, profileController.selectProfile)
router.post("/createTodoList",authVerifyMiddleware, todoListController.createTodo)






module.exports = router