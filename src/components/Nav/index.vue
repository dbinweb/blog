<template>
    <div id="nav">
        <div class="nav-container">
            <div class="logo">
            </div>
            <div class="login">
                <el-button type="primary" size="mini">登录</el-button>
                <el-button type="success" size="mini">注册</el-button>
            </div>
            <div class="tab">
                <ul :class="'list'+whichActive">
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/article">文章</router-link></li>
                    <li><router-link to="/message">留言</router-link></li>
                    <li><router-link to="/diary">生活</router-link></li>
                    <li><router-link to="/link">友链</router-link></li>
                    <li><router-link to="/about">关于</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        data(){
            return{
                // 导航栏路由设置
                routerList:['Home','Article','Message','Diary','Link','About']
            }
        },
        computed:{
            // 获取当前是哪个router-link 返回对应索引 用来设置样式
            whichActive(){
                let index=this.routerList.indexOf(this.$route.name)+1
                // return this.routerList.findIndex((v)=>v==this.$route.name)+1
                return index
            }
        }
    }
</script>

<style lang="less" scoped>
#nav{
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 60px;
    background-color: #fff;

    .nav-container{
        width: 100%;
        max-width: 1240px;
        height: 100%;
        padding: 0 50px;
        box-sizing: border-box;
        /*background-color: red;*/
        margin: 0 auto;

        .logo{
            float: left;
            width: 110px;
            height: 60px;
            background: url("../../assets/img/logo.jpg") center top/cover ;
        }
        .login{
            float: right;
            height: 60px;
            line-height: 60px;
        }
        .tab{
            margin-left: 3%;
            float: left;
            width: 576px;
            height: 60px;

            ul{
                display: flex;
                li{
                    flex: 1;

                    a{
                        position: relative;
                        display: block;
                        width: 100%;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                        font-weight: bold;
                        color: #000;
                        transition:color .5s;
                        &:hover{
                            color: #409EFF;

                            &::after{
                                width: 100%;
                            }
                        }


                        &::after{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin: 0 auto;
                            transition:width .5s;
                            content: '';
                            width: 0;
                            height: 2px;
                            background-color: #409EFF;
                        }

                    }
                }

                &.list1 li:nth-child(1),
                &.list2 li:nth-child(2),
                &.list3 li:nth-child(3),
                &.list4 li:nth-child(4),
                &.list5 li:nth-child(5),
                &.list6 li:nth-child(6){
                    a{
                        color: #409EFF;
                        &::after{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

}


</style>