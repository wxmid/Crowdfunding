<template>
  <div id="app">
    <transition name="fade">
      <img v-if="show" class="startPic" src="/static/img/start.jpg">
    </transition>
    <div v-if="!show" class="main-content">
      <header>
        <span class="head-pic"><img src="/static/img/headpic4.jpg" alt=""></span>
        <div class="head-title"><span>{{title}}</span></div>
      </header>
      <main>
        <div class="containt-search">
        <span><i class="icon iconfont">&#xe6ac</i></span><input type="text" placeholder="搜索你感兴趣的新鲜事">
        </div>
        <homePage></homePage>
      </main>
    </div>
    <footer v-if="!show">
      <!--<div class="footer">-->
        <a v-bind:class="{tabbarActive:isActived[0]}" @click="triggerTabbar(0)">
           <i class="icon iconfont">&#xe7da</i>
          <span>发现</span>
        </a>
        <a v-bind:class="{tabbarActive:isActived[1] }" @click="triggerTabbar(1)">
           <i style="font-size: 46px !important;line-height: 46px;" class="icon iconfont">&#xe7dd;</i>
          <!--<span>+</span>-->
        </a>
        <a v-bind:class="{tabbarActive:isActived[2]}" @click="triggerTabbar(2)">
           <i class="icon iconfont">&#xe78b;</i>
          <span>我的</span>
        </a>
      <!--</div>-->
    </footer>
    <releaseModel
            :isReleasemodel="isRelease"
            @closeSignal="closeReleaseModel"
    >

    </releaseModel>

  </div>
</template>

<script>
  import homePage from './component/homePage.vue'
  import mysecond from './component/releaseModel.vue'
  import releaseModel from './component/releaseModel.vue'
export default {
  name: 'app',
  data () {
    return {
        show:true,
        title:'发现',
        isActived:[true,false,false],
        isRelease:false,
    }
  },
    components:{
        homePage,
        releaseModel
    },
    created () {
      var self = this;
          showStartPic:{
              setTimeout(function () {
                  self.show = false;
              },800)
          }
    },
    methods:{
      triggerTabbar (index) {
          this.isActived = [false,false,false];
          this.isActived[index] = true;
          if(index == 1) {
              this.isRelease = true;
          } else {
              this.isRelease = false;
          }
      },
        closeReleaseModel () {
          this.isRelease = false;
        }
    }
}
</script>

<style>
  html,body,#app,.main-content,.release-model {
    height:100%;
    max-width:480px;
    margin:0 auto;
  }
  body {
    padding:0;
    margin:0;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
  .clearfix :before , .clearfix :after {
    content : "";
    display : table;
  }
  .clearfix :after {
    clear : both;
  }
  .clearfix {
    *zoom : 1;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  /*max-width: 480px;*/
  /*margin: 0 auto;*/
  position: relative;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #919191;
  text-decoration:none!important;
}
.startPic {
  width: 100%;
  min-height: 100vh;
}
  /*fade显隐*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
  /*flex布局*/
header,footer,.release {
  position: fixed;
  width: 100%;
  max-width:480px;
  margin:0 auto;
}
header {
  height: 55px;
  border-bottom:1px solid #ccc;
  box-shadow: 0px 1px 1px #808080;
  top:0;
  background: #fff;
  z-index:2;
}
main {
   background: #eef1f6;
  margin-bottom: 43px;
}
.main-content {
  margin-top: 55px;
  background: #eef1f6;
}
footer {
  display: flex;
  margin-top: -54px;
  height: 54px;
  border-top: 1px solid #ccc;
  flex-direction:row;
  align-content:space-between;
  flex-wrap: wrap;
  justify-content:space-around;
  background: #fff;
  bottom:0;
}
footer a {
    display: inline-block;
    height: 46px;
    width: 33.333%;
    padding:4px 0;
  }
  footer a i {
    font-size: 26px !important;
    display: inline-block;
    line-height: 26px;
  }
  footer a span {
    display: block;
  }
  .head-pic {
    float: left;
    margin-left: 15px;
    margin-top: 5px;
  }
.head-pic img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }
  .head-title {
    height:100%;
  }
  .head-title span {
    font-size: 20px;
    line-height:55px;
    margin-left:-59px;
  }
  .containt-search {
    background: #dcdcdc;
    height: 48px;
    line-height: 48px;
    padding: 0 10px 2px 10px;
    box-shadow: 0px 1px 3px #808080;
  }
  .containt-search span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background: #fff;
    width: 12%;
    vertical-align:middle;
    margin-right: -1px;
    border-radius: 6px 0 0 6px;
  }
  .containt-search span i {
    font-size:22px;
  }
  .containt-search input {
    height: 30px;
    border:none;
    width: 88%;
    outline:none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    vertical-align:middle;
    border-radius: 0 6px 6px 0;
  }
  .tabbarActive {
    color: #42b983;
    /*color: #00b0f0;*/
  }
</style>
