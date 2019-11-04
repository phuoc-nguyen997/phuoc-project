var express = require('express');
var router = express.Router();
var DATA = require('../queries/aws');
const {check, validationResult} = require('express-validator');
router.get('/dangnhap', (req, res) => {
    // req.session.TaiKhoan = null;
    res.render('login', {err: []});
}).post('/dangnhap', [
    check('tenDangNhap', "Tên đăng nhập không hợp lệ"),
    check('matKhau')
], (req, res) => {
    var errors = validationResult(req).array();
    if (errors.length > 0) {
        res.render('login', {err: errors});
        console.log(errors)
    } else {
        // var tendangnhap = req.body.tendangnhap;
        // var matkhau = req.body.matkhau;
        // console.log(taikhoan) ;
        // console.log(matkhau) ;
        // req.session.TaiKhoan = TaiKhoan;
        var params = {
            TableName: "NhaBanHang",
            FilterExpression: "#user = :tenDangNhap and #password = :matKhau ",
            ExpressionAttributeNames: {
                "#user": "tenDangNhap",
                '#password': "matKhau"
            },
            ExpressionAttributeValues: {
                ":tenDangNhap": req.body.tendangnhap,
                ":matKhau": req.body.matkhau
            }
        };
        console.log(errors)
        DATA.DangNhap(params, errors, res);
    }
})

module.exports = router
