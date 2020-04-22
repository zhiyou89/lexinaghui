<template>
  <div>

    <div v-if="!showAlert">
      <div id="goods_detail">
        <div class="top">
          <div class="goods_img">
            <img src="./images/goods_img.png" alt="">
          </div>
          <div class="goods_price">
            <p class="title">搜狐视频-一天卡</p>
            <p>活动获得</p>
            <p>￥0.60</p>
            <p><del>市场价￥12</del></p>
            <p class="last">已成交554单&nbsp;&nbsp;在售6662个</p>
          </div>
          <div class="customer_service">
            <img src="./images/custimer_servic.png" alt="">
            <p>客服</p>
          </div>
        </div>
        <div class="middle">
          <p class="middle_title">温馨提示</p>
          <p>1.&nbsp; 限一小时内充值，当天买当天用，尽快充值</p>
          <p>2.&nbsp; 非券码质量问题，拒绝退款</p>
          <p class="bottom_title middle_title">商品详情</p>
          <p>1.&nbsp;价值搜狐视频天卡一张</p>
          <p>2.&nbsp;官网兑换激活码激活</p>
        </div>
        <div class="bottom">
          <div class="heji">
            合计：40
          </div>
          <div class="count">
            <i class="jian iconfont icon-jian" @click="add(-1)"></i>
            <span class="con">{{count}}</span>
            <i class="jia iconfont icon-jia" @click="add(1)"></i>
          </div>
          <div class="goumai" @click="shopping">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <alert @close="close" v-if="showAlert"></alert>

  </div>
</template>

<script>
  import Alert from '../../components/alert/alert.vue'
  import '../../assets/fontes/iconfont_goods_detail.css'
  export default {
    data () {
      return {
        showAlert: false,
        count: 1,
        showIconJian: false
      }
    },
    components: {
      Alert
    },
    methods: {
      add (a) {
        this.count = this.count + a
        if (this.count < 2) {
          this.count = 1
        }
      },
      close (val) {
        this.showAlert = val
      },
      shopping () {
        this.showAlert = true
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
#goods_detail
  .top
    display flex
    padding 20px 0
    border-bottom 1px solid #999
    .goods_img
      flex 3
      text-align center
      img
        width 80%
    .goods_price
      flex 5
      font-size 13px
      p
        padding-bottom  10px
        &.title
          font-size 16px
          font-weight bold
        &.last
          color #999
    .customer_service
      flex 1
      img
        width 100%
      p
        text-align center
  .middle
    padding 10px 0 10px 20px
    p
      padding 8px 0
      font-size 12px
      &.middle_title
        font-size 16px
        color orangered
        font-weight bold
      &.bottom_title
        color black
        padding-top 30px
  .bottom
    position fixed
    left 0
    bottom 0
    background rgb(246, 248, 254)
    width 100%
    height 40px
    display flex
    line-height 40px
    overflow hidden
    font-size 14px
    .heji
      flex 5
      text-align center
    .count
      flex 4
      text-align center
      .myicon
        padding 1px 3px
        border 1px solid green
    .goumai
      flex 3
      background orangered
      text-align center
</style>
