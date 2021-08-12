<template>
  <div class="">
  <div class="d-flex deloblock">
    <div>
      <input type="checkbox">
    </div>
    <div>
      <span>Дело 1</span>
    </div>
    <div>
      <span>10.08.2021 16:24</span>
    </div>
    <div>
      <button>Удалить</button>
    </div>
  </div>
  <div class="d-flex deloblock">
    <div>
      <input type="checkbox">
    </div>
    <div>
      <span>Дело 2</span>
    </div>
    <div>
      <span>10.08.2021 16:24</span>
    </div>
    <div>
      <button>Удалить</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",

}
</script>

<style scoped>
.d-flex.deloblock {
  border: 1px solid black;
}
.deloblock{
  border: 1px solid black;
}
</style>