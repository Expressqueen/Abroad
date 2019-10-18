<template>
  <div id="Goabroadaudit">
    <div class="suggest">
      <span class="spantitle">出国任务审核意见</span>
      <hr class="layui-bg-gray">
      <el-form :label-position="labelPosition" label-width="80px" :model="suggestform">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="审核单位" class="addlinelabel">
              <el-radio-group v-model="suggestform.rbApprovalUnit">
                <el-radio label="国际合作司"></el-radio>
                <el-radio label="中国农业科学院"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="是否列入出国计划" class="addlinelabel">
              <el-radio-group v-model="suggestform.rbIsInPlan">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="需单独说明的情况" class="addlinelabel">
              <el-checkbox-group v-model="suggestform.cbApprovalOther">
                  <el-checkbox label="参加国际会议等对方组织单位指定或推荐酒店情况下住宿费需据实报销的" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="出访任务需在一个国家城市间往来的" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="由于航班衔接等原因确需选择外国航空公司航线的" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="根据到访国要求出国人员必须购买保险" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="出访团组需安排宴请" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="对外赠送礼品" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="机场到酒店往返交通费" name="cbApprovalOther"></el-checkbox>
                  <el-checkbox label="其他" name="cbApprovalOther"></el-checkbox>
              </el-checkbox-group>
              <el-input v-model="suggestform.tbOtherThings" v-show="suggestform.cbApprovalOther.indexOf('其他')!=-1" placeholder="请输入内容" style="border-top:1px solid #DCDFE6"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="出访目标和必要性">
              <el-input type="textarea" v-model="suggestform.tbAbroadPurpose"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="拟解决的问题或取得的成果">
              <el-input type="textarea" v-model="suggestform.tbProblemToBeSolved"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="出访主要任务安排">
              <el-input type="textarea" v-model="suggestform.tbVisitToArrange"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="suggest">
      <span class="spantitle">预算财务审核意见</span>
      <hr class="layui-bg-gray">
      <el-form :label-position="labelPosition" label-width="80px" :model="suggestform">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="须事先报批的支出事项" class="addlinelabel">
              <el-checkbox-group v-model="Financialform.cbExpenditureItems">
                  <el-checkbox label="参加国际会议等对方组织单位指定或推荐酒店情况下住宿费需据实报销的" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="出访任务需在一个国家城市间往来的" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="由于航班衔接等原因确需选择外国航空公司航线的" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="根据到访国要求出国人员必须购买保险" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="出访团组需安排宴请" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="对外赠送礼品" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="机场到酒店往返交通费" name="cbExpenditureItems"></el-checkbox>
                  <el-checkbox label="其他" name="cbExpenditureItems"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="其他事项" class="addlinelabel">
              <el-radio-group v-model="Financialform.rbFeeOther">
                    <el-radio label="出入境选择非国内航空公司航班"></el-radio>
                    <el-radio label="出入境选择国内航空公司航班"></el-radio>
                  </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: "Goabroadaudit",
    data() {
      return {
        labelPosition: 'top',
        suggestform: {
          rbApprovalUnit:'',
          rbIsInPlan:'',
          cbApprovalOther:[],
          tbAbroadPurpose:'',
          tbProblemToBeSolved:'',
          tbVisitToArrange:'',
          tbOtherThings:''
        },
        Financialform:{
          cbExpenditureItems:['其他'],
          rbFeeOther:''
        }
      }
    },
    methods:{

    }
  }
</script>

<style>
</style>
