<template>
	<div id="planView" style="padding:10px;">
		<el-form :model="Planviewform" :label-position="labelPosition">
			<el-row :gutter="10">
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="计划年份">
			      <el-input v-model="Planviewform.lbYear" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="申报单位">
			      <el-input v-model="Planviewform.lbApplyUnit" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="团组名称">
			      <el-input v-model="Planviewform.lbGroupName" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
			    <el-form-item label="出访任务描述">
			      <el-input v-model="Planviewform.lbAbroadMission" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="组团单位">
			      <el-input v-model="Planviewform.lbOrganizeUnit" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="任务类别">
			      <el-input v-model="Planviewform.lbPurpose" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="团长级别">
			      <el-input v-model="Planviewform.lbLeaderLevel" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="出访日期">
			      <el-input v-model="Planviewform.lbSendDate" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="邀请单位">
			      <el-input v-model="Planviewform.lbInviteUnit" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="国别/地区:">
			      <el-input v-model="Planviewform.lbCountrys" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="在外天数">
			      <el-input v-model="Planviewform.lbStayDays" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="组团或参团">
			      <el-input v-model="Planviewform.lbOorP" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="总人数">
			      <el-input v-model="Planviewform.lbTotalAmount" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="申报单位人数">
			      <el-input v-model="Planviewform.lbApplyUnitAmount" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="部外单位人数">
			      <el-input v-model="Planviewform.lbOutPersonAmount" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="使用部本级出国费人数">
			      <el-input v-model="Planviewform.lbUseFeeAmount" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="使用部本级出国预算金额(万元/人民币)">
			      <el-input v-model="Planviewform.lbUseFeeTotal" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="使用事业单位财政拨款出国经费人数">
			      <el-input v-model="Planviewform.lbInstitutionaPersonAmount" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="使用事业单位财政拨款出国经费预算金额">
			      <el-input v-model="Planviewform.lbInstitutionaBudgetFounding" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="经费来源">
			      <el-input v-model="Planviewform.lbFundingSource" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="是否为双跨团">
			      <el-input v-model="Planviewform.lbIsSK" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
			    <el-form-item label="是否经本单位财务先行审核">
			      <el-input v-model="Planviewform.lbIsFinanceApproval" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
			    <el-form-item label="备注">
			      <el-input v-model="Planviewform.lbMemo" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
	export default{
		name:"planView",
		data(){
			return{
				labelPosition:'top',
				Planviewform:{
					lbYear:'',
					lbApplyUnit:'',
					lbGroupName:'',
					lbAbroadMission:'',
					lbOrganizeUnit:'',
					lbPurpose:'',
					lbLeaderLevel:'',
					lbSendDate:'',
					lbInviteUnit:'',
					lbCountrys:'',
					lbStayDays:'',
					lbOorP:'',
					lbTotalAmount:'',
					lbApplyUnitAmount:'',
					lbOutPersonAmount:'',
					lbUseFeeAmount:'',
					lbUseFeeTotal:'',
					lbInstitutionaPersonAmount:'',
					lbInstitutionaBudgetFounding:'',
					lbFundingSource:'',
					lbIsSK:'',
					lbIsFinanceApproval:'',
					lbMemo:''
				}
			}
		}
	}
</script>

<style>
</style>
