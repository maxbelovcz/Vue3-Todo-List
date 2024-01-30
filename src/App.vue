<template>
  <div class="main-wrapper">
    <div class="container">
      <div class="body-list">
        <h1 class="main-font-bold main-title">Список дел</h1>
        <Todo v-for="todo in todos" :id="todo.id" :point="todo.point" :key="todo.id" @remove="remove" @change="change" />
        <TodoForm @add="add" />
      </div>
    </div>
  </div>
</template>
<script>
import Todo from './components/Todo.vue';
import TodoForm from './components/TodoForm.vue';

export default {
  components: {
    Todo, TodoForm
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          point: 'Пункт 1'
        },
        {
          id: 2,
          point: 'Пункт 2'
        },
        {
          id: 3,
          point: 'Пункт 3'
        },
      ]
    }
  },
  methods: {
    remove(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    change(id, point) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.point = point;
        }
        return todo;
      });
    },
    add(point) {
      let id = this.todos.length + 1;
      this.todos.push({
        id,
        point
      });
    }
  },
} 
</script>

<style></style>