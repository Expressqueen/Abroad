<template>
  <div id="EaFeeBudgetAdd_Edit" class="FeeBuget">
    <mainIfo />
    <Goabroadaudit />
    <div class="Feelist">
      <span class="spantitle">出访人员费用列表</span>
      <hr class="layui-bg-gray">
      <div>
        <el-button type="primary" plain @click="ReCreate()">自动生成</el-button>
        <el-button type="primary" plain @click="deleterow()">删除选定行</el-button>
      </div>
      <table id="tbMembers" class="display" style="width:100%">
        <thead>
          <tr>
            <th></th>
            <th>姓名</th>
            <th>单位</th>
            <th>经费来源</th>
            <th>各国费用折合人民币</th>
            <th>国际旅费</th>
            <th>护签费用</th>
            <th>其他费用</th>
            <th>保险费用</th>
            <th>核减费用</th>
            <th>费用统计</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <div class="Feegeginfo" v-show="showFee==true">
        <div style="margin:10px 0;"><span class="peoplename">{{Feeinfopeople}}</span>详细费用</div>
        <el-form :label-position="labelPosition" label-width="80px" :model="Feeinfoform">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
              <el-form-item label="国际旅费">
                <el-input v-model="Feeinfoform.tbGJLF"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
              <el-form-item label="护照签证费用">
                <el-input v-model="Feeinfoform.tbHQF"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
              <el-form-item label="其他费用">
                <el-input v-model="Feeinfoform.tbQTF"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
              <el-form-item label="保险费用">
                <el-input v-model="Feeinfoform.tbInsurance"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
              <el-form-item label="费用来源">
                <el-select v-model="Feeinfoform.ddlFundingSource" placeholder="请选择费用来源">
                  <el-option label="部本级财政拨款出国费项目" value="部本级财政拨款出国费项目"></el-option>
                  <el-option label="部本级财政拨款专项经费" value="部本级财政拨款专项经费"></el-option>
                  <el-option label="单位财政拨款基本支出" value="单位财政拨款基本支出"></el-option>
                  <el-option label="单位财政拨款专项" value="单位财政拨款专项"></el-option>
                  <el-option label="单位自有资金" value="单位自有资金"></el-option>
                  <el-option label="外方全额支付" value="外方全额支付"></el-option>
                </el-select>

              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div>
          <el-button type="primary" plain @click="addFeetbdata()">增加</el-button>
          <el-button type="primary" plain @click="deletetbData()">删除</el-button>
        </div>
        <table id="tbData" class="display" style="width:100%">
          <thead>
            <tr>
              <th></th>
              <th>出访国家(城市)</th>
              <th>停留天数</th>
              <th>币种</th>
              <th>住宿费标准</th>
              <th>伙食费标准</th>
              <th>公杂费标准</th>
              <th>住宿费</th>
              <th>伙食费</th>
              <th>公杂费</th>
              <th>城市间交通费</th>
              <th>经批准的其他费用</th>
              <th>合计金额(人民币)</th>
              <th></th>
            </tr>
          </thead>
        </table>
        <el-form :label-position="labelPosition" label-width="80px" :model="addFeeform" v-show="addFee==true" :rules="Feerules"
          ref="addFeeform">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="国家" prop="autoCountry">
                <el-autocomplete v-model="addFeeform.autoCountry" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
                  @select="handleSelect"></el-autocomplete>
                <!-- <el-input v-model="addFeeform.autoCountry"></el-input> -->
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="城市">
                <el-input v-model="addFeeform.tbCity"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item label="天数" prop="newDays">
                <el-input v-model="addFeeform.newDays"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <el-form-item>
                <el-button type="primary" @click="submitForm('addFeeform')">确定</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="tip">
      <p>注：修改完数据请及时保存！</p>
    </div>
    <div style="text-align: center;">
      <button type="button" class="btn darkgreen">保存</button>
      <button type="button" class="btn darkgreen">打印</button>
    </div>
  </div>
</template>

