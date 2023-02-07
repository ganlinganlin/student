<template>
<div class="consume">
    <!-- 消费页面 -->
    <el-row :gutter="20">
        <!-- <el-row> -->
		<el-form :inline="true" :model="searchform" class="class-form-inline">
			<el-form-item label="所属学院">
				<el-select v-model="searchform.major" placeholder="人工智能与数据科学学院">
					<el-option :label="item" :value="item" v-for="(item,i) in collegelist" :key="i"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="入学年份">
				<el-select v-model="searchform.grade" placeholder="请选择">
					<el-option :label="item" :value="item" v-for="(item,i) in gradelist" :key="i"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="所属专业">
				<el-select v-model="searchform.college" placeholder="请选择">
					<el-option :label="item" :value="item" v-for="(item,i) in majorlist" :key="i"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
		<!-- </el-row> -->
        <el-col  :span="16">
            <el-row :gutter="8">

                <el-tabs tab-position="left">
                    <el-tab-pane label="全部">
                        <StatisticDataTab label="全部"></StatisticDataTab>
                    <!-- <el-row :gutter="8" style="display:flex;">
                        <el-col>
                            <el-card shadow="hover">
                                <el-statistic group-separator="," :precision="2" :value="value1" title="在校消费总额" suffix="元"></el-statistic>
                            </el-card>
                        </el-col>
                        <el-col>
                            <el-card  shadow="hover">
                                <el-statistic group-separator="," :value="value2" title="在校消费次数" suffix="次"></el-statistic>
                            </el-card>
                        </el-col>
                    </el-row>

                    <el-row :gutter="8" style="display:flex;">
                        <el-col>
                            <el-card  shadow="hover">
                                <el-statistic group-separator="," :precision="2" :value="value2" title="人均消费" suffix="元"></el-statistic>
                            </el-card>
                        </el-col>

                        <el-col>
                            <el-card  shadow="hover">
                                <el-statistic group-separator="," :value="value2" title="月均/日均消费" suffix="次"></el-statistic>
                            </el-card>
                        </el-col>
                    </el-row> -->
                    </el-tab-pane>
                    <el-tab-pane label="一卡通"><StatisticDataTab></StatisticDataTab></el-tab-pane>
                    <el-tab-pane label="支付宝"><StatisticDataTab></StatisticDataTab></el-tab-pane>
                    <el-tab-pane label="云闪付"><StatisticDataTab></StatisticDataTab></el-tab-pane>
                </el-tabs>
            </el-row>

            <el-row>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>消费总览</span>
                    </div>

                    <el-row  :gutter="8" style="display:flex">
                        <el-col>
                            <el-card style="height:100%; " >
                                <!-- <div style="height :100%; background-color: brown; padding:0"></div> -->
                                <!-- <div id="xfsj_hour_count" ></div> -->
                                <div id="xfsj_hour_count" style="height:500px"></div>
                                <!-- <img src="" class="image">
                                <span>总体消费时间偏好</span> -->
                            </el-card> 
                        </el-col>
                        <el-col style="width: 30%">
                            <el-card>
                                <el-statistic group-separator="," :value="value2" title="一卡通支付"></el-statistic>
                            </el-card>
                            <el-card>
                                <el-statistic group-separator="," :value="value2" title="支付宝支付"></el-statistic>
                            </el-card>
                            <el-card>
                                <el-statistic group-separator="," :value="value2" title="云闪付支付"></el-statistic>
                            </el-card>

                            <el-card>
                                <div slot="header">
                                    <span>热门消费地点</span>
                                </div>
                                <div v-for="o in 5" :key="o" class="text item">
                                    {{'东区二组 ' + o }}
                                </div>
                                
                            </el-card>
                        </el-col>
                    </el-row>
                    <div class="remarks">统计自21级研究生全体学生数据</div>
                </el-card>
            </el-row>
           
        </el-col>

        <el-col :span="8">

            <el-row :gutter="20">
                <el-card>
                    <div slot="header" >
                        <span>消费评估</span>
                    </div>
                    <div id='analyse_xfsj' style="height: 300px"></div>
                </el-card>
            </el-row>

            <el-row :gutter="20">
                <el-card>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="日消费" name="1">
                        <div class="charts" id="xfsj_day"></div>
                    </el-tab-pane>
                    <el-tab-pane label="月消费" name="2">
                        <div class="charts" id="xfsj_month"></div>
                    </el-tab-pane>
                    <el-tab-pane label="年消费" name="3">
                        <div class="charts" id="xfsj_year"></div>
                    </el-tab-pane>
                </el-tabs>
                <div class="remarks">消费数据时间范围 2021-09 - 2021-12 / 2022-03 - 2022-05 / 2022-08 - 2022-11</div>
                </el-card>
            </el-row>

        </el-col>
    </el-row>
