// JavaScript Document
function KTHo(){
	var re=/^[A-Z]\w*/;
	if(re.test(document.getElementById('txtHo').value.trim())==false)
{
	ho.innerText="bắt đầu là kí tự hoa";
	return false;
}
else{
	ho.innerText="";
	return true;
	}
}

function KTTen(){
	var re=/^[A-Z]\w*/;
	if(re.test(document.getElementById('txtTen').value.trim())==false)
{
	ten.innerText="bắt đầu là kí tự hoa";
	return false;
}
else{
	ten.innerText="";
	return true;
	}
}

function KTMK(){
	var re=/(?=.*\d).{6,}/;
	if(re.test(document.getElementById('txtMatKhau').value.trim())==false)
{
	mk.innerText="phải co chữ, số, ít nhất 6 kí tự";
	return false;
}
else{
	mk.innerText="";
	return true;
	}
}

function KTmail1(){
	var re=/.*@.*\.com/;
	//var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(re.test(document.getElementById('txtmail1').value.trim())==false)
{
	email1.innerText="nhập đúng định dạng";
	return false;
}
else{
	mail.innerText="";
	return true;
	}
}

function KTNam(){
	var re=/^[A-Z]\w*/;
	if(document.getElementById('namsinh').value.trim()<2002)
{
	nam.innerText="nam sinh phai lon hon 2002";
	return false;
}
else{
	nam.innerText="";
	return true;
	}
}


