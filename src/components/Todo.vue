<template>
  <div class="listdel col-md-2">
    <div>
      <div><input v-model="newList" type="text" placeholder="Поле ввода названия"></div>
      <div><button @click="addList(newList)">Добавить список</button></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Todo",
  data () {
    return {
      newList: ''
    }
  },
  methods: {
    addList (name) {
      this.$store.dispatch('addList', name)
    }
  }
}
</script>

<style scoped lang="scss">
.listdel{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
