<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
// 导入 TodoList 组件
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    // 注册 TodoList 组件
    TodoList
  }
};
</script>

<style>
/* 你可以在这里添加全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 这里可以添加对 TodoList 组件的样式覆盖，如果有需要的话 */
</style>