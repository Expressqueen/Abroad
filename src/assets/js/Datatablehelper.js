export const mixin = {
  created() {
    // this.openWindow();
  },
  methods: {
    //tr点击事件
    dataTabletrclick:function(table){
      $('.dataTable tbody').on('click', 'tr', function() {
        table.$('tr.selected').removeClass('selected');
        $('.dataTable tbody tr td input[type="text"]').removeClass("addline");
        $(this).addClass('selected');
        // layui.form.render();
      });
    },
    //td点击事件
    dataTabletdclick:function(table){

      $('.dataTable tbody').on('click', 'tr td input[type="text"]', function(e) {
        $(this).addClass("addline");
        $('.dataTable tbody tr td input[type="text"]').not(this).removeClass("addline");
        try{
          e.stopPropagation();//非IE浏览器
        }
        catch(e){
          window.event.cancelBubble = true;//IE浏览器
        }
        // return false;
      });
      $('.dataTable tbody').on('blur', 'tr td input[type="text"]', function(e) {
        // debugger
        $('.dataTable tbody tr td input[type="text"]').removeClass("addline");
        try{
          e.stopPropagation();//非IE浏览器
        }
        catch(e){
          window.event.cancelBubble = true;//IE浏览器
        }
        // return false;
      });
    },
    //删除一行
    dataDeleterow:function(table){
      if(table.row('.selected').data()==undefined){
        alert("请选择要删除的信息！");
        return;
      }
      table.row('.selected').remove().draw( false );
    },

    //获取列表所有数据
    SixGetData: function(table) {
      var SamNodes = [];
      var check = table.rows().data();
      for (var i = 0; i < check.length; i++) {
        SamNodes.push(check[i]);
      }
      return SamNodes;
    },
    //获取列表选择集合
    SixGetDataChecked: function(table) {
      var SamNodes = {};
      var check = table.rows('.selected').data();
      for (var i = 0; i < check.length; i++) {
        // SamNodes.push(check[i]);
        SamNodes=check[i];
      }
      return SamNodes;

    },
    //获取某一列的数据
    SixGetColunmData:function(table,colum){
      var rowdata=this.SixGetData(table);
      var columdata=[];
      for(var i=0;i<rowdata.length;i++){
        columdata.push(rowdata[i][colum]);
      }
      return columdata;
    },
    //获取设备
    Obtainequipment:function(){
      var ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isChrome = /(?:Chrome|CriOS)/.test(ua),
      isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
      };
    },
    //判断电脑手机或ipad
    Judgequment:function(table){

      var os=this.Obtainequipment();
      if (os.isAndroid || os.isPhone) {
          // 手机
          //table.rowReorder=false;
          return false;
      } else if (os.isTablet) {
          // 平板
          return true;
      } else if (os.isPc) {
          //table.rowReorder=false;
          return true;
      }
    }





  }

}
