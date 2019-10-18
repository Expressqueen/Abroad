<template>
	<section>
		<div id="EaaddEdit" class="page-container page-component">
    <div class="layui-fluid layadmin-homepage-fluid" style="background: #fff;">
      <section class="cd-horizontal-timeline">
        <div class="timeline">
          <div class="events-wrapper">
            <div class="events">
              <ol>
                <li><a href="#0" data-date="16/01/2014" class="selected">团组编辑</a></li>
                <li><a href="#0" data-date="20/02/2014">出访路线</a></li>
                <li><a href="#0" data-date="20/03/2014">出访日程</a></li>
                <li><a href="#0" data-date="20/04/2014">团组人员</a></li>
                <li><a href="#0" data-date="20/05/2014">派员单位</a></li>
                <li><a href="#0" data-date="30/08/2014">经费预算</a></li>
                <li><a href="#0" data-date="10/09/2014" style="display: none;"></a></li>
              </ol>
              <span class="filling-line" aria-hidden="true"></span>
            </div> <!-- .events -->
          </div> <!-- .events-wrapper -->
          <ul class="cd-timeline-navigation">
            <li><a href="#0" class="prev inactive">Prev</a></li>
            <li><a href="#0" class="next">Next</a></li>
          </ul> <!-- .cd-timeline-navigation -->
        </div> <!-- .timeline -->
        <div class="events-content">
          <ol>
            <li class="selected" data-date="16/01/2014"><Groupedit /></li>
            <li data-date="20/02/2014"><EaRouteEdit /></li>
            <li data-date="20/03/2014"><EaWorkdata /></li>
            <li data-date="20/04/2014"><EaPersonEdit /></li>
            <li data-date="20/05/2014"><EaUnitEdit /></li>
            <li data-date="30/08/2014"><EaFeeBudgetAddEdit /></li>
          </ol>
        </div>
      </section>
    </div>
  </div>
	</section>
</template>
<script>
	import Groupedit from './Groupedit'
	import EaRouteEdit from './EaRoute_edit'
	import EaWorkdata from './EaWorkScheduleAdd_Edit'
	import EaPersonEdit from './EaPerson_edit'
	import EaUnitEdit from './EaUnit_edit'
	import EaFeeBudgetAddEdit from './EaFeeBudgetAdd_Edit'
	export default {
		name:'',
		data(){
			return {

			}
		},
		components:{Groupedit,EaRouteEdit,EaWorkdata,EaPersonEdit,EaUnitEdit,EaFeeBudgetAddEdit},
		created: () => {
	      const s=document.createElement('script');
	      s.style='text/javascript';
	      s.src='./static/js/main.js';
	      document.body.appendChild(s);
	    }
	}

</script>

<style>
  @import "../../assets/css/styletimeline.css";

  	.el-select{
  		display: block;
  	}
</style>
