<template>
  <div class="home">
    {{info}}
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
  }
};
</script>
