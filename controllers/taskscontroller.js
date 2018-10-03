const db = require("../models");

// Defining methods for the tasksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Tasks
  //     .find({_id: req.user._id})
  //     .then(dbTasks => res.json(dbTasks))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Tasks
  //     .findById(req.params.id)
  //     .then(dbTasks => res.json(dbTasks))
  //     .catch(err => res.status(422).json(err));
  // },
  findOneAndUpdate: function(req, res) {

    console.log(" ----------- got here");
    console.log(" ----------- " + req.body.taskId);


    const newTasks = req.user.tasks.map(elem => {
      if(elem._id == req.body.taskId) {
        console.log(" ---------- " + elem._id + " is completed");
        elem.completed = true
      }
      console.log(elem);
      return elem;
    })


      db.Users.findOneAndUpdate({ _id: req.user._id}, {$set: {tasks: newTasks}
      }, function(err, data){
        if (err) {
          console.log(err);
        } else{
          console.log(data)
        } 
        return res.json(data[0])
      })
      // .then(res => res.json(res))
      .catch(err => res.status(422).json(err));





    // save the user
   
    // return res.json(req.user);
    // db.Tasks.findOneAndUpdate({ _id: req.body.taskId}, {$set: {completed: true}
    //   }, function(err, data){
    //     if (err) {
    //       console.log(err);
    //     } else{
    //       console.log(data)
    //     } // req.user.save().then(() => {
    //   return res.json(tasks[0])
    // })
    //   })
    //   .then(res => res.json(res))
    //   .catch(err => res.status(422).json(err));
  },
};