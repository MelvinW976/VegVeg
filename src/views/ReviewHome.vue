<script setup>
import ReviewItem from '../components/ReviewItem.vue'
import TopBar from '../components/TopBar.vue'
import NarBar from '../components/NarBar.vue'
</script>

<template>
  <main>
    <NarBar></NarBar>
    <TopBar :vegid="vegetableId"></TopBar>

    <div class="container-xl" style="padding-left: 80px;">
      <b-button class="back" style="margin-left:25px" :to="{ path: `/veg` }" variant="success">back</b-button>
      <div class="row" style="margin:auto;">
        <ReviewItem v-for="reviewId in vegetableReviews" :rid="reviewId" :userName="userByReviewId(reviewId)" :reviewText="textByReviewId(reviewId)"></ReviewItem>
    </div>
    </div>
  </main>
</template>


<script>
export default {
  components:{
  },
  computed: {
    vegetableId(){
      return this.$route.params.vegid;
    },
    vegetableData(){
      return this.vegetables_data[this.vegetableId];
    },
    vegetableReviews(){
      return this.vegetableData['reviews'];
    },
    userByReviewId: function() {
      return (rid) => this.review_data[rid].user;
    },
    textByReviewId: function() {
      return (rid) => this.review_data[rid].text;
    },
    text(){
      return window.localStorage.getItem('txt')
    },
    exist(){
      return window.localStorage.getItem('img')
    }
  }
}
</script>
