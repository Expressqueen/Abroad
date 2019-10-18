<template>
  <div id="PersonAddEdit">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <span>人员基本信息</span>
        <hr class="layui-bg-gray">
        <el-form ref="peopleForm" :model="peopleForm" label-width="80px" :rules="rules" class="demo-ruleForm">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="姓">
                <el-input placeholder="请输入姓" v-model="peopleForm.tbX" @blur="regtbX">
                  <template slot="append">.</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="姓拼音">
                <el-input placeholder="请输入姓拼音" v-model="peopleForm.Xpinyin" :disabled="true">
                  <template slot="append">+</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="名">
                <el-input placeholder="请输入名" v-model="peopleForm.tbM" @blur="regtbM">
                  <template slot="append">.</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="名拼音">
                <el-input placeholder="请输入名拼音" v-model="peopleForm.Mpinyin" :disabled="true">
                  <template slot="append">+</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="姓名">
                <el-input placeholder="请输入姓名" v-model="peopleForm.tbXm" :disabled="true">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="拼音">
                <el-input placeholder="请输入姓名拼音" v-model="peopleForm.tbPy" :disabled="true">
                  <template slot="append">+</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="民族" prop="ddlEthnicGroup">
                <el-select v-model="peopleForm.ddlEthnicGroup" placeholder="请选择民族" filterable>
                  <el-option label="汉" value="汉"></el-option>
                  <el-option label="壮" value="壮"></el-option>
                  <el-option label="满" value="满"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="特殊资源">
                <el-radio-group v-model="peopleForm.rblXb">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="身份证" prop="tbIDCode">
                <el-input placeholder="请输入身份证号码" v-model="peopleForm.tbIDCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="出生地点" prop="ddlChshdd">
                <el-select v-model="peopleForm.ddlChshdd" placeholder="出生地点需与户口本一致" filterable>
                  <el-option label="安徽" value="安徽"></el-option>
                  <el-option label="澳门" value="澳门"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="工作单位" prop="unit">
                <el-select v-model="peopleForm.unit" placeholder="请选择工作单位" filterable>
                  <el-option label="安徽" value="安徽"></el-option>
                  <el-option label="澳门" value="澳门"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="出生日期" prop="tbCshrq">
                <el-date-picker type="date" placeholder="选择出生日期" v-model="peopleForm.tbCshrq" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="二级单位">
                <el-input placeholder="请输入二级单位" v-model="peopleForm.tbSubUnitName">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="级别" prop="ddlPositionLevel">
                <el-select v-model="peopleForm.ddlPositionLevel" placeholder="家属填无,公务员不能填无" filterable>
                  <el-option label="国家级" value="国家级"></el-option>
                  <el-option label="副国家级" value="副国家级"></el-option>
                  <el-option label="部级" value="部级"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="职务" prop="tbPositionName">
                <el-input placeholder="职务名称需与政审表一致" v-model="peopleForm.tbPositionName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="职称" prop="tbProfessionLevel">
                <el-input placeholder="请输入职称" v-model="peopleForm.tbProfessionLevel"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="政治面貌">
                <el-input placeholder="请输入政治面貌" v-model="peopleForm.tbPoliticalStatus"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="健康状况">
                <el-input placeholder="请输入健康状况" v-model="peopleForm.tbHealthStatus"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="涉密等级">
                <el-select v-model="peopleForm.SecretLevel" placeholder="请选择涉密等级" filterable>
                  <el-option label="非涉密人员" value="非涉密人员"></el-option>
                  <el-option label="一般涉密人员" value="一般涉密人员"></el-option>
                  <el-option label="重要涉密人员" value="重要涉密人员"></el-option>
                  <el-option label="核心涉密人员" value="核心涉密人员"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="电码" prop="tbDm">
                <el-input placeholder="请输入电码" v-model="peopleForm.tbDm">
                  <template slot="append">+</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
              <el-form-item label="照片编码">
                <el-input placeholder="需办理护照时填写" v-model="peopleForm.tbPhotoNo">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <div class="saomiao">
          <span>扫描件</span>
          <hr class="layui-bg-gray">
          <viewer :images="images" class="sortimg">
            <img v-for="item in images" :src="item.src" :key="item.index" height="auto">
          </viewer>
        </div>
        <div class="fingerprint">
          <span>指纹</span>
          <hr class="layui-bg-gray">
          <div class="figer" style="display: inline-block;">
            <img src="../../../static/images/finger.jpg" alt="" style="width: 70px;height: 70px;">
          </div>
          <div style="display: inline-block;">
            <el-button size="medium" style="margin-top:10px;margin-left:10px;">未采集</el-button>
            <el-button size="medium" style="margin-top:10px;">未上传外交部</el-button>
          </div>
        </div>

      </el-col>
    </el-row>

    <el-dialog
      title="请选择多音字拼音"
      :visible.sync="polyphone"
      width="30%" :modal="false">
      <el-select v-model="poly" placeholder="请选择">
          <el-option
            v-for="item in polys"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="polyphone = false">取 消</el-button>
        <el-button type="primary" @click="polyphoneselect">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style>
  .el-input.is-disabled .el-input__inner{
    background: #fff;
  }
  .sortimg img{
    width:45%;
    padding:10px;
    max-height: 75px;
    max-width: 100px;

  }
