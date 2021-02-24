<template>
  <div id="indexBox">
    首页

    <!-- 使用动态的 transition name -->
    <!-- <router-link :to="{ name: 'info', params: { userId: 123 }}">User</router-link> -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'indexBox',
    data() {
      return {
        transitionName: ''
      }
    },
    created() {
      this.init()
    },
    mounted() {},
    computed: {},
    watch: {
      // 监听路由变化 导航完成后获取数据
      '$route'(to, from) {
        // 如果路由有变化，会再次执行该方法
        this.init()

        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length

        // watch $route 决定使用哪种过渡
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    methods: {
      init() {
        console.log('初始化。。。。')
      }
    },
    directives: { // 自定义指令, input标签上使用 v-directives
      // ios键盘弹起 下面留白问题
      iosResetPage: {
        // 插入时执行
        inserted: function (el) {
          // 监听键盘收起事件
          document.body.addEventListener('focusout', () => {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
              // 软键盘收起的事件处理
              setTimeout(() => {
                const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
                window.scrollTo(0, Math.max(scrollHeight - 1, 0))
              }, 100)
            }
          })
        },
      }
    },
  }

</script>

<style scoped>

</style>
