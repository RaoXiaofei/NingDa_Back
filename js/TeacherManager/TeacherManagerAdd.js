var Token = getCookie("token");

$("#teacherSaveButton").click(function(){
	var acc = $("#login-account").val();
	var na = $("#real-name").val();
	var pass = $.md5($("#login-pass").val());
	var depa = $("#teacher-depart").val();
	var quali = $("#teacher-quanli").val();
	$.ajax({
		type:"post",
		url:mainurl+"api/Back/AddTeacher",
		async:true,
		data:{
			"Account": acc,
  			"Name": na,
  			"Pwd": pass,
  			"Department": depa,
  			"Title": quali,
  			"Token": Token
		},
		success:function(data){
			if(data.Status == 1){
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
			}
			else{
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
			}
		}
	});
})
