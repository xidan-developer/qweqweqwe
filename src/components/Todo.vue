<template>
  <div class="container obshii">
      <div class="qweqweqwe row">
        <div class="listdel col-md-2">
          <div>
            <div><a href="">список 1</a></div>
            <div><a href="">список 2</a></div>
          </div>
          <div>
            <div><input type="text" placeholder="Поле ввода названия"></div>
            <div><a href="">Добаввить список</a></div>
          </div>
        </div>
        <div class="delo col-md-9">
          <div>
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
              <div>
                X
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
              <div>
                X
              </div>
            </div>
          </div>
          <div class="add-delo">
            <div><input type="text" placeholder="Поле ввода"></div>
            <div><input type="submit" value="Добавить"></div>
            <div><input type="checkbox">Важное</div>
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
.delo.col-md-9 {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.add-delo {
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