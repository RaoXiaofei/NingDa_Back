var pageindex;
var id;
pageindex = location.href.split("pageindex=")[1].split("&")[0];
id= location.href.split("&id=")[1];

$(function(){
	$.ajax({
		type:"get",
		url:mainurl+"/api/Back/GetDepartmentDetail",
		data:{
			id:id,
			token:token
		},
		dataType:"json",
		success:function(data){
			if(data.Status==1){
				$('#name').val(data.Result.Name);
				$('.buzhou').val(data.Result.AuditAuthority);
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
		url:mainurl+"/api/Back/EditDepartment",
		data:{
			ID:id,
			Name:name,
			AuditAuthority:buzhou,
			token:token
		},
		success:function(data){
			if(data.Status==1){
				location.href="VerifyManager.html?pageindex="+pageindex;
			}else{
				var txt = data.Result;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}
	});
})
