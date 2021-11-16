const app = require('express').Router();
const db = require('../../models/workout')

app.post("/workouts", (req, res) => {
 db.create(req.body)
      .then(dbUser => {
        console.log('post route', dbUser)
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });


  app.get('/workouts',(req, res) => {
    db.findAll({})
    .then(data=>{
      console.log('get route', data);
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });


  app.get('/workouts/range',(req, res) => {
    db.findAll({}).limit(14)
    .then(data=>{
      console.log('get route', data);
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.put('/workouts/:id', (req,res) => {
    db.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}},{new: true})
    .then(data=>{
      console.log('put route', data);
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });

  module.exports = app;