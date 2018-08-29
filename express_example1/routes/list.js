var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var countryList = [
		{title: "VietNam", popular: "100 milions", dientich: "120 km2", remarks: "Là 1 quốc gia nghèo đang trên đà phát triển ..."},
		{title: "Lao", popular: "55 milions", dientich: "78 km2", remarks: "Quốc gia nghèo đang phát triển ..."},
		{title: "USA", popular: "86 milions", dientich: "1234 km2", remarks: "Cường quốc về mọi lĩnh vực, văn hóa, đời sống, quân sự, kinh tế, du lịch ..."},
		{title: "Brazin", popular: "600 milions", dientich: "698 km2", remarks: "Đất nước rộng lớn và đang là nên kinh tế mới nổi của toàn cầu..."}
	];
	var memberList = [
		{hoten: "Le Trung Dung", gioitinh: "Nam", tuoi: "32", nghenghiep: "KĨ SƯ", quanhe: "Chủ Nhà", sothich: "Uống cafe"},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: "Mua sắm"},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: ""},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: ""},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: ""},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: ""},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: ""},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Thi Thinh", gioitinh: "Nu", tuoi: "32", nghenghiep: "GIÁO VIÊN", quanhe: "Vợ", sothich: ""},
		{hoten: "Le Huy Hoang", gioitinh: "Nam", tuoi: ">1", nghenghiep: "ĂN", quanhe: "Con", sothich: ""},
		{hoten: "Ngo Le Sake", gioitinh: "Nam", tuoi: ">1", nghenghiep: "NGỦ", quanhe: "Con", sothich: ""}
	];
	var result = [countryList, memberList];
	res.render('list', {resultList: result});
});

module.exports = router;
