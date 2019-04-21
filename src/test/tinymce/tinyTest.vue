<template>
  <div>
    {{ msg }}
    <div>
    </div>
    <tinymce-editor v-model="msg"
      :disabled="disabled"
      @onClick="onClick"
      @test="test"
      ref="editor"></tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = !disabled">{{disabled ? '启用' : '禁用'}}</button>
  </div>
</template>

<script>
import TinymceEditor from './tinymceEditor.vue'
export default {
  components: {
    TinymceEditor
  },
  data () {
    return {
      msg: 'Welcome to Use Tinymce Editor',
      disabled: false
    }
  },
  mounted () {
  },
  methods: {
    test (name) {
    },
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
  }
}
</script>

<style scoped>
</style>
