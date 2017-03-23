"use strict";

/**
 * UserController
 * @description :: Server-side logic for manage users
 */

module.exports = {
    getAll: function (req, res) {
        User.find().exec(function(err, record) {
        if(err) return err;
            res.ok(record);
            //console.log(record);
        });
    },
    getUserById : function(req,res){
        var id =req.params.id;
        User.findOne(id).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    },

    deleteUserId : function(req,res){
        var id =req.params.id;
        User.findOneAndRemove(id).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    },

    updateUserId : function(req,res){
        var id =req.params.id;
        User.update({"_id": ObjectId(id)}).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    }
};
