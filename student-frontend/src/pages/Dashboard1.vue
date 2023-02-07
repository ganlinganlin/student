<template>
	<div>
		<el-container>
		   <el-main class="chart4" >
				<!-- <el-tag type="info" effect="light">出勤率</el-tag> -->
				<div id="attendence" style="width: 900px;height: 350px;"></div>
			</el-main>
		</el-container>
		
		<el-main class="chart2" >
				<el-tabs v-model="tea_activename">
					<el-tab-pane label="时长分布" name="tea_grade_conunt">
						<div id="tea_grade_chart" style="width: 900px;height: 350px;">

						</div>
					</el-tab-pane>
				</el-tabs>
			</el-main>
	</div>
</template>

<script>
 

	export default {
		
		data() {
			return {
		 
				tea_activename: 'tea_grade_conunt',
				
 
				gradeStuSeries: []
			}
		},
		methods: {
			
			autoopen(title1, msg) {
				const h = this.$createElement;

				this.$notify({
					title: title1,
					message: h('i', {
						style: 'color: red'
					}, msg)
				});
			},

			changeSexChart(year) {
				// console.log(year);
				//发送请求 
				this.drawSexChart(year, this.bnum, this.gnum, 0);
				this.$http.get("/overview/sexcount/grade/" + year)
					.then(({
						data
					}) => {

						this.bnum = data.bnum;
						this.gnum = data.gnum;
						if (year == '0') {
							year = '全学院';
						}
						this.drawSexChart(year, this.bnum, this.gnum, 1);
					})
					.catch(err => {
						console.log(err);
						this.autoopen('错误', '网络错误,访问超时！');
					});

			},
			 
			
			
 
			
			/**
			 * 教师年级分布  //TODO 无数据，静态数据演示图
			 */
			drawTeacherGradeChart() {
				//TODO
				let myChart = this.$echarts.init(document.getElementById("tea_grade_chart"));
				let option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					title: {
						text: "在馆学习时长分布",
						left: "center"
					},
					legend: {
						type: 'scroll',
						orient: 'vertical',
						right: 10,
						top: 20,
						bottom: 20,
						data: ['1', '2',, '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
					},
					series: [{
						name: '在馆学习时长分布',
						type: 'pie',
						radius: '70%',
						center: ['40%', '50%'],
						data: [{
								value: 30,
								name: '1'
							},
							{
								value: 40,
								name: '2'
							},
							{
								value: 50,
								name: '3'
							},
							{
								value: 60,
								name: '4'
							},
							{
								value: 70,
								name: '5'
							},
							{
								value: 60,
								name: '6'
							},
							{
								value: 60,
								name: '7'
							},
							{
								value: 60,
								name: '8'
							},
							{
								value: 60,
								name: '9'
							},
							{
								value: 60,
								name: '10'
							},
							{
								value: 60,
								name: '11'
							},
							{
								value: 60,
								name: '12'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};
				myChart.setOption(option);
			},

			/**
			 * 	生源地图
			 */
			dramStuMap() {
				let myChart = this.$echarts.init(document.getElementById("stuMap"));
				myChart.showLoading();
				this.$http.get("overview/stumap")
					.then(({
						data
					}) => {
						let addrData = this.$evil(data);

						let option = {
							tooltip: {
								trigger: 'item'
							},
							legend: {
								orient: 'vertical',
								left: 'left',
								data: ['全学院'],
								type:'scroll'
							},
							visualMap: {
							      // 左下角定义 在选中范围中的视觉元素 渐变地区颜色
							      type: 'piecewise', // 类型为分段型
							      top: "bottom",
							      right: 10,
							      splitNumber: 6,
							      seriesIndex: [0],
							      itemWidth: 20, // 每个图元的宽度
							      itemGap: 2,    // 每两个图元之间的间隔距离，单位为px
							      pieces: [      // 自定义每一段的范围，以及每一段的文字   
							        { gte: 500, label: '500人以上', color: '#c1484e' },
							        { gte: 300, lte: 499, label: '300-499人', color: '#d57b6e' },
									{ gte: 100, lte: 299, label: '100-299人', color: '#d57b6e' },
							        { gte: 10, lte: 99, label: '10-99人', color: '#df9a7e' },
							        { lte: 9, label: '1-9人', color: '#f5eda5' },
									// 不指定 min，表示 min 为无限大（-Infinity）。
							      ],
							      textStyle: {
							        color: '#737373'
							      }
							    },
							toolbox: {
								show: true,
								orient: 'vertical',
								left: 'right',
								top: 'center',
								feature: {
									mark: {
										show: true
									},
									dataView: {
										show: true,
										readOnly: false
									},
									restore: {
										show: true
									},
									saveAsImage: {
										show: true
									}
								}
							},
							series: [{
								name: '全学院',
								type: 'map',
								mapType: 'china',
								roam: false,								
								zoom: 1.2,
								label: {
									normal: {
										show: true
									},
									emphasis: {
										show: false
									}
								},
								data: addrData
							}]
						};
						myChart.hideLoading();
						myChart.setOption(option);
					})

			},
		
			/**
			 * 到勤率折线图
			 * 暂无数据，仅演示
			 */
			drawAttendChart(){
				//TODO
				let myChart = this.$echarts.init(document.getElementById("attendence"));
				let option = {
				     title: {
				            text: '近7天图书馆学习时间(演示数据)',
				            subtext: '(单位:h)',
				            left: 'center'
				        },
				    xAxis: {
				        type: 'category',
				        data: ['2022-11-01', '2022-11-02', '2022-11-03', '2022-11-04', '2022-11-05', '2022-11-06', '2022-11-07']
				    },
				    yAxis: {
				        type: 'value',
				        min:6,
				        max:10
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    series: [{
				        data: [9.8, 8.5, 9.6,9.0, 9.2, 9.2, 8.6],
				        type: 'line',
				        smooth: true
				    }]
				};
				
				myChart.setOption(option);
			}
		},
		mounted() {

			
			
			
			//教师分布图
			this.drawTeacherGradeChart();
			
			
			this.drawAttendChart();

		}


	}
</script>

<style scoped="scoped">
	
</style>
