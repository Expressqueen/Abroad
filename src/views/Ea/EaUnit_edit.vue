<template>
  <div id="EaUnit_edit" class="layui-form">
    <div class="tip">
      <p>拖动行开头可进行上下移动!</p>
    </div>
    <div class="layui-btn-container">
      <el-button @click="addunitrow()">增加</el-button>
      <el-button @click="deleterow()">删除</el-button>
      <el-button @click="tiqu()">自动提取</el-button>
      <el-button @click="upmove()">上移</el-button>
      <el-button @click="reload()">重载</el-button>
      <el-button @click="saverow()">保存</el-button>
    </div>
    <table id="Unitgroup" class="display" style="width:100%;margin-top:10px;">
      <thead>
        <tr>
          <th>Id</th>
          <th>eaId</th>
          <th>单位代码</th>
          <th>单位名称</th>
          <th>出访人数</th>
          <th>memo</th>
          <th></th>
        </tr>
      </thead>
    </table>
    <!-- <div id="add">
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div> -->
  </div>
</template>
<style type="text/css">
  .layui-form-select {
    height: 100%;
  }
</style>
<script>
  var comboData = ["农业农村部科技发展中心农业农村部科技发展中心农业农村部科技发展中心", "(停用)中国农业科学院", "中国农业科学院植物保护研究所", "国家食品药品监督管理总局"];
  export default {
    name: "EaUnit_edit",
    data() {
      return {
        table: '',
      }
    },
    mounted() {
      var that = this;
      var tableOption = {
        ajax: "../static/json/UnitOut.json",
        paging: false,
        // responsive: true,
        responsive: {
          details: {
            type: 'column',
            target: -1
          }
        },
        serverSide: false,
        order: [
          [4, "asc"]
        ],
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
            data: "eaId",
            visible: false
          },
          {
            data: "unitCode",
            visible: false
          },
          {
            data: "unitName"
          },
          {
            data: "personCount"
          },
          {
            data: "memo",
            visible: false
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
            targets: 3,
            createdCell: function(cell, cellData, rowData, rowIndex, colIndex) {
              var aInput;
              $(cell).click(function() {
                var selecttext = $(this).text();
                $(this).html(that.createCombox(comboData, selecttext));
                layui.use('form', function() {
                  var form = layui.form;
                  form.render();
                  form.on('select(selectunit)', function(data) {
                    var selecttr = $(data.elem).parent().parent();
                    var selecttd = $(data.elem).parent();
                    $('.dataTable tbody tr').removeClass("selected");
                    $(selecttr).addClass('selected');
                    that.table.cell(selecttd).data(data.value);
                  });
                  $(".layui-input").click(function() {
                    $('.dataTable tbody tr').removeClass("selected");
                    $(this).parent().parent().parent().parent().addClass('selected');

                  })
                })

                // that.table.cell(cell).data(selecttext);
              })
              $(cell).on("click", ":input", function(e) {
                e.stopPropagation();

              });
              $(cell).on("change", ":input", function() {
                $('.dataTable tbody tr').removeClass("selected");
              });
            }
          },
          {
            targets: 4,
            render: function(data, type, row) {
              return '<input type="text" value=' + data + '>';
            }
          },
        ]
      };
      // if (this.Judgequment()) {
      //   tableOption.rowReorder = {
      //     dataSrc: 'unitName'
      //   }
      // }
      this.table = $('#Unitgroup').DataTable(tableOption);
      this.dataTabletrclick(this.table);
      this.dataTabletdclick(this.table);
    },
    methods: {
      deleterow() {
        this.dataDeleterow(this.table);
      },
      createCombox(data, cellData) {
        var _html = '<select style="width:100%;" lay-search lay-filter="selectunit">';
        data.forEach(function(ele, index) {
          if (ele == cellData) {
            _html += '<option selected="selected">' + ele + '</option>';
          } else {
            _html += '<option>' + ele + '</option>';
          }

        });
        _html += '</select>';
        return _html;
      },
      addunitrow() {
        var rowdata = {
          Id: "",
          eaId: "",
          unitCode: "",
          unitName: "",
          personCount: "",
          memo: "",
          control: ""

        }
        this.table.row.add(rowdata).draw(false);
      },
      tiqu() {
        var pp = this.SixGetDataChecked(this.table);
        console.log(pp);
      },
      upmove() {
        debugger
        var node = this.SixGetDataChecked(this.table);
        // if (node.length != 1) {
        //   layer.msg("请选择一行！");
        //   return false;
        // }
        if(JSON.stringify(node) == "{}"){
          alert("请选择一行！");
          return false;
        }
        //选中的行对象
        var select_row = node;
        //所有数据对象
        var data = this.SixGetData(this.table);
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          if (select_row.Id == item.Id) {
            if (i === 0 || i > data.length - 1) {
              break;
            }
            var t = data[i - 1];
            data[i - 1] = data[i];
            data[i] = t;
            break;
          }
        }

        this.table.clear();
        this.table.rows.add( data ).draw();

      }

    }
  }
</script>

<style>
</style>
