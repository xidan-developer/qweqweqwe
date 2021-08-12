<template>
  <div class="listdel col-md-2">
    <div>
      <div><button>Список 1</button></div>
      <div><button>Список 2</button></div>
    </div>
    <div>
      <div><input type="text" placeholder="Поле ввода названия"></div>
      <div><button>Добавить список</button></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Todo",

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
