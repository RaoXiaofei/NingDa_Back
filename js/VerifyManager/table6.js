$.ajax({
	type:"get",
	url:mainurl+"/api/Back/PreviewSixthStep",
	data:{
		declarationID:id
	},
	dataType:"json",
	success:function(data){
		if(data.Status==1){
			var result = data.Result;
			$('#PublicityTime').text(result.PublicityTime);
			$('#GroupUnit').text(result.GroupUnit);
			$('#GroupName').text(result.GroupName);
			$('#DepartureTime').text(result.DepartureTime);
			$('#Day').val(result.Day);
			$('#CostSources').text(result.CostSources);
			if(result.IsBudget){
				$('#IsBudget').text("是");
			}else{
				$('#IsBudget').text("否");
			}
			$('#FContory').text(result.FContory);
			$('#InvitationUnit').text(result.InvitationUnit);
			$('#MainTask').text(result.MainTask);
			$('#Schedule').text(result.Schedule);
			var member = result.Members;
			var th = '';
			var li = '';
				th +='<tr>'
				th +='	<td rowspan="'+member.length+"1"+'">团<br>组<br>成<br>员</td>'
				th +='	<td style="width: 240px;text-align: center;">姓名</td>'
				th +='	<td style="width: 240px;text-align: center;">工作单位及部门</td>'
				th +='	<td style="text-align: center;">职务</td>'
				th +='</tr>'
				$('.member').html(th);
			for(var i=0; i<member.length; i++){
				li +='<tr>'
				li +='	<td>'+member[i].Name+'</td>'
				li +='	<td>'+member[i].WorkUnit+'</td>'
				li +='	<td>'+member[i].Position+'</td>'
				li +='</tr>'				
			}
			$('.member').append(li);
		}else{
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}
});