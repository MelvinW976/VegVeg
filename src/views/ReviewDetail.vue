<script setup>
import ReviewItem from '../components/ReviewItem.vue'
import TopBar from '../components/TopBar.vue'
import NarBar from '../components/NarBar.vue'
function stars(n) {
  return "★".repeat(parseInt(n))+"☆".repeat(5-parseInt(n));
}

var srcstr = window.localStorage.getItem('img')
// console.log("hello")
// console.log(srcstr)
            // <b-img v-bind:src="srcstr"></b-img>
</script>

<template>
  <main>
    <NarBar></NarBar>
    <TopBar :vegid="reviewVegetable"></TopBar>
    <b-container style="max-width: 1130px;">
      <b-button class="back" :to="{ path: `/veg/${reviewVegetable}` }" variant="success" style="margin-bottom: 10px; ">back</b-button>
      <b-card bg-variant="light border-light" class="px-3">
        <b-row class="mb-3" align-v="center">
          <b-col sm="1">
            <b-avatar variant="info" src="https://placekitten.com/300/300" ></b-avatar>
          </b-col>
          <b-col sm="1">{{reviewUser}}</b-col>
          <b-col sm="1" class="text-muted">⭐️ 75</b-col>
          <b-col sm="2" class="text-muted">Novice Gardener</b-col >
          <b-col sm="3" class="text-muted">{{reviewTime}}</b-col>
          <b-col sm="2" class="text-muted">74K VIEWS</b-col>
        </b-row>

        <b-card-text>Yield: {{stars(vegetableYield)}}</b-card-text>
        <b-card-text>Taste: {{stars(vegetableTaste)}}</b-card-text>
        <b-card-text>{{reviewText}}</b-card-text>

        <b-row class="mt-4">
          <b-col sm="3">
            <b-img thumbnail fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8RspD6eA0eASr-c_OEbOxSWAGTgS5LGGOK9b3j5VKhy-0lFgIMHn3sHxL61-VRm7uHA&usqp=CAU"></b-img>
          </b-col>
          <b-col sm="2">
            <b-img thumbnail fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyBRmC5wOjxZs-yHrXsIIsqDtmQP0RUr3Hw&usqp=CAU"></b-img>
          </b-col>
          <b-col sm="3">
            <b-img thumbnail fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9IOzmT2yr7KJ8flFpdH1ue1ApxdzNXOkthR1fvtdFVeWZDMPTPCGtaW-CDsDcrOBbZs&usqp=CAU"></b-img>
          </b-col>
        </b-row>
      </b-card>


      <!-- <b-row>
        Middlesex, Connecticut, United States
        Frost Free Season: 163 - 183 days
        Soil Texture: Not Sure
        Garden Size: Medium - 400 square feet to 1,600 square feet
        Sun Exposure: More than 8 hours per day
      </b-row> -->

    </b-container>
  </main>
</template>


<script>
export default {
  components:{
  },
  computed: {
    reviewId(){
      return this.$route.params.id;
    },
    reviewData(){
      return this.review_data[this.reviewId];
    },
    reviewUser(){
      return this.reviewData['user'];
    },
    reviewVegetable(){
      return this.reviewData['vegetable'];
    },
    vegetableData(){
      return this.vegetables_data[this.reviewVegetable];
    },
    vegetableYield(){
      return this.vegetableData['yield'];
    },
    vegetableTaste(){
      return this.vegetableData['taste'];
    },
    reviewTime(){
      return this.reviewData['created_time'];
    },
    reviewText(){
      return this.reviewData['text'];
    },
    reviewImage(){
      return this.reviewData['img_path'];
    }
  }
}
</script>
