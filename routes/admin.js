var express = require('express');
var router = express.Router();
const query = require('../queries/table-queries')

/* GET users listing. */
router.get('/admin', function(req, res, next) {
  let params = {
    TableName: 'NhaBanHang'
  }
  
  query.scanItem(params,(err,data)=>{
    if(err)
      res.render('danhsachNBH', { title: 'Express' })
    else 
    res.render('danhsachNBH', { input: data.Items });
  })
});

router.get('/admin/themNBH', function(req, res, next) {
  res.render('themNBH', { title: 'Express' });
});

router.post('/admin/themNBH',function(req,res){
  console.log(req.body.manbh)
  let params = {
    TableName: 'NhaBanHang',
    Item: {
      maNBH: req.body.manbh,
      tenNBH:req.body.tennbh,
      sdt:req.body.sdtnbh,
      diaChi:req.body.diachinbh,
      TaiKhoan: {
        tenDangNhap:req.body.tendangnhap,
        matKhau:req.body.matkhau
      }
    }
  }
  query.addItem(params,(err,data)=>{
    if(err)
      res.redirect(req.get('referer'))
    else
      res.redirect('/admin')
  })
})

module.exports = router;
