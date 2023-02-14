<template>
	<!-- <div>
		
		<el-container style="height:450px;">
			<el-aside width="450px" style="height: 100%;">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>学生卡片</span>
					</div>
					<div>
						<el-table :data="tableData" style="width: 100%" :show-header='false'>
							<el-table-column prop="key" width="180">
							</el-table-column>
							<el-table-column prop="value">
							</el-table-column>
						</el-table>
					</div>
				</el-card>
			</el-aside>
			<br>

				<el-main  class="search" style="height: 100%;">
									<el-carousel indicator-position="outside" height="350px" :autoplay="false">
										<el-carousel-item>
											<el-row :gutter="5">
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">成绩</span>
														</div>
														<span style="font-size: 30px">名列前茅</span>
													</el-card>
												</el-col>
												
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">科研</span>
														</div>
														<span style="font-size: 30px">学霸</span>
													</el-card>
												</el-col>
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">社交</span>
														</div>
														<span style="font-size: 30px">社交牛人</span>

													</el-card>
												</el-col>
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">图书馆</span>
														</div>
														<span style="font-size: 29px">图书馆达人</span>

													</el-card>
												</el-col>
											</el-row>
											<br>
											<el-row :gutter="5">
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">宿舍</span>
														</div>
														<span style="font-size: 30px">早起晚归</span>
													</el-card>
												</el-col>
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">消费</span>
														</div>
														<span style="font-size: 30px">小康</span>
													</el-card>
												</el-col>
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">校园网</span>
														</div>
														<span style="font-size: 30px">上网先锋</span>
													</el-card>
												</el-col>
												<el-col :span="6">
													<el-card shadow="hover">
														<div slot="header" class="clearfix">
															<span style="font-size: 18px">毕业论文</span>
														</div>
														<span style="font-size: 30px">优秀毕设</span>
													</el-card>
												</el-col>
											</el-row>
										</el-carousel-item>
										
									</el-carousel>

								</el-main>

		</el-container>
		<br>
	
	</div> -->

	<el-row>
		<el-col :span="8">
			<el-card class="box-card">
				<div class="user"> 
					<img src="../../../public/lhp.jpg" alt="">
					<div class="userinfo">
						<p class="name1">某某某</p>
						<p class="idcard">202232803056</p>
					</div>
				</div>
				<div class="login-info">
					<p class="sd">上次登录时间：<span class="sp">2022-12-12</span></p>
					<p class="sd">上次登录地点：<span class="sp">天津</span></p>

				</div>

			</el-card >
			
			<el-card class="box-card1">
					
				<el-row >
					<el-col :span="6" class="el1">						
						<span class="spp00">性别：</span>
					</el-col>
					<el-col :span="18" class="el1">						
						<span class="spp01">男</span>
					</el-col>
					<el-col :span="6" class="el1">						
						<span class="spp00">年龄：</span>
					</el-col>
					<el-col :span="18" class="el1">						
						<span class="spp01">24</span>
					</el-col>
					<el-col :span="6" class="el1">						
						<span class="spp00">民族：</span>
					</el-col>
					<el-col :span="18" class="el1">						
						<span class="spp01">汉族中国共产主义青年团团员</span>
					</el-col>
				</el-row>
			</el-card>
				
			<el-card class="box-card1">
				<el-row >

					<el-col :span="6" class="el1">						
						<span class="spp00">班级：</span>
					</el-col>
					<el-col :span="18" class="el1">						
						<span class="spp01">计算机科学与技术X-1</span>
					</el-col>
					<el-col :span="6" class="el1">						
						<span class="spp00">政治面貌：</span>
					</el-col>
					<el-col :span="18" class="el1">						
						<span class="spp01">中国共产主义青年团团员</span>
					</el-col>
				</el-row>
			

				<!-- <el-row >

					<el-col :span="12" class="el1">						
						<span class="spp00">班级：</span>
					</el-col>
					<el-col :span="12" class="el1">						
						<span class="spp01">计算机科学与技术X-1</span>
					</el-col>
					<el-col :span="12" class="el1">						
						<span class="spp00">政治面貌：</span>
					</el-col>
					<el-col :span="12" class="el1">						
						<span class="spp01">中国共产主义青年团团员</span>
					</el-col>
				</el-row>
			 -->
			</el-card>
		</el-col>

		<el-col :span="16">
			<div class="num" >
				<el-card  class="el012" v-for="item in countData" :index="item.name" :key="item.key" :body-style="{display : 'flex', padding:0}"
				@click.native="changeMenu(item)"
				>
						
						<i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}" ></i>
						<div class="detail">
							<p class="valuee">{{ item.value }}</p>
							<p class="keyy">{{ item.key }}</p>
						</div>
					</el-card>

			</div>

			<div class="num" >
				<el-card class="el2" v-for="item in countData2" :key="item.key" :body-style="{display : 'flex', padding:0}">
					
					<i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
					<div class="detail">
						<p class="valuee">{{ item.value }}</p>
						<p class="keyy">{{ item.key }}</p>
					</div>
				</el-card>
			</div>

			<div class="num" >
					<el-card class="el3" v-for="item in countData3" :key="item.key" :body-style="{display : 'flex', padding:0}">
						
						<i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
						<div class="detail">
							<p class="valuee">{{ item.value }}</p>
							<p class="keyy">{{ item.key }}</p>
						</div>
					</el-card>

			</div>

			<el-card class="card4" style="height:360px">

				<el-main class="chart000" style="width: 100%;height: 360px;">

				<div  id="tre01" style="width: 100%;height: 310px;">

				</div>
				</el-main>

			</el-card>

		</el-col>
  </el-row>
	
