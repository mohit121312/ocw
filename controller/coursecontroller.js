// Display list of all course

exports.course_list = function(req, res) {
    res.send('course list');
};

//Display detail page for a specific course.

exports.course_detail = function(req,res){
                res.send(req.param.id);
};

// Handle course create on POST.
exports.course_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: course create POST');
};

// Handle course delete on POST.
exports.chapter_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: course delete POST');
};

// Handle course update on POST.
exports.course_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: course update POST');
};