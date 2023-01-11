<script setup>
import ReviewItem from '../components/ReviewItem.vue'
import TopBar from '../components/TopBar.vue'
import NarBar from '../components/NarBar.vue'
import Write from '../components/Write.vue'
</script>

<script>
export default {
  components:{
  },
  computed: {
    vegetableId(){
      return this.$route.params.vegid;
    },
  }
}
</script>

<template>
  <main>
    <NarBar></NarBar>
    <TopBar :vegid="vegetableId"></TopBar>
    <Write></Write>

</main>
</template>
