var express = require('express');
var router = express.Router();
const query = require('../queries/table-queries')

/* GET users listing. */
router.get('/nhabanhang', function(req, res, next) {
  let params = {
    TableName: 'SanPham'
  }
  
  query.scanItem(params,(err,data)=>{
    if(err)
      res.render('danhsachSP', { title: 'Express' })
    else 
    res.render('danhsachSP', { input: data.Items });
  })
});

router.get('/nhabanhang/themsp', function(req, res, next) {
  res.render('themSP', { title: 'Express' });
});
router.post('/nhabanhang/themsp',function(req,res){
  // console.log(req.body)
  let params = {
    TableName: 'SanPham',
    Item: {
      maSP: req.body.masp,
      tenSP:req.body.tensp,
      donGia:req.body.giasp,
      soLuong:req.body.soluong,
      Noidung:req.body.noidung,
      Hinh:req.body.image
    }
  }
  query.addItem(params,(err,data)=>{
    if(err)
      res.redirect(req.get('referer'))
    else
      res.redirect('/nhabanhang')
  })
})
router.get('/nhabanhang/suasp', function(req, res, next) {
  // console.log(req.query.maSP)
  // console.log(req.query.tenSP)
  res.render('suaSP',{maSP:req.query.maSP,tenSP:req.query.tenSP});
  
});
router.post('/nhabanhang/suasp', function(req, res, next) {
  console.log(req.body)
  let params = {
    TableName:'SanPham',
    Key:{
        "maSP": req.body.masp,
        "tenSP": req.body.tensp
    },
    UpdateExpression: "set  #soluong=:s,#dongia=:d,#noidung=:n,#hinh=:h",
    ExpressionAttributeNames:{
      '#soluong':'soLuong',
      '#dongia':'donGia',
      '#noidung':'Noidung',
      '#hinh':'Hinh',
    },
    ExpressionAttributeValues:{
        ":s":req.body.soluong,
        ":d":req.body.giasp,
        ":n":req.body.noidung,
        ":h":req.body.image
    },
    ReturnValues:"UPDATED_NEW"
};
  query.updateItem(params,(err,data)=>{
    if(err)
    res.redirect(req.get('referer'))
  else
    res.redirect('/nhabanhang')
  })
});


router.get('/nhabanhang/danhsachHD', function(req, res, next) {
  res.render('danhsachHD', { title: 'Express' });
});

module.exports = router;
