"use strict";

/**
 * FileuploadController
 * @description :: Server-side logic for ...
 */

module.exports = {
    uploadFile : function(req, res){
        req.file('photo').upload({
            dirname : '../../../client/src/assets/uploads/'
            //dirname: '../../assets/uploads'
        },function(err, files) {
            if(err) {console.log(err)};
            //var fileNameArray = files[0].fd.split("/");
            //var fileName = fileNameArray[fileNameArray.length - 1];
            //console.log("fileName: ",fileName);
            //return res.ok();
            return res.json({"status": "File upload successfully", "files": files });
        });
    }
};
