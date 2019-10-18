<template>
  <div id="EaRoute_edit" class="layui-form layui-form-pane" lay-filter="renderform">
    <div class="tip"><p>1.拖动序号列进行上下移动! 2.单击城市,停留天数,是否中转可进行更改</p></div>
    <div class="layui-btn-container">
      <el-button type="primary" plain @click="addrow()">新增</el-button>
      <el-button type="primary" plain @click="deleterow()">删除</el-button>
      <el-button type="primary" plain @click="deleterow()">保存</el-button>
      <!--<button type="button" @click="addrow()" class="layui-btn">新增一行</button>

      <button type="button" @click="deleterow()" class="layui-btn">删除</button> -->
      <!-- <button type="button" @click="aeletALL()" class="layui-btn">获取表格所有数据</button> -->
    </div>
    <table id="example" class="display" style="width:100%">
      <thead>
        <tr>
          <th>序号</th>
          <th>出访国家</th>
          <th>城市</th>
          <th>停留天数</th>
          <th>是否中转</th>
        </tr>
      </thead>
    </table>

    <div id="addpanel" style="display: none;">
      <div class="memo" style="margin: 10px 0;">团组中规定的在外天数为<span id="totalDays" class="error"></span> 天，您已经输入了 <span id="hadDays"
          class="error"></span>天．</div>
      <div class="layui-form-item">
        <label class="layui-form-label">出访国家(地区) <span class="alert-error">*</span></label>
        <div class="layui-input-inline">
          <!-- <select name="autoCountry" xm-select="autoCountry" xm-select-search="" xm-select-radio="" xm-select-skin="default">
            <option value="">请选择国家</option>
          </select> -->
          <el-autocomplete v-model="countryName" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
        </div>
        <div class="layui-form-mid layui-word-aux">(请输入国家名称的拼音首字母,并从列表中选择)</div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">城市 <span class="alert-error" id="spCheckCityStar">*</span></label>
        <div class="layui-input-inline">
          <input type="text" id="tbCity" class="layui-input">
        </div>
        <div class="layui-form-mid layui-word-aux">(最多50字)</div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">是否中转城市 <span class="alert-error">*</span></label>
        <div class="layui-input-inline" style="line-height:38px;">
          <div style="padding-left:10px">
            <input type="radio" name="transitflag" value="是" title="是" lay-filter="ceheckradio">
            <input type="radio" name="transitflag" value="否" title="否" checked lay-filter="ceheckradio">
          </div>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">停留天数</label>
        <div class="layui-input-inline">
          <input type="text" id="tbStayDays" onkeyup="this.value=this.value.replace(/\D/g,'')" class="layui-input" />
        </div>
      </div>
      <div class="layui-form-item layui-form-text" id="trRouteMission" runat="server" style="display: none;">
        <label class="layui-form-label">工作内容 <span class="alert-error" id="spCheckMissionStar">*</span>(最多40字)</label>
        <div class="layui-input-blcok">
          <input type="text" class="layui-textarea">
          <!-- <asp:TextBox ID="tbMission" runat="server" MaxLength="40" TextMode="MultiLine" CssClass="layui-textarea"></asp:TextBox> -->
        </div>
      </div>
      <div>
        <!-- <el-button type="primary" plain @click="addInto()">增加</el-button> -->
        <button type="button" class="btn darkgreen" @click="addInto()">增加</button>
      </div>
    </div>
  </div>
</template>
<style>
  blockquote {
    font-size: 15px;
    color: #FF5722;
  }
