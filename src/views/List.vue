<template>
  <div id="listBox">
    这是列表
    <a href="/list/info/99">点击详情</a>
    <div v-for="(item,index) in newList" :key="index">
      <router-link :to="'/list/info/' + item.id">点击查看{{item.title}}</router-link>
    </div>
    <!-- <router-link :to="{ name: 'info', params: { userId: 123 }}">User</router-link>-->
    <router-view />
  </div>
</template>

<script>
  // import {
  //   mapState
  // } from 'Vuex'
  export default {
    name: 'listBox',
    data() {
      return {
        newList: [{
            id: 1,
            title: '鞋子'
          },
          {
            id: 2,
            title: '衣服'
          },
          {
            id: 3,
            title: '裤子'
          }
        ]
      }
    },
    created() {},
    computed: {},
    methods: {
      toNext() {
        // 字符串
        // 对象{ path: 'home' }
        // 命名的路由{ name: 'user',  params: {  userId: '123'  }  }
        // 带查询参数，变成 /register?plan=private  {  path: 'register', query: {  plan: 'private'  }   }
        this.router.push('login')
      }
    }
  }

</script>

<style scoped>

</style>
