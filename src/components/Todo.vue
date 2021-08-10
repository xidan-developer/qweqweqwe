<template>
  <div class="container obshii">
      <div class="row qweqweqwe">
        <div class="listdel col-md-2">
          <div>
            <div><a href="">список 1</a></div>
            <div><a href="">список 2</a></div>
          </div>
          <div>
            <div><a href="">Поле ввода названия</a></div>
            <div><a href="">Добаввить список</a></div>
          </div>
        </div>
        <div class="delo col-md-10">

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Todo",

}
</script>

<style scoped lang="scss">
.listdel,delo{
border: 1px solid black;
}
.obshii{
  height: 500px;
}
.qweqweqwe{
  height: 100%;
}
.listdel{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
  text-align: center;
}
</style>
