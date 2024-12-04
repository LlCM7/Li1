<template>
    <div class="todo-app">
      <el-input v-model="newTodo" placeholder="What needs to be done?" @keyup.enter="addTodo" />
      <el-button type="primary" @click="addTodo">Add</el-button>
      <p>{{ completedTodos }} out of {{ todos.length }} items completed</p>
      <el-list>
        <el-list-item v-for="(todo, index) in todos" :key="index">
          <el-checkbox v-model="todo.completed"></el-checkbox>
          <el-tag :type="todo.completed ? 'success' : 'info'">{{ todo.title }}</el-tag>
          <el-button type="text" @click="editTodo(index)">Edit</el-button>
          <el-button type="danger" @click="deleteTodo(index)">Delete</el-button>
        </el-list-item>
      </el-list>
      <div v-if="editingIndex !== null">
        <el-input v-model="todos[editingIndex].title" />
        <el-button type="text" @click="saveTodo">Save</el-button>
        <el-button type="text" @click="cancelEdit">Cancel</el-button>
      </div>
      <!-- ECharts 图表容器 -->
      <div ref="chart" style="width: 100%; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  
  export default {
    setup() {
      const newTodo = ref('');
      const todos = ref([
        { title: 'Learn Vue', completed: false },
        { title: 'Create a Vue project with the CLI', completed: true },
      ]);
      const editingIndex = ref(null);
      const chart = ref(null);
  
      const completedTodos = todos.value.filter(todo => todo.completed).length;
  
      onMounted(() => {
        const myChart = echarts.init(chart.value);
        const option = {
          // ECharts 配置项
          xAxis: {
            type: 'category',
            data: ['Learn Vue', 'Create a Vue project with the CLI']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [completedTodos, todos.value.length - completedTodos],
            type: 'bar'
          }]
        };
        myChart.setOption(option);
      });
  
      function addTodo() {
        if (newTodo.value.trim() !== '') {
          todos.value.push({ title: newTodo.value, completed: false });
          newTodo.value = '';
        }
      }
  
      function editTodo(index) {
        editingIndex.value = index;
      }
  
      function saveTodo() {
        if (todos.value[editingIndex.value]) {
          todos.value[editingIndex.value].title = newTodo.value;
          editingIndex.value = null;
          newTodo.value = '';
        }
      }
  
      function cancelEdit() {
        editingIndex.value = null;
        newTodo.value = '';
      }
  
      function deleteTodo(index) {
        todos.value.splice(index, 1);
      }
  
      return {
        newTodo,
        todos,
        editingIndex,
        completedTodos,
        addTodo,
        editTodo,
        saveTodo,
        cancelEdit,
        deleteTodo,
        chart,
      };
    },
  };
  </script>
  
  <style scoped>
  .todo-app {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>