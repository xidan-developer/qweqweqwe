<template>
  <div class="adddelo">
    <div><input  v-model="newTaskList"  type="text" placeholder="Поле ввода"></div>
    <div><button @click="addTodo('newTaskList')">Добавить</button></div>
    <div><input type="checkbox">Срочное</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      newTaskList: ''
    }
  },
  methods: {
    addTodo (name) {
      this.$store.dispatch('addTodo', name)
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