const router = require("express").Router();
const nodemailer = require("nodemailer");
const ManagerTask = require("../models/ManagerTask");


//CREATE CONFERENCE

exports.addManagerTask = (req, res) => {

  const {
    title,description
  } = req.body;

  
  let photo = [];

  //console.log("ff"+req.body);

  if (req.files.length > 0) {
    photo = req.files.map(file => {
          return { fil: file.filename }
      });
  }

  //res.status(200).json({file: req.files , body:req.body});
  const manager = new ManagerTask({
      title,
      description,
      photo
    //   createBy: req.user._id



  });
  manager.save(((error, manager) => {
      if (error) {
          console.log(error);
          return res.status(400).json({ error });
      }
      if (manager) {
          res.status(201).json({ manager });
      }
  }));
};

