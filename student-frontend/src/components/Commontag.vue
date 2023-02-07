<template>
    <div class="tabs">
        <el-tag
            v-for="(item,index) in tags"
            :key="item.path"
            :closable =  "item.name !== 'person'"
            :effect="$route.name === item.name ? 'dark' : 'plain' "
            @click = "changeMenu(item)"
            @close = "handleClose(item,index)"
            size="samll"
            >
            {{ item.label }}
        </el-tag>
     </div>
   </template>
   

   <script>
   import { mapMutations, mapState } from 'vuex'
    export default {
        name:'Conmontag',
        data() {
            return {}
        },
        computed: {
            ...mapState({
                tags: state => state.tab.tabsList
            })
        },
        methods: {
            ...mapMutations(['closeTag']),
            changeMenu(item) {
                this.$router.push({name: item.name})
            },
            handleClose(item, index) {
                this.closeTag(item)
                const length = this.tags.length 
                if(item.name !== this.$route.name){
                    return
                }
                if(index === length){
                    this.$router.push({
                        name: this.tags[index - 1].name
                    })
                }
                else{
                    this.$router.push({
                        name: this.tags[index ].name
                    })
                }
            }
        }
    }

</script>


<style>
    .tabs{
        padding-top: 10px;
        padding-left: 20px;
        text-align: left;
    }
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }


</style>