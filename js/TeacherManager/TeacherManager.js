var pageIndexT = 1;
var pageSizeT = 15;
var keyWordT = '-1';

var Token = getCookie("token");
var lastPage='';
/*
 * 显示教师管理列表/首页
 */
$(function(){
    
	getTeacherIndex();
})
function getTeacherIndex(){
	var tIndex = ''
	if(location.href.indexOf("pageIndexT") > 0){
      	this.pageIndexT = location.href.split('?pageIndexT=')[1];
    }
	$.ajax({
		type:"get",
		url:mainurl + "api/Back/TeacherIndex?keyword="+this.keyWordT+"&pageIndex="+this.pageIndexT+"&pageSize="+this.pageSizeT+"&token="+Token,
		async:true,
		error:function(){
			alert("数据加载错误");
		},
		success:function(data){
			if(data.Status == 1){
//				console.log(data.Result);
				var re = data.Result;
				
				//加载表格头部
				tIndex += '<tr>'
				tIndex += 	'<td style="width: 30%;"><span class="depart-table-title">姓名或账号</span></td>'
				tIndex += 	'<td style="width: 30%;"><span class="depart-table-title">部门院系</span></td>'
				tIndex += 	'<td style="width: 30%;"><span class="depart-table-title">职称</span></td>'
				tIndex += 	'<td ><span class="depart-table-title">操作</span></td>'
				tIndex += '</tr>'

				//加载表格内容
				for(var i = 0; i < re.List.length; i++){
					tIndex += '<tr id="'+re.List[i].ID+'">'
					tIndex += 	'<td><span class="depart-table-text">'+re.List[i].Name+'</span></td>'
					tIndex += 	'<td><span class="depart-table-text">'+re.List[i].Department+'</span></td>'
					tIndex += 	'<td><span class="depart-table-text">'+re.List[i].Title+'</span></td>'
					tIndex += 	'<td><a href="TeacherManagerDetail.html?id='+re.List[i].ID+'"><button type="button" class="detail-button">详情</button></a></td>'
					tIndex += '</tr>'
				}
				lastPage = re.Page;
				$("#teacherIndexTable").html(tIndex);
				getPage(this.pageIndexT, re.Page);
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
		}.bind(this)
	});
}

/*
 * 查询教师管理列表
 */
function TeacherSearch(){
	var keyw = $("#teacherSearchInput").val();
	if(keyw == ""){
		this.keyWordT = '-1';
	}
	else{
		this.keyWordT = keyw;
	}
	getTeacherIndex();
}

/*
 * 重置
 */
$("#teacherResetButton").click(function(){
	window.location.reload();
})

/*
 * 分页
 */
function getPage(a,c){
    $(".tcdPageCode").createPage({
	    pageCount:c,
	    current:a,
	    backFn:function(p){     
	    	var url = "TeacherManager.html?pageIndexT="+p;
	    	location.href = url;
	    }
    });
}
/*
 * 导入excel
 */
function FileIn() {
	var formdata = new FormData();
	formdata.append("file", $("#file")[0].files[0]); //获取文件法二
	$.ajax({
		type: 'post',
		url: mainurl+'api/Back/Import',
		data: formdata,
		cache: false,
		processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
		contentType: false, // 不设置Content-type请求头
		success: function(data) {
			console.log(data.Result)
			var txt = data.Result;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			setTimeout('later()',1000);
		}
	})
}