<template>
  <main>
    <div class="topBar">
      <input class="inputbox" type="text" v-model="text" placeholder="do something..." @keyup.13="add">
      <button class="addBtn" @click="add" :disabled="text.length == 0">add</button>
    </div>
    <div class="scrollBox">
      <ul>
        <li v-for="(item, index) in list">
          <div>
            <input type="checkbox" v-model="item.state" class="checkbox"/>
            {{`${index}. `}}
            <input v-if="item.edit" v-model="item.value" @blur="item.edit = false" />
            <span v-else  @click="item.edit = true">{{item.value}}</span>
          </div>
          <span @click="remove(index)">remove</span>
        </li>
      </ul>
      <div v-show="select.length > 0" class="removeAll">
        <div @click="removeAll">removeAll</div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        text: '',
        list: [],
      }
    },
    methods: {
      add () {
        if (this.text.length > 0) {
          this.list.push({
            value: this.text,
            state: false,
            edit: false
          });
          this.text = '';
        }
      },
      remove (i) {
        this.list.splice(i, 1);
      },
      removeAll () {
        this.list = this.list.filter((i) => !i.state)
      }
    },
    components: {
    },
    computed: {
      select () {
        return this.list.filter((i) => i.state == true)
      }
    }
  }
</script>
<style>
  main{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .topBar{
    height: 40px;
    display: flex;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    align-items: center;
  }
  .inputbox{
    border: 1px solid #ccc;
    height: 24px;
    flex: 1;
    padding: 0 4px;
  }
  .addBtn{
    border: 1px solid deepskyblue;
    height: 24px;
    background: #fff;
    width: 50px;
    margin-left: 12px;
    color: deepskyblue;
  }
  .addBtn:disabled{
    border-color: #ccc;
    color: #ccc;
  }
  .scrollBox{
    flex: 1;
    background: #f4f4f4;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .scrollBox li{
    border: 1px solid #ccc;
    margin: 6px;
    background: #fff;
    height: 32px;
    line-height: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 4px;
  }
  .scrollBox li > div{
    display: block;
    flex: 1;
  }
  .scrollBox li > span{
    display: block;
    width: 52px;
    color: red;
  }
  .checkbox{
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 100%;
    position: relative;
    margin-right: 6px;
    vertical-align: middle;
  }
  .checkbox:checked{
    border-color: deepskyblue;
  }
  .checkbox:checked:before{
    content: '';
    display: block;
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: deepskyblue;
    border-radius: 100%;
  }
  .removeAll div{
    display: block;
    box-sizing: border-box;
    background: none;
    border-radius: 3px;
    height: 24px;
    line-height: 24px;
    margin: 6px;
    text-align: center;
    border: 1px solid red;
    color: red;
  }
</style>