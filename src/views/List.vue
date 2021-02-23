<template>
  <div id="listBox">
    列表
    <a href="/list/info">点击详情</a>
    <!-- <router-link :to="{ name: 'info', params: { userId: 123 }}">User</router-link>
    <router-view /> -->
  </div>
</template>

<script>
  export default {
    name: 'listBox',
    data() {
      return {

      }
    },
    methods: {
      toNext() {
        // 字符串
        // 对象{ path: 'home' }
        // 命名的路由{ name: 'user',  params: {  userId: '123'  }  }
        // 带查询参数，变成 /register?plan=private  {  path: 'register', query: {  plan: 'private'  }   }
        this.router.push('home')
      }
    }
  }

</script>

<style scoped>

</style>