</template>

<script>
	import { getData } from '../../api'
	import * as echarts from 'echarts';

	export default {
		data() {
			return {
					countData: [{
						key: '成绩',
						value: '学霸',
						icon: 'circle-check',
						color:'#5ab1ef'
					}, {
						key: '科研',
						icon: 'medal-1',
						value: '科研大神',
						color:'#5ab1ef'
					}
					
				],
				countData2: [{
						key: '宿舍',
						icon: 'location-outline',
						value: '早起鸟',
						color:'#2ec7c9'
					}, {
						key: '图书馆',
						icon: 's-management',
						value: '图书馆达人',
						color:'#2ec7c9'
					}
				],
					countData3: [{
						key: '消费',
						icon: 'shopping-cart-full',
						value: '小康生活',
						color:'#ffb980'
					}, {
						key: '社交',
						icon: 'ship',
						value: '社牛',
						color:'#ffb980'
					}, {
						key: '校园网',
						icon: 's-platform',
						value: '校园网榜首',
						color:'#ffb980'
					}
					
				]
					
				

			}
		},
		methods: {
            changeMenu(item) {
                this.$router.push({name: item.name})
            }
		},
		components: {

		},

		mounted() {

		// 	var myChart = echarts.init(document.getElementById('tre01'));
		// 	var option1 = {
		// 	title: {
		// 		text: 'Log Axis',
		// 		left: 'center'
		// 	},
			
		// 	tooltip: {
		// 		trigger: 'axis'
		// 	},
		// 	legend: {
		// 		data: ['max', 'min', 'average', 'mine']
		// 	},
		// 	grid: {
		// 		left: '3%',
		// 		right: '4%',
		// 		bottom: '3%',
		// 		containLabel: true
		// 	},
		// 	toolbox: {
		// 		feature: {
		// 		saveAsImage: {}
		// 		}
		// 	},
		// // 	xAxis: {
		// // 		type: 'category',
		// // 		name: 'x',
		// // 		// splitLine: { show: false },
		// // 		data: ['成绩', '科研', '宿舍', '图书馆', '消费', '社交', '校园网']
		// // },
		// // 	yAxis: {
		// // 		type: 'log',
		// // 		name: 'y',
		// // 		gridIndex:0
		// // 		// ,
		// // 		// minorSplitLine: {
		// // 		// show: true
		// // 		// }
		// // 	},
		// 	xAxis: {
		// 		type: 'category',
		// 		// boundaryGap: false,
		// 		data: ['成绩', '科研', '宿舍', '图书馆', '消费', '社交', '校园网']
		// 	},
		// 	yAxis: {
		// 		// type: 'value',
		// 		gridIndex:0
		// 	},
			
		// 	series: [
		// 		{
		// 		name: 'max',
		// 		type: 'line',
		// 		data: [820, 932, 901, 934, 1290, 1330, 1320],
		// 		},
		// 		{
		// 		name: 'min',
		// 		type: 'line',
		// 		data: [345, 232, 201, 94, 129, 330, 420],
		// 		},
		// 		{
		// 		name: 'average',
		// 		type: 'line',
		// 		data: [454, 594, 529, 930, 420, 732, 601],
		// 		},
		// 		{
		// 		name: 'mine',
		// 		type: 'line',
		// 		data: [654, 632, 432, 501, 394, 529, 730],
		// 		}
		// 	]
		// 	};
		// 	option1 && myChart.setOption(option1);
		// console.log(item, 'item')



			var chartDom = document.getElementById('tre01');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
			
			title: {
				text: '综合分数'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['Max', 'Average', 'Min', 'Mine']
			},
			grid: {
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			toolbox: {
				feature: {
				saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['成绩', '科研', '宿舍', '图书馆', '消费', '社交', '校园网']
			},
			yAxis: {
				// type: 'value',
				gridIndex : 0,
				scale:true
			},
			series: [
				{
				name:'Max',
				// stack:'Total',
				data: [94, 93, 92, 94, 94, 98, 97],
				seriesLayoutBy: 'row',
				type: 'line',
				emphasis: { focus: 'series' },
				smooth: true
				},

				{
				name:'Average',
				// stack:'Total',
				data: [63, 71, 67, 74, 69, 73, 69],
				seriesLayoutBy: 'row',
				type: 'line',
				emphasis: { focus: 'series' },
				smooth: true
				},
				{
				name:'Min',
				// stack:'Total',
				data: [39, 49, 39, 51, 44, 28, 29],
				seriesLayoutBy: 'row',
				type: 'line',
				emphasis: { focus: 'series' },
				smooth: true
				},
				{
				name:'Mine',
				// stack:'Total',
				data: [91, 81, 87, 84, 79, 83, 89],
				seriesLayoutBy: 'row',
				type: 'line',
				emphasis: { focus: 'series' },
				smooth: true
				}
			]
			};
			option && myChart.setOption(option);

			// var chartDom = document.getElementById('tre1');
			// var myChart = echarts.init(chartDom);
			// var option;
			


			getData().then((data) => {
				console.log(data)
			})
			
			
		}
	}
</script>

<style scoped="scoped">
	/* .el-main,
	.el-aside {
		margin: 10px;
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		height: 500px;

	}

	.search {
		height: 440px;
	}

	.el-form-item {
		margin: 10px;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		height: 450px;
		overflow-y: scroll;
	}



	.my-autocomplete li {
		line-height: normal;
		padding: 7px;
	}

	.name {
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.addr {
		font-size: 8px;
		color: #b4b4b4;
	}

	.highlighted .addr {
		color: #ddd;
	}

	.clearfix {
		font-size: 15px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.el-card {
		font-size: 50px;
	}

	.rewardRecords .el-card {
		font-size: 14px;
	}

	.is-selected {
		color: red;
		line-height: 20px;
		font-size: 16px;
		margin-top: 5px;
		background-color: yellow;
	} */
	.box-card {
		border-radius: 3%;
		padding:10px;
	}
	.box-card1 {
		border-radius: 3%;
		margin-top: 30px;
		padding:20px;
		/* height: 150px;		 */
		padding:0;
	}
	.user {
		display: flex;
		align-items: center;
		padding-bottom: 20px;
		margin-bottom: 15px;
		border-bottom: 1px solid #ccc;
	}

	img {
		display: flex;

		margin-left: 15px;
		width: 100px;	
		height: 100px;
		border-radius: 12%;
		}
		.name1 {
			display: flex;

			font-size: 24px;
			width: 100%;
			margin-bottom: 10px;
			margin-left: 24px;
		}
		.idcard {
			display: flex;

			font-size: 20px;
			width: 100%;
			margin-left: 24px;
			color: #999999;
		}
		.sd {
			display: flex;

			line-height: 28px;
			font-size: 14px;
			color: #999999;
			text-align: left;
			margin-left: 6px;

		}
		.sp {
			display: flex;

			color: #000000;
			margin-left: 66px;

		}
		.spp00 {

			line-height: 36px;
			font-size: 15px;
			color: #666666;
			text-align:left;
			/* border-bottom: 1px solid #ccc; */

		}
		.spp01 {

			line-height: 36px;
			font-size: 15px;
			color: #000000;
			text-align:left;
			/* border-bottom: 1px solid #ccc; */

			}
		.el1 {
			border-right: 1px solid #ccc;

		}

		.num {
			display: flex;
			/* justify-content: space-between; */

			/* justify-content: center; */

		}
		.el012 {
			width: 50%;
			margin-bottom: 5px;
			margin-left: 30px;
			margin-right: 10px;
			/* border-radius: 1%; */
			/* padding:0; */
		}
		.el2 {
			width: 50%;
			margin-top: 12px;
			margin-bottom: 5px;
			margin-left: 30px;
			margin-right: 10px;

		}
		.el3 {
			width: 32%;
			margin-top: 12px;
			margin-bottom: 5px;
			margin-left: 30px; 
			margin-right: 10px;
			justify-content: center;


		}
		.icon {
			width: 60px;
			height: 60px;
			font-size: 30px;
			text-align: center;
			line-height: 60px;
			color: #fff;
		}
		.detail {
			/* margin-left: 30px; */
		    margin:0 auto;

			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}
		.keyy {
			font-size: 18px;
			color: #999;
			text-align: center;
		}
		.valuee{
			font-size: 24px;
			margin-bottom: 6px;
			line-height: 30px;
			height: 30px;
			text-align: left;
		}
		.card4 {
			margin-top: 8px;
			margin-bottom: 20px;
			margin-left: 30px;
			margin-right: 10px;
			border-radius: 2%;
			padding:0;
		}
</style>
