import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const urlApi ='https://academy2.smw.tom.ru/valeria-danilchenko/api2'

async function postData(url = '', method ='', data = {}) {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export default new Vuex.Store({
  state: {
    filter: 'all',
    todos: [],
    allLists: [],
  },
  getters: {
    allTodos: (state) => state.todos,
    remaining(state) {
      return state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0
    },
    todosFiltered(state) {
      if (state.filter == 'all') {
        return state.todos
      } else if (state.filter == 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter == 'completed') {
        return state.todos.filter(todo => todo.completed)
      }
      return state.todos
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0
    }
  },
  mutations: {
    SET_LIST (state, payload) {
      state.allLists = payload;
    },
    ADD_LIST (state, payload) {
      state.allLists.push(payload)
    },
    DELETE_LIST (state, payload) {
      state.allLists = state.allLists.filter((list) => list.id !== payload.id)
    },
    add_todo(state,todo){
      state.todos.push(todo);
      console.log(todo);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id)
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
      })
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id)
      state.todos.splice(index, 1)
    },
    checkAll(state, checked) {
      state.todos.forEach(todo => (todo.completed = checked))
    },
    updateFilter(state, filter) {
      state.filter = filter
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
  actions: {
    async loadLists({commit}) {
      await fetch(urlApi)
        .then (data => commit('SET_LIST', data))
    },
    async addList({commit}, payload) {
      postData(urlApi, "POST", payload)
          .then( data => { commit ('ADD_LIST', data) })
    },
    async delete({commit}, payload) {
      postData(`${urlApi}/${payload.id}`, "DELETE", payload).then((payload) => {
        commit("DELETE_LIST", payload)
      });
    },
    updateTodo(context, todo) {
      setTimeout(() => {
        context.commit('updateTodo', todo)
      }, 100)
    },
    deleteTodo(context, id) {
      setTimeout(() => {
        context.commit('deleteTodo', id)
      }, 100)
    },
    checkAll(context, checked) {
      setTimeout(() => {
        context.commit('checkAll', checked)
      }, 100)
    },
    updateFilter(context, filter) {
      setTimeout(() => {
        context.commit('updateFilter', filter)
      }, 100)
    },
    clearCompleted(context) {
      setTimeout(() => {
        context.commit('clearCompleted')
      }, 100)
    }
  },
  modules: {},
});
