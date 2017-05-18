"use strict";

/**
 * UserController
 * @description :: Server-side logic for manage users
 */

module.exports = {
    showAllUser : function(req,res){
        var id =req.params.id;
        //console.log(id);
        User.find({where: { type:{ '!' :"1"}}}).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    },
    showAllConnsultee : function(req,res){
        var id =req.params.id;
        //console.log(id);
        User.find({where: { type: "3"}}).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    }
    /* User.find( { type: "1" }).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
         User.find({where: { type: "1" }}).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
        SubCategory.find({select: ['name'],where: { type: "1" }}).populate('parent').exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })*/

   
};
