<template>
  <thead>
    <tr>
      <th v-for="name of tableHeadNames">{{name}}</th>
    </tr>
  </thead>
</template>

<script>
  export default {
    name: "CartHead",
    props:{
      tableHeadNames:{
        array,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>