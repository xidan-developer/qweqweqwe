<template>
  <div class="home">
    <Todo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import axios from "axios";


export default {
  name: "Home",
  components: {
    Todo,
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
