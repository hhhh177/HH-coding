<template>
    <div class="body">
    <ul>
      <li  v-for="item in lists" >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: ['lists']
    }
</script>

<style lang="css" scoped>

</style>