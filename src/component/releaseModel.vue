<template>
  <div id="releaseModel">
    <transition name="bounceUp">
      <div v-if="isReleasemodel" class="release-model" @click="closedReleaseMode">

        <div class="release-discrib">
          <div class="date-stress">
            <span class="date-day">19</span>
            <span class="date-week">
              <em>星期三</em>
              <em>04/217</em>
            </span>
            <p>夏威夷科曼群岛：多云 21℃</p>
          </div>
          <h1 class="discrib-content">乐在分享 、乐在沟通！</h1>
          <h2 class="discrib-footer">你 我</h2>
        </div>

        <div class="release">
          <div class="release-pattern">
            <div class="created" @click="shareText">
              <a>
                <i class="icon iconfont">&#xe681</i>
              </a>
              <span class="release-pattern-text">文字</span>
            </div>
            <div class="camera" @click="shareShootingPicture">
              <a>
                <i class="icon iconfont">&#xe620;</i>
              </a>
              <span class="release-pattern-text">拍摄</span>
            </div>
            <div class="picture" @click="sharePicture">
              <a>
                <i class="icon iconfont">&#xe670</i>
              </a>
              <span class="release-pattern-text">相册</span>
            </div>
          </div>
          <div class="release-close">
            <a><i class="icon iconfont">&#xe7dc;</i></a>
          </div>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'releaseModel',
    props:{
        isReleasemodel:{
            type:Boolean,
            default: false
        },
        bounceAnimate: {
            type:String
        }
    },
  methods:{
      closedReleaseMode (event) {
          this.$emit('closeSignal',{})
      },
      shareText (event) {
          event.stopPropagation();
      },
      sharePicture (event) {
          event.stopPropagation();
      },
      shareShootingPicture (event) {
          event.stopPropagation();
      }
  }
}
</script>

<style>
  .release-model {
    width:100%;
    height: 100%;
    position: fixed;
    bottom:0;
    background: #eaeaea;
    z-index:3;
  }
  .discrib-content,.discrib-footer {
    font-style: italic;
    font-size: 30px;
    font-weight:bold;
    color: #6fe2e8;
  }
  .discrib-footer {
    text-align: right;
    padding-right: 60px;
  }
  .discrib-content {
    margin:60px 0 20px 0;
  }
  .release {
    bottom: 0;
    width:100%;
    background: #fff;
    margin-bottom:0;
  }
  .release-pattern {
    display: flex;
    padding-top: 12px;

  }
  .release-close {
    height: 85px;
  }
  .release a {
    display: inline-block;
    width: 80px;
    height: 80px;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    text-align: center;
    line-height: 80px;
    margin: 0 auto;
  }
  .created,.picture,.camera {
    display: inline-block;
    width: 33.333%;
    height: 100%;
  }
  .created a {
    color: #ffffff;
    background: #ff83d3;
  }
  .picture a {
    color: #ffffff;
    background: #ffc438;
  }
  .camera a {
    color: #ffffff;
    background: #2effb1;
  }
  .release a i {
    font-size: 40px;
  }
  .release-close a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-top: 40px;
  }
  .release-close a i {
    font-size: 30px;
  }
  .release-pattern-text {
    display: block;
    margin-top: 10px;
    color: #3f3f3f;
  }
.date-stress {
  padding: 16px 0;
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
}
.date-day {
  display: inline-block;
  font-size: 54px;
}
.date-week {
  display: inline-block;
  width: 70px;
}
.date-week em {
  display: block;
  padding:4px 6px;
}
</style>