</style>
<script>
  var check='';
  export default {
    name: "EaRoute_edit",
    data() {
      return {
        table: '',
        leftDays: '',
        checkCity: true,
        checkMission: true,
        checkStayDays: true,
        restaurants: [],
        countryName: '',
        countryId:'',
        timeout: null
      }
    },
    mounted() {
      var tableOption = {
        ajax: "../static/json/text.json",
        //scrollY:'50vh',
        //scrollCollapse: true,
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
            data: "AutoCountry"
          },
          {
            "data": "City"
          },
          {
            "data": "Statedays"
          },
          {
            "data": "Ortransit"
          }
        ],
        columnDefs: [ //对table格式的定义（表格的列从0开始）
          {
            targets: 2,
            render: function(data, type, row) {
              return '<input type="text" value=' + data + '>';
            }
          },
          {
            targets: 3,
            render: function(data, type, row) {
              return '<input type="text" value=' + data + '>';
            }
          },
          {
            targets: 4,
            render: function(data, type, row) {
              var checked = '';
              var value = '';
              if (data == "是") {
                checked = "checked";
                value = true;
              } else {
                checked = "";
                value = false;
              }
              var input = '<input type="checkbox" value=' + data +
                ' name="yesno" lay-skin="switch" lay-text="是|否" lay-filter="sexDemo" ' + checked + ' >';
              layui.use('form', function() {
                var form = layui.form;
                layui.form.render();
              });
              return input;
            }
          }
        ]
      };
      if (this.Judgequment()) {
        tableOption.rowReorder = {
          dataSrc: 'Id'
        }
      }
      this.table = $('#example').DataTable(tableOption);
      this.dataTabletrclick(this.table);
      this.dataTabletdclick(this.table);


      this.loadAll();

      layui.use('form',function(){
        var form=layui.form;
        form.on('radio(ceheckradio)', function(data) {
          check = data.value;
        });
      })

    },
    methods: {
      loadAll: function() {
        var that = this;
        this.$axios.get('../../static/json/countrydata.js', {}).then(res => { //res是返回结果
          that.restaurants = res.data.countrys;
        }).catch(err => {
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        }

      },
      handleSelect(item) {
        this.countryId=item.Id;
        console.log(item);
      },
      addrow: function() {
        this.showAddPanel();
        layui.form.render();
      },
      aeletALL: function() {
        this.SixGetData(this.table);
      },
      deleterow: function() {
        this.dataDeleterow(this.table);
      },
      showAddPanel: function() {
        this.showStatic();
        $("#addpanel").show();
        $("#addpanel").css("display", "block");
        $("#tbStayDays").val(this.leftDays);
        $("#autoCountry").find(":first-child").focus();
      },
      showStatic: function() {
        var total = 20;
        total = parseInt(total, 10);
        var stayDays = this.SixGetColunmData(this.table, "Statedays");
        var had = 0;
        if (stayDays.length > 0) {
          had = this.sum(stayDays);
        }
        this.leftDays = total - had;
        $("#totalDays").html(total);
        $("#hadDays").html(had);
        $("#tbStayDays").val(this.leftDays);
      },
      sum: function(attr) {
        return eval(attr.join("+"));
      },
      isCountryAndCityExist: function(countryId, city) {
        // var that=this;
        for (var i = 0; i < this.restaurants.length; i++) {
          if ((parseInt(this.restaurants[i][2], 10) == parseInt(countryId, 10)) && (this.restaurants[i][5] == city))
            return true;
        }
        return false;
      },
      //增加国家
      addInto: function() {
        var stayDays = $("#tbStayDays").val();
        var countryId = this.countryId;
        var countryName = this.countryName;
        var city = $("#tbCity").val();
        var mission = $("#tbMission").val();
        var invitationUnit = $("#invitationUnit").val();
        if (countryName == "" || countryName == undefined) {
          alert("请输入国家名称");
          $("#autoCountry").find(":first-child").focus();
          return;
        }
        if (mission == undefined) mission = "";
        if (invitationUnit == undefined) invitationUnit = "";
        if (this.checkCity && (city == null || city == "" || city.length > 50)) {
          alert("“城市”不能为空且不超过50字!");
          $("tbCity").focus();
          return;
        }

        if ($("#EditRouteMission").val() == "True" && this.checkMission && (mission == null || mission == "" || mission.length >
            100)) {
          alert("“执行的任务”不能为空且不超过100字!");
          $("#tbMission").focus();
          return;
        }
        //城市、是否中转、任务
        var city = $("#tbCity").val();
        var flag = (check)=="是" ? "是" : "否";
        if (this.isCountryAndCityExist(countryId, city)) {
          alert("国家:" + countryName + " 城市:" + city + "已经加入,请检查.")
          return;
        }
        try {
          stayDays = parseInt(stayDays, 10);
          countryId = parseInt(countryId, 10);
          if (this.checkStayDays && stayDays < 1) {
            alert("停留天数至少为1天");
            return;
          }
          if (this.checkStayDays && stayDays > this.leftDays) {
            alert("您输入的天数已超过团组中规定的在外天数,请仔细核对!");
            return;
          }
          this.table.row.add({
            "Id":7,
            "countryId": countryId,
            "AutoCountry": countryName,
            "City": city,
            "Statedays": stayDays,
            "Ortransit": flag
          }).draw(false);
          layui.form.render();


          var index = Math.random();
          this.showStatic();
          this.countryName='';
          $("#tbCity").val("");
          $("#tbMission").val("");
          $("#invitationUnit").val("");

        } catch (e) {}
      }
    }
  }
</script>

<style>
  .dtr-details li {
    transform: initial !important;
    -webkit-transform: initial !important;
    position: initial !important;
    opacity: 1 !important;
    width: 100%;
  }
</style>
