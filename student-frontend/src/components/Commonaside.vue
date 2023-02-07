

<template>

      <div class="aside" >
            <el-menu 
            default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse"
            background-color="#187bd0"
            text-color=#ffffff    
            active-text-color="#00e500"

            >
            <img src="../../public/hebut1.png"  class="img"/>            
            <!-- <div class="h3">
                <h3 >研究生个人画像系统</h3>
              </div> -->
                <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label}}</span>
                </el-menu-item>

                <!-- <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
                    <template slot="title">
                        <i :class="`el-icon-${item.icon}`"></i>
                        <span slot="title">{{ item.label}}</span>
                    </template>
                    <el-menu-item-group  v-for="subItem in item.children" :key="subItem.path" >
                        <i ></i>
                        <el-menu-item @click="clickMenu(subItem)" :class="`el-icon-${subItem.icon}`" :index="subItem.path">{{ subItem.label }}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu> -->

                <!-- <el-menu-item index="2">
                <i class="el-icon-s-platform"></i>
                <span slot="title">成绩</span>
                </el-menu-item>

                <el-menu-item index="3">
                <i class="el-icon-location"></i>
                <span slot="title">科研</span>
                </el-menu-item>

                <el-menu-item index="4">
                <i class="el-icon-location"></i>
                <span slot="title">宿舍</span>
                </el-menu-item>
                <el-menu-item index="5">
                <i class="el-icon-location"></i>
                <span slot="title">消费</span>
                </el-menu-item>
                
                <el-menu-item index="6">
                <i class="el-icon-location"></i>
                <span slot="title">社交</span>
                </el-menu-item>

                <el-menu-item index="7">
                <i class="el-icon-location"></i>
                <span slot="title">图书馆</span>
                </el-menu-item>

                <el-menu-item index="8">
                <i class="el-icon-location"></i>
                <span slot="title">校园网</span>
                </el-menu-item> -->


            </el-menu>
        </div>
</template>



  
  <style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
      /* position: fixed; */
      /* border-right: none; */
      border: none;

    }
    .el-menu{
        height: 100vh;
    }
    .img {
      margin-top:6px;
      max-width: 90%;
      max-height: 66px;
      /* background-color: rgba(0, 0, 255, 0.613); */
    }

    .h3{
        color: #fff;
        font-size: large;
        /* background-color: #1585c7; */
        margin-top:10px;
        margin-bottom: 10px;
    }
    .aside{
      height: 100%;
      /* overflow-x: hidden;
      overflow-y: hidden; */
    }

  </style>
  
  <script>
  
    export default {
      data() {
        return { 
          
          menuData: [ 
            {
                path: '/person',
                name: 'person',
                label: '个人',
                icon: 'user-solid',
                url: 'analysis/person'
            },
            {
                path: '/score',
                name: 'score',
                label: '成绩',
                icon: 'circle-check',
                url: 'analysis/score'
            },
            {
                path: '/research',
                name: 'research',
                label: '科研', 
                icon: 'medal-1',
                url: 'analysis/research'
            },
            {
                path: '/dorm',
                name: 'dorm',
                label: '宿舍',
                icon: 'location-outline',
                url: 'analysis/dorm'
            },
            {
                path: '/consume',
                name: 'consume',
                label: '消费',
                icon: 'shopping-cart-full',
                url: 'analysis/consume'
            },
            {
                path: '/contact',
                name: 'contact',
                label: '社交',
                icon: 'ship',
                url: 'analysis/contact'
            },
            {
                path: '/library',
                name: 'library',
                label: '图书馆',
                icon: 's-management',
                url: 'analysis/library'
            },
            {
                path: '/network',
                name: 'network',
                label: '校园网',
                icon: 's-platform',
                url: 'analysis/network'
            },
            {
                
                
                label: '其他',
                icon: 'cloudy-and-sunny',
                children: [
                    {
                        path: '/other1',
                        name: 'other1',
                        label: '其他1',
                        icon: 'sunny',
                        url: 'analysis/other1'

                    },
                    {
                        path: '/other2',
                        name: 'other2',
                        label: '其他2',
                        icon: 'cloudy',
                        url: 'analysis/other2'
                    }

                ]
                
            }
          ]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        clickMenu(item) {
          if(this.$route.path !== item.path && !(this.$route.path == '/person'&& (item.pah == '/'))){
            this.$router.push(item.path)
          }
          this.$store.commit('selectMenu', item)
          
        }

      },
      computed: {
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
          return this.$store.state.tab.isCollapse
        }
    }

    }
    


  </script>