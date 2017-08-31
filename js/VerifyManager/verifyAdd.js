console.log(location.href);
var pageindex = location.href.split('pageindex=')[1];

$('#sure').click(function(){
	var name = $('#name').val();
	var buzhou = $('.buzhou').val();
	if(name==""){
				var txt = "请输入名称！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return;		
	}
	$.ajax({
		type:"post",
		url:mainurl+"/api/Back/AddDepartment",
		data:{
			Name:name,
			AuditAuthority:buzhou,
			token:token
		},
		success:function(data){
			if(data.Status==1){
				console.log(data.Result);
				location.href="VerifyManager.html";
			}else{
				var txt = data.Result;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}
	});
})

$('.icon').click(function(){
	location.href="VerifyManager.html?pageindex="+pageindex;
})

