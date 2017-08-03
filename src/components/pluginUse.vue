<template>
  <div class="hello">
    <Tree @selectTreeItem="selectTreeItemHandle"  :treeListData="treeListData"></Tree>
     <Modal modal-title="模态框title" @on-ok="sureHandle" @on-cancel="cancelHandle" v-show="modalState"></Modal> 
     <Modal v-show="modalStateMy"  modal-title="自定义模态框title">
            <ul slot="modal-content">
                <li v-for="(item,index) of list" :key="index">{{item}}</li>
            </ul>
            <div slot="modal-footer">
                <a href="javascript:;" @click="sureHandleMy">确定</a>
            </div>
        </Modal>
        <Pagination :total="100" :display="10" :currentpage="1" @pagechange="pagechange"></Pagination>
        <Pagination :total="50" :display="10" :currentpage="1" @pagechange="pagechangeSecond"></Pagination>
  </div>
</template>

<script>
export default {
  name: 'pluginUse',
  data () {
    return {
      modalState:false,       //默认模态框状态
      modalStateMy:false,    //自定义模态框状态
      list:[1,2,3,4],        //自定义模态框数据列表
      treeListData:[         //tree组件数据
        {
            title:'测试企业37',
            children:[
                {
                    title:'我是二级tree1'
                },
                {
                    title:'我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2我是二级tree2',
                    children:[
                        {
                            title:'我是三级tree2',
                            children:[
                                {
                                    title:'我是四级tree2'
                                },
                                {
                                    title:'我是四级tree2'
                                },
                                {
                                    title:'我是四级tree2'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'我是二级tree3',
                    children:[
                        {
                                title:'我是三级tree3',
                                children:[
                                    {
                                        title:'我是四级tree3',
                                        children:[
                                            {
                                                title:'我是四级tree3'
                                            }
                                        ]
                                    }
                                ]
                        },
                        {
                                title:'我是三级tree3',
                                children:[
                                    {
                                        title:'我是四级tree3',
                                        children:[
                                            {
                                                title:'我是五级tree3'
                                            },
                                            {
                                                title:'我是五级tree3'
                                            },
                                            {
                                                title:'我是五级tree3'
                                            }
                                        ]
                                    }
                                ]
                        },
                        {
                                title:'我是三级tree3',
                                children:[
                                    {
                                        title:'我是四级tree3',
                                        children:[
                                            {
                                                title:'我是五级tree3'
                                            },
                                            {
                                                title:'我是五级tree3'
                                            },
                                            {
                                                title:'我是五级tree3'
                                            }
                                        ]
                                    }
                                ]
                        }
                    ]
                }
            ]
        }
      ]
    }
  },
  methods:{
    selectTreeItemHandle(val){  //tree组件列表点击
        console.log("我被点击了"+val);
    },
    sureHandle(){   //模态框确定
        console.log("点击了确定");
    },
    cancelHandle(){ //模态框点击了取消
        this.modalState = false;
    },
    sureHandleMy(){ //自定义模态框
        console.log("自定义模态框点击了确定");
    },
    pagechange(currentpage){  
        console.log("当前页数为"+currentpage)
    },
    pagechangeSecond(currentpage){
        console.log("当前页数为aaa"+currentpage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
