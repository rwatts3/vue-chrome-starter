<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  html, body {
    font-size: 14px;
    background: #fff;
    font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
    height: 100%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  input{
    box-shadow: 0px 0px 0px #fff;
    outline: none;
    -webkit-appearance: none;
  }
  button:focus{
    outline: none;
  }
  input:focus {
    box-shadow: none;
    outline: none;
  }
  #app {
    height: 100%;
    transform: translate3d(0,0,0);
  }
  ul,ol,li {
    list-style-type: none;
  }
</style>
