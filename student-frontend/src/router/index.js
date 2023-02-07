import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login.vue'

Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file)
  }
}

export default new Router({
  routes: [
    // route("/",'/layout',"vlayout"),// /login路径，
    // //  route("/login",'/login',"vlogin"),// /login路径，
    {
      path:"/", // 根路径，路由到 Layout组件
      component: () => import('../pages/layout'),

      redirect:"/person",
      children:[ // 其它所有组件都是 Layout的子组件
		    route("/dashboard",'/Dashboard',"Dashboard"), //主页
        route("/login",'/login',"vlogin"),	

        route("/person",'/person_analysis/person',"person"), //基本信息
        route("/score",'/score_analysis/score',"score"), //成绩

        route("/network",'/network_analysis/network',"network"), //校园网
        route("/consume",'/consume_analysis/consume',"consume"), //消费
        //route("/analysis/thesis",'/thesis_analysis/thesis',"thesis"), //毕业论文

        route("/research",'/research_analysis/research',"research"), //科研
        route("/contact",'/contact_analysis/contact',"contact"), //社交
        route("/library",'/library_analysis/library',"library"), //图书馆
		    route("/dorm","/dorm_analysis/dorm","dorm"),  //宿舍
        route("/other1","/other_analysis/other1","other1"),  //其他1
        route("/other2","/other_analysis/other2","other2")  //其他2
        //route("/index/dashboard1",'/Dashboard1',"Dashboard1") //主页

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    }

  ]

})


