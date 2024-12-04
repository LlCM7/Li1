import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as echarts from 'echarts';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');

// 初始化 ECharts 实例
const chartDom = document.getElementById('chart');
const myChart = echarts.init(chartDom);
const option = {
    // 配置项
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70],
        type: 'bar'
    }]
};
myChart.setOption(option);