<template>
  <section class="list">
    <Search></Search>
    <section class="main">
      <NavList></NavList>
      <Detail></Detail>
    </section>
  </section>
</template>

<script>
  import Search from './Search'
  import NavList from './NavList'
  import Detail from './Detail'
  export default {
    components: {
      Search,
      NavList,
      Detail
    },
    created () {
      this.resetTop()
    },
    methods: {
      resetTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .list
    margin-bottom px2rem(100)
    height 100%
    background white
    .main
      margin-top px2rem(88)
</style>
