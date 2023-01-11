<script setup>
defineProps({
  rid:{
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  }
})

</script>

<template>
<!-- <div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div> -->


<b-card style="max-width: 18rem; border:0ch; padding-bottom: 10px;">
  <b-button variant="outline-success" :to="{ path: `/review/${rid}` }" >
    <div class="card-body">
      <h5 class="card-title" style="color:black; ">{{userName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Master Gardener</h6>
      <p class="card-text" style="color:black">{{reviewText}}</p>
    </div>
  </b-button>
</b-card>

</template>
<script>
  export default {
    data: () => {
      return {}
    },
    created() {
    },
    filters: {
      truncate: (text, length, suffix) => {
        if (text.length >length) {
          return text.substring(0, length) + suffix;
        } else {
          return text
        }
      },
    }
  }

</script>
<style scoped>
p {
    display: -webkit-box;
    max-width: 250px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
