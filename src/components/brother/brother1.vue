<template>
  <div id="Brother1">

    <div v-for="(item,index) in newList" :key="index">
      <div>{{item.name}} --- {{item.tel}}</div>
    </div>
  </div>
</template>

<script>
  // 兄弟组件之间的通信
  import bus from '@/utils/Bus.js'
  // import bus from '../../utils/Bus'

  export default {
    name: 'Brother1',
    data() {
      return {
        lists: [{
            tel: '134334343221',
            name: '鞋子'
          },
          {
            tel: '12343133333',
            name: '衣服'
          },
          {
            tel: '146666666666',
            name: '裤子'
          }
        ],
        newList: [],
      }
    },
    mounted() {
      // 测试兄弟间的通信
      this.newList = this.lists;
      bus.$on('add', (obj) => { // 监听一个自定义事件add
        console.log('触发了', obj)
        this.$nextTick(() => {
          this.newList.push(obj)
        })

      })
      console.log(bus)
      console.log(this.newList)
    },
    methods: {},
    destroyed() {
      bus.$off('add')
    }
  }

</script>

<style scoped>

</style>
