<template>
  <div class='tinymce'>
    <h1>tinymce</h1>
    <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
    <!-- <div v-html='tinymceHtml'></div> -->
  </div>
</template>

<script>
// import $ from 'jquery'

import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'

import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'

export default {
  name: 'tinymce',
  data () {
    return {
      tinymceHtml: '请输入内容',
      init: {
        language_url: '../../static/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '../../static/tinymce/skins/lightgray',
        image_advtab: true,
        image_title: false,
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu imagetools',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | imagetools link unlink image code | removeformat',
        branding: false,
        images_upload_handler: function (blobInfo, success, failure) {
          if (blobInfo.blob().size > self.maxSize) {
            failure('文件体积过大')
          }
          if (self.accept.indexOf(blobInfo.blob().type) >= 0) {
            uploadPic()
          } else {
            failure('图片格式错误')
          }
          function uploadPic () {
            let formData = new FormData()
            // 服务端接收文件的参数名，文件数据，文件名
            formData.append('upfile', blobInfo.blob(), blobInfo.filename())
            alert()
            // axios({
            //   method: 'POST',
            //   // 这里是你的上传地址
            //   url: 'uploadimage',
            //   data: formData
            // })
            //   .then((res) => {
            //     // 这里返回的是你图片的地址
            //     success(res.data.url)
            //   })
            //   .catch(() => {
            //     failure('上传失败')
            //   })
          }
        }
        // images_upload_handler: function (blobInfo, success, failure) {
        //   var form = new FormData()
        //   form.append('files', blobInfo.blob(), blobInfo.filename())
        //   $.ajax({
        //     url: '/image/upload',
        //     type: 'post',
        //     data: form,
        //     processData: false,
        //     contentType: false,
        //     success: function (data) {
        //       success(data.location)
        //     },
        //     error: function (e) {
        //       alert('图片上传失败')
        //     }
        //   })
        // }
      //   file_picker_callback: function (callback, value, meta) {
      //     var input = document.createElement('input')
      //     input.setAttribute('type', 'file')
      //     input.onchange = function () {
      //       var file = this.files[0]
      //       var form = new FormData()
      //       form.append('files', file)
      //       $.ajax({
      //         url: '/image/upload',
      //         type: 'post',
      //         data: form,
      //         processData: false,
      //         contentType: false,
      //         success: function (data) {
      //           callback(data.location)
      //         },
      //         error: function (e) {
      //           alert('图片上传失败1')
      //         }
      //       })
      //     }

      //     input.click()
      //   }
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor}
}
</script>