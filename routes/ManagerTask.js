const router=require("express").Router();
const { requireSignin,managermiddleware,adminmiddleware } = require('../middleware/index')
const multer = require('multer');
const path = require('path');
const { addManagerTask,getall } = require('../controller/ManagerTask');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
     cb(null,'./uploads/')
        
    },
    filename:function (req,file ,cb){
        cb(null, file.originalname)
    }
})


const upload = multer({ storage })  ;
router.post('/addmanagertask'
// ,requireSignin,managermiddleware
,upload.array('photo'),addManagerTask);
router.get('/getallmtext',getall);



 module.exports = router;  