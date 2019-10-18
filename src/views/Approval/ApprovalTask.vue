<template>
	<div id="ApprovalTask" class="haspadding">
		<el-collapse v-model="activeNames" @change="handleChange">
		  <el-collapse-item title="未接收的组团双跨团组(9条)" name="1">
		    <table id="Notreceive" class="display noborder" style="width:100%">
		      <thead>
		        <tr>
		          <th>序号</th>
		          <th>项目</th>
		          <th>申报单位</th>
		          <th>计划情况</th>
		          <th>收文编号</th>
		          <th>最后处理时间</th>
		          <th>操作</th>
		          <th></th>
		        </tr>
		      </thead>
		    </table>
		  </el-collapse-item>
		  <el-collapse-item title="未接收团组" name="2">
		    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		  </el-collapse-item>
		  <el-collapse-item title="等待办结" name="3">
		    <div>简化流程：设计简洁直观的操作流程；</div>
		    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		  </el-collapse-item>
		  <el-collapse-item title="国际合作司已接收,等待审批结果" name="4">
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  </el-collapse-item>
		</el-collapse>
		<!-- <div id="ceng" style="display: none;padding: 10px;">
			<PlanView></PlanView>
		</div> -->
	</div>
</template>

<script>
	import PlanView from '../Plan/GeneralPlanView'
	export default {
		name:'ApprovalTask',
	    data() {
	      return {
			table:'',
	        activeNames: ['1']
	      };
	    },
		components:{PlanView},
		created() {
			self=this;
			window.viewPlan=self.viewPlan;
		},
		mounted() {
			var that=this;
			var tableOption = {
			  ajax: "../static/json/ApprovalTask/ProcessApproval.json",
			  paging: false,
			  responsive: {
			    details: {
			      type: 'column',
			      target: -1
			    }
			  },
			  serverSide: false,
			  dom: "Bfrtip",
			  bFilter: false,
			  "bAutoWidth": false,
			  "oLanguage": {
			    "sProcessing": "处理中...",
			    "sLengthMenu": "显示 _MENU_ 项结果",
			    "sZeroRecords": "没有匹配结果",
			    "sInfo": "",
			    "sInfoEmpty": "无记录显示",
			    "sSearch": "",
			    "sUrl": "",
			    "sEmptyTable": "表中数据为空",
			    "sLoadingRecords": "载入中...",
			    "sInfoThousands": ",",
			    "oPaginate": {
			      "sFirst": "首页",
			      "sPrevious": "上一页",
			      "sNext": "下一页",
			      "sLast": "末页"
			    }
			  },
			  columns: [{
			      data: "Id",
			      width: "10px",
			      visible: false
			    },
			    {
			      data: "Project"
			    },
			    {
			      data: "Notification"
			    },
			    {
			      data: "Plans"
			    },
			    {
			      "data": "ReceiptNumber"
			    },
			    {
			      "data": "LastTime"
			    },
			    {
			      "data": "Operation"
			    },
			    {
			      data: "control",
			      width: "25px"
			    }
			  ],
			  columnDefs: [ //对table格式的定义（表格的列从0开始）
			    {
			      className: 'control',
			      orderable: false,
			      targets: -1
			    },
				{
					targets:1,
					render:function(data,type,row){
						return '<a>'+data+'</a>'+'<a style="margin-left:5px;"><i class="fa fa-wpforms fa-lg"></i></a>';
					}
				},
				{
					targets:3,
					render:function(data,type,row){
						if(data=="计划内"){
							var pp="789";
							var nei='<a href="javascript:void(0)" onclick="viewPlan(event,'+pp+')" style="margin-left:5px;"><i class="fa fa-list" ></i></a>';
							return data+nei;
						}else{
							return data;
						}
					}
				},
				{
				  targets: 6,
				  render: function(data, type, row) {
					var button='';
					for(var i=0;i<data.length;i++){
						button+='<button type="button" class="btn darkgreen" style="margin-right:10px;" id="'+data[i].id+'">'+data[i].title+'</button>'
					}
					return button;
				  }
				},
			  ]
			}
			this.table = $('#Notreceive').DataTable(tableOption);
			this.dataTabletrclick(this.table);
			this.dataTabletdclick(this.table);
		},
	    methods: {
	        handleChange(val) {
				console.log(val);
	        },
		    viewPlan(event,num){
			    layui.use('layer',function(){
				 //  layer.open({
				 //    type: 1,
					// title:'计划详情',
				 //    area: ['80%', '80%'], //宽高
				 //    content: $("#ceng"),
					// btn:['关闭'],
					// function(index,layero){
					// 	layer.close(index);
					// }
				 //  });
				 layer.open({
				   type: 2,
				   title:'计划详情',
				   area: ['80%', '80%'],
				   fixed: false, //不固定
				   maxmin: true,
				   content: '#/PlanView',
				 });
			    });
			    try{
					e.stopPropagation();//非IE浏览器
			    }
				catch(e){
					window.event.cancelBubble = true;//IE浏览器
				}
		  }
		  
	    }
		
	  }
	  
	  
</script>

<style>
</style>
