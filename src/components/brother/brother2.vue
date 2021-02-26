<template>
  <div id="infoBox">
    <div>新增联系人：</div>
    <div>
      输入姓名：<input v-model="name" />
    </div>
    <div>
      输入手机号：<input v-model="tel" />
    </div>
    <input type="button" value="增加" @click="addItem">
  </div>
</template>

<script>
  // 兄弟组件之间的通信
  import bus from '@/utils/Bus.js'
  // import bus from '../../utils/Bus'

  export default {
    name: 'Brother2',
    data() {
      return {
        name: '',
        tel: ''
      }
    },
    created() {},
    methods: {
      // 测试兄弟间的通信 实例，向电话簿里面添加联系人
      addItem() {

        var obj = {
          name: this.name,
          tel: this.tel,
        }
        console.log('增加', obj)
        bus.$emit('add', obj) // 触发了一个add事件，并传递数据
        this.name = ''
        this.tel = ''
      }
    }
  }

</script>

<style scoped>
  .addBtn {
    background: red;
    color: white;
    width: 100px;
  }

</style>
