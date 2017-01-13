<template>
  <li>
    <router-link :to="data.path">{{data.title}}</router-link>
  </li>
</template>

<script>
  export default {
    props: {
      data: Object,
    }
  }
</script>
<style>
</style>