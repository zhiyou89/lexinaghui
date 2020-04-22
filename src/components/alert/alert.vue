<template>
  <div class="alert_box" @click="tapClose">
    <div id="alert" @click.stop="tapClose1">
      <div class="box">
        <p class="title">购买须知</p>
        <p class="content">请认真阅读商品使用规则，不是码券质量问题，不接受纠纷</p>
        <div class="xieyi">
          <div class="radio">
            <input type="checkbox" value="1" v-model="inputVal">
          </div>
          <p :class="{active_submit: active_submit}">我一认真阅读，并同意协议</p>
        </div>
        <div class="button_box">
          <div class="button" @click="mySubmit">
            <input type="button" value="接受">
          </div>
          <div class="button" @click="tapClose">
            <input type="button" value="取消">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputVal: true,
        active_submit: false
      }
    },
    props: {
    },
    methods: {
      tapClose () {
        this.$emit("close", false)
      },
      tapClose1 () {
        this.$emit("close", true)
      },
      mySubmit () {
        if (!this.inputVal) {
          this.active_submit = true
          return false
        } else {
          this.$emit("close", false)
          this.$router.push('/index')
        }
      }
    }

  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
.alert_box
  width 100%
  height 100vh
  background #999
  #alert
    z-index 999
    width 70%
    height 25%
    margin-left 15%
    position absolute
    top 35%
    background white
    font-size 14px
    line-height 20px
    .box
      margin 0 15px
      .title
        font-size 16px
        font-weight bold
        padding 20px 0 10px 0
      .content
        font-size 14px
        padding-bottom 10px
      .xieyi
        display flex
        .active_submit
          color red
    .button_box
      padding 20px 0
      display flex
      .button
        flex 1
        text-align center
        input
          font-size 10px
          padding 5px 12px
          background orangered
          border-radius 5px
          outline none
</style>
