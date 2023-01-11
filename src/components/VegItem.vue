<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
})
</script>

<template>
<b-link style="text-decoration: none; max-width: 20rem; color: inherit; padding: 0px;margin: 3px;" :to="{ path: `/veg/${name}`}">
  <b-card
    :title=name
    :img-src="getImageUrl(`${name}.jpg`)"
    img-top
    style="max-width: 20rem;"
    class="m-2 p-0"
    >
    <!-- <b-button :to="{ path: `/veg/${name}`}" variant="light">Explore</b-button> -->
  </b-card>
</b-link>

</template>

<style scoped>
</style>
