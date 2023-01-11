<template>
<div class = "TextBox" style="max-width: 50rem; padding: auto;">
  <b-button class="back" :to="{ path: `/veg/${vegetableId}` }" variant="success" style="margin-bottom: 10px; margin-left: 5px;">back</b-button>
    <b-card>
    <div>

      <b-form-textarea
        id="textarea"
        v-model="textEx1"
        placeholder="Start writing your review!"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
    <div class = "files">
      <input type="file" @change="onFileSelected">
      <b-button id = "upload" @click="onUpload">Upload</b-button>
      <b-button class="submit" style="margin-top:10px; margin-left: 10px" :to="{ path: `/veg/${vegetableId}` }" variant="success">Submit</b-button>
    </div>
    <b-img id = "img" :src="srcstr" v-if="srcstr" height="100px" width="150px"></b-img>

  </b-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    vegetableId(){
      return this.$route.params.vegid;
    },
  },
  name: "Write",
  data() {
    return {
      selectedFile: null,
      textEx1: null,
      srcstr: null
      // filetest: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      // const fd = new FormData();
      // fd.append('image', this.selectedFile, this.selectedFile.name)
      // axios.post('http://localhost:5173/upload', fd)
      const file = this.selectedFile
      const reader = new FileReader();
      reader.onload = () => {
        // console.log("hello?")
        let base64String = reader.result.replace('data:', '').replace(/^.+,/,'')
        let imgsrc = "data:image/png;base64," + base64String
        // var img = document.getElementById('tableBanner');
        // img.src = "data:image/png;base64," + base64String
        // console.log(base64String)
        // var idarr = Object.keys(this.review_data)
        // var id = 'r' + parseInt(idarr[idarr.length - 1].substring(1)) + 1
        window.localStorage.setItem('img', imgsrc)
        window.localStorage.setItem('txt', this.textEx1)
        window.localStorage.setItem('vegetableId', this.$route.params.vegid)
        console.log(window.localStorage.getItem('vegetableId'))
        this.srcstr = window.localStorage.getItem('img')
        if (typeof srcstr == undefined) {
          srcstr = ""
        }
        // console.log(window.localStorage.getItem('img'))
        // console.log(this.textEx1)
      };
      reader.readAsDataURL(file)
    }
  }
}

</script>

<style>
.TextBox {
    position: relative;
    left: 50%;
    transform: translate(-50%);
}

.files{
  margin-top:10px;
}

#upload{
  margin-top:10px;
}

#img{
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>
