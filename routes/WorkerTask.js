const router=require("express").Router();
const { requireSignin,adminmiddleware,workermiddleware,editormiddleware } = require('../middleware/index')
const multer = require('multer');
const path = require('path');
const { addWorkerTask,getall} = require('../controller/WorkerTask');
const storage = multer.diskStorage({
    destination:function (req,file,cb){
     cb(null,'./uploads/')
        
    },
    filename:function (req,file ,cb){
        cb(null, file.originalname)
    }
})


const upload = multer({ storage })  ;

router.post('/addtext'
//,requireSignin,workermiddleware
,upload.array('photo'),addWorkerTask);

router.get('/getalltext',getall);



 module.exports = router;  