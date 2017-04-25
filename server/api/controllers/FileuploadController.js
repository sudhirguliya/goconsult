"use strict";

/**
 * FileuploadController
 * @description :: Server-side logic for ...
 */

module.exports = {
    uploadFile : function(req, res){
        req.file('file').upload({
            dirname : '../../../client/src/uploads/'
        },function(err, file) {
            if(err) console.log(err);
            return res.ok();
            //res.json({"status": "File upload successfully", "file": file });
        })
    }
};
