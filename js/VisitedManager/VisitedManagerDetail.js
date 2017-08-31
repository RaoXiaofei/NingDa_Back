var indexID = window.location.href;
var inID = indexID.split("id=")[1];
//console.log(inID)

var Token = getCookie("token");

ShowVisitedDetail();

/*
 * 显示出访管理详情
 */
function ShowVisitedDetail() {
	var dd = "";
	
	$.ajax({
		type: "get",
		url: mainurl + "api/Back/GetVisitingDetail?id=" + inID + "&token=" + Token,
		async: true,
		error: function() {
			var txt=  "数据加载错误";
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
			window.wxc.xcConfirm(txt, "custom", option);
		},
		success: function(data) {

			if(data.Status == 1) {
				//				console.log(data.Result);
				var re = data.Result;

				//显示出访类型
				var aor = re.AorA;
				if(aor == 1) {
					$('label[name="visitedType"]').removeAttr('class');
					$("label[for='visitedType2']").attr("class", "checked");
				}

				//显示出访地域
				var uni = re.Unit;
				if(uni == 1) {
					$('label[name="visitedPlace"]').removeAttr('class');
					$("label[for = 'visitedPlace2']").attr("class", "checked");
				}
				
				
				//显示名称
				dd += '<input type="text" class="form-control form3" name="" id="visitingDEName" value="' + re.Name + '" readonly="readonly"/>'

				$("#visitedDEplace").html(dd);
			} else {
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
}

/*
 * 点击编辑按钮
 */
$("#edit-visited-detail").click(function() {
	$(this).hide();
	$("#save-visited-detail").show()
	$('input').attr("readonly", false);

})

/*
 * 保存信息
 */
$("#save-visited-detail").click(function() {
	$(this).hide();
	$("#edit-visited-detail").show();
	$('input').attr("readonly", true);

	var name = $("#visitingDEName").val();
	var place =$('input[name="visitedplace"]:checked').attr('value');
	var type = $('input[name="visitedtype"]:checked').attr('value');

	$.ajax({
		type: "post",
		url: mainurl + "api/Back/EditVisiting",
		async: true,
		data: {
			"ID": inID,
			"Name": name,
			"AorA": type,
			"Unit": place,
			"Token": Token
		},
		success: function(data) {
			if(data.Status == 1) {
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
			} else {
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

/*
 * radio显示
 */
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

