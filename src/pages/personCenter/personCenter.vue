<template>
<div id = 'person_center'>
  <div class="bg">
    <img src="./images/bg.jpg" alt="">
  </div>
  <div class="shop">
    <p class="title">我要买单</p>
    <div class="shop_list">
      <div class="shop_list_a">
        <div class="iconfont_box">
          <i class="iconfont icon-daishiyong"></i>
        </div>
        <p>待支付</p>
      </div>
      <div class="shop_list_a">
        <div class="iconfont_box">
          <i class="iconfont icon-daishiyong"></i>
        </div>
        <p>待使用</p>
      </div>
      <div class="shop_list_a">
        <div class="iconfont_box">
          <i class="iconfont icon-lishidingdan"></i>
        </div>
        <p>历史订单</p>
      </div>
    </div>
  </div>
  <div class="link_img">
    <img src="./images/1570695543(1).png" alt="">
  </div>
  <div class="server_list">
      <p class="server_title">我的服务</p>
      <div class="server_list_box">
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-shouhou"></i>
          </div>
          <p>售后订单</p>
        </div>
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-wodedikouquan"></i>
          </div>
          <p>抵扣红包</p>
        </div>
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-bangzhu"></i>
          </div>
          <p>帮助中心</p>
        </div>
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-kefu"></i>
          </div>
          <p>联系客服</p>
        </div>
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-guanyuwomen"></i>
          </div>
          <p>关于我们</p>
        </div>
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-xieyimoban"></i>
          </div>
          <p>买家协议</p>
        </div>
        <div class="server_list_a">
          <div class="iconfont_box">
            <i class="iconfont icon-jifen"></i>
          </div>
          <p>积分中心</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
  import '../../assets/fontes/iconfont_shop.css'
  import '../../assets/fontes/iconfont_server.css'
  export default {}
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  #person_center
    .bg
      height 200px
      overflow hidden
      img
        width 100%
    .shop
      width 90%
      height 150px
      border-radius 5px
      margin 0 auto
      position absolute
      top 80px
      left 5%
      background white
      box-shadow #999 -10px 10px 30px -20px
      .title
        font-weight bold
        font-size 16px
        padding 20px 0 20px 15px
      .shop_list
        display flex
        .shop_list_a
          flex 1
          text-align center
          .iconfont_box
            .iconfont
              font-size 30px
              color orange
          p
            color #999
            padding 10px 0
            font-size 14px
    .link_img
      text-align center
      img
        width 80%
        padding-top 50px
    .server_list
      background white
      border-radius 5px
      width 90%
      margin 0 auto
      margin-top 20px
      .server_title
        font-weight bold
        font-size 16px
        padding 20px 0 20px 15px
      .server_list_box
        display flex
        flex-wrap wrap
        .server_list_a
          width 25%
          text-align center
          padding 10px 0
          .iconfont_box
            .iconfont
              font-size 30px
              color orange
          p
            color #999
            padding 10px 0
            font-size 14px
            white-space nowrap
</style>
