<template>
  <div>
    <form @submit.prevent="add">
      add a todo
      <input type="text" v-model="todoText" placeholder="add todo" />
      <!-- 不能添加type属性 type="button" -->
      <button>add</button>
    </form>
    <ul>
      <!-- <li is='item-todo' :title="todo" v-for="(todo, index) in todoList" :key='todo' @remove='todoList.splice(index, 1)'></li> -->
      <item-todo
        :title="todo"
        v-for="(todo, index) in todoList"
        :key="todo"
        @remove="todoList.splice(index, 1)"
      ></item-todo>
    </ul>
    <div>
      <button v-on:click="warn($event,'Form cannot be submitted yet.',)">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      todoText: "",
      todoList: [],
    };
  },

  methods: {
    add() {
      if (this.todoText.trim()) {
        this.todoList.push(this.todoText);
        this.todoText = "";
      }
    },
    warn: function (event, message) {
      // console.log('message: ', message);
      // return
      // 现在我们可以访问原生事件对象
      if (event) {
        console.log(event);
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>

<style>
</style>