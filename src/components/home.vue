<template>
  <div>
    <label for="">welcome</label>
    <router-view/>
  </div>
</template>

<script>
// import $ from 'jquery'

// $(function () {
//   alert('1234')
// })
export default {
  name: 'Home',
  data () {
    return {}
  },
  created () {
    console.log('ace')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
