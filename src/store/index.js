import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios)

const urlApi ='https://academy2.smw.tom.ru/valeria-danilchenko/api2'

async function postData(url = '', method ='', data = {}) {
  const response = await fetch(url, {
    method: method,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade,
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
    ADD_TODO (state, payload) {
      state.allLists.push(payload)
    },
    SET_LIST (state, payload) {
      state.allLists = payload;
    },
    ADD_LIST (state, payload) {
      state.allLists.push(payload)
    },
    DELETE_LIST (state, payload) {
      state.allLists = state.allLists.filter((list) => list.id !== payload.id)
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
    async addTodo({commit}) {
      await fetch(urlApi)
          .then (data => commit('ADD_TODO', data))
    },




    async loadLists({commit}) {
      await fetch(urlApi)
        .then (data => commit('SET_LIST', data))
    },
    async addList({commit}, payload){
      await axios.get(urlApi, { params: payload })
          .then( commit('ADD_LIST', payload) )
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
