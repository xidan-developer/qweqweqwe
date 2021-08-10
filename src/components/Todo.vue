<template>
  <div class="container obshii">
      <div class="qweqweqwe">
        <div class="listdel ">
          <div>
            <div><a href="">список 1</a></div>
            <div><a href="">список 2</a></div>
          </div>
          <div>
            <div><a href="">Поле ввода названия</a></div>
            <div><a href="">Добаввить список</a></div>
          </div>
        </div>
        <div class="delo">
          <div class="d-flex deloblock">
            <div>
              <input type="checkbox">
            </div>
            <div>
              <a href="">Дело 1</a>
            </div>
            <div>
              <span>10.08.2021 16:24</span>
            </div>
          </div>
          <div class="d-flex deloblock">
            <div>
              <input type="checkbox">
            </div>
            <div>
              <a href="">Дело 1</a>
            </div>
            <div>
              <span>10.08.2021 16:24</span>
            </div>
          </div>
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
