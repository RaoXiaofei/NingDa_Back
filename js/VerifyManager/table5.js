$.ajax({
	type:"get",
	url:mainurl+"/api/Back/PreviewFifthStep",
	data:{
		declarationID:id
	},
	dataType:"json",
	success:function(data){
		if(data.Status==1){
			var result = data.Result;
			$('#GroupName').text(result.GroupName);
			$('#HeadName').text(result.HeadName);
			$('#FContory').text(result.FContory);
			$('#VisitTime').text(result.VisitTime);
			$('#EducationTime').text(result.EducationTime);
			$('#Address').text(result.Address);
		}else{
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}
});