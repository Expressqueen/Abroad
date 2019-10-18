<template>
	<div id="IndexMoa">
		<header>
			<img src="../../assets/images/logo_moa.png" alt="" class="indexlogo">
			<el-form :model="Indexlogin" :rules="rulesindexlogin" ref="Indexlogin" label-position="left" label-width="0px" class="demo-ruleForm login-container">
			  <h3 class="title">系统登录</h3>
			  <el-form-item prop="account">
			    <el-input type="text" v-model="Indexlogin.admin" auto-complete="off" placeholder="账号"></el-input>
			  </el-form-item>
			  <el-form-item prop="checkPass">
			    <el-input type="password" v-model="Indexlogin.passport" auto-complete="off" placeholder="密码"></el-input>
			  </el-form-item>
			  <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
			  <el-form-item style="width:100%;">
			    <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
			  </el-form-item>
			</el-form>
		</header>
		<section>
			<el-row :gutter="20">
			  <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="pleftover">
				  <div class="Announcements">
					    <p class="noticehead">
						  <span>通知公告</span>
						  <span class="more">More</span>
				        </p>
					    <hr />
						<div class="noticeinfo">
							<el-row :gutter="20">
							  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
								    <el-carousel height="150px" width="260px">
								    	<el-carousel-item v-for="(item,index) in images" :key="index">
								    		<img :src=item.url alt="" style="height:150px;">
								    	</el-carousel-item>
								    </el-carousel>
							  </el-col>
							  <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="reginfo">
								  <a class="title">中国建材集团外事培训及工作部署会在沪召开</a>
								  <p class="content">
									  近日，集团外事培训及工作部署会在上海召开，会议结合国家最新外事规定、分析了当前外事形势、交流外事管理经验，分析存eargrth在的不足，部署下一阶段外事工作，集团副总经理黄安中出席会议并讲话。而大V谷朊粉他根本不二三人分布图发给别人太复工外收入分别是个如果他不能日分别射日发布人头比是GV而是格瑞发v工行卡我染头发波黑那我我号是噢诶噢耶火荣贵图标日谭本宏日天后宫日我人发v个华融it好吧个人用户rtfkivghudhfugsort单机行发v改背景二哥和加入客户古人科技馆客户可如今规划而环顾可人家会孤儿胡看人家会孤儿跟后台酷睿二氧化碳个号看电视剧个回复客户二号狂欢节如果和如果还
								  </p>
							  </el-col>
							</el-row>
							
						</div>
						<ul style="margin-top:20px;" class="addnoticelist">
							<li v-for="(item,index) in noticelistnew" :key="index">
								<a href=""><i v-show="item.iconclass!=null" class="fa fa-download"></i>{{item.text}}</a>
								<span class="noticedate">
									{{item.noticetime}}
								</span>
							</li>
						</ul>
					  
				  </div>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="Commonlylinks pleftover">
				  <div class="links">
					  <p class="noticehead">
					    <span>常用链接</span>
					    <span class="more">More</span>
					  </p>
					  <hr />
					  <ul class="listnew">
					  	<li v-for="(item,index) in ofenlinks" :key="index">
					  		<a href=""><i class="fa fa-share-alt"></i>{{item.text}}</a>
					  	</li>
					  </ul>
				  </div>
			  	  <div class="downloads" style="margin-top:20px;">
					  <p class="noticehead">
					    <span>常用下载</span>
					    <span class="more">More</span>
					  </p>
					  <hr />
					  <ul class="listnew">
					  	<li v-for="(item,index) in ofendownloads" :key="index">
					  		<a href=""><i class="fa fa-download"></i>{{item.text}}</a>
					  	</li>
					  </ul>
				  </div>
					
			  </el-col>
			</el-row>
			
		</section>
		<footer>
			这是我的脚
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logining: false,
				Indexlogin:{
					admin:"admin",
					passport:"123456"
				},
				rulesindexlogin:{
					admin: [{
							required: true,
							message: '请输入账号',
							trigger: 'blur'
						},
						//{ validator: validaePass }
					],
					passport: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
					]
				},
				checked: true,
				images:[
					{url:require("../../assets/images/card.png")},
					{url:require("../../assets/images/card1.jpg")},
					{url:require("../../assets/images/card2.jpg")},
					{url:require("../../assets/images/card3.jpg")},
				],
				noticelistnew:[
					{iconclass:"",text:"关于进一步加强外事管理工作的通知",noticetime:"2018-5-29"},
					{text:"关于办理哈萨克签证的通知",noticetime:"2018-5-29"},
					{text:"重要通知",noticetime:"2018-4-24"},
				],
				ofenlinks:[
					{text:"财政部费用预算标准表"},
					{text:"中外互免签证协议一览表（更新至2019年5月2日）"},
					{text:"世界各国投资指南"},
					{text:"签证表填写"}
				],
				ofendownloads:[
					{text:"因公出国（境）人员行前教育记录表.doc"},
					{text:"因私申办证件函.doc"},
					{text:"因私事出国（境）申请表.doc"}
				]
			}
		}

	}
