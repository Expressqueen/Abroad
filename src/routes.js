import Login from '@/views/Login.vue'
import NotFound from '@/views/404.vue'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import EaAddEdit from '@/views/Ea/ea_add_edit'
import IndexMoa from '@/views/Index/index_moa'
import ApprovalTask from '@/views/Approval/ApprovalTask'
import PlanView from '@/views/Plan/GeneralPlanView'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
	{
	    path: '/',
	    component: IndexMoa,
	    name: '',
	    iconCls: 'fa fa-address-card',
	    leaf: true,//只有一个节点
	    children: [
	        { path: '/IndexMoa', component: IndexMoa, name: '首页' }
	    ]
	},
	{
	    path: '/PlanView',
	    component: PlanView,
	    name: '',
	    hidden: true
	},
    {
        path: '/',
        component: Home,
        name: '因公出访',
        iconCls: 'fa fa-podcast',//图标样式class
        children: [
            { path: '/EaAddEdit', component: EaAddEdit, name: '立项编辑'},
			{ path: '/ApprovalTask', component: ApprovalTask, name: '待处理立项'},
        ]
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
        ]
    },
   
    
    
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;