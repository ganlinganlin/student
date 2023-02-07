<template>

	<el-row>
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

			<el-card class="card4" style="height:420px">

				<el-main class="chart000" style="width: 100%;height: 400px;">

				<div  id="tre01" style="width: 100%;height: 360px;">

				</div>
				</el-main>

			</el-card>

		</el-col>

		<el-col :span="8">
			<el-card class="box-card">
				<div class="tre02">

				<div  id="tre02" style="width: 480px;height: 300px;">

				</div>
				</div>
			</el-card >
			
			<el-card class="box-card1" >
				<div  id="tre03" style="width: 480px;height: 400px;">

				</div>

			</el-card >

 
		</el-col>
  </el-row>
	
</template>

<script>
	import * as echarts from 'echarts';

	export default {
		data() {
			return {
					countData: [{
						key: '上网总流量',
						value: '30.12GB',
						icon: 'circle-check',
						color:'#5ab1ef'
					}, {
						key: '平均每周上网天数',
						icon: 'medal-1',
						value: '6天',
						color:'#5ab1ef'
					}
					
				],
				countData2: [{
						key: '平均每天上网时长',
						icon: 'location-outline',
						value: '8小时',
						color:'#2ec7c9'
					}, {
						key: '上网总次数',
						icon: 's-management',
						value: '180次',
						color:'#2ec7c9'
					}
				],
					countData3: [{
						key: '上网时间偏好',
						icon: 'shopping-cart-full',
						value: '08:20',
						color:'#ffb980'
					}, {
						key: '上网总时长',
						icon: 'ship',
						value: '606.5小时',
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


			var chartDom = document.getElementById('tre02');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
			tooltip: {
				formatter: '{a} <br/>{b} : {c}%'
			},
			series: [
				{
				name: 'Pressure',
				type: 'gauge',
				progress: {
					show: true
				},
				detail: {
					valueAnimation: true,
					formatter: '{value}'
				},
				data: [
					{
					value: 88,
					name: 'SCORE'
					}
				]
				}
			]
			};

			option && myChart.setOption(option);


			var chartDom = document.getElementById('tre01');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
			color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
			title: {
				text: 'Gradient Stacked Area Chart'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
				}
			},
			legend: {
				data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
			},
			toolbox: {
				feature: {
				saveAsImage: {}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}
			],
			yAxis: [
				{
				type: 'value'
				}
			],
			series: [
				{
				name: 'Line 1',
				type: 'line',
				// stack: 'Total',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: 'rgb(128, 255, 165)'
					},
					{
						offset: 1,
						color: 'rgb(1, 191, 236)'
					}
					])
				},
				emphasis: {
					focus: 'series'
				},
				data: [140, 232, 101, 264, 90, 340, 250]
				},
				{
				name: 'Line 2',
				type: 'line',
				//stack: 'Total',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: 'rgb(0, 221, 255)'
					},
					{
						offset: 1,
						color: 'rgb(77, 119, 255)'
					}
					])
				},
				emphasis: {
					focus: 'series'
				},
				data: [120, 282, 111, 234, 220, 340, 310]
				},
				{
				name: 'Line 3',
				type: 'line',
				//stack: 'Total',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: 'rgb(55, 162, 255)'
					},
					{
						offset: 1,
						color: 'rgb(116, 21, 219)'
					}
					])
				},
				emphasis: {
					focus: 'series'
				},
				data: [320, 132, 201, 334, 190, 130, 220]
				},
				{
				name: 'Line 4',
				type: 'line',
				//stack: 'Total',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: 'rgb(255, 0, 135)'
					},
					{
						offset: 1,
						color: 'rgb(135, 0, 157)'
					}
					])
				},
				emphasis: {
					focus: 'series'
				},
				data: [220, 402, 231, 134, 190, 230, 120]
				},
				{
				name: 'Line 5',
				type: 'line',
				//stack: 'Total',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				label: {
					show: true,
					position: 'top'
				},
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: 'rgb(255, 191, 0)'
					},
					{
						offset: 1,
						color: 'rgb(224, 62, 76)'
					}
					])
				},
				emphasis: {
					focus: 'series'
				},
				data: [220, 302, 181, 234, 210, 290, 150]
				}
			]
			};

option && myChart.setOption(option);


			var chartDom = document.getElementById('tre03');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				top: '5%',
				left: 'center'
			},
			series: [
				{
				name: 'Access From',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
					show: true,
					fontSize: 40,
					fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' }
				]
				}
			]
			};
			option && myChart.setOption(option);

			getData().then((data) => {
				console.log(data)
			})
			
			
		}
	}
</script>


<style scoped="scoped">

	.box-card {
		border-radius: 3%;
		 padding:20px;
		 height: 272px;		

	}
	.box-card1 {
		border-radius: 3%;
		margin-top: 30px;
		padding:20px;
		height: 380px;
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

		margin-left: 30px;
		width: 150px;	
		height: 150px;
		border-radius: 12%;
		}
		.name1 {
			display: flex;

			font-size: 32px;
			width: 100%;
			margin-bottom: 10px;
			margin-left: 32px;
		}
		.idcard {
			display: flex;

			font-size: 24px;
			width: 100%;
			margin-left: 32px;
			color: #999999;
		}
		.sd {
			display: flex;

			line-height: 28px;
			font-size: 14px;
			color: #999999;
			text-align: left;
			margin-left: 30px;

		}
		.sp {
			display: flex;

			color: #000000;
			margin-left: 66px;

		}
		.spp00 {

			line-height: 36px;
			font-size: 18px;
			color: #666666;
			text-align:left;
			/* border-bottom: 1px solid #ccc; */

		}
		.spp01 {

			line-height: 36px;
			font-size: 18px;
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
			margin-bottom: 20px;
			/* margin-left: 20px; */
			margin-right: 10px;
			/* border-radius: 1%; */
			/* padding:0; */
		}
		.el2 {
			width: 50%;
			margin-top: 15px;
			margin-bottom: 20px;
			/* margin-left: 20px; */
			margin-right: 10px;

		}
		.el3 {
			width: 50%;
			margin-top: 15px;
			margin-bottom: 20px;
			/* margin-left: 20px;  */
			margin-right: 10px;
			justify-content: center;


		}
		.icon {
			width: 80px;
			height: 80px;
			font-size: 30px;
			text-align: center;
			line-height: 80px;
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
			font-size: 22px;
			color: #999;
			text-align: center;
		}
		.valuee{
			font-size: 30px;
			margin-bottom: 6px;
			line-height: 30px;
			height: 30px;
			text-align: center;
		}
		.tre02 {
			weight: 400px;
			height: 300px;
		}
		.card4 {
			margin-top: 8px;
			margin-bottom: 20px;
			/* margin-left: 50px; */
			margin-right: 10px;
			border-radius: 2%;
			padding:0;

		}
</style>