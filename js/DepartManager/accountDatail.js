var pageindex = location.href.split('pageindex=')[1].split('&')[0];
var keyword = location.href.split('&keyword=')[1].split('&')[0];
var id = location.href.split('&id=')[1];
//console.log(id);

var departID;
	$.ajax({
		type:"get",
		url:mainurl+"/api/Back/GetAccountDetail",
		data:{
			id:id,
			token:token
		},
		dataType:"json",
		success:function(data){
			if(data.Status==1){
				var result = data.Result;
				departID = result.DepartmentID;
				$('#name').val(result.Name);
				$('#account').val(result.Account);
				$('#pwd').val(result.ClearlyPwd);
				getList();
			}else{
						var txt = data.Result;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);				
			}
		}
	});

function getList(){
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
					if(list[i].ID==departID){
						li +='<option value="'+list[i].ID+'" selected="seleced">'+list[i].Name+'</option>'
					}else{
						li +='<option value="'+list[i].ID+'">'+list[i].Name+'</option>'
					}
				}
				$('.depart').html(li);
			}else{
						var txt = data.Result;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);				
			}
		}
	});	
}

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
		url:mainurl+"/api/Back/EditAccount",
		data:{
			ID:id,
			Name:name,
			Account:account,
			Pwd:$.md5(pwd),
			ClearlyPwd:pwd,
			DepartmentID:depart,
			Token:token
		},
		success:function(data){
			if(data.Status==1){
				location.href="DepartAccount.html?pageindex="+pageindex+"&keyword="+keyword;
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