</div>
</template>

<script>
import Consume from './vue.js'
import StatisticDataTab from '../../components/statistic_data.vue'
import { Tabs } from 'element-ui';


/*
    全校总体数据展示（可单独划分学院/年级/学期） 以人工智能学院21级研究生数据为例
    1. 各支付方式消费金额/次数 总额/人均消费（年/月/周/日）
    2. 每个学期按小时/月维度消费趋势（全部数据 + 搜索） 折线图 热力图 [设置学期时间 春季学期3-6 秋季学期 9-12]
    3. 消费地点热力图/词云展示频次（通过销售窗口消费次数统计）
    4. 男女比例消费统计
    5. 消费水平对比 低频低额/高频低额/高频高额 （高额/高频次消费阈值 动态选择）散点图（消费金额-消费次数）/ 显示均值坐标 / 全部时间/学年/学期/月/周/日数据
*/

export default {
    name:'Consume',
    components:{
        StatisticDataTab
    },
    data() {
      return {
        
        activeName: '2',
        like: true,
        value1: 4154.564,
        value2: 2222,
        zffs:'支付宝',
        title: "在校消费总额",
        input: "Hello Element UI!",
        currentDate: new Date(),
        searchform: {
					college:'',
					major: '',
					grade: '',
                    // zffs:'',
				},
        collegelist: ['全部','人工智能与数据科学学院', '理学院', '电气工程'],
        majorlist: ['请选择专业','计算机科学与技术', '电子信息', '人工智能', '人工智能（产教融合）'],
        gradelist: ['请选择年级','2020', '2021', '2022'],
        zffslist:['全部','一卡通','支付宝','云闪付'],
      };
    },
    methods: {
        handleClick(tab, event) {
			// 点击Tab 局部刷新数据
            console.log(tab.name);
            this.activeName = tab.name
            let id=''
            switch(tab.name){
                case '1':
                    id = 'xfsj_day';
					this.loadXFSJ(id)
                    break;
                case '2':
                    id = 'xfsj_month';
					this.loadXFSJ(id)
                    break;
                case '3':
                    id = 'xfsj_year';
					this.loadXFSJ(id)
                    break;
            }
            console.log(id)
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

		onSubmit(){
			console.log('提交表单查询',this.searchform)
			// console.log(this.searchform)

		},

		loadXFSJ(id){

			const charts = document.getElementById(id)
  			charts.removeAttribute("_echarts_instance_");
      		let mycharts = this.$echarts.init(charts);
      		mycharts.showLoading();
      
     		this.$http.post("/xfsj",id)
			.then(({data}) => {

				// console.log(data)
		
				mycharts.setOption({
				xAxis: {
					data: data.x,
					name: '时间',
					axisLabel:{
					showMaxLabel:true,
				}
				},
				yAxis: {
					name: '金额/元'
				},
				series: [
					{
					type: 'line',
					data: data.y
					}
				],
				dataZoom: [
					{
						id: 'dataZoomX',
						type: 'slider',
						xAxisIndex: [0],
						filterMode: 'filter'
					},
				],
				});
  
        		mycharts.hideLoading()
      		})
			.catch(err => {
				console.log(err);
				this.autoopen('错误', '网络错误,访问超时！');
			})
		},
        
    },
    mounted() {
        
        console.log('消费')
        
        var __this = this
        let consume = new Consume()

		// 获取初始数据
        consume.xfsj(__this,'xfsj_month')
        consume.analyse_xfsj(__this,'analyse_xfsj')
        consume.xfsj_hour(__this,'xfsj_hour_count')
        // consume.drawTest(__this,'testCharts')

    },

  };

</script>

<style scoped>
.consume{
    height: 100%;
    width: 100%;
    /* background-color: brown; */
}
.charts{
    height: 350px;
}
.remarks{
    font-size: 14px;
    color: #999;
    text-align: center;
}

.select-zffs{
    text-align: center;
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


.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    display: block;
  }

  .el-row {
    margin-bottom: 20px;
    height: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    /* min-height: 36px; */
    height: 100%;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>