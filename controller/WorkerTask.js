const router = require("express").Router();
const nodemailer = require("nodemailer");
const WorkerTask = require("../models/WorkerTask");


//CREATE CONFERENCE

exports.addWorkerTask = (req, res) => {

  const {
    title, date, text
  } = req.body;

  let photo = [];

  //console.log("ff"+req.body);

  if (req.files.length > 0) {
    photo = req.files.map(file => {
          return { fil: file.filename }
      });
  }
  //res.status(200).json({file: req.files , body:req.body});
  const worker = new WorkerTask({
      title,
      date,
      text,
      photo
      //createBy: req.user._id



  });
  worker.save(((error, worker) => {
      if (error) {
          console.log(error);
          return res.status(400).json({ error });
      }
      if (worker) {
          res.status(201).json({ worker });
      }
  }));
};

exports.getall=async(req,res)=>{
  await WorkerTask.find({})
  .then(data=>{
     res.status(200).send({data:data});
 }).catch(err=>{
     res.status(500).send({error:err.massage})
     console.log(err);
 });

         
 }
exports.getAllText = (req, res) => {
  

  WorkerTask.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
