var pageindex = location.href.split('pageindex=')[1].split('&')[0];
var keyword = location.href.split('&keyword=')[1];

$(function(){
	$.ajax({
		type:"get",
		url:mainurl+"/api/Back/DepartmentIndex",
		data:{
			pageIndex:1,
			pageSize:10000,
			keyword:-1,
			token:token
		},
		dataType:"json",
		success:function(data){
			if(data.Status==1){
				var li = '';
				var list = data.Result.List;
				for(var i=0; i<list.length; i++){
					li +='<option value="'+list[i].ID+'">'+list[i].Name+'</option>'
				}
				$('.depart').html(li);
			}else{
						var txt = data.Result;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);				
			}
		}
	});	
})

$('.save-button').click(function(){
	var name = $('#name').val();
	var account = $('#account').val();
	var pwd = $('#pwd').val();
	var depart = $('.depart').val();
	if(name==""){
		var txt = "请输入姓名！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);			
		return;
	}
	if(account==""){
		var txt = "请输入账号！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);		
		return;
	}
	if(pwd==""){
		var txt = "请输入密码！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);		
		return;
	}
	$.ajax({
		type:"post",
		url:mainurl+"/api/Back/AddAccount",
		data:{
			Name:name,
			Account:account,
			Pwd:$.md5(pwd),
			ClearlyPwd:pwd,
			DepartmentID:depart,
			Token:token
		},
		success:function(data){
			if(data.Status==1){
				location.href="DepartAccount.html?pageindex=1&keyword=-1";
			}else{
				var txt = data.Result;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);		
				
			}
		}
	});
})

$('.icon').click(function(){
	location.href="DepartAccount.html?pageindex="+pageindex+"&keyword="+keyword;
})