<template>
 <div>
	<!-- <el-menu
	  :default-active="activeIndex2"
	  class="el-menu-demo"
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#1296db"
	  text-color="#fff"
	  active-text-color="#ffd04b">
	  <el-menu-item index="0" style="margin-right: 20px;"><i class="el-icon-s-home"></i>研究生个人画像系统</el-menu-item>
	  <el-submenu index="1" style="float: right;">
	    <template slot="title"><i class="el-icon-user-solid"></i>用户</template>
	    <el-menu-item index="1-1" style="text-align: center;">退出登录</el-menu-item>
	    <el-menu-item index="1-2" style="text-align: center;">返回学生管理系统</el-menu-item>      
	    </el-submenu>
	
	        <el-menu-item index="2"><router-link to="/index/dashboard">主页</router-link></el-menu-item>
	        <el-menu-item index="3"><router-link to="/analysis/person">基本信息</router-link></el-menu-item>
			<el-menu-item index="4"><router-link to="/analysis/score">成绩</router-link></el-menu-item>
			
			<el-menu-item index="7"><router-link to="/analysis/research">科研</router-link></el-menu-item>
			<el-menu-item index="8"><router-link to="/analysis/contact">社交</router-link></el-menu-item>
			<el-menu-item index="9"><router-link to="/analysis/library">图书馆</router-link></el-menu-item>
			<el-menu-item index="10"><router-link to="/analysis/dorm">宿舍</router-link></el-menu-item>

			<el-menu-item index="11"><router-link to="/analysis/consume">消费</router-link></el-menu-item>
			<el-menu-item index="12"><router-link to="/analysis/network">校园网</router-link></el-menu-item>
			<el-menu-item index="4"><router-link to="/analysis/thesis">毕业论文</router-link></el-menu-item> 
			<el-menu-item index="4-1"><router-link to="/index/dashboard1">主页</router-link></el-menu-item> 

		</el-menu> -->

		<!-- http://localhost:8080/#/analysis/consume -->

		<el-container>
			 <el-aside width="auto">    <!--:width="$store.state.tab.isCollapse?    'auto' : '200px'" -->
				<commonaside />
			</el-aside>
			<el-container class="header">
				<el-header >
					<commonheader />
				</el-header>
				<commontag />

				<el-main >
					<!-- Main -->
					<router-view></router-view>
				</el-main>
			</el-container>
			</el-container>

  </div>
</template>

<script>
	import commonaside from '../components/Commonaside.vue';
	import commonheader from '../components/Commonheader.vue';
	import commontag from '../components/Commontag.vue';


	export default {
		name: "vlayout",
	    data() {
	      return {	        
			activeIndex2: '1'
	      }
	    },
		components: {
			commonaside,
			commonheader,
			commontag

		},
	    methods: {
	      
		   handleSelect(key, keyPath) {
		       console.log(key, keyPath);
		   }
	    }
	  }
</script>

<style>
	a{
		text-decoration: none;
	}
	/* .el-aside {
		position: fixed;
	} */
	.el-header {
		padding: 0;
	}
	/* .header {
		width:auto;
	} */
</style>

