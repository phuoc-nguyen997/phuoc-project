const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});
let docClient = new AWS.DynamoDB.DocumentClient();
console.log('Start importing');
let allSanPham = JSON.parse(fs.readFileSync("D:/CNMPTUD_DHKTPM12A_DOAN_NHOM21_CODE/database/data//DataSanPham.json", encoding="utf-8"));
allSanPham.forEach((SanPham) => {
    let params = {
        TableName: "SanPham",
        Item: {
            maSP: SanPham.maSP,
            tenSP: SanPham.tenSP,
            soLuong: SanPham.soLuong,
            donGia: SanPham.donGia,
            NhaBanHang: SanPham.NhaBanHang,
            Hinh:SanPham.Hinh,
            HangSanPham: SanPham.HangSanPham,
            Noidung: SanPham.Noidung
        }
    };
    docClient.put(params, (err, data) => {
        if (err) {
            console.error(`Unable to add SanPham${SanPham.title}, ${JSON.stringify(err, null, 2)}`);
        } else {
            console.log(`SanPham created:  ${SanPham.tenSP}`);
        }
    });
});