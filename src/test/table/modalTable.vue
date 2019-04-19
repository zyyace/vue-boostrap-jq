<template>
  <div>
    <p>table modal</p>
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">show Modal</button>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLable" aria-hidden="true">
      <div class="modal-dialog" role="document" style="height: 200px">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="myModalLabel">Modal标题</h4>
          </div>
          <div class="modal-body">
             <table id="table"
             >
              <thead>
                <tr>
                  <th data-field="id">Id</th>
                  <th data-field="name">Name</th>
                  <th data-field="age">Age</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" >提交更改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

var self

export default {
  data () {
    return {
      formData: [
        {
          'id': 0,
          'name': 'ace',
          'age': 18
        },
        {
          'id': 1,
          'name': 'ace1',
          'age': 19
        },
        {
          'id': 2,
          'name': 'ace2',
          'age': 19
        },
        {
          'id': 3,
          'name': 'ace3',
          'age': 19
        },
        {
          'id': 4,
          'name': 'ace4',
          'age': 19
        },
        {
          'id': 5,
          'name': 'ace5',
          'age': 19
        },
        {
          'id': 6,
          'name': 'ace6',
          'age': 19
        },
        {
          'id': 7,
          'name': 'ace7',
          'age': 19
        }
      ]
    }
  },
  created () {
    self = this
  },
  mounted () {
    // **** mounted以后再进行赋值，不然无效，因为在mounted以前，该节点还没有挂载完成
    // $table = $('#table')
    this.initTable()
  },
  methods: {
    initTable () {
      $('#myModal').on('show.bs.modal', function () {
        self.$nextTick(function () {
          $('#table').bootstrapTable({ data: self.formData })
        })
      })
    }
  }
}
</script>
