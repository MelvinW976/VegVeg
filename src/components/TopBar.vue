<script setup>
defineProps({
  vegid: {
    type: String,
    required: true
  }
})

function stars(n) {
  return "★".repeat(parseInt(n))+"☆".repeat(5-parseInt(n));
}
// const button = document.querySelector(".heart-like-button");

// button.addEventListener("click", () => {
//   if (button.classList.contains("liked")) {
//     button.classList.remove("liked");
//   } else {
//     button.classList.add("liked");
//   }
// });
</script>


<script>
export default {
  data() {
    return {
      currentImage: 0,
      imageName: "fav1"
    }
  },
  methods: {
    changeImage: function () {
      if (this.currentImage == 0) {
        this.currentImage = 1;
        this.imageName =  "fav2";
      }
      else {
        this.currentImage = 0;
        this.imageName =  "fav1";
      }
    }
  }
}

</script>

<template>
  <div class="item">
    <div class="card mb-5" style="padding: 40px 10px 40px 50px; border-bottom: 2px solid grey;">
      <div class="row g-0" style="margin: auto; padding-left: 30px;">
        <div class="col-sm-4" style="max-height: 300px;  max-width:300px; ">
          <img :src="getImageUrl(`${vegid}.jpg`)" class="img-thumbnail" alt="veg" style="max-height:inherit; ">
        </div>

        <div class="col-sm-8" style="max-width: 850px;  margin-left: 10px;">
          <div class="card-body">
            <h4 class="card-title">{{vegetables_data[vegid].name}}
              <img :src="getImageUrl(`${imageName}.png`)" class="img-thumbnail" alt="veg" style="width:40px; border: 0ch; " @click="changeImage">
            </h4>
            <h5 class="card-subtitle mb-4 text-muted">{{vegetables_data[vegid].category}}  </h5>

            <p class="card-text">{{vegetables_data[vegid].intro}} </p>

            <p class="card-text"><small class="text-muted">Taste: {{stars(vegetables_data[vegid].taste)}}</small></p>
            <p class="card-text"><small class="text-muted">Level: {{stars(vegetables_data[vegid].yield)}}</small></p>
            <b-button i="write-review" variant="success" :to="{ path: `/writereview/${vegid}` }"> Add Review </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-sm-4 {
  align-items: center;
}
.heart-like-button {
  position: relative;
  width: 160px;
  height: 130px;
}
.heart-like-button:before {
  position: absolute;
  top: 0;
  left: 80px;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  width: 80px;
  height: 125px;
  border-radius: 40px 40px 0 0;
  background-color: #574136;
  content: "";
  cursor: pointer;
  transition: background .4s;
}
.heart-like-button:after {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(45deg);
  transform-origin :100% 100%;
  width: 80px;
  height: 125px;
  border-radius: 40px 40px 0 0;
  background-color: #574136;
  content: "";
  cursor: pointer;
  transition: background .4s;
}
.heart-like-button.liked::before,
.heart-like-button.liked::after {
  background-color: #d65076;
}
.heart-like-button.liked {
  animation: liked .4s ease;
}

</style>
