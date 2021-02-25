<template>
  <div id="infoBox">
    详情
  </div>
</template>

<script>
  // 兄弟组件之间的通信
  import bus from '@utils/Bus.js'

  export default {
    name: 'infoBox',
    data() {
      return {

      }
    },
    created() {
      // 获取动态路由
      console.log("当前文章id", this.$route.params.id)
    },
    methods: {
      // 测试兄弟间的通信 实例，向电话簿里面添加联系人,List和Info;
      addItem() {
        var obj = {
          name: '11',
          tel: '1112333',
        }
        bus.$emit('add', obj) // 触发了一个add事件，并传递数据
      },
      // 封装方法： 获取url中某个参数的值
      GetQueryValue() {
        let query = decodeURI(window.location.search.substring(1))
        let vars = query.split('&')
        for (let i = 0; i < vars.length; i++) {
          let pair = vars[i].split('=')
          if (pair[0] == queryName) {
            return pair[1]
          }
        }
        return null
      },
    }
  }

</script>

<style scoped>

</style>
