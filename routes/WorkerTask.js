const router=require("express").Router();
const { requireSignin,adminmiddleware,workermiddleware,editormiddleware } = require('../middleware/index')
const multer = require('multer');
const path = require('path');
const { addWorkerTask } = require('../controller/WorkerTask');


router.post('/addtext',requireSignin,workermiddleware,addWorkerTask);



 module.exports = router;  