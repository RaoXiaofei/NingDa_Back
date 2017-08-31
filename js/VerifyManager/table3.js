$.ajax({
	type: "get",
	url: mainurl + "/api/Back/PreviewThirdStep",
	data: {
		declarationID: id
	},
	dataType: "json",
	success: function(data) {
		if(data.Status == 1) {
			var result = data.Result;
			$('.name').val(result.Name);
			if(result.Sex == "1") {
				$('.sex').val("男");
			} else {
				$('.sex').val("女");
			}
			$('.birth').val(result.Birthday);
			$('.address').val(result.OriginAddress);
			$('.political').val(result.Political);
			$('.health').val(result.Health);
			$('.language').val(result.LanguageProficiency);
			$('.major').val(result.Major);
			$('.IdCard').val(result.IDCard);
			$('.department').val(result.JobTitle);
			$('.budget').val(result.Budget);
			$('.controy').val(result.FContory);
			$('.invite').val(result.InvitationUnit);
			$('.startT').val(result.StartTime);
			$('.endT').val(result.EndTime);
			$('.workT').val(result.WorkStartTime);
			$('.education').val(result.EducationLV);
			$('.lastTtrip').val(result.LastTrip);
			$('.destination').text(result.DestinationAbroad);
			$('.arrangement').text(result.Arrangement);
			var foreign = result.ForeignCommitment;
			var inter = result.InternationalCommitment;
			if(foreign.indexOf(",") > 0) {
				foreign = foreign.split(",");
			}
			if(inter.indexOf(",") > 0) {
				inter = inter.split(",");
			}
			$('.foreignName').val(foreign[0]);
			$('.foreignID').val(foreign[1]);
			$('.interName').val(inter[0]);
			$('.interID').val(inter[1]);
		} else {
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}
});