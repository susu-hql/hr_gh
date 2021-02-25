<template>
  <div id="listBox">
    列表
    <a href="/list/info">点击详情</a>
    <div v-for="(item,index) in newList" :key="index">
      <router-link :to="'/list/info/' + item.id">{{item.title}}</router-link>
    </div>
    <!-- <router-link :to="{ name: 'info', params: { userId: 123 }}">User</router-link>
    <router-view /> -->
  </div>
</template>

<script>
  // 兄弟组件之间的通信
  import bus from '@utils/Bus.js'

  export default {
    name: 'listBox',
    data() {
      return {
        lists: [1, 2, 3],
        newList: [{
            id: 1,
            title: '11'
          },
          {
            id: 2,
            title: '22'
          },
          {
            id: 3,
            title: '33'
          }
        ]
      }
    },
    created() {
      // 测试兄弟间的通信，List和Info;
      this.newList = this.lists;
      bus.$on('add', (msg) => { // 监听一个自定义事件add
        console.log(msg)
        this.lists.push(msg)
      })
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
