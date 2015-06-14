var Ticket  = require('../model/ticket.model'), 
    express = require('express'), 
    router  = express.Router();
// Api Routes
  /* Middle ware */
  router.use(function(req, res, next) {
    console.log(new Date());
    next();
  }); 
router
.route('/ticket')
  .get(function(req,res) {
    Ticket.find(function(err,tickets){
      if(err) res.send(err);
      res.json(tickets);
    })
  });
// router
//   .route('/task/:task_id')
//     .get(function(req, res) {
//       Task.findById(req.params.task_id, function(err, task) {
//         if (err) res.send(err);
//         res.json(task);
//       });
//     })
//     .put(function(req, res) {
//       Task.findById(req.params.task_id, function(err, task) {
//         if (err) res.send(err);
//         task.concept = req.body.concept;
//       	task.list = req.body.list;
//       	task.date_creation = new Date();
//       	task.date_end = req.body.date_end;
//       	task.location.x = req.body.location.x;
//       	task.location.y = req.body.location.y;
//       	task.image_url = req.body.image_url;
//       	task.priority = req.body.priority;
//       	task.done = 0;	
//         task.save(function(err) {
//           if (err) res.send(err);
//           res.json({ message: 'Task updated!' });
//         });
//       });
//     })
//     .delete(function(req, res) {
//       Task.remove({
//         _id: req.params.task_id
//       }, function(err, task) {
//         if (err) res.send(err);
//         res.json({ message: 'Successfully deleted' });
//       });
//     });
// router
//   .route('/lists')
//     .get(function(req,res) {
//       List.find(function(err,lists){
//         if(err) res.send(err);
//         res.json(lists);
//       })
//     });
// router
//   .route('/lists/:list/tasks')
//     .get(function(req, res) {
//       Task.find({list: req.params.list}, function(err, tasks) {
//         if (err) res.send(err);
//         res.json(tasks);
//       });
//     });
module.exports = router;