</style>
<script>
  import pinyin from 'js-pinyin'
  
  export default {
    // name: "PersonAddEdit",
	name: "PersonAddEdit",
    data() {
      return {
        peopleForm: {
          SpecificTime: '',
          tbX: '',
          Xpinyin: '',
          tbM: '',
          Mpinyin: '',
          tbXm: '',
          tbPy: '',
          ddlEthnicGroup: '',
          rblXb: '',
          tbIDCode: '',
          ddlChshdd: '',
          unit: '',
          tbCshrq: '',
          tbSubUnitName: '',
          ddlPositionLevel: '',
          tbPositionName: '',
          tbProfessionLevel: '',
          tbPoliticalStatus: '',
          tbHealthStatus: '',
          SecretLevel: '',
          tbDm: '',
          tbPhotoNo: ''
        },
        rules: {
          ddlEthnicGroup: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          tbIDCode: [{
              required: true,
              message: '请输入身份证号',
              trigger: 'blur'
            },
            {
              min: 18,
              max: 18,
              message: '长度为18位',
              trigger: 'blur'
            }
          ],
          ddlChshdd: [{
            required: true,
            message: '出生地必填，且需与户口本一致',
            trigger: 'blur'
          }],
          unit: [{
            required: true,
            message: '工作单位必填',
            trigger: 'blur'
          }],
          tbCshrq: [{
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          ddlPositionLevel: [{
            required: true,
            message: '级别必填',
            trigger: 'blur'
          }],
          tbPositionName: [{
            required: true,
            message: '职务必填',
            trigger: 'blur'
          }],
          tbProfessionLevel: [{
            required: true,
            message: '职称必填',
            trigger: 'blur'
          }],
          tbDm: [{
            required: true,
            message: '请输入电码',
            trigger: 'blur'
          }]
        },
        polys: [
          {
            value: 'Bian Yi',
            label: 'Bian Yi'
          },
          {
            value: 'Pian Yi',
            label: 'Pian Yi'
          }
          ],
        polyphone:false,
        poly:'',
        images:[
                  {src:'../static/images/IdCard.jpg',index:1},
                  {src:'../static/images/Passport.jpg',index:2},
                  {src:'../static/images/Signature.jpg',index:3},
                  {src:'../static/images/Household.jpg',index:4}
                ]

      }
    },
    mounted() {
      let pinyin = require('js-pinyin');
      pinyin.setOptions({checkPolyphone: false, charCase: 0});

    },
    methods: {
      regform(peopleForm) {
        this.$refs['peopleForm'].clearValidate();
        this.$refs[peopleForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleCancel(peopleForm){
        this.$refs[peopleForm].resetFields();
      },
      regtbX(){
        this.peopleForm.Xpinyin=pinyin.getFullChars(this.peopleForm.tbX);
        this.NameYin();
      },
      regtbM(){
        if(this.peopleForm.tbM=="便宜"){
          this.polyphone=true;
        }else{
          this.peopleForm.Mpinyin=pinyin.getFullChars(this.peopleForm.tbM);
        }
        this.NameYin();
      },
      polyphoneselect(){
        this.peopleForm.Mpinyin=this.poly;
        this.polyphone=false;
      },
      NameYin(){
        this.peopleForm.tbXm=this.peopleForm.tbX+this.peopleForm.tbM;
        this.peopleForm.tbPy=this.peopleForm.Xpinyin+' '+this.peopleForm.Mpinyin;
      }

    }
  }
</script>

<style>
</style>
