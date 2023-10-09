const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')
const authVerifyMiddleware = require('../middleware/authVerifyMiddleware')
const todoListController = require('../controllers/todoListController')

router.post("/createProfile", profileController.createProfile)
router.post("/userLogin", profileController.userLogin)
router.get("/selectProfile", authVerifyMiddleware, profileController.selectProfile)
router.post("/updateProfile", authVerifyMiddleware, profileController.updateProfile)
router.delete("/deleteProfile", authVerifyMiddleware, profileController.deleteProfile)

router.post("/emailVerification", authVerifyMiddleware, profileController.emailVerification)
router.post("/createTodoList",authVerifyMiddleware, todoListController.createTodo)






module.exports = router