<template>
    <div id='statistic_data_tab'>
        
        <el-row :gutter="8" style="display:flex;">
            <el-col>
                <el-card shadow="hover">
                    <el-statistic group-separator="," :precision="2" :value="sum" title="在校消费总额" suffix="元"></el-statistic>
                </el-card>
            </el-col>

            <el-col>
                <el-card  shadow="hover">
                    <el-statistic group-separator="," :value="counts" title="在校消费次数" suffix="次"></el-statistic>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="8" style="display:flex;">
            <el-col>
                <el-card  shadow="hover">
                    <el-statistic group-separator="," :precision="2" :value="mean" title="人均消费" suffix="元"></el-statistic>
                </el-card>
            </el-col>

            <el-col>
                <el-card  shadow="hover">
                    <el-statistic group-separator="," :precision="2"  :value="mean_parm" title="月均/日均消费" suffix="次"></el-statistic>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'StatisticDataTab',
    data(){
        return{
            sum: 1234.79,
            counts: 3457,
            mean: 678.34,
            mean_parm: 435.76,
        }
    },
    
    methods: {

        getData(props){
            console.log(props)
        }

    },

    mounted() {
        console.log('获取消费统计数据')
    },

}
</script>
