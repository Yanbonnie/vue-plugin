<template>
    <div class="modal-box">
        <div class="modal">
            <div class="modal-header">
                <h4>{{modalTitle}}</h4>
            </div>
            <div class="modal-content">
                <div>
                    <slot name="modal-content">在这里添加内容</slot>
                </div>
            </div>
            <div class="modal-footer">
                <slot name="modal-footer">
                    <input class="btn blue" type="button" value="确定" @click="okHandle" />
                    <input class="btn" type="button" value="取消" @click="cancelHandle" />
                </slot>                
            </div>
        </div>
    </div>
</template>

<script>
/*
    设置的props：
        modalTitle 提醒信息 默认为 '这是一个模态框'

    定制模板：
        slot为modal-content  定制提醒信息模板
        slot为modal-footer   定制底部模板

    监控子组件状态变化：
        事件名on-ok        点击确定触发
        事件名on-cancel   点击取消触发
*/
export default {
    name: 'tree',
    data () {
        return {
            
        }
    },
    props:{
        modalTitle:{
            type:String,
            default:'这是一个模态框'
        }
    },
    methods:{
        okHandle(){
            //通知父组件 点了确定
            this.$emit("on-ok");
        },
        cancelHandle(){
            this.$emit('on-cancel')
        }
    },
    mounted(){
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
        .modal-box{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
        p,h4{
            margin:0;
        }
        .modal{
            width: 500px;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 6px;
            box-shadow: 0 3px 9px rgba(0,0,0,.5);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
        }
        .modal-header {
            padding: 15px;
            border-bottom: 1px solid #e5e5e5;
        }
        .modal-content div {
            padding: 20px;
        }
        .modal-footer {
            padding: 15px;
            text-align: right;
            border-top: 1px solid #e5e5e5;
        }
        .btn {
            padding: 5px 15px;
            border: none;
            outline: none;
        }
        .blue {
            color: #fff;
            background-color: #39f;
            border-color: #39f;
        }
</style>
