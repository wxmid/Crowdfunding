<template>
  <div id="home" class="container">
    <ul class="ul-note-list">
      <li class="li-note-list">

        <div class="list-head">
          <div class="list-head-img"><img src="/static/img/headpic1.jpg" alt="图片丢了"></div>
          <div class="list-head-info">
            <p>DC大叔</p>
            <small>今天&nbsp;&nbsp;6:37</small>
          </div>
        </div>

        <div class="list-body">
          <div class="list-body-content">
            这是一场逃离的旅行，没有计划，只在一念之间。
            生活里，有太多的无奈与彷徨，当每次这些那些事事绯绯弄得焦头烂额的时候，当被日子里的零零碎碎所困扰的时候，就开始按奈不住自己的内心，就想着要逃离现实。
            清明小长假出走并不是我的本意，但那一刻，我只想要逃离，无论地点，无论时间。有时候，生活需要一场小小的“出走”，来改变原有的单调。
            提前在“网”预定好第一晚在岛上的酒店，随后行程都由心而定。
          </div>

          <div class="list-body-img">
            <img src="/static/img/scenery.gif" alt="">
          </div>

        </div>

        <div class="list-comment">
          <a>
            <i class="icon iconfont">&#xe6eb;</i>
            <em>69</em>
          </a>
          <a>
            <i class="icon iconfont">&#xe69b;</i>
            <em>164</em>
          </a>
          <a>
            <i class="icon iconfont">&#xe717;</i>
            <em>972</em>
          </a>
        </div>
      </li>
      <li class="li-note-list">

        <div class="list-head">
          <div class="list-head-img"><img src="/static/img/headpic3.jpg" alt="图片丢了"></div>
          <div class="list-head-info">
            <p>控心丶Crazy°つ</p>
            <small>昨天&nbsp;&nbsp;22:07</small>
          </div>
        </div>

        <div class="list-body">
          <div class="list-body-content">
            这是一场逃离的旅行
          </div>

          <div class="list-body-img">
            <img src="/static/img/scenery2.jpg" alt="">
          </div>

        </div>

        <div class="list-comment">
          <a>
            <i class="icon iconfont">&#xe6eb;</i>
            <em>69</em>
          </a>
          <a>
            <i class="icon iconfont">&#xe69b;</i>
            <em>164</em>
          </a>
          <a>
            <i class="icon iconfont">&#xe717;</i>
            <em>972</em>
          </a>
        </div>
      </li>
      <li class="li-note-list">

        <div class="list-head">
          <div class="list-head-img"><img src="/static/img/headpic2.jpg" alt="图片丢了"></div>
          <div class="list-head-info">
            <p>Autism゛陌亡</p>
            <small>昨天&nbsp;&nbsp;22:07</small>
          </div>
        </div>

        <div class="list-body">
          <div class="list-body-content">
            这是一场逃离的旅行
          </div>

          <div class="list-body-img">
            <img src="/static/img/scenery3.jpg" alt="">
          </div>

        </div>

        <div class="list-comment">
          <a>
            <i class="icon iconfont">&#xe828;</i>
            <em>69</em>
          </a>
          <a>
            <i class="icon iconfont">&#xe69b;</i>
            <em>164</em>
          </a>
          <a>
            <i class="icon iconfont">&#xe717;</i>
            <em>972</em>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
  #home {
    width:100%;
    height:100%;
    display: flex;
    display: -webkit-flex;
    flex-direction:column;
    /*margin-top: 1px;*/
  }
.ul-note-list {
  /*padding:0 10px;*/
}
.li-note-list {
  padding:0 10px;
  display: block;
  margin:0 0 12px 0;
  padding-top: 10px;
  border-top:1px solid #dcdcdc;
  border-bottom:1px solid #dcdcdc;
  background: #fff!important;
}
.list-head {
  height: 49px;
}
.list-head-img {
  float: left;
}
.list-head-img  img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
.list-head-info {
  float: left;
  margin-left: 15px;
}
.list-head-info p {
  font-size:16px;
  font-weight:bold;
}
.list-head-info samll {
  display: inline-block;
}
.list-body {
  text-align: left;
}

.list-body-content {
  margin:5px 0 10px 0;
  letter-spacing: 2px;
  max-height: 106px;
  line-height: 20px;
  /*-webkit多行文字超出显示省略号*/
/*
  display: -webkit-box;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp:5;
  -webkit-box-orient:vertical;
*/
}
  /*多行文字超出显示省略号兼容写法s*/

  .list-body-content{
    max-height:98px;
    position: relative;
    line-height: 20px;
    overflow: hidden;
    display:block;
  }

  .list-body-content:after{
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding:0 17px 1px 0px;
    width:27px;
    height:20px;
    background-color: #ffffff;
    padding-left: 4px;
    font-size: 22px;
  }
  /*多行文字超出显示省略号兼容写法e*/
.list-body-img {
  max-height: 240px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.list-body-img img {
  width: 100%;
  /*max-height: 80px;*/
}
.list-comment {
  border-top:1px solid #dcdcdc;
  margin-top: 15px;
  display: flex;
  flex-direction:row;
  justify-content:center;
}
  .list-comment a {
    width:33.333%;
    line-height: 34px;
    color: #919191;
  }
</style>