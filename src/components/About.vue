<template>
    <div>
        <h1>About Page</h1>
        <h3>{{ data }}</h3>
    </div>
</template>

<script>
  export default {
    name: '',
    asyncData ({ store, route }) {
        //  自定义的Vue实例属性，都在vue.$options中可以拿到
      return store.dispatch('getData', 'name')
    },
    computed: {
      // 从 store 的 state 对象中的获取 item。
      data () {
        return this.$store.state.data.name
      }
    }
  };
</script>

<style scoped>

</style>
