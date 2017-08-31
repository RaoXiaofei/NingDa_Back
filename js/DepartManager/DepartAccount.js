var pageindex;
var keyword;

var Token = getCookie("token");

var lastPage = '';
$(function(){
	pageindex="1";
	if(location.href.indexOf("pageindex") > 0){
       pageindex= location.href.split('pageindex=')[1].split('&')[0];
    }
	keyword="-1";
	if(location.href.indexOf("keyword") > 0){
       keyword= location.href.split('&keyword=')[1];
    }
	hqhf(pageindex,keyword)  ;	
})
 function hqhf(pageindex,keyword){
 	$.ajax({
 		type:"get",
 		url:mainurl+"/api/Back/AccountIndex",
 		data:{
 			pageIndex:pageindex,
 			pageSize:2,
 			keyword:keyword,
 			token:Token
 		},
 		dataType:"json",
 		success:function(data){
 			if(data.Status==1){
 				var th = '';
 				var li = '';
 				var page = data.Result.Page;
 				var list = data.Result.List;
 				if(keyword=="-1"){
 					$('.search').val("")
 				}else{
 					$('.search').val(decodeURI(decodeURI(keyword)));
 				}
				th +='<tr>'
				th +='	<td style="width: 15%;"><span class="depart-table-title">使用者姓名</span></td>'
				th +='	<td style="width: 15%;"><span class="depart-table-title">账号</span></td>'
				th +='	<td style="width: 23%;"><span class="depart-table-title">密码明文</span></td>'
				th +='	<td style="width: 8%;"><span class="depart-table-title">是否锁定</span></td>'
				th +='	<td ><span class="depart-table-title">所属部门</span></td>'
				th +='	<td style="width: 186px;"><span class="depart-table-title">操作</span></td>'
				th +='</tr>'
				$('.depart-table').html(th);
				for(var i=0; i<list.length; i++){
					li +='<tr id="'+list[i].ID+'">'
					li +='	<td><span class="depart-table-text">'+list[i].Name+'</span></td>'
					li +='	<td><span class="depart-table-text">'+list[i].Account+'</span></td>'
					li +='	<td><span class="depart-table-text">'+list[i].ClearlyPwd+'</span></td>'
					if(list[i].IsLock){
						li +='	<td><img class="clockImg" src="image/check.png" onclick="clock(this)"/></td>'
					}else{
						li +='	<td><img class="clockImg" src="image/check_no.png" onclick="clock(this)"/></td>'
					}
					li +='	<td><span class="depart-table-text">'+list[i].DepartmentName+'</span></td>'
					li +='	<td>'
					li +='		<a href="#account-detail"><button type="button" class="detail-button" onclick="detail(this)">详情</button></a>'
					li +='		<button type="button" class="delete-button" onclick="Delete(this)">删除</button>'
					li +='	</td>'
					li +='</tr>'					
				}
				
				lastPage = data.Result.Page;
				
				$('.depart-table').append(li);
				getpage(pageindex,page,keyword);
 			}else{
						var txt = data.Result;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
 			}
 		}
 	});
 }
 
 $('.ask-button').click(function(){
 	keyword = $('.search').val();
 	if(keyword==""){
 		keyword="-1";
 	}
 	location.href="DepartAccount.html?pageindex=1&keyword="+keyword;
 })
 
 $('.reset-button').click(function(){
 	$('.search').val("");
 })
 
 function detail(e){
 	var id = $(e).parents("tr").attr("id");
 	location.href="depart-account-detail.html?pageindex="+pageindex+"&keyword="+keyword+"&id="+id;
 }
 
 function Delete(e){
 	var id = $(e).parents("tr").attr("id");
	var txt=  "确定删除吗？";
	var option = {
		title: "提示",
		btn: parseInt("0011",2),
		onOk: function(){
			$.ajax({
				type:"get",
				url:mainurl+"/api/Back/DelAccount",
				data:{
					id:id,
					token:Token
				},
				dataType:"json",
				success:function(data){
					if(data.Status==1){
						location.href="DepartAccount.html?pageindex="+pageindex+"&keyword="+keyword;	
					}else{
						var txt = data.Result;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}
			});
		}
	}
	window.wxc.xcConfirm(txt, "custom", option); 	
 }
 
 $('.add-button').click(function(){
 	location.href="add-depart-account.html?pageindex="+pageindex+"&keyword="+keyword;
 })
 
 function clock(e){
 	var id = $(e).parents("tr").attr("id");
 	$.ajax({
 		type:"get",
 		url:mainurl+"/api/Back/LockAccount",
 		data:{
 			id:id,
 			token:Token
 		},
 		dataType:"json",
 		success:function(data){
 			if(data.Status==1){
				var txt = data.Result;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
 				setTimeout('refresh()',1000);			
 			}else{
				var txt = data.Result;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
 			}
 		}
 	});
 }
 
function getpage(a,c,b){
        $(".tcdPageCode").createPage({
        pageCount:c,
        current:a,
        backFn:function(p){        
        	var url = "DepartAccount.html?pageindex="+ p+"&keyword="+b;
        	location.href = url;
            }
          });
}
function refresh(){
	location.href="DepartAccount.html?pageindex="+pageindex+"&keyword="+keyword;
}
