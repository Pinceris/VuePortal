<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <h1 class="title">Video Downloader</h1>
      <input class="input" type="text" placeholder="Input URL" v-model="url">
      <button @click="download" class="button is-center is-success">Download</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about',
    data() {
        return {
          url: ''
        }
      },
    methods: {
      download(){
        console.log('here')
        window.location.href = `http://localhost:4000/download?URL=` + this.url;
      }
    }

  }
</script>