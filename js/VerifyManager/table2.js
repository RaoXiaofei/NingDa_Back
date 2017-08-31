$.ajax({
	type:"get",
	url:mainurl+"api/Back/PreviewSecondStep",
	data:{
		declarationID:id
	},
	dataType:"json",
	success:function(data){
		if(data.Status==1){
			var result = data.Result;
			$('#Parameter1').val(result.Parameter1);
			$('#Parameter2').val(result.Parameter2);
			$('#Parameter3').val(result.Parameter3);
			$('#Parameter4').val(result.Parameter4);
			$('#Parameter5').val(result.Parameter5);
			$('#Parameter6').val(result.Parameter6);
			$('#Parameter7').val(result.Parameter7);
			$('#Parameter8').val(result.Parameter8);
		}else{
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}
});