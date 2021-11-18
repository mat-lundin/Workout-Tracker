const app = require('express').Router();
const db = require('../../models/workout')

app.post("/workouts", (req, res) => {
 db.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  app.get('/workouts',(req, res) => {
    db.find({})
    .then(data=>{
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });


  app.get('/workouts/range',(req, res) => {
    db.find({}).limit(14)
    .then(data=>{
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.put('/workouts/:id', (req,res) => {
    db.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}},{new: true})
    .then(data=>{
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

  module.exports = app;