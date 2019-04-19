<template>
  <div>
    <button class="btn btn-info btn-md" type="button" @click="onClickTest">emitClick</button>
  </div>
</template>

<script>
export default {
  name: 'eventBusTest',
  data () {
    return {
      name: 'ace'
    }
  },
  created () {
    console.log('ace2')
    this.$eventBus.$on('test', (...args) => {
      // alert(args)
      // this.$eventBus.$off('test')
    })
  },
  mounted () {},
  beforeDestroy () {
    // 这里不需要手动off销毁eventBus事件
  },
  methods: {
    onClickTest () {
      this.$eventBus.$emit('test', 'ace', 'test')
    }
  }
}
</script>
