<script setup lang="ts">
  import { ref, onMounted, reactive } from 'vue'
  const fileUpload = ref()
  const data = reactive({
    imgUrl: ''
  })
  onMounted(() => {
    // fileUpload.value.addEventListener('change', (event) => {
    //   const file = event.target.files[0]
    //   const freader = new FileReader()
    //   freader.onload = () => {
    //     const url = freader.result as string
    //     data.imgUrl = url
    //     console.log('@@url',url)
    //   }
    //   freader.readAsDataURL(file)
    // })
  })
</script>

<template>
  <div class="recommend">
    <h1>recommend</h1>
    <!-- <input ref="fileUpload" type="file" multiple/>
    <img :src="data.imgUrl" v-if="data.imgUrl"> -->
  </div>
</template>

<style lang="scss" scoped>
.recommend {
  height: 200px;
}
img {
  width: 200px;
  height: 56px;
}
</style>