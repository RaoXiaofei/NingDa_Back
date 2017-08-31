var Token = getCookie("token");

var pageSizeV = 15;
var pageIndexV = 1;
var keyWordV = '-1';
var unit = -1;
var aora = -1;

var lastPage = ''

$(function() {
	GetVisitingIndex();
})

/*
 * 得到出访管理列表
 */
function GetVisitingIndex() {
	var vIndex = '';
	if(location.href.indexOf("pageIndexV") > 0) {
		this.pageIndexV = location.href.split('?pageIndexV=')[1];
	}
	$.ajax({
		type: "get",
		url: mainurl + "api/Back/VisitingIndex?keyword=" + this.keyWordV + "&unit=" + this.unit + "&aora=" + this.aora + "&token=" + Token + "&pageIndex=" + this.pageIndexV + "&pageSize=" + this.pageSizeV,
		async: true,
		error: function() {
			alert("数据加载出错");
		},
		success: function(data) {
			if(data.Status == 1) {
				//				console.log(data.Result);
				var re = data.Result;

				var aoravv = ''
				var unitvv = ''

				vIndex += '<tr>'
				vIndex += '<td style="width: 52%;"><span class="depart-table-title">名称</span></td>'
				vIndex += '<td style="width: 15%;"><span class="depart-table-title">出访地域</span></td>'
				vIndex += '<td style="width: 15%;"><span class="depart-table-title">出访类型</span></td>'
				vIndex += '<td ><span class="depart-table-title">操作</span></td>'
				vIndex += '</tr>'

				for(var i = 0; i < re.List.length; i++) {
					if(re.List[i].AorA == 0) {
						aoravv = "行政";
					} else {
						aoravv = "学术";
					}
					if(re.List[i].Unit == 0) {
						unitvv = "国外";
					} else {
						unitvv = "港澳台";
					}

					vIndex += '<tr id = "' + re.List[i].ID + '">'
					vIndex += '<td><span class="depart-table-text">' + re.List[i].Name + '</span></td>'
					vIndex += '<td><span class="depart-table-text">' + unitvv + '</span></td>'
					vIndex += '<td><span class="depart-table-text">' + aoravv + '</span></td>'
					vIndex += '<td>'
					vIndex += '<a href="VisitedManageDetail.html?id=' + re.List[i].ID + '"><button type="button" class="detail-button">详情</button></a>'
					vIndex += '<button type="button" class="delete-button visited-delete" id="" onclick="DeleteVisited(this)">删除</button>'
					vIndex += '</td>'
					vIndex += '</tr>'
				}
				lastPage = re.Page;
				$("#visitedIndexTable").html(vIndex);

				getpage(this.pageIndexV, re.Page);
			} else {
				alert(data.Result);
			}
		}.bind(this)
	});
}

/*
 * 关键字搜索
 */
function KeySearch() {
	var keyword = $("#visitedIndexSearch").val();
	if(keyword == "") {
		this.keyWordV = '-1';
	} else {
		this.keyWordV = keyword;
	}

	this.unit = $("#visited-manager-place").val();
	this.aora = $("#visited-manager-content").val();

	GetVisitingIndex();
}
/*
 * 重置
 */
function ResetVisitedIndex() {
	//	$("#visitedIndexSearch").val("");  
	//	$("#visited-manager-place option:first").prop("selected", 'selected'); 
	//	$("#visited-manager-content option:first").prop("selected", 'selected'); 
	window.location.reload();
}

/*
 * 删除
 */
function DeleteVisited(e) {
	var id = e.parentNode.parentNode.id;
	var txt = "确定删除吗？";
	var option = {
		title: "提示",
		btn: parseInt("0011", 2),
		onOk: function() {
			$.ajax({
				type: "get",
				url: mainurl + "api/Back/DelVisiting?id=" + id + "&token=" + Token,
				async: true,
				success: function(data) {
					if(data.Status == 1) {
						var txt = data.Result;
						var option = {
							title: "温馨提示",
							btn: parseInt("0011", 2),
							onOk: function() {

							}
						}
						window.wxc.xcConfirm(txt, "custom", option);
					}
					else {
						var txt = data.Result;
						var option = {
							title: "温馨提示",
							btn: parseInt("0011", 2),
							onOk: function() {

							}
						}
						window.wxc.xcConfirm(txt, "custom", option);
					}
				}
			});
		}
	}
	window.wxc.xcConfirm(txt, "custom", option);
}
/*
 * 分页
 */
function getpage(a, c) {
	$(".tcdPageCode").createPage({
		pageCount: c,
		current: a,
		backFn: function(p) {
			var url = "VisitedManager.html?pageIndexV=" + p;
			location.href = url;
		}
	});
}