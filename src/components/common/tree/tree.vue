<template>
    <div class="tree">
        <ul id="browser" class="treeview">
             <tree-list :treeListData="treeListData"  @selectTreeItem="selectTreeItemHandle"></tree-list>  
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import '@/assets/css/jquery.treeview.scss';
Vue.component('tree-list',{
    name:'treelist',
    props:{
        treeListData:{
            type:Array,
            default:[]
        }
    },
    methods:{
        selectSpanHandle(obj,item){
            var target = $(obj.target);
            $('.treeview').find('span').removeClass('on');
            if(!target.find('b').hasClass('folderNo')){       //文件夹有子文件夹的时候  
            $('.treeview').find('.folderNoPen').removeClass('folderNoPen').addClass('folderNo');      //没有子文件夹的文件夹合上          
                if(target.find('b').hasClass('folder')){      //合上
                    target.find('b').removeClass('folder').addClass('folderClose');
                    target.siblings('ul').hide();                
                    target.addClass('on');
                }else{  //展开
                    target.find('b').removeClass('folderClose').addClass('folder');
                    target.siblings('ul').show();
                    target.removeClass('on');
                }
            }else{  //文件夹没有子文件夹的时候     
                if(target.find('b').hasClass('folderNo')){      //展开
                    $('.treeview').find('.folderNoPen').removeClass('folderNoPen').addClass('folderNo');
                    $('.treeview').find('span').removeClass('on');
                    target.find('b').removeClass('folderNo').addClass('folderNoPen');
                    target.addClass('on');                    
                }
            }  
            this.$emit("selectTreeItem",item.title);      
        },
        selectTreeItemHandle(val){
            this.$emit("selectTreeItem",val);
        }
    },
    template:`
        <ul>
            <li v-for="(item,index) in treeListData" :key="index" :class="[(treeListData.length-1) === index ? 'lastCollapsable':'']">
                <span @click="selectSpanHandle($event,item)"><b :class="[item.children ? 'folder' : 'folderNo']"></b>{{item.title}} </span>
                <tree-list :treeListData="item.children" v-if='item.children' @selectTreeItem="selectTreeItemHandle"></tree-list>
            </li>
        </ul>
    `
});
export default {
    name: 'tree',
    data () {
        return {
            
        }
    },
    props:{
        treeListData:{
            type:Array,
            default:[]
        }
    },
    methods:{
        selectTreeItemHandle(val){
            this.$emit("selectTreeItem",val);
        }
    },
    mounted(){
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
