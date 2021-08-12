<template>
  <div class="adddelo">
    <div><input @change="todoTextChange" v-bind:value="todoText"  type="text" placeholder="Поле ввода"></div>
    <div><button @click="addTodo(todoText)">Добавить</button></div>
    <div><input type="checkbox">Срочное</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      todoText:""
    };
  },
  name: "AddDelo",
  methods:{
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoI(){
      this.addTodo({
        title: this.todoText,
      });
      this.todoText = "";
    }
  }
};
</script>

<style scoped>
.adddelo {
  display: flex;
  justify-content: space-evenly;
}
</style>