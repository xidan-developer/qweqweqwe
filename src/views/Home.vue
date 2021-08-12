<template>
  <div class="container obshii">
    <div class="qweqweqwe row">
      <Todo />
      <div class="delo col-md-9">
        <div>
          <AddTodo />
        </div>
        <AddDelo />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";
import AddDelo from "../components/AddDelo";

export default {
  name: "Home",
  components: {
    AddDelo,
    AddTodo,
    Todo

  },
  data () {
    return {
      info:null
    }
  },
  mounted() {
    axios
        .get('https://academy2.smw.tom.ru/valeria-danilchenko/api2')
        .then(response => (this.info = response));
  }
};
</script>

<style scoped lang="scss">
.listdel,delo{
  border: 1px solid black;
}
.delo.col-md-9 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.adddelo {
  display: flex;
  justify-content: space-evenly;
}
.obshii{
  height: 500px;
  border: 1px solid black;
}
.qweqweqwe{
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.listdel{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.deloblock{
  border: 1px solid black;
}
</style>