</script>

<style lang="scss" scoped>
	#IndexMoa{
		
		.listnew li{
			padding:0 10px;
			line-height: 34px;
			border-bottom: 1px dashed #ccc;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			a{
				color: #666;
				i{
					margin-right:10px;
				}
			}
		}
		header{
			background: url("../../assets/images/1.jpg") no-repeat;
			background-size: cover;
			box-sizing: border-box;
			background-position: center;
			width:100%;  
			height: 400px;
			max-height: 400px;
			position: relative;
			.indexlogo{
				position: absolute;
				top: 50%;
				left: 10%;
				margin-top:-80px;
				
			}
			.login-container {
				   position: absolute;
				   right:10%;
				   top:20px;
					-webkit-border-radius: 5px;
					border-radius: 5px;
					-moz-border-radius: 5px;
					background-clip: padding-box;
					width: 350px;
					padding: 35px 35px 15px 35px;
					background: #fff;
					border: 1px solid #eaeaea;
					box-shadow: 0 0 25px #cac6c6;
					.title {
					  margin: 0px auto 40px auto;
					  text-align: center;
					  color: #505458;
					}
					.remember {
					  margin: 0px 0px 35px 0px;
					}
			}
		}
		section{
			width:90%;
			margin: 10px auto;
			.noticehead{
				padding: 0 10px;
				font-size: 16px;
				.more{
					float: right;
					font-size: 13px;
					color: #777;
					cursor: pointer;
				}
			}
			.Announcements{
				margin-top:10px;
				.noticeinfo{
					div.el-row{
						margin-right:0!important;
					}
					.el-carousel{
						width:100%;
						.el-carousel__container{
							height:120px;
						}
					}
					.reginfo{
						height:150px;
						overflow: hidden;
						.title{
							cursor: pointer;
							color:#d7010d;
							font-size: 15px;
							display: inline-block;
							margin-bottom:10px;
						}
						.content{
							text-indent:30px;
							line-height: 32px;
							color: #666;
						}
						
					}
					.reginfo::after{
						content: "...";
						position: absolute;
						bottom: 0;
						right: 15px;
					    padding-left: 120px;
						background: -webkit-linear-gradient(left, transparent, #fff 55%);
						background: -o-linear-gradient(right, transparent, #fff 55%);
						background: -moz-linear-gradient(right, transparent, #fff 55%);
						background: linear-gradient(to right, transparent, #fff 55%);
					}
					
				}
				.addnoticelist{
					li{
						line-height: 34px;
						clear: both;
						list-style-type: disc;
						margin-left: 20px;
						a{
							color:#666;
							i{
								margin-right:10px;
							}
						}
						span.noticedate{
							text-align: right;
							float: right;
							color: #666;
							margin-right:10px;
						}
					}
				}
			}
			.Commonlylinks{
				margin-top:10px;
			}
			@media (max-width:415px) {
				.el-carousel__container{
					height: 120px!important;
				}
				.noticeinfo .el-carousel .el-carousel__container img{
					height: 120px!important;
				}
				.noticeinfo .reginfo{
					height:120px!important;
				}
				div.pleftover{
					padding-left: 0!important;
				}
			}
		}
		
	}
	
</style>
