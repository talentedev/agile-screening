<template>
  <div class="container">
    <h1>Agile Software Development</h1>
    <h3 class="mt-4">Values</h3>
    <Values/>
    <h3 class="mt-4">Principles</h3>
    <Principles/>
  </div>
</template>

<script>
import Values from './Values.vue'
import Principles from './Principles.vue'

export default {
  name: 'Home',
  components: {
    Values,
    Principles
  }
}
</script>