$.ajax({
	type:"get",
	url:mainurl+"/api/Back/PreviewFourthStep",
	data:{
		declarationID:id
	},
	dataType:"json",
	success:function(data){
		if(data.Status==1){
			var result = data.Result;
			var th = '';
			var li = '';
				th +='<caption><h3>日程安排</h3></caption>'
				th +='<tr style="height: 40px;">'
				th +='	<td>日期</td>'
				th +='	<td style="text-align: center;">预定行程表</td>'
				th +='	<td style="width: 200px;text-align: center;">联络人</td>'
				th +='</tr>'
			$('table').html(th);
			for(var i=0; i<result.length; i++){
				li +='<tr>'
				li +='	<td style="height: 240px;">'+result[i].Date+'</td>'
				li +='	<td><div contenteditable="false" class="p1" style="width:462px;">'+result[i].Travel+'</div></td>'
				li +='	<td>'
				li +='		<div class="p2" contenteditable="false">'+result[i].ContactPerson+'</div>'
				li +='	</td>'
				li +='</tr>'				
			}
			$('table').append(li);
		}else{
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}
});