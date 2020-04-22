<template>
<div id="list">
 <router-link tag="div" to="/search" class="list_top">
   <img src="./images/search-1.jpg" alt="">
 </router-link>
  <div class="list_content">
    <div class="left">
      <ul>
        <li :class="{active: isActive === 1}" @click="isActiveFuntion(1)">
          <div>
            <i class="iconfont icon-icon"></i>
          </div>
          <div>
            热销
          </div>
        </li>
        <li :class="{active: isActive === 2}" @click="isActiveFuntion(2)">
          <div>
            <i class="iconfont icon-yinpin"></i>
          </div>
          <div>
            饮品券
          </div>
        </li>
        <li :class="{active: isActive === 3}"  @click="isActiveFuntion(3)">
          <div>
            <i class="iconfont icon-meishi" ></i>
          </div>
          <div>
            美食券
          </div>
        </li>
        <li :class="{active: isActive === 4}" @click="isActiveFuntion(4)">
          <div>
            <i class="iconfont icon-gouwu"></i>
          </div>
          <div>
            购物券
          </div>
        </li>
        <li :class="{active: isActive === 5}" @click="isActiveFuntion(5)">
          <div>
            <i class="iconfont icon-shipin"></i>
          </div>
          <div>
            视频券
          </div>
        </li>
        <li :class="{active: isActive === 6}" @click="isActiveFuntion(6)">
          <div>
            <i class="iconfont icon-chuchalvyouchuxing"></i>
          </div>
          <div>
            出行券
          </div>
        </li>
        <li :class="{active: isActive === 7}" @click="isActiveFuntion(7)">
          <div>
            <i class="iconfont icon-tongxun"></i>
          </div>
          <div>
            通讯券
          </div>
        </li>
        <li :class="{active: isActive === 8}" @click="isActiveFuntion(8)">
          <div>
            <i class="iconfont icon-guanyingqia"></i>
          </div>
          <div>
            观影券
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
     <div class="title">
       <p class="frist_p">综合排序</p>
       <div class="sales">
         <div>销量</div>
         <div class="icon">
           <div class="icon_up">
             <i class="iconfont icon-xiaosanjiaoup"></i>
           </div>
           <div class="icon_down">
             <i class="iconfont icon-xiaosanjiaodown"></i>
           </div>
         </div>
       </div>
       <p class="last_p">筛选商家</p>
     </div>
      <div class="right_bottom">
        <div class="content_list">
          <goods-list></goods-list>
          <goods-list></goods-list>
          <goods-list></goods-list>
          <goods-list></goods-list>
          <goods-list></goods-list>
          <goods-list></goods-list>
          <goods-list></goods-list>

        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  import '../../assets/fontes/iconfont_list.css'
  import '../../assets/fontes/iconfont_up_down.css'
  import GoodsList from '../../components/goodsList/goodsList.vue'
  export default {
    data () {
      return {
        isActive: 1
      }
    },
    components: {
      GoodsList
    },
    methods: {
      isActiveFuntion (lis) {
        this.isActive = lis
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
#list
  .list_top
    text-align center
    img
      width 90%
  .list_content
    margin 10px 0
    display flex
    .left
      flex 1
      text-align center
      font-size 12px
      ul
        border 1px solid #999
        border-left none
        border-bottom none
        li
          padding 15px 0
          border-bottom 1px solid #999
          &.active
            color orangered
    .right
      flex 4
      height 500px
      .title
        font-size 12px
        display flex
        align-items center
        .frist_p
          flex 1.5
          padding-left 6%
        .sales
          flex 2.5
          display flex
          align-items center
          .icon
            .iconfont
              font-size 8px
        .last_p
          flex 1
      .right_bottom
        .content_list
          margin-left 10px
</style>
