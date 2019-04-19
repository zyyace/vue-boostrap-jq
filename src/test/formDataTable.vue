<template>
  <div class="">
    <table id="table">
      <thead>
        <tr>
          <th data-field="id">Id</th>
          <th data-field="name">Name</th>
          <th data-field="age">Age</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>

import $ from 'jquery'

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
        }
      ]
    }
  },
  created () {

  },
  mounted () {
    this.initTalbe()
  },
  methods: {
    initTalbe () {
      $('#table').bootstrapTable({ data: this.formData })
    }
  }
}
</script>
