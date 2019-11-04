var express = require('express');
var router = express.Router();
const query = require('../queries/table-queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  let params = {
    TableName: 'SanPham'
  }
  
  query.scanItem(params,(err,data)=>{
    if(err)
      res.render('index', { title: 'Express' })
    else 
    res.render('index', { input: data.Items });
    // console.log(data.Items[0].maSP)
  })
});
router.get('/muasam', function(req, res, next) {
  let params = {
    TableName: 'SanPham'
  }
  
  query.scanItem(params,(err,data)=>{
    if(err)
      res.render('shop', { title: 'Express' })
    else 
    res.render('shop', { input: data.Items });
  })
});

router.get('/giohang', function(req, res, next) {
  res.render('cart', { title: 'Express' });
});

router.get('/thanhtoan', function(req, res, next) {
  res.render('checkout', { title: 'Express' });
});


router.get('/thongtin', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/lienhe', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/dangnhap', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/dangki', function(req, res, next) {
  res.render('sign-up', { title: 'Express' });
});
router.get('/noidung/product-single1', function(req, res, next) {
  let params = {
    TableName : "SanPham",
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "maSP"
    },
    ExpressionAttributeValues: {
        ":yyyy": req.query.maSP
    }
};
  query.queryItem(params,(err,data)=>{
    if(err)
      res.render('noidung/product-single1', { title: 'Express' });
    else
      res.render('noidung/product-single1', { input: data.Items[0] });
  })
});
router.post('/search',function(req,res,next){
  // console.log(req.body.search)
  let params = {
    TableName: "SanPham",
    FilterExpression: "#tensp=:t or #masp=:m or #tenhang=:th",
    ExpressionAttributeNames: {
        "#tensp": "tenSP",
        "#masp":"maSP",
        "#tenhang":"HangSanPham.tenHang"
    },
    ExpressionAttributeValues: {
         ":t": req.body.search,
         ":m": req.body.search,
         ":th":req.body.search 
    }
};
  query.scanItem(params,(err,data)=>{
    if(err)
      res.render('searchError', { title: 'Express' })
    else {
    res.render('search', { input: data.Items[0] });
    if(data.Items.length===0){
      res.render('searchError');
    }
    else{
      res.render('search', { input: data.Items[0] });
    }
    }
  })
  });

module.exports = router;
