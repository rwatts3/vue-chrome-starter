<template>
  <main id="fullPage" :class="`theme_${theme}`">
    <div class="mian">
      <h1>Hello Vue !</h1>
    </div>
    <div class="footer">
      <!-- 下面这段无关主题，可以不看 -->
      <div>
        <a href="https://github.com/Andself/vue-chrome-starter" target="_blank">
          <span>Andself</span>
          <svg aria-hidden="true" class="octicon" height="18" version="1.1" viewBox="0 0 16 16" width="28">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import ListItem from '../component/ListItem';
  export default {
    data () {
      return {
        theme: 1,
      }
    },
    created () {
      this.theme =  +window.localStorage.getItem('theme') || 1;
    },
  }
</script>
<style>
*{
  box-sizing: border-box;
}
a{
  color: inherit;
}
a:focus{
  outline: none;
}
h1{
  font-size: 32px;
  line-height: 1.4;
  border-bottom: 1px solid #42b983;
}
#fullPage{
  width: 320px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
#fullPage .mian{
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
#fullPage .footer{
  border-top: 1px solid #f4f4f4;
  text-align: right;
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  padding: 0 6px;
}

.octicon{
  float: right;
  margin-top: 10px;
}
.pathlist{
  width: 100px;
  line-height: 1.7;
  font-size: 22px;
  margin-top: 32px;
}

.theme_1{
  background: none;
}
.theme_2{
  background: lightgreen;
  color: #fff;
}
</style>