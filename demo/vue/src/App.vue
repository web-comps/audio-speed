<template>
  <div id="app">
    <wcs-audio-speed :source="source" />
  </div>
</template>

<script>
import './../../../package/src/index';

export default {
  name: 'App',
  data() {
    return {
      source: 'https://www.w3school.com.cn/i/song.mp3',
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
