const AWS = require("aws-sdk");
const fs = require("fs");
var query = require("../queries/table-queries");
// var passport = require("passport");
AWS.config.update({
    region: "us-east-1",
    endpoint: "http://localhost:8000"
});
var doc = new AWS.DynamoDB.DocumentClient();

function DangNhap(params, errors, res) {
    doc.scan(params, function (err, data) {
        if (data.Items.length > 0) {
            res.render("danhsachSP");
        } else {
            errors.push({"msg": "Tài khoản không đúng"});
            res.render("login", {err: errors});
        }
    });
}


module.exports = {
    DangNhap: DangNhap,
  
};