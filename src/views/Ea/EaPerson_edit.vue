<template>
  <div id="EaPerson_edit" >
    <div class="tip"><p>拖动行开头可进行上下移动!</p></div>
    <el-form ref="form" :model="form" label-width="80px" style="position: relative;">
      <el-row>
        <el-col :md="6" :xm="18" style="padding-left: 0;padding-right:10px;">
          <el-form-item label="输入姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="6" :xm="6" style="padding-left: 0;padding-right:10px;margin-top:4px">
          <!-- <el-button type="primary" plain @click="editrow()">查询</el-button> -->
          <button type="button" class="btn darkgreen" @click="selectperson">查询</button>
        </el-col>
      </el-row>
      <div class="dingwei" style="position: absolute;" v-show="person==true">
        <el-button @click="peopleinfo()">选择人员</el-button>
        <table id="tbGroupPerson1" class="display" style="width:100%;margin-top:10px;">
          <thead>
            <tr>
              <th>姓名编码</th>
              <th>姓名</th>
              <th>性别</th>
              <th>民族</th>
              <th>证照号码</th>
              <th>出生地</th>
              <th>出生日期</th>
              <th>工作单位</th>
              <th>二级单位</th>
              <th>职务</th>
              <th>职称</th>
              <th>护照照片回执编码</th>
              <th>专业</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </el-form>
    <div class="layui-btn-container">
      <el-button @click="personinitmsg()">人员信息</el-button>
      <el-button @click="peopleinfo()">导入</el-button>
      <el-button @click="deleterow()">删除</el-button>
      <el-button @click="saverow()">保存</el-button>
    </div>
    <table id="tbGroupPerson" class="display" style="width:100%;margin-top:10px;">
      <thead>
        <tr>
          <th></th>
          <th>姓名编码</th>
          <th>姓名</th>
          <th>性别</th>
          <th>身份证</th>
          <th>出生日期</th>
          <th>工作单位</th>
          <th>二级单位</th>
          <th>职务</th>
          <th>职称</th>
          <th>护照号码</th>
          <th>对外身份</th>
          <th></th>
        </tr>
      </thead>
    </table>
    <el-dialog title="出国人员编辑" :visible.sync="dialogpersonVisible" :modal="false" width="80%" :close-on-click-modal="false" custom-class="" top="5vh" :fullscreen='true'>
      <PersonAddEdit ref="personinfo"></PersonAddEdit>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closedelog()">取 消</el-button>
        <el-button type="primary" @click="submitForm()">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
  .dingwei{
    position: absolute;
    width: 50%;
    height: auto;
    max-height: 300px;
    left: 10px;
    padding: 10px;
    background: #fff;
    z-index: 99;
    overflow: auto;
    border-radius: 2px;
    box-shadow: 1px 1px 10px rgba(0,0,0,.3);
  }
  .peopleedit{
    max-height: 300px;
    overflow-y:auto;
  }
</style>
</style>
<script>
  import PersonAddEdit from '../person/Person_add_edit'
  import moment from 'moment'
  var remarkShowLength = 5;
  export default {
    name: "EaPerson_edit",
    data() {
      return {
        table: '',
        selectpersontable:'',
        dialogpersonVisible:false,
        remarkShowLength: 5,
        person:false,
        form: {
          name: ''
        }
      }
    },
   components:{PersonAddEdit},
    mounted() {
      var that = this;
      var tableOption = {
        ajax: "../static/json/EaPerson_edit.json",
        paging: false,
        // responsive: true,
        responsive: {
          details: {
            type: 'column',
            target: -1
          }
        },
        serverSide: false,
        order:[[1,"asc"]],
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
            data: "Xmbm"
          },
          {
            data: "Name"
          },
          {
            data: "Sex"
          },
          {
            data: "IdCode"
          },
          {
            data: "Brithday",
            width: "80px"
          },
          {
            data: "UnitName"
          },
          {
            data: "SubUnitName"
          },
          {
            data: "Position"
          },
          {
            data: "Profession"
          },
          {
            data: "Passport"
          },
          {
            data: "membertype"
          },
          {
            data: "control",
            width: "25px"
          }
        ],
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: -1
          },
          {
            "targets": [0, 1],
            "visible": false,
            "searchable": false

          }
        ]
      };
      if (this.Judgequment()) {
        tableOption.rowReorder = {
          dataSrc: 'Name'
        }
      }
      this.table = $('#tbGroupPerson').DataTable(tableOption);
      this.dataTabletrclick(this.table);
      this.dataTabletdclick(this.table);
    },
    methods: {
      selectperson(){
         $('#tbGroupPerson1').dataTable().fnDestroy();
        this.person=true;
        var tableOption = {
          ajax: "../static/json/selectperson.json",
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
          columns: [
            {data: "Xmbm"},
            {data: "Name"},
            {data: "Sex"},
            {data: "EthnicGroup"},
            {data: "IdCode"},
            {data: "BrithPlace"},
            {data: "Brithday",width: "80px"},
            { data: "UnitName"},
            { data: "SubUnitName"},
            {data: "Position"},
            {data: "Profession"},
            {data: "DigitalPictureNumber"},
            {data: "ProfessionalLevel"},
            {data: "control",width: "25px"}
          ],
          columnDefs: [{
              className: 'control',
              orderable: false,
              targets: -1
            },
            {
              "targets": [0],
              "visible": false,
              "searchable": false

            }
          ]
        };
        this.selectpersontable = $('#tbGroupPerson1').DataTable(tableOption);
        this.dataTabletrclick(this.selectpersontable);
        this.dataTabletdclick(this.selectpersontable);
      },
      peopleinfo(){
        var rowdata=this.SixGetDataChecked(this.selectpersontable);
        if(JSON.stringify(rowdata) == "{}"){
          alert("请选择要编辑的行！");
          return;
        }
        this.table.row.add(rowdata).draw(false);
        this.person=false;
      },
      personinitmsg(){
        var rowdata=this.SixGetDataChecked(this.table);
        if(JSON.stringify(rowdata) == "{}"){
          alert("请选择要编辑的行！");
          return;
        }
        this.dialogpersonVisible=true;
      },
      submitForm() {
         this.$refs.personinfo.regform('peopleForm');
      },
      closedelog(){
        this.$refs.personinfo.handleCancel('peopleForm');
        this.dialogpersonVisible=false;
      },
      deleterow(){
        this.dataDeleterow(this.table);
      }
    }
  }
</script>
