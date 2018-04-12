// Display list of all topic

exports.topic_list = function(req, res) {
    res.send('topic list');
};

//Display detail page for a specific topic.

exports.topic_detail = function(req,res){
                res.send(req.param.id);
};

// Handle topic create on POST.
exports.topic_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: topic create POST');
};

// Handle topic delete on POST.
exports.topic_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: topic delete POST');
};

// Handle topic update on POST.
exports.topic_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: topic update POST');
};