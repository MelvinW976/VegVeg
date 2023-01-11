<script setup>
import VegItem from '../components/VegItem.vue'
import NarBar from '../components/NarBar.vue'
</script>

<template>
  <main>
    <NarBar></NarBar>
    <div class="b-container m-5">
        <h2>My Favorite</h2>
        <b-card-group deck>
          <div class="row">
            <VegItem  v-for="vid in user_data.fav" :name="vid" ></VegItem>
          </div>
        </b-card-group>
    </div>
    <div class="b-container m-5" >
        <h2>Recommendation</h2>
        <b-card-group deck>
          <div class="row">
            <VegItem  v-for="vid in user_data.recommend" :name="vid" ></VegItem>
          </div>
        </b-card-group>
    </div>
  </main>
</template>
