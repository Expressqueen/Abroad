<template>
  <div id="Groupedit">
    <el-form :label-position="labelPosition" label-width="80px" :model="Groupeditform" :rules="grouprules" ref="Groupeditform">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form-item label="计划情况" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.rblInPlan">
              <el-radio label="计划内"></el-radio>
              <el-radio label="计划外"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form-item label="是否计划单列" prop="IsListPlan" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.IsListPlan">
              <el-radio label="计划内"></el-radio>
              <el-radio label="计划外"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="任务名称" prop="tb_title">
            <el-input  v-model="Groupeditform.tb_title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form-item label="组团类型" prop="rb_grouptype" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.rb_grouptype">
              <el-radio label="自组一般团"></el-radio>
              <el-radio label="组团双跨团"></el-radio>
              <el-radio label="参加双跨团"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form-item label="组团级别" prop="rb_groupGrade" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.rb_groupGrade">
              <el-radio label="省部级"></el-radio>
              <el-radio label="厅局级"></el-radio>
              <el-radio label="县处级及以下"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="团长姓名" prop="tb_leader">
            <el-input  v-model="Groupeditform.tb_leader"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="签发人">
            <el-input  v-model="Groupeditform.tb_comptroller"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="团组总人数" prop="tb_rsh">
            <el-input  v-model="Groupeditform.tb_rsh"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="农业部人数" prop="tbInnerAmount">
            <el-input  v-model="Groupeditform.tbInnerAmount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="出境日期" prop="tb_Senddate">
            <el-date-picker type="date" placeholder="选择日期" v-model="Groupeditform.tb_Senddate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="在外天数" prop="tb_tsh">
            <el-input  v-model="Groupeditform.tb_tsh"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="组团单位" prop="orgunits">
            <el-select v-model="Groupeditform.orgunits" placeholder="请选择组团单位">
              <el-option
                    v-for="item in Groupeditform.orgunitsvalue"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
          <el-form-item label="邀请单位" prop="tb_Foreign_unit">
            <el-input  v-model="Groupeditform.tb_Foreign_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="任务类别" prop="rbl_aim" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.rbl_aim" @change="selectrbl">
                  <el-radio label="国际会议"></el-radio>
                  <el-radio label="合作研究"></el-radio>
                  <el-radio label="交流访问"></el-radio>
                  <el-radio label="培训"></el-radio>
                  <el-radio label="谈判磋商"></el-radio>
                  <el-radio label="展览"></el-radio>
                  <el-radio label="其他"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item  prop="tb_tasktype" v-show="Groupeditform.rbl_aim=='其他'">
            <el-input  v-model="Groupeditform.tb_tasktype" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="出访子任务" prop="rbl_childMission">
            <el-select v-model="Groupeditform.rbl_childMission" placeholder="请选择组团单位">
              <el-option
                    v-for="item in Groupeditform.childMissionvalue"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="启程地点" prop="tb_start">
            <el-input  v-model="Groupeditform.tb_start"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="归国城市" prop="tbEndCity">
            <el-input  v-model="Groupeditform.tbEndCity"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="是否公示" prop="rb_IsPublicPlan" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.rb_IsPublicPlan">
                  <el-radio label="国际会议"></el-radio>
                  <el-radio label="合作研究"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="公示是否异议" prop="rbPublicPlanPass" class="addlinelabel">
            <el-radio-group v-model="Groupeditform.rbPublicPlanPass">
                  <el-radio label="有异议"></el-radio>
                  <el-radio label="无异议"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="上传附件" class="addlinelabel">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
              :multiple="true">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
              <div slot="tip" class="el-upload__tip">可上传多个文件，单个附件大小不能超过2MB</div>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="经办人" prop="tb_Principle">
            <el-input  v-model="Groupeditform.tb_Principle"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="联系电话" prop="tb_Phone_fax">
            <el-input  v-model="Groupeditform.tb_Phone_fax"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="手机" prop="tb_CellPhone">
            <el-input  v-model="Groupeditform.tb_CellPhone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item label="邮箱" prop="tb_Email">
            <el-input  v-model="Groupeditform.tb_Email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="submitgroupForm('Groupeditform')">保存</el-button>
        <el-button @click="resetForm('Groupeditform')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Groupedit",
    data() {
      return {
        labelPosition: 'top',
        Groupeditform: {
          rblInPlan: '',
          IsListPlan:'',
          tb_title:'',
          rb_grouptype:'',
          rb_groupGrade:'',
          tb_leader:'',
          tb_comptroller:'',
          tb_rsh:'',
          tbInnerAmount:'',
          tb_Senddate:'',
          tb_tsh:'',
          orgunits:'',
          orgunitsvalue:[
            {
              value:'faguisi ',
              label:'法规司'
            },
            {
              value:'654 ',
              label:'农业农村部办公厅'
            }
          ],
          tb_Foreign_unit:'',
          rbl_aim:'',
          tb_tasktype:'',
          rbl_childMission:'',
          childMissionvalue:'',
          tb_start:'',
          tbEndCity:'',
          rb_IsPublicPlan:'',
          rbPublicPlanPass:'',
          tb_Principle:'',
          tb_Phone_fax:'',
          tb_CellPhone:'',
          tb_Email:''
        },
        grouprules: {
          IsListPlan: [{
            required: true,
            message: '是否计划单列必填',
            trigger: 'change'
          }],
          tb_title:[{
              required: true,
              message: '请填写任务名称',
              trigger: 'blur'
          }],
          rb_grouptype:[{
            required: true,
            message: '组团类型必填',
            trigger: 'change'
          }],
          rb_groupGrade:[{
            required: true,
            message: '组团级别必填',
            trigger: 'change'
          }],
          tb_leader:[{
              required: true,
              message: '请填写团长姓名',
              trigger: 'blur'
          }],
          tb_rsh:[{
              required: true,
              message: '团组总人数必填',
              trigger: 'blur'
          }],
          tbInnerAmount:[{
              required: true,
              message: '人数必填',
              trigger: 'blur'
          }],
          tb_Senddate:[{
              type: 'date',
              required: true,
              message: '出境日期必填',
              trigger: 'blur'
          }],
          tb_tsh:[{
              required: true,
              message: '在外天数必填',
              trigger: 'blur'
          }],
          orgunits:[{
              required: true,
              message: '组团单位必填',
              trigger: 'change'
          }],
          tb_Foreign_unit:[{
              required: true,
              message: '邀请单位必填',
              trigger: 'blur'
          }],
          rbl_aim:[{
            required: true,
            message: '任务类别必填',
            trigger: 'change'
          }],
          tb_tasktype:[{
            required: true,
            message: '请填写你要选择的任务类别',
            trigger: 'blur'
          }],
          rbl_childMission:[{
            required: true,
            message: '出访子任务必填',
            trigger: 'change'
          }],
          tb_start:[{
            required: true,
            message: '启程地点必填',
            trigger: 'blur'
          }],
          tbEndCity:[{
            required: true,
            message: '归国城市必填',
            trigger: 'blur'
          }],
          rb_IsPublicPlan:[{
            required: true,
            message: '请选择是否公示',
            trigger: 'change'
          }],
          rbPublicPlanPass:[{
            required: true,
            message: '请选择公示是否有异议',
            trigger: 'change'
          }],
          tb_Principle:[{
            required: true,
            message: '经办人必填',
            trigger: 'blur'
          }],
          tb_Phone_fax:[{
            required: true,
            message: '联系电话必填',
            trigger: 'blur'
          }],
          tb_CellPhone:[{
            required: true,
            message: '手机必填',
            trigger: 'blur'
          }],
          tb_Email:[{
            required: true,
            message: '邮箱必填',
            trigger: 'blur'
          }]
        },
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]


      }
    },
    methods: {
      submitgroupForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      selectrbl(){
        var regrbl=this.Groupeditform.rbl_aim;
        var Collaborative=[
          {value:'A03201',label:'一带一路'},
          {value:'A03202',label:'产能合作'},
          {value:'A03203',label:'走出去'},
          {value:'A03204',label:'招商引资'},
          {value:'A03205',label:'人才引进'}
        ]
        var International=[
          {value:'A03301',label:'一般性国际会议'},
          {value:'A03302',label:'专业学术国际会议'},
          {value:'A03303',label:'高级别国际会议'}
        ]
        var Communication=[
          {value:'A03401',label:'配合高访'},
          {value:'A03402',label:'执行特殊外交使命'},
          {value:'A03403',label:'受中央委托执行临时任务'},
          {value:'A03404',label:'处理海外突发事件'},
          {value:'A03406',label:'竞选国际组织职务'}
        ]
        var Training=[
          {value:'A03401',label:'培训'}
        ]
        var Negotiations=[
          {value:'A03101',label:'对口交流'},
          {value:'A03102',label:'谈判磋商'}
        ]
        var Exhibition=[
          {value:'A03401',label:'展览'}
        ]
        var Otherschild=[
          {value:'A03401',label:'文艺演出'}
        ]
        if(regrbl=="国际会议"){
          this.Groupeditform.childMissionvalue=International;
          this.Groupeditform.rbl_childMission="一般性国际会议";
        }
        if(regrbl=="合作研究"){
          this.Groupeditform.childMissionvalue=Collaborative;
          this.Groupeditform.rbl_childMission="一带一路";
        }
        if(regrbl=="交流访问"){
          this.Groupeditform.childMissionvalue=Communication;
          this.Groupeditform.rbl_childMission="配合高访";
        }
        if(regrbl=="培训"){
          this.Groupeditform.childMissionvalue=Training;
          this.Groupeditform.rbl_childMission="培训";
        }
        if(regrbl=="谈判磋商"){
          this.Groupeditform.childMissionvalue=Negotiations;
          this.Groupeditform.rbl_childMission="对口交流";
        }
        if(regrbl=="展览"){
          this.Groupeditform.childMissionvalue=Exhibition;
          this.Groupeditform.rbl_childMission="展览";
        }
        if(regrbl=="其他"){
          this.Groupeditform.childMissionvalue=Otherschild;
          this.Groupeditform.rbl_childMission="文艺演出";
        }
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }

    }
  }
</script>

<style>
  .Groupedit span.spantitle {
    font-size: 16px;
  }

  #Groupedit .el-form--label-top .el-form-item__label {
    padding: 0;
    width: 100%;
    background: #FBFBFB;
    border: 1px solid #DCDFE6;
    border-bottom: 0;
    padding: 0 10px;
  }

  #Groupedit .addlinelabel .el-form-item__label {
    border-bottom: 1px solid #DCDFE6;
  }
  #Groupedit .el-input__inner,
  .el-textarea__inner {
    border-radius: 0;
	border-color:#DCDFE6;
  }
  #Groupedit .el-row {
    margin: 0!important;
  }
  span.peoplename {
    color: #009688;
    font-weight: bold;
  }

  .Groupedit .el-autocomplete {
    width: 100%;
  }
</style>
