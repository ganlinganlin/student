<!-- <template>
	<div>
		<el-container class="alll">
			<el-main class="alll" style="height: auto;width: 400px;">

			<template>
			<p style="font-size: 260%;">毕业论文题目：</p>
			<p style="font-size: 300%;">基于增量学习和特征融合的多摄像机协作监控系统目标匹配方法研究</p>
		    </template>
			</el-main>
		</el-container>
		<el-container class="all">
			<el-main class="all" style="height: auto;width: 400px;">
				<template>

					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="论文等级"  name="overview">
							
							<el-container>
								<el-main>
									<el-row :gutter="8">
										<el-col :span="12">
											<el-card shadow="always">
												<div slot="header" class="clearfix">
													<span style="font-size: 150%;">文献研究</span>
												</div>
												<p style="font-size: 350%;">良好</p>
												
											</el-card>
										</el-col>
										<el-col :span="12">
											<el-card shadow="hover">
												<div slot="header" class="clearfix">
													<span style="font-size: 150%;">开题报告</span>
												</div>
												<p style="font-size: 350%;">优秀</p>
											</el-card>
										</el-col>
										
									</el-row>
									<br>
									<el-row :gutter="8">
										<el-col :span="12">
											<el-card shadow="always">
												<div slot="header" class="clearfix">
													<span style="font-size: 150%;">中期答辩</span>
												</div>
												<p style="font-size: 350%;">优秀</p>
											</el-card>
										</el-col>
										<el-col :span="12">
											<el-card shadow="hover">
												<div slot="header" class="clearfix">
													<span style="font-size: 150%;">预答辩</span>
												</div>
												<p style="font-size: 350%;">优秀</p>
											</el-card>
										</el-col>
									</el-row>
								</el-main>
								<el-main>
									<el-row :gutter="8">
										<el-col :span="12">
											<el-card shadow="always">
												<div slot="header" class="clearfix">
													<span style="font-size: 150%;">中期答辩</span>
												</div>
												<p style="font-size: 350%;">优秀</p>
											</el-card>
										</el-col>
										<el-col :span="12">
											<el-card shadow="hover">
												<div slot="header" class="clearfix">
													<span style="font-size: 150%;">预答辩</span>
												</div>
												<p style="font-size: 350%;">优秀</p>
											</el-card>
										</el-col>
									</el-row>
								</el-main>
							</el-container>
						</el-tab-pane>
							<el-container>
								<el-main>
							<el-table :data="stuList" style="width: 100%" max-height="500"> 
								<el-table-column fixed prop="sno" label="学号" width="150">
								</el-table-column>
								<el-table-column prop="name" label="姓名" width="120">
								</el-table-column>
								<el-table-column prop="sex" label="性别" width="120">
								</el-table-column>
								<el-table-column prop="nation" label="民族" width="120">
								</el-table-column>
								<el-table-column prop="birthday" label="出生日期" width="120">
								</el-table-column>
								<el-table-column prop="ps" label="政治面貌" width="120">
								</el-table-column>
								<el-table-column prop="department" label="寝室" width="200">
								</el-table-column>
								<el-table-column prop="tel" label="手机" width="100">
								</el-table-column>
								<el-table-column prop="qq" label="QQ" width="100">
								</el-table-column>
								  <el-table-column
								      fixed="right"
								      label="操作"
								      width="50">
								      <template slot-scope="scope">
								        <el-button
								          @click.native.prevent="viewRow(scope.$index, stuList)"
								          type="text"
								          size="small">
								          描述
								        </el-button>
								      </template>
								    </el-table-column>
							</el-table>
							
							</el-main>
							
							</el-container>
							<el-pagination
							  small
							  layout="prev, pager, next"
							  :total="50">
							</el-pagination>
						</el-tab-pane>
						<el-tab-pane label="成绩" name="score">成绩</el-tab-pane>
						<el-tab-pane label="考勤" name="kq">考勤</el-tab-pane>
						<el-tab-pane label="任课老师信息" name="teacher">任课老师信息</el-tab-pane> 
					</el-tabs>
				</template>
			</el-main>
		</el-container>
	</div>
</template> -->

