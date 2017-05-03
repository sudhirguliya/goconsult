"use strict";

/**
 * SubCategoryController
 * @description :: Server-side logic for ...
 */

module.exports = {
	getSubCategory : function(req,res){
        Mailer.sendWelcomeMail();//Mailer.sendWelcomeMail(user);
        var id =req.params.id;
        //console.log(id);
        SubCategory.find({select: ['name']}).populate('parent').exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    }
};
