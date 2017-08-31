var id = location.href.split("?id=")[1];
//console.log(id);

$.ajax({
	type: "get",
	url: mainurl + "/api/Back/GetDeclarationDetail",
	data: {
		id:id,
		token:token
	},
	dataType: "json",
	success: function(data) {
		if(data.Status == 1) {
			var result = data.Result;
			var list = data.Result.List;
			var divImg = $('.circleImg');
			$('#name').text(result.TeacherName);
			$('#depart').text(result.Department);
			$('#job').text(result.Title);
			$('#type').text(result.AorA);
			$('#local').text(result.Unit);
			for(var i=0; i<list.length; i++){
				var j = list[i].Type;
				$(divImg[j]).children("img").attr('src','image/one.png');
				$(divImg[j]).children(".textPass").text(list[i].ApprovalName);
			}
		} else {
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}
});

$('.icon').click(function(){
	location.href = "TeacherManagerDetail.html?id="+id+"";
})

$('.preview1').click(function(){
	$('.form1').show();
})
$('.preview2').click(function(){
	$('.form2').show();
})
$('.preview3').click(function(){
	$('.form4').show();
})
$('.preview4').click(function(){
	$('.form5').show();
})
$('.preview5').click(function(){
	$('.form6').show();
})
$('.preview6').click(function(){
	$('.form7').show();
})
$('.form').click(function(){
	$(this).hide();
})
