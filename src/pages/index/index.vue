<template>
  <div id="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/afbe5dfebd62ae4d783262502d79077.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/e575f1c94f62fa7f2d33d80b4200f9a.jpg" alt="">
        </div>

      </div>
    </div>
    <div class="home_content">
       <div class="home_content_top">
         <img src="./images/juhui-1.png" alt="">
         <img src="./images/baokuan.png" alt="">
       </div>
      <div class="home_content_bottom">
        <router-link class="home_content_bottom_left" to="/goods_list">
          <h3>肯德基</h3>
          <span>六折巨献&nbsp;&nbsp;吃顿好的</span>
          <img src="./images/kendeji.png" alt="">
        </router-link>
        <div class="home_content_bottom_right">
          <div class="home_content_bottom_right_top">
            <div class="home_content_bottom_right_top-left">
              <div>COCO都可</div>
              <div>小饮来一杯</div>
            </div>
            <div class="home_content_bottom_right_top-right">
              <img src="./images/coco.png" alt="">
            </div>

          </div>
          <div class="home_content_bottom_right_top">
            <div class="home_content_bottom_right_top-left">
              <div>COCO都可</div>
              <div>小饮来一杯</div>
            </div>
            <div class="home_content_bottom_right_top-right">
              <img src="./images/coco.png" alt="">
            </div>

          </div>
        </div>
      </div>
      <div class="home_content_bottom">
        <div class="home_content_bottom_left">
          <h3>肯德基</h3>
          <span>六折巨献&nbsp;&nbsp;吃顿好的</span>
          <img src="./images/kendeji.png" alt="">
        </div>
        <div class="home_content_bottom_right">
          <div class="home_content_bottom_right_top">
            <div class="home_content_bottom_right_top-left">
              <div>COCO都可</div>
              <div>小饮来一杯</div>
            </div>
            <div class="home_content_bottom_right_top-right">
              <img src="./images/coco.png" alt="">
            </div>

          </div>
          <div class="home_content_bottom_right_top">
            <div class="home_content_bottom_right_top-left">
              <div>COCO都可</div>
              <div>小饮来一杯</div>
            </div>
            <div class="home_content_bottom_right_top-right">
              <img src="./images/coco.png" alt="">
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="home_bottom">
      <img src="./images/bottom-.png" alt="">
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/css/swiper.css'
  export default {
    data () {
      return {
        delayTime: 3000
      }
    },
    mounted () {
      this._initSwiper()
    },
    methods: {
      _initSwiper () {
        new Swiper('.swiper-container', {
          autoplay: {
            delay: this.delayTime,
            disableOnInteraction: false
          },
          loop: true,
          observer: true,
          observeParents: true
        })
      }
    }
  }
</script>

<style>
  .swiper-container .swiper-wrapper .swiper-slide img{
    width: 100%;
  }
  .home_content{
    width:90%;
    border-radius: 8px;
    background: white;
    margin:0 auto;
    overflow: hidden;
    position: relative;
    top:-20px;
    left:0;
    z-index: 999;
  }
  .home_content .home_content_top img:first-child{
    width:22%;
    border-right:1px solid #999;
    padding-right: 5%;

  }
  .home_content .home_content_top {
    margin:8px
  }
  .home_content .home_content_top img:last-child{
    width:65%;
    padding-left: 5%;
  }
  .home_content_bottom{
    background-image:url('./images/home-content-back-ground-1.png');
    background-repeat:no-repeat;
    background-size: 100% 100%;
    display: flex;
    height: 200px;
  }
  .home_content_bottom_left{
    overflow: hidden;
    width:45%;
    height:100%;
    flex:1;
  }
  .home_content_bottom_left h3{
    font-weight: 900;
    font-size: 16px;
    padding:15% 0 5% 5%;
  }
  .home_content_bottom_left span{
    font-size: 12px;
    padding:0 0 5% 5%;
  }
  .home_content_bottom_left img{
    width: 90%;
    padding:10% 0 5% 10%;
  }
  .home_content_bottom_right{
    flex: 1;
  }
  .home_content_bottom_right_top{
    display: flex;
    height: 100px;
    align-items:center;
    justify-content: center;
  }
  .home_content_bottom_right_top-left{

  }
  .home_content_bottom_right_top-left div:first-child{
    color:orange;
    font-weight: 900;
    font-size: 12px;
    padding:5px 0 10px 15px;
    flex: 1;

  }
  .home_content_bottom_right_top-left div:last-child{
    font-size: 12px;
    padding:5px 0 10px 15px;
  }
  .home_content_bottom_right_top-right{
    flex: 1;
    overflow: hidden;
  }
  .home_content_bottom_right_top-right img{
    width: 80%;
  }
  .home_bottom{
    padding-bottom:80px;
    margin:0 auto;
    width:90%;
    overflow: hidden;
  }
  .home_bottom img{
    width:100%;
  }
</style>
