// Display list of all chapters

exports.chapter_list = function(req, res) {
    res.send('chapter list');
};

//Display detail page for a specific chapter.

exports.chapter_detail = function(req,res){
                res.send(req.param.id);
};

// Handle chapter create on POST.
exports.chapter_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter create POST');
};

// Handle chapter delete on POST.
exports.chapter_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter delete POST');
};

// Handle chapter update on POST.
exports.chapter_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter update POST');
};