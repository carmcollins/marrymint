const db = require("../models");

module.exports = {
  findOneAndUpdate: function(req, res) {
    const newTasks = req.user.tasks.map(elem => {
      if(elem._id == req.body.taskId) {
        elem.completed = true
      };

      return elem;
    });

    db.Users.findOneAndUpdate({ _id: req.user._id}, {$set: {tasks: newTasks}}, function(err, data){
      if (err) {
        console.log(err);
      } else{
        console.log(data)
      };

      return res.json(data[0]);

    }).catch(err => res.status(422).json(err));
  }
};