<template>
  <div id="infoBox">
    <div>详情 --- {{id}}</div>
    <a @click="$router.push('/list')">点击返回</a>
    <br />
    <br />
    <br />
    <div>
      <div>电话簿</div>
      <Brother1></Brother1>
      <br />
      <Brother2></Brother2>
    </div>
  </div>
</template>

<script>
  import Brother1 from '@/components/brother/brother1.vue'
  import Brother2 from '@/components/brother/brother2.vue'
  export default {
    name: 'infoBox',
    data() {
      return {
        id: 0
      }
    },
    components: {
      Brother1,
      Brother2
    },
    created() {
      // 获取动态路由
      this.id = this.$route.params.id
      console.log("当前文章id", this.$route.params.id)
    },
    methods: {
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
