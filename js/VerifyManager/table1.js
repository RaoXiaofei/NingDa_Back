$.ajax({
	type:"get",
	url:mainurl+"/api/Back/PreviewFirstStep",
	data:{
		declarationID:id,
	},
	dataType:"json",
	success:function(data){
		if(data.Status==1){
			var result = data.Result;
			var groupName = result.GroupName.split(",");
			$('#departName').val(groupName[0]);
			$('#departTeacher').val(groupName[1]);
			$('#GroupUnit').text(result.GroupUnit);
			$('#FContory').text(result.FContory);
			$('#VisitNumber').text(result.VisitNumber);
			$('#VisitDay').text(result.VisitDay);
			$('#EstimatedCost').text(result.EstimatedCost);
			$('#PerCapitaCost').text(result.PerCapitaCost);
			$('#TravelExpenses').text(result.TravelExpenses);
			$('#TrafficExpense').text(result.TrafficExpense);
			$('#LivingExpenses').text(result.LivingExpenses);
			$('#OtherExpenses').text(result.OtherExpenses);
			$('#VisitTime').text(result.VisitTime);
			$('#EstimatedCost').text(result.EstimatedCost);
		}else{
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}
});