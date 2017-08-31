 var pageindex;
var lastPage=''
$(function(){
	pageindex=1;
	if(location.href.indexOf("pageindex") > 0){
       pageindex= location.href.split('pageindex=')[1];
    }
	hqhf(pageindex)  ;
})

function hqhf(pageindex){
$.ajax({
	type:"get",
	url:mainurl+"/api/Back/DepartmentIndex",
	data:{
		pageIndex:pageindex,
		pageSize:10,
		keyword:-1,
		token:token
	},
	dataType:"json",
	success:function(data){
		if(data.Status==1){
			var th = '';
			var li = '';
			var list = data.Result.List;
			var page = data.Result.Page;
				th +='<tr>'
				th +='	<td style="width: 55%;"><span class="depart-table-title">名称</span></td>'
				th +='	<td ><span class="depart-table-title">审核步骤</span></td>'
				th +='	<td style="width: 186px;"><span class="depart-table-title">操作</span></td>'
				th +='</tr>'
				$('.depart-table').html(th);
			for(var i=0; i<list.length; i++){
					li +='<tr id="'+list[i].ID+'">'
					li +='	<td><span class="depart-table-text">'+list[i].Name+'</span></td>'
					li +='	<td><span class="depart-table-text">'+list[i].AuditAuthority+'</span></td>'
					li +='	<td>'
					li +='		<a href="#"><button type="button" class="detail-button" onclick="detail(this)">详情</button></a>'
					li +='		<button type="button" class="delete-button" onclick="Delete(this)">删除</button>'
					li +='	</td>'
					li +='</tr>	'
			}
			lastPage = data.Result.Page;
			
			$('.depart-table').append(li);
			getpage(pageindex,page);
		}else{
						var txt = data.Result;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}
});
}

function detail(e){
	var id = $(e).parents("tr").attr("id");
	location.href="verify-manager-detail.html?pageindex="+pageindex+"&id="+id;
}

function getpage(a,c){
        $(".tcdPageCode").createPage({
        pageCount:c,
        current:a,
        backFn:function(p){        
        	var url = "VerifyManager.html?pageindex="+ p;
        	location.href = url;
            }
          });
}

$('.add-button').click(function(){
	location.href="add-verify-manager.html?pageindex="+pageindex;
})

function Delete(e){
	var id = $(e).parents("tr").attr("id");
	var txt=  "确定删除吗？";
	var option = {
		title: "提示",
		btn: parseInt("0011",2),
		onOk: function(){
			$.ajax({
				type:"get",
				url:mainurl+"/api/Back/DelDepartment",
				data:{
					id:id,
					token:token
				},
				dataType:"json",
				success:function(data){
					if(data.Status==1){
						location.href="VerifyManager.html?pageindex=1";	
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
