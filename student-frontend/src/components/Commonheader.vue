

<template>

    <div class="header-container" >
        <div class="l-content">
            <el-button @click="handleMenu" class="button1" icon="el-icon-menu"  size="mini"></el-button>
            <span class="text">河工画像</span>
            <span class="text1">——研究生个人画像系统</span>

            <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>

            </el-breadcrumb> -->

        </div>
        <div class="r-content">
            <span class="text2" style="margin-right: 12px">某某某</span>
            <span class="text3" style="margin-right: 6px">您好，欢迎使用本系统！</span>

            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../../public/lhp.jpg"  class="img2"/>            
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>注销</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>

        </div>

      </div>
</template>



<script>
    import { mapState } from 'vuex';

  export default {
    data() {
      return {
        
      }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    },
    computed: {
        ...mapState({
            tags:state => state.tab.tabsList
        })
    }

  }
  


</script>

<style>
    
    .header-container{
        padding: 0 20px;
        background-color:#f3f3f3;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        
    }
    .el-button {
        margin: 0;
        vertical-align: middle;
    }
    .img2 {
        width: 40px;
        height: 40px;
        background-color: #1484c6;
        border-radius: 12%;

    }
    .button1 {
        background-color: #1ab394;
        color:#ffffff;

        /* vertical-align: middle; */
    }
    .text {
        color: #3d3d3d;
        font-size:xx-large;
        margin-left:10px;
        align-items: center;
    }
    .text1 {
        color: #000000;
        font-size: 18px;
        /* margin-left:10px; */
        align-items: center;
    }
    .text2 {
        color: #3d3d3d;
        font-size: 10px;
        vertical-align:100%;

    }
    .text3 {
        color: #3d3d3d;
        font-size: 10px;
        vertical-align:100%;

    }
</style>