<!-- <script>
	export default {
		data() {
			return {
				searchform: {
					grade: '',
					class: '',
					major: ''
				},
				gradelist: ['请选择年级','2017', '2018'],
				majorlist: ['请选择专业','信息管理与信息系统'],
				classlist: ['1', '2'],
				activeName: 'overview',
				stuList: [{
					sno: '201744070130',
					name: '王小虎',
					sex: '男',
					nation: '汉族',
					birthday: '1999-9-10',
					ps: '共青团员',
					department: '弘毅轩三A517',
					tel: 13415770507,
					qq: 1417522511
				}, {
					sno: '201744070130',
					name: '王小虎',
					sex: '男',
					nation: '汉族',
					birthday: '1999-9-10',
					ps: '共青团员',
					department: '弘毅轩三A517',
					tel: 13415770507,
					qq: 1417522512
				}, {
					sno: '201744070130',
					name: '王小虎',
					sex: '男',
					nation: '汉族',
					birthday: '1999-9-10',
					ps: '共青团员',
					department: '弘毅轩三A517',
					tel: 13415770507,
					qq: 1417522511
				}, {
					sno: '201744070130',
					name: '王小虎',
					sex: '男',
					nation: '汉族',
					birthday: '1999-9-10',
					ps: '共青团员',
					department: '弘毅轩三A517',
					tel: 13415770507,
					qq: 1417522511
				}, {
					sno: '201744070130',
					name: '王小虎',
					sex: '男',
					nation: '汉族',
					birthday: '1999-9-10',
					ps: '共青团员',
					department: '弘毅轩三A517',
					tel: 13415770507,
					qq: 1417522511
				}]

			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			/**
			 * @param {Object} index
			 * @param {Object} rows
			 * 跳转学生画像
			 */
			viewRow(index, rows){
				let newWindow = window.open("_blank");
				let sno = rows[index]["sno"];
				newWindow.location = "/#/analysis/personal?sno="+sno;
			},
			drawSexCount() {
				let myChart = this.$echarts.init(document.getElementById("sexcount"));
				let option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},

					series: [{
						name: '性别比例',
						type: 'pie',
						radius: '60%',
						center: ['45%', '35%'],
						data: [{
								value: 19,
								name: '男'
							},
							{
								value: 9,
								name: '女'
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
			drawNationCount() {
				let myChart = this.$echarts.init(document.getElementById("nationcount"));
				let option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},

					series: [{
						name: '民族比例',
						type: 'pie',
						radius: '60%',
						center: ['45%', '35%'],
						data: [{
								value: 19,
								name: '汉族'
							},
							{
								value: 9,
								name: '壮族'
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
			drawPsCount() {
				let myChart = this.$echarts.init(document.getElementById("pscount"));
				let option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},

					series: [{
						name: '政治面貌',
						type: 'pie',
						radius: '60%',
						center: ['45%', '35%'],
						data: [{
								value: 19,
								name: '团员'
							},
							{
								value: 9,
								name: '党员'
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
			autoopen(title1, msg) {
				const h = this.$createElement;

				this.$notify({
					title: title1,
					message: h('i', {
						style: 'color: red'
					}, msg)
				});
			},
			drawMap() {
				let myChart = this.$echarts.init(document.getElementById("stuMap"));
				let option = {
					title: {
						text: "学生分布",
						left: "left"
					},
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
					},
					visualMap: {
						min: 0,
						max: 2000,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'], // 文本，默认为数值文本
						calculable: true
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
						type: 'map',
						mapType: 'china',
						roam: false,
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: true
							}
						},
						data: [{
								name: '北京',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '天津',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '上海',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '重庆',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '河北',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '河南',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '云南',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '辽宁',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '黑龙江',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '湖南',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '安徽',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '山东',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '新疆',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '江苏',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '浙江',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '江西',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '湖北',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '广西',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '甘肃',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '山西',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '内蒙古',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '陕西',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '吉林',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '福建',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '贵州',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '广东',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '青海',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '西藏',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '四川',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '宁夏',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '海南',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '台湾',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '香港',
								value: Math.round(Math.random() * 1000)
							},
							{
								name: '澳门',
								value: Math.round(Math.random() * 1000)
							}
						]
					}]
				};

				myChart.setOption(option);
			}
		},
		mounted() {
			this.drawSexCount();
			this.drawMap();
			this.drawNationCount();
			this.drawPsCount();
			//获取年级列表
			// this.$http.get("/overview/listGrades")
			// 	.then(({
			// 		data
			// 	}) => {
			// 		this.gradelist.push.apply(this.gradelist, data);

			// 	})
			// 	.catch(err => {

			// 		console.log(err);
			// 		this.autoopen('错误', '网络错误,访问超时！');
			// 	});
		}
	}
</script> -->

<!-- <style scoped="scoped">
	.searchclass {
		margin: 10px;
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		height: 500px;

	}
	.alll {
		margin: 10px;
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		min-height: 20px;
	}
	.all {
		margin: 10px;
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		min-height: 500px;
	}

	.searchclass {
		height: 80px;
		background-color: #E9EEF3;
		padding: 0;
	}

	.class-form-inline {
		margin-top: 18px;
	}

	.el-card {
		width: 300px;
		height: 300px;
		padding: 0;
	}
	
</style> -->



<template>

	<el-row>
		<div class="fenge" >
			<el-col :span="12">
			<el-col :span="12">
				<el-card class="boxcard2" :body-style="{padding:0}">
					<div > 
						<div class="tubiao"> 
							<i  class="el-icon-zoom-in" ></i>
							<div>
								<span class="yu00">已退回</span>
							</div>
						</div>
						<el-row >
							<el-col :span="24" class="elcol1">						
								<span class="yu0">基于拓扑优化图卷积网络的网络表示学习方法研究</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告时间：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">男</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告地点：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">24</span>
							</el-col>

						</el-row>
					</div>

				</el-card >
				
			</el-col>

			<el-col :span="12">
				<el-card class="boxcard2" :body-style="{padding:0}">
					<div > 
						<div class="tubiao"> 
							<i  class="el-icon-help" ></i>
							<div>
								<span class="yu00">通过</span>
							</div>
						</div>
						<el-row >
							<el-col :span="24" class="elcol1">						
								<span class="yu0">基于拓扑优化图卷积网络的网络表示学习方法研究</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告时间：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">男</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告地点：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">24</span>
							</el-col>

						</el-row>
					</div>

				</el-card >
				
			</el-col>

			<el-col :span="12">
				<el-card class="boxcard3" :body-style="{padding:0}">
					<div > 
						<div class="tubiao"> 
							<i   class="el-icon-circle-check" ></i>
							<div>
								<span class="yu00">通过</span>
							</div>
						</div>
						<el-row >
							<el-col :span="24" class="elcol1">						
								<span class="yu0">基于拓扑优化图卷积网络的网络表示学习方法研究</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告时间：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">男</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告地点：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">24</span>
							</el-col>

						</el-row>
					</div>

				</el-card >
				
			</el-col>

			<el-col :span="12">
				<el-card class="boxcard3" :body-style="{padding:0}">
					<div > 
						<div class="tubiao"> 
							<i  class="el-icon-check" ></i>
							<div>
								<span class="yu00">通过</span>
							</div>
						</div>
						<el-row >
							<el-col :span="24" class="elcol1">						
								<span class="yu0">基于拓扑优化图卷积网络的网络表示学习方法研究</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告时间：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">男</span>
							</el-col>
							<el-col :span="12" class="yu1">						
								<span class="spp000">报告地点：</span>
							</el-col>
							<el-col :span="12" class="yu2">						
								<span class="spp001">24</span>
							</el-col>

						</el-row>
					</div>

				</el-card >
				
			</el-col>
		</el-col>
		<el-col :span="12">

			<el-card class="box-card000" style="width: 600px;height: 280px;">
				<div class="tre02">

				<div  id="tre02" style="height: 280px;">

				</div>
				</div>
			</el-card >
			
			<el-card class="box-card001" style="width: 600px;height: 360px;">
				<div  id="tre03" style="height: 360px;">

				</div>

			</el-card >


		</el-col>

		</div>
  </el-row>
	
</template>

<script>
	import * as echarts from 'echarts';

	export default {
		data() {
			return {


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


			
		}
	}
</script>



<style>
	.fenge {
		justify-content: center;

	}
/* 
	.el-card__body{
		padding:0;
	} */

	.elcol1 {
		margin-top: 10px;

	}
	.box-card000 {
		border-radius: 3%;
		 padding:20px;
		 height: 260px;		
		 margin-top: 10px;
		 margin-left: 60px;

	}
	.box-card001 {
		border-radius: 3%;
		margin-top: 10px;
		padding:20px;
		margin-left: 60px;

	}
	.boxcard2{
		width: 75%;
		height: 320px;
		background-color: #A24536;
		margin: auto;
		margin-top: 20px;

		border-radius: 6%;

	}
	
	.boxcard3{
		width: 75%;
		height: 320px;
		background-color: #A24536;
		margin-top: 30px;
		margin-left: 50px;
		border-radius: 6%;

	}

	.tubiao{
		height: 100px;
		background-color: #BE4E3A;
		border-radius: 0 0 36% 36%;
	}
	.el-icon-circle-check{
		font-size: 40px;
		color: #fff;
		width: 50px;
		height: 50px;
		line-height: 50px;

		justify-content: center;

			/* font-size: 30px; */
	}
	.el-icon-zoom-in{
		font-size: 40px;
		color: #fff;
		width: 50px;
		height: 50px;
		line-height: 50px;

		justify-content: center;

	}
	.el-icon-check{
		font-size: 40px;
		color: #fff;
		width: 50px;
		height: 50px;
		line-height: 50px;

		justify-content: center;

	}	
	.el-icon-help{
		font-size: 40px;
		color: #fff;
		width: 50px;
		height: 50px;
		line-height: 50px;

		justify-content: center;

	}

	.yu00{
		font-size: 24px;
		color: #fff;
	}
	.yu0{
		font-size: 20px;
		color: #fff;

	}
	.yu1 {
			border-right: 1px solid #ccc;
			margin-top: 20px;

		}
	.yu2 {
		margin-top: 20px;

	}
	.spp000 {
		margin-top: 20px;
		line-height: 36px;
		font-size: 18px;
		color: #F1A640;
		text-align:left;
		/* border-bottom: 1px solid #ccc; */

		}
		.spp001 {
		margin-top: 10px;
		line-height: 36px;
		font-size: 18px;
		color: #FAE54D;
		text-align:left;
		/* border-bottom: 1px solid #ccc; */

		}

</style>