<template>
<div class="goods_list">
  <div class="goods_list_left">
    <img src="./images/kej.jpg" alt="" class="kendiji">
  </div>
  <div class="goods_list_middle">
    <div class="title">肯德基-香脆鸡腿堡</div>
    <div class="way">浦发银行活动获得</div>
    <div class="detail">已成交556单 <span>在售118</span></div>
  </div>
  <div class="goods_list_right">
    <p class="price">￥12.5</p>
    <p class="market_price"><del>市场价18</del></p>
    <div class="button" @click="goTo">
      <span>
              购买
      </span>

    </div>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
      goTo () {
        this.$router.push('/goods_detail')
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
.goods_list
  display flex
  /*align-items center*/
  width 100%
  padding 10px 0 10px 15px
  border-bottom 1px solid #999
  .goods_list_left
   flex 1
   img
    width 90%
    border-radius 45%
  .goods_list_middle
   flex 3
   align-self center
   margin-left 15px
   letter-spacing:1px;
   .title
    font-size 13px
    font-weight 800
   .way
    font-size 9px
    font-weight 600
    padding:8px 0
   .detail
    font-size 9px
    color #999
    span
     color black
  .goods_list_right
   flex 1
   align-self center
   .price
    color orangered
    font-size 13px
   .market_price
    color #999
    font-size 10px
    padding 6px 0
   .button
     span
      padding:3px 8px
      background orangered
      font-size 10px
      border-radius 3px
      color white
</style>
