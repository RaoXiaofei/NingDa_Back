var indexID = window.location.href;
var id = indexID.split("id=")[1];

var Token = getCookie("token");

/*
 * 显示教师管理详情详细信息
 */
GetTeacherDetail();
function GetTeacherDetail(){
	var tdb = "";
	var smt = "";
	
	$.ajax({
		type:"get",
		url:mainurl+"api/Back/GetTeacherDetail?id="+id+"&token="+Token,
		async:true,
		success:function(data){
			if(data.Status == 1){
//				console.log(data.Result);
				var re = data.Result;
				
				tdb += '<ul>'
				tdb +=	'<li><span class="add-account-text">姓名或账号：</span></li>'
				tdb +=	'<li>'
				tdb +=		'<input type="text" class="form-control form3" name="" id="teacher-account" value="'+re.Name+'" readonly="readonly"/>'
				tdb +=	'</li>'
				tdb +=		'<li>'
				tdb +=			'<button type="button" class="teacher-button" id="edit-teacher-name" onclick="EditTeacherName()">编辑</button>	'
				tdb +=			'<button type="button" class="teacher-button" id="save-teacher-name" style="display: none;"onclick="SaveTeacherName()">保存</button>	'
				tdb +=		'</li>'
				tdb +='</ul>'
				tdb +='<ul>'
				tdb +=	'<li><span class="add-account-text">部门院系：</span></li>'
				tdb +=	'<li>'
				tdb +=		'<input type="text" class="form-control form3" name="" id="teacher-depart" value="'+re.Department+'"readonly="readonly" />'
				tdb +=	'</li>'
				tdb +=	'<li>'
				tdb +=			'<button type="button" class="teacher-button" id="edit-teacher-depart" onclick="EditTeacherDepart()">编辑</button>	'
				tdb +=			'<button type="button" class="teacher-button" id="save-teacher-depart" style="display: none;"onclick="SaveTeacherDepart()">保存</button>'	
				tdb +=		'</li>'
				tdb +='</ul>'
				tdb +='<ul class="bottom-ul">'
				tdb +=	'<li><span class="add-account-text">职称：</span></li>'
				tdb +=	'<li>'
				tdb +=		'<input type="text" class="form-control form3" name="" id="teacher-title" value="'+re.Title+'"readonly="readonly" />'
				tdb +=	'</li>'
				tdb +=	'<li>'
				tdb +=			'<button type="button" class="teacher-button" id="edit-teacher-title"onclick="EditTeacherTitle()">编辑</button>	'
				tdb +=			'<button type="button" class="teacher-button" id="save-teacher-title" style="display: none;" onclick="SaveTeacherTitle()">保存</button>'	
				tdb +=		'</li>'
				tdb +='</ul>'
				tdb +='<div class="btnDiv">'
				tdb +=	'<button type="button" class="teacher-save-button" id="edit-teacher-detail" style="margin-left: 20px;" onclick="ResetPassword()">重置密码</button>	'
				tdb +='</div>'
				smt += '<tr>'
				smt += 		'<th style="width: 45%;"><span class="teacher-submit-title">时间</span></th>'
				smt += 		'<th ><span class="teacher-submit-title">状态</span></th>'
				smt += 		'<th style="width: 180px;"><span class="teacher-submit-title">操作</span></th>'
				smt += 	'</tr>'
				
				var status = '';
				for(var i = 0; i < re.List.length; i++){
					if(re.List[i].Status == 0){
						status = "提交中";
					}
					else{
						status = "审核完毕";
					}
					smt += '<tr>'
					smt += 	'<td><span class="teacher-submit-text">'+re.List[i].SubmitTime+'</span></td>'
					smt += 	'<td><span class="teacher-submit-text">'+status+'</span></td>'
					smt += 	'<td>'
					smt += 		'<span class = "sub-detail-button" id="sub-detail-button" onclick="ShowSubmit()">申报管理详情</span>'
					smt += 	'</td>'
					smt += '</tr>'
				}
				
				$("#teacher-detail-body").html(tdb);
				$("#teacherSubmitTable").html(smt)
			}
			else{
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
 * 编辑教师姓名详细信息
 */
function EditTeacherName(){
	$("#edit-teacher-name").hide();
	$("#save-teacher-name").show();
	$('#teacher-account').attr("readonly",false);
}

/*
 * 保存教师姓名详细信息
 */
function SaveTeacherName(){
	var acc = $("#teacher-account").val();
	$.ajax({
		type:"post",
		url:mainurl+"api/Back/EditTeacher",
		async:true,
		data:{
			"ID": id,
  			"Content": acc,
  			"Type": 0,
  			"Token": Token
		},
		error:function(){
			var txt=  "修改失败";
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
		},
		success:function(data){
			if(data.Status == 1){
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
				$("#edit-teacher-name").show();
				$("#save-teacher-name").hide();
				$('input').attr("readonly",true);
			}
			else{
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
 * 编辑教师姓部门详细信息
 */
function EditTeacherDepart(){
	$("#edit-teacher-depart").hide();
	$("#save-teacher-depart").show();
	$('#teacher-depart').attr("readonly",false);
}

/*
 * 保存教师部门详细信息
 */
function SaveTeacherDepart(){
	var acc = $("#teacher-depart").val();
	
	$.ajax({
		type:"post",
		url:mainurl+"api/Back/EditTeacher",
		async:true,
		data:{
			"ID": id,
  			"Content": acc,
  			"Type": 1,
  			"Token": Token
		},
		success:function(data){
			if(data.Status == 1){
				alert(data.Result);
				$("#edit-teacher-depart").show();
				$("#save-teacher-depart").hide();
				$('input').attr("readonly",true);
			}
			else{
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
 * 编辑教师职称详细信息
 */
function EditTeacherTitle(){
	$("#edit-teacher-title").hide();
	$("#save-teacher-title").show();
	$('#teacher-title').attr("readonly",false);
}

/*
 * 保存教师职称详细信息
 */
function SaveTeacherTitle(){
	var acc = $("#teacher-title").val();
	
	$.ajax({
		type:"post",
		url:mainurl+"api/Back/EditTeacher",
		async:true,
		data:{
			"ID": id,
  			"Content": acc,
  			"Type": 2,
  			"Token": Token
		},
		success:function(data){
			if(data.Status == 1){
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
				$("#edit-teacher-title").show();
				$("#save-teacher-title").hide();
				$('input').attr("readonly",true);
			}
			else{
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
 * 重置密码
 */
function ResetPassword(){
	$.ajax({
		type:"post",
		url:mainurl+"api/Back/ResetPwd?id="+id+"&token="+Token,
		async:true,
		success:function(data){
			if(data.Status == 1){
				var txt=  data.Result;
				var option = {
					title: "温馨提示",
					btn: parseInt("0011",2),
					onOk: function(){}
				}
				window.wxc.xcConfirm(txt, "custom", option);
			}
			else{
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
 * 显示教师申报详情
 */
function ShowSubmit(){
	location.href = 'ShowTeacherSubmitDetail.html?id='+id+''
}
