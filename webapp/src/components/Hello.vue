<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Home</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Restaurantes</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Contactos</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Restaurante destacado.</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Información Restaurant</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Bienvenidos a Vue js APP'
    }
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
