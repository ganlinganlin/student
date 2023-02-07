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
						key: '在馆总时长',
						value: '300小时',
						icon: 'circle-check',
						color:'#5ab1ef'
					}, {
						key: '平均每周入馆天数',
						icon: 'medal-1',
						value: '4天',
						color:'#5ab1ef'
					}
					
				],
				countData2: [{
						key: '平均每天在馆时长',
						icon: 'location-outline',
						value: '8小时',
						color:'#2ec7c9'
					}, {
						key: '借阅书籍总数',
						icon: 's-management',
						value: '10本',
						color:'#2ec7c9'
					}
				],
					countData3: [{
						key: '入馆时间偏好',
						icon: 'shopping-cart-full',
						value: '08:20',
						color:'#ffb980'
					}, {
						key: '出馆时间偏好',
						icon: 'ship',
						value: '21:30',
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
					value: 50,
					name: 'SCORE'
					}
				]
				}
			]
			};

			option && myChart.setOption(option);


			var chartDom = document.getElementById('tre01');
			var myChart1 = echarts.init(chartDom);
			var option1;

			option1 = {
			
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
			option1 && myChart1.setOption(option1);

			var myChart = echarts.init(document.getElementById('tre03'));
			var option = {
				title: {
				text: 'Funnel'
				},
				tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c}%'
				},
				toolbox: {
				feature: {
					// dataView: { readOnly: true },
					// restore: {},
					saveAsImage: {}
				}
				},
				legend: {
				data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
				},
				series: [
				{
					name: 'Funnel',
					type: 'funnel',
					left: '10%',
					top: 60,
					bottom: 60,
					width: '80%',
					min: 0,
					max: 100,
					minSize: '0%',
					maxSize: '100%',
					sort: 'ascending',
					gap: 2,
					label: {
					show: true,
					position: 'inside'
					},
					labelLine: {
					length: 10,
					lineStyle: {
						width: 1,
						type: 'solid'
					}
					},
					itemStyle: {
					borderColor: '#fff',
					borderWidth: 1
					},
					emphasis: {
					label: {
						fontSize: 20
					}
					},
					data: [
					{ value: 60, name: 'Visit' },
					{ value: 40, name: 'Inquiry' },
					{ value: 20, name: 'Order' },
					{ value: 80, name: 'Click' },
					{ value: 100, name: 'Show' }
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

<!-- <style scoped="scoped">
	.el-main,
	.el-aside {
		margin: 10px;
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		height: 500px;

	}

	.search {
		height: 100px;
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
		height: 99.5%;
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
		font-size: 14px;
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
	}


</style> -->


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