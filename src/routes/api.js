const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')
const authVerifyMiddleware = require('../middleware/authVerifyMiddleware')

router.post("/createProfile", profileController.createProfile)
router.post("/userLogin", profileController.userLogin)
router.get("/selectProfile", authVerifyMiddleware, profileController.selectProfile)






module.exports = router