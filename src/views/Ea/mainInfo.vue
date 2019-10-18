<template>
  <div id="maininfo">
    <span class="spantitle">经费预算信息</span>
    <hr class="layui-bg-gray">
    <el-form :label-position="labelPosition" label-width="80px" :model="FeeBugform">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="团组名称">
            <el-input v-model="FeeBugform.tbGroupName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="组团单位">
            <el-input v-model="FeeBugform.lbOrgUnitName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="出访国别">
            <el-input v-model="FeeBugform.lbCountryList"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="团组级别">
            <el-input v-model="FeeBugform.lbEaPosition"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="团长姓名">
            <el-input v-model="FeeBugform.tbLeaderName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="团组总人数">
            <el-input v-model="FeeBugform.tbPersonCount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="出访天数">
            <el-input v-model="FeeBugform.tbStayDays"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="出境日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="FeeBugform.tbSenddate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="入境日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="FeeBugform.tbReturnDate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="美元汇率">
            <el-input v-model="FeeBugform.tbUSD"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="英镑汇率">
            <el-input v-model="FeeBugform.tbGBP"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="欧元汇率">
            <el-input v-model="FeeBugform.tbEUR"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="日元汇率">
            <el-input v-model="FeeBugform.tbJPY"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="港币汇率">
            <el-input v-model="FeeBugform.tbHKD"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="美元合计">
            <el-input v-model="FeeBugform.lbUSDSum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="英镑合计">
            <el-input v-model="FeeBugform.lbGBPSum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="欧元合计">
            <el-input v-model="FeeBugform.lbEURSum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="日元合计">
            <el-input v-model="FeeBugform.lbJPYSum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="港币合计">
            <el-input v-model="FeeBugform.lbHKDSum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="团组费用人民币合计">
            <el-input v-model="FeeBugform.lbTotalSum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="核减费用合计">
            <el-input v-model="FeeBugform.lbReduceFee"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-form-item label="团组费用合计">
            <el-input v-model="FeeBugform.tbTotal"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>


  </div>
</template>

<script>
  export default {
    name: "maininfo",
    data() {
      return {
        labelPosition: 'top',
        FeeBugform: {
          tbGroupName: '',
          lbOrgUnitName: '',
          lbCountryList: '',
          lbEaPosition: '',
          tbLeaderName: '',
          tbPersonCount: '',
          tbStayDays: '',
          tbSenddate: '',
          tbReturnDate: '',
          tbUSD: '',
          tbGBP: '',
          tbEUR: '',
          tbJPY: '',
          tbHKD: '',
          lbUSDSum: '',
          lbGBPSum: '',
          lbEURSum: '',
          lbJPYSum: '',
          lbHKDSum: '',
          lbTotalSum: '',
          lbReduceFee: '',
          tbTotal: ''

        }
      }
    }
  }
</script>

<style>
</style>
