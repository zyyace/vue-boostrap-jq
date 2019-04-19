<template>
  <div class="">
    <table id="table"
      data-detail-view="true">
      <thead>
        <tr>
          <th data-field="id">Id</th>
          <th data-field="name">Name</th>
          <th data-field="price">Age</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import $ from 'jquery'
var $table
var self

export default {
  created () {
    self = this
  },
  mounted () {
    $table = $('#table')
    this.buildTable($table, 8, 1)
  },
  methods: {
    buildTable ($el, cells, rows) {
      let i
      let j
      let row
      let columns = []
      let data = []

      for (i = 0; i < cells; i++) {
        columns.push({
          field: 'field' + i,
          title: 'Cell' + i,
          sortable: true
        })
      }

      for (i = 0; i < rows; i++) {
        row = {}
        for (j = 0; j < cells; j++) {
          row['field' + j] = 'Row-' + i + '-' + j
        }
        data.push(row)
      }

      $el.bootstrapTable({
        columns,
        data,
        detailViews: cells > 1,
        onExpandRow: function (index, row, $detail) {
          // eslint-disable-next-line no-undef
          self.expandTable($detail, cells - 1)
        }
      })
    },
    expandTable ($detail, cells) {
      self.buildTable($detail.html('<table data-detail-view="true"></table>').find('table'), cells, 1)
    }
  }
}
</script>
