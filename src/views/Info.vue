<template>
  <div id="infoBox">
    详情
  </div>
</template>

<script>
  export default {
    name: 'infoBox',
    data() {
      return {

      }
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
