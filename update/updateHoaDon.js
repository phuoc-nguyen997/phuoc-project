const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({
region: 'us-east-1',
endpoint: 'http://localhost:8000'
});
let docClient = new AWS.DynamoDB.DocumentClient();
console.log('Start importing');
let allHoaDon = JSON.parse(fs.readFileSync("D:/CNMPTUD_DHKTPM12A_DOAN_NHOM21_CODE/database/data/DataHoaDon.json", 'utf-8'));
allHoaDon.forEach((HoaDon) => {
let params = {
TableName: "HoaDon",
Item: {
    maHD: HoaDon.maHD,
    ngayLap: HoaDon.ngayLap,
    tongTien:HoaDon.tongTien,
    ChitietHoaDon:HoaDon.ChitietHoaDon
}
};
docClient.put(params,(err, data) => {
if (err) {
console.error(`Unable to add Hoa Don${HoaDon.title}, ${JSON.stringify(err, null, 2)}`);
}else{
console.log(`Hoa Don created:  ${HoaDon.maHD} - ${HoaDon.ngayLap} - ${HoaDon.tongTien}`);
}
});
});