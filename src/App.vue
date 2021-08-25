<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family:  Graphik !important;
    overflow-x: hidden !important;
  }

  .body_container{
    background: rgba(230, 238, 255, 0.7);
    border-radius: 20px;
    padding: 2%;
  }

  .btn-top{
    background: #005BFF;
    border-radius: 4px;
    color: white;
    .top-up{
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 50%;
        padding: 4px;
        margin-right: 10px;
        color: #005BFF;
    }
  }
</style>
