<template>
  <div id="list">
    <div class="search_box">
      <div class="search">
        <input type="text" v-model="searchDate">
      </div>
      <div class="search_text" v-if="showSearchTip">
        <div>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <p class="text">
          &nbsp;&nbsp;请输入商品名称/银行等
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showSearchTip: true,
        searchDate: ''
      }
    },
    computed: {

    },
    watch: {
      searchDate () {
        const searchDate = this.searchDate.trim()
        if (searchDate) {
          this.showSearchTip = false
        } else {
          this.showSearchTip = true
        }
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  #list
    width 100%
    margin 5px 0
    .search_box
      position relative
      .search
        text-align center
        input
          width:90%
          background #999
          height 25px
          border none
          outline none
      .search_text
        display flex
        position absolute
        left 20%
        top 5px
        font-size 10px
        p
          line-height 16px
</style>
