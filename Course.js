var express = require('express');
var router = express('router');

// Require controller Models....

var Course_Controller = require('Controller/CourseController');
var Topic_Controller = require('Controller/TopicController');
var Chapter_Controller = require('Controller/ChapterController');

                    // Course Routes

router.get("/",Course_Controller.index);

// Post request for creating a Course....
router.post("/Course/creat",Course_Controller.Course_creat_post);

// post request for delete Course....
router.post("/Course/:id/delete",Course_Controller.Course_delete_post);

// Post request to update Course...

router.post("/Course/:id/update",Course_Controller.Course_update_post);

// GET request for one course....

 router.get("/Course",Course_Controller.Course_detail);

 // GET request for list of courses....
 router.get("/Course",Course_Controller.Course_list);

                         //  (2) TOPIC routers.....

  // POST request for creat topic....

  router.post("/Topic/creat",Topic_Controller.Topic.creat.post);

  // POST request for delete TOPIC

  router.post("/Topic/:id/delete",Topic_Controller.Course_delete_post);

  // POST request for update TOPIC....

  router.post("/Topic/:id/update",Topic_Controller.Topic_update_post);

// GET request for one Topic....

  router.get("/Topic",Topic_Controller.Topic_detail);

  // GET request for list of Topic....

  router.get("/Topic",Topic_Controller.Topic_list);

                      //(3)Chapter routers...........

  // POST request for creat Chapet....

  router.post("/Chapter/creat",Chapter_Controller.Chapter.creat.post);

  // POST request for delete Chapter

  router.post("/Chapter/:id/delete",Chapter_Controller.Chapter_delete_post);

  // POST request for update Chapter....

  router.post("/Chapter/:id/update",Chapter_Controller.Chapter_update_post);

  // GET request for one Chapter....

  router.get("/Chapter",Chapter_Controller.Chapter_detail);

  // GET request for list of Chapter....

  router.get("/Chapter",Chapter_Controller.Chapter_list);

  // EXPORTS Models...

  module.exports = router;
