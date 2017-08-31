var pageindex;
var keyword;
var local;
var type;
var lastPage = ''
$(function(){
	pageindex="1";
	if(location.href.indexOf("pageindex") > 0){
       pageindex= location.href.split('pageindex=')[1].split('&')[0];
    }
	keyword="-1";
	if(location.href.indexOf("keyword") > 0){
       keyword= location.href.split('&keyword=')[1].split('&')[0];
    }
	local="-1";
	if(location.href.indexOf("local") > 0){
       local= location.href.split('&local=')[1].split('&')[0];
    }
	type="-1";
	if(location.href.indexOf("type") > 0){
       type= location.href.split('&type=')[1];
    }
	
	hqhf(pageindex,keyword,local,type)  ;	
	
})

function hqhf(pageindex,keyword,local,type){
	$.ajax({
		type:"get",
		url:mainurl+"/api/Back/DeclarationIndex",
		data:{
			keyword:keyword,
			unit:local,
			aora:type,
			token:token,
			pageIndex:pageindex,
			pageSize:10,
		},
		dataType:"json",
		success:function(data){
			if(data.Status==1){
				var th = '';
				var li = '';
				var page = data.Result.Page;
				var list = data.Result.List;
				if(keyword=="-1"){
					$('.search').val("");
				}else{
					$('.search').val(decodeURI(decodeURI(keyword)));	
				}
				$('#local').val(local);
				$('#type').val(type);
				th +='<tr>'
				th +='	<td style="width: 8%;"><span class="depart-table-title">申报教师</span></td>'
				th +='	<td style="width: 25%;"><span class="depart-table-title">所属院系</span></td>'
				th +='	<td style="width: 15%;"><span class="depart-table-title">出访地域</span></td>'
				th +='	<td style="width: 15%;"><span class="depart-table-title">出访类型</span></td>'
				th +='	<td style="width: 186px;"><span class="depart-table-title">操作</span></td>'
				th +='</tr>'	
				$('.depart-table').html(th);
				for(var i=0; i<list.length; i++){
					li +='<tr id="'+list[i].ID+'">'
					li +='	<td><span class="depart-table-text">'+list[i].TeacherName+'</span></td>'
					li +='	<td><span class="depart-table-text">'+list[i].Department+'</span></td>'
					li +='	<td><span class="depart-table-text">'+list[i].Unit+'</span></td>'
					li +='	<td><span class="depart-table-text">'+list[i].AorA+'</span></td>'
					li +='	<td>'
					li +='		<button type="button" class="detail-button" onclick="detail(this)">详情</button>'
					li +='		<button type="button" class="delete-button" onclick="Recall(this)">撤回</button>'
					li +='	</td>'
					li +='</tr>'					
				}
				
				lastPage = data.Result.Page;
				
				$('.depart-table').append(li);
				getpage(pageindex,page,keyword,local,type);
			}else{
				var txt = data.Result;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}
	});
}

$('.ask-button').click(function(){
	keyword = $('.search').val();
	local = $('#local').val();
	type = $('#type').val();
	if(keyword==""){
		keyword="-1";
	}
	location.href="DeclarationIndex.html?pageindex=1&keyword="+keyword+"&local="+local+"&type="+type;
})

$('.reset-button').click(function(){
	$('.search').val("");
	$('#local').val("-1");
	$('#type').val("-1");
})

function detail(e){
	Click(e);
	var id = getCookie("ID");
	location.href="submit-manager-detail.html?pageindex="+pageindex+"&keyword="+keyword+"&local="+local+"&type="+type+"&id="+id;
}

function Recall(e){
	var id = $(e).parents("tr").attr("id");
	var txt=  "确定撤回吗？";
	var option = {
		title: "提示",
		btn: parseInt("0011",2),
		onOk: function(){
			$.ajax({
				type:"get",
				url:mainurl+"/api/Back/Withdraw",
				data:{
					id:id,
					token:token
				},
				dataType:"json",
				success:function(data){
					if(data.Status==1){
						location.href="DeclarationIndex.html?pageindex="+pageindex+"&keyword="+keyword+"&local="+local+"&type="+type;	
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

function getpage(a,c,b,d,e){
        $(".tcdPageCode").createPage({
        pageCount:c,
        current:a,
        backFn:function(p){        
        	var url = "DeclarationIndex.html?pageindex="+ p+"&keyword="+b+"&local="+d+"&type="+e;
        	location.href = url;
            }
          });
}
