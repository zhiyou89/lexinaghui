<template>
<div id="search">
  <search></search>
  <div class="friend_notice">
    <div class="title">
      热门搜索
    </div>
    <div class="list_title">
        <div>
          哈根达斯
        </div>
      <div>
        哈根达斯
      </div>
      <div>
        哈根达斯
      </div>
      <div>
        哈根达斯
      </div>
      <div>
        哈根达斯
      </div>
      <div>
        哈根达斯
      </div>
      <div>
        哈根达斯
      </div>
    </div>
  </div>
  <div class="content_list">
    <div class="content_list_title">
      <p>历史记录</p>
      <img src="./images/del-1.jpg" alt="">
    </div>
    <div>
      <div class="content_list_data">
        <img src="./images/icon.png" alt="">
        <p>kegn</p>
      </div>
      <div class="content_list_data">
        <img src="./images/icon.png" alt="">
        <p>kegn</p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  import Search from '../../components/search/search.vue'
  export default {
    components: {
      Search
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
#search

  .friend_notice
    margin 20px 0 0 20px
    .title
      font-weight bold
      font-size 16px
    .list_title
      display flex
      flex-wrap wrap
      div
        white-space nowrap
        padding 10px 10px
        border 1px solid #666
        border-radius 14px
        margin 20px 10px 0 0
        font-size 12px
  .content_list
    .content_list_title
      display flex
      height 25px
      margin 20px 0 10px 20px
      img
        flex 1
        width 60%
        overflow hidden
      p
        flex 9
        font-size 16px
        font-weight bold
        line-height 25px
    .content_list_data
      height 25px
      margin-left 25px
      display flex
      p
        line-height 25px
        padding-left 10px
</style>
