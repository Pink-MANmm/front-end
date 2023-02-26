<template>
  <div>
    <my-Addition></my-Addition>

    <p>-----------------------------------</p>

    <my-Subtraction></my-Subtraction>
  </div>
</template>

<script>
import myAddition from '@/components/myAddition.vue'
import mySubtraction from '@/components/mySubtraction.vue'

export default {
  name: 'App',
  components: {
    'my-Addition': myAddition,
    'my-Subtraction': mySubtraction
  }
}
</script>

<style>
</style>
