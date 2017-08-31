var Token = getCookie("token")
/*
 * 出访管理添加
 */
$("#visitingSaveButton").click(function() {
	var name = $("#visitingName").val();
	var place =$('input[name="visitedplace"]:checked').attr('value');
	var type = $('input[name="visitedtype"]:checked').attr('value');
	$.ajax({
		type: "post",
		url: mainurl + "api/Back/AddVisiting",
		async: true,
		data: {
			"Name": name,
			"AorA": place,
			"Unit": type,
			"Token": Token
		},
		success: function(data) {
			if(data.Status == 1) {
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, "custom", option);
			} 
			else {
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
			}
		}
	});
})

$(function() {
	$('label[name="visitedPlace"]').click(function() {
		var radioId = $(this).attr('for');
		$('label[name="visitedPlace"]').removeAttr('class') && $(this).attr('class', 'checked');
		$('input[name="visitedplace"').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
	});

	$('label[name="visitedType"]').click(function() {
		var radioId = $(this).attr('for');
		$('label[name="visitedType"]').removeAttr('class') && $(this).attr('class', 'checked');
		$('input[name="visitedtype"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
	});
});