<template>
  <div id="EaWorkdata">
    <div class="layui-btn-container">
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      <!-- <el-button type="primary" plain @click="addrow()">新增</el-button> -->
      <el-button type="primary" plain @click="editrow()">编辑</el-button>
      <el-button type="primary" plain @click="deleterow()">删除</el-button>
      <el-button type="primary" plain @click="saverow()">保存</el-button>
    </div>
    <table id="example1" class="display" style="width:100%">
      <thead>
        <tr>
          <th></th>
          <th>时间</th>
          <th>具体时间</th>
          <th>活动安排</th>
          <th>住宿地</th>
        </tr>
      </thead>
    </table>
    <el-dialog title="日程安排" :visible.sync="dialogFormVisible" :modal="false"  width="560px">
      <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules" class="demo-ruleForm">
        <el-form-item label="日期" required>
          <el-row>
            <el-col :md="6" :xm="24" style="padding-left: 0;padding-right:10px;">
              <el-select placeholder="请选择" v-model="ruleForm.region" @change="selettdatatype">
                <el-option label="短期" value="短期"></el-option>
                <el-option label="长期" value="长期"></el-option>
              </el-select>
            </el-col>
            <el-col :md="18" :xm="24" v-model="datatype">
              <el-form-item prop="shortdate" v-show="datatype=='短期'">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.shortdate" style="width: 100%;" format="yyyy-MM-dd"></el-date-picker>
              </el-form-item>
              <el-form-item prop="shortdate" v-show="datatype=='长期'">
                <el-date-picker v-model="ruleForm.longdate" type="daterange" align="right" unlink-panels
                  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2"
                  style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="具体时间" v-show="datatype=='短期'">
          <el-select v-model="ruleForm.SpecificTime" placeholder="请选择具体时间">
            <el-option label="上午" value="上午"></el-option>
            <el-option label="下午" value="下午"></el-option>
            <el-option label="晚上" value="晚上"></el-option>
            <el-option label="全天" value="全天"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动安排" prop="Arrangements">
          <el-input v-model="ruleForm.Arrangements"></el-input>
        </el-form-item>
        <el-form-item label="住宿地" prop="BasePlace">
          <el-input v-model="ruleForm.BasePlace"></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm',neithertype)">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
  .el-select {
    width: 100%;
  }
  #EaWorkdata{
    min-height: 670px;
  }
  /* #EaaddEdit{
    height: 100%!important;
    min-height: 100%;
  }
  .layui-fluid.layadmin-homepage-fluid{
    height: 100%!important;
  }
  .cd-horizontal-timeline.loaded{
    height: 100%!important;
  }
 .cd-horizontal-timeline .events-content{
    height: 100%!important;
  }
  .events-content ol{
    height: 100%!important;
  }
  .events-content ol li.selected{
    height: 100%!important;
  }
  .cd-horizontal-timeline.loaded,.events-content,.events-content ol,..events-content ol li.selected{
    height: 100%!important;
  } */
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  /* .events-content{
    height: 1000px!important;
  } */
</style>
<script>
  import moment from 'moment'
  var layerindex;
  export default {
    name: "EaWorkdata",
    data() {
      return {
        table: "",
        dialogFormVisible: false,
        ruleForm: {
          region: '短期',
          shortdate: new Date(),
          Arrangements: '',
          BasePlace: '',
          longdate: '',
          SpecificTime: ''
        },
        neithertype:'新增',
        datatype: '短期',
        rules: {
          shortdate: [{
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }, ],
          longdate: [{
              required: true,
              message: '请选择日期范围',
              trigger: 'change'
            },

          ],
          Arrangements: [{
            required: true,
            message: '请输入活动安排',
            trigger: 'blur'
          }, ],
          BasePlace: [{
            required: true,
            message: '住宿地不能为空',
            trigger: 'blur'
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    },
    mounted() {
      var tableOption = {
        ajax: "../static/json/EaWorkScheduleAdd_Edit.json",
        paging: false,
        responsive: true,
        serverSide: false,
        dom: "Bfrtip",
        bFilter: false,
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
            width: "30px"
          },
          {
            data: "Date"
          },
          {
            "data": "SpecificTime"
          },
          {
            "data": "Arrangements"
          },
          {
            "data": "BasePlace"
          }
        ],
        columnDefs: [
          {
            "targets": [0],
            "visible": false,
            "searchable": false

          },
          {
            "targets": [1],
            render: function(data, type, row) {
              // return '<input type="text" value=' + data + '>';
              if(row.SpecificTime!=""){
                return moment(data).format("YYYY-MM-DD");
              }else if(row.SpecificTime==""){
                if(data.length==2){
                  return moment(data[0]).format("YYYY-MM-DD")+'~'+moment(data[1]).format("YYYY-MM-DD");
                }
                return data;
              }

            }

          }
        ]
      };
      this.table = $('#example1').DataTable(tableOption);
      this.dataTabletrclick(this.table);
      this.dataTabletdclick(this.table);
    },
    methods: {
      selettdatatype(label) {
        this.datatype = label;
      },
      submitForm(formName,type) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var DateOrtype;
            if(this.ruleForm.SpecificTime == ""){
              DateOrtype=this.ruleForm.longdate;
            }else{
              DateOrtype=this.ruleForm.shortdate;
            }
            var addobj={
              "Id":"3",
              "Date":DateOrtype,
              "SpecificTime":this.ruleForm.SpecificTime,
              "Arrangements":this.ruleForm.Arrangements,
              "BasePlace":this.ruleForm.BasePlace
            }
            if(type=="新增"){
              this.table.row.add(addobj).draw(false);
            }else if(type="编辑"){
              var selectrow = this.table.row( '.selected' ).data();
              selectrow.counter++;
              selectrow=addobj;
              this.table.row( '.selected' ).data( selectrow ).draw();
            }
            this.ruleForm= {
              region: '短期',
              shortdate: new Date(),
              Arrangements: '',
              BasePlace: '',
              longdate: '',
              SpecificTime: ''
            };
            this.dialogFormVisible=false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      editrow(){
        var rowdata=this.SixGetDataChecked(this.table);
        if(JSON.stringify(rowdata) == "{}"){
          alert("请选择要编辑的行！");
          return;
        }
        if(rowdata.SpecificTime == ""){
          this.datatype='长期'
        }else{
          this.datatype='短期'
        }
        this.ruleForm= {
          region: this.datatype,
          shortdate: rowdata.Date,
          Arrangements: rowdata.Arrangements,
          BasePlace: rowdata.BasePlace,
          longdate: rowdata.Date,
          SpecificTime: rowdata.SpecificTime
        };
        this.neithertype="编辑";
        this.dialogFormVisible = true;
      },
      deleterow() {
        this.dataDeleterow(this.table);
      }
    }
  }
</script>

<style>
</style>