<script>
  import mainIfo from './mainInfo'
  import Goabroadaudit from './Goabroadaudit'
  export default {
    name: "EaFeeBudgetAdd_Edit",
    data() {
      return {
        table: '',
        Feesecondtable: '',
        showFee: false,
        addFee: false,
        Feeinfopeople: '',
        labelPosition: 'top',
        Feeinfoform: {
          tbGJLF: '',
          tbHQF: '',
          tbQTF: '',
          tbInsurance: '',
          ddlFundingSource: '',
        },
        addFeeform: {
          restaurants: [],
          tbCity: '',
          newDays: ''
        },
        Feerules: {
          autoCountry:[
            {required: true, message: '请选择国家', trigger: 'change' }
          ],
          newDays: [
            { required: true, message: '请输入天数', trigger: 'blur' }
          ]
        }
      }
    },
    components: {
      mainIfo,
      Goabroadaudit
    },
    mounted() {
      var that = this;
      var tableOption = {
        ajax: "../static/json/Feelist.json",
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
        columns: [{
            data: "Id",
            width: "30px",
            visible: false
          },
          {
            data: "Name"
          },
          {
            data: "UnitName"
          },
          {
            data: "FundingSource"
          },
          {
            "data": "ForeignSum"
          },
          {
            "data": "GJLF"
          },
          {
            "data": "HQF"
          },
          {
            "data": "QTF"
          },
          {
            "data": "BXF"
          },
          {
            "data": "ReducedFee"
          },
          {
            "data": "FeeTotal"
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
          }
        ]
      }
      this.table = $('#tbMembers').DataTable(tableOption);
      this.dataTabletrclick(this.table);
      this.dataTabletdclick(this.table);

      $('.dataTable tbody').on('dblclick', 'tr', function() {
        that.table.$('tr.selected').removeClass('selected');
        $('.dataTable tbody tr td input[type="text"]').removeClass("addline");
        $(this).addClass('selected');
        // layui.form.render();
        that.showFee = true;
        // var check = that.table.rows('.selected').data();
        // console.log(check);
        var pp = that.SixGetDataChecked(that.table);
        that.Feeinfopeople = pp.Name;
        that.Feeinfoform.tbGJLF = pp.GJLF;
        that.Feeinfoform.tbHQF = pp.HQF;
        that.Feeinfoform.tbQTF = pp.QTF;
        that.Feeinfoform.tbInsurance = pp.ReducedFee;
        that.Feeinfoform.ddlFundingSource = pp.FundingSource;
        that.realFeetable();
      });


    },
    methods: {
      ReCreate() {

      },
      deleterow() {
        this.dataDeleterow(this.table);
      },
      deletetbData() {
        this.dataDeleterow(this.Feesecondtable);
      },
      realFeetable() {
        var tableOption = {
          ajax: "../static/json/realFeetable.json",
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
          columns: [{
              data: "Id",
              width: "30px",
              visible: false
            },
            {
              data: "VisitNational"
            },
            {
              data: "Staydays"
            },
            {
              data: "Currency"
            },
            {
              "data": "ForeignSumbz"
            },
            {
              "data": "Boardingfeebz"
            },
            {
              "data": "Miscellaneousbz"
            },
            {
              "data": "ForeignSum"
            },
            {
              "data": "Boardingfee"
            },
            {
              "data": "Miscellaneous"
            },
            {
              "data": "Citytransportation"
            },
            {
              "data": "Otherfees"
            },
            {
              "data": "Sumfees"
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
              targets: 2,
              render: function(data, type, row) {
                return '<input type="text" value=' + data + '>';
              }
            },
            {
              targets: 7,
              render: function(data, type, row) {
                return '<input type="text" value=' + data + '>';
              }
            },
            {
              targets: 8,
              render: function(data, type, row) {
                return '<input type="text" value=' + data + '>';
              }
            },
            {
              targets: 9,
              render: function(data, type, row) {
                return '<input type="text" value=' + data + '>';
              }
            },
            {
              targets: 10,
              render: function(data, type, row) {
                return '<input type="text" value=' + data + '>';
              }
            },
            {
              targets: 11,
              render: function(data, type, row) {
                return '<input type="text" value=' + data + '>';
              }
            }
          ]
        }

        this.Feesecondtable = $('#tbData').DataTable(tableOption);
        this.dataTabletrclick(this.Feesecondtable);
        this.dataTabletdclick(this.Feesecondtable);
      },
      addFeetbdata() {
        this.addFee = true;
        this.loadAll();
      },
      loadAll: function() {
        var that = this;
        this.$axios.get('../static/json/countrydata.js', {}).then(res => { //res是返回结果
          this.addFeeform.restaurants = res.data.countrys;
        }).catch(err => {

        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.addFeeform.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        this.addFeeform.autoCountry=item.value;
      },
      submitForm(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            var addFeetabledata={
              "Id": "1",
              "VisitNational":that.addFeeform.autoCountry,
              "Staydays":that.addFeeform.newDays,
              "Currency":"美元",
              "ForeignSumbz":"210.00",
              "Boardingfeebz":"60.00",
              "Miscellaneousbz":"50.00",
              "ForeignSum":"00.00",
              "Boardingfee":"00.00",
              "Miscellaneous":"00.00",
              "Citytransportation":"00.00",
              "Otherfees":"00.00",
              "Sumfees":"1,875.00",
              "control":""
            }
            that.Feesecondtable.row.add(addFeetabledata).draw(false);
            // that.addFeeform.autoCountry="";
            that.addFeeform.newDays="";
          } else {
            return false;
          }
        });
      },
    }
  }
</script>
<style>
  .FeeBuget span.spantitle {
    font-size: 16px;
  }

  #EaFeeBudgetAdd_Edit .el-form--label-top .el-form-item__label {
    padding: 0;
    width: 100%;
    background: #FBFBFB;
    border: 1px solid #DCDFE6;
    border-bottom: 0;
    padding: 0 10px;
  }
  #EaFeeBudgetAdd_Edit .addlinelabel .el-form-item__label{
    border-bottom: 1px solid #DCDFE6;
  }
  #EaFeeBudgetAdd_Edit .el-input__inner,
  .el-textarea__inner {
    border-radius: 0;
    /* border-top: 0; */
  }

  #EaFeeBudgetAdd_Edit .el-row {
    margin: 0;
  }

  span.peoplename {
    color: #009688;
    font-weight: bold;
  }

  .FeeBuget .el-autocomplete {
    width: 100%;
  }
</style>
