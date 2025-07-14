<template>
  <table>
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in projects" :key="project.projectName">
        <td>{{ project.projectName }}</td>
        <td>{{ project.leader }}</td>
        <td>{{ project.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    projectName: 'Mecanum轮移动机器人的设计与开发',
    leader: '韩浏, 姜启龙',
    description: '开发采用3D打印技术的Mecanum轮移动机器人。'
  },
  {
    projectName: '低成本AGV小车设计与开发',
    leader: '崔泽, 赵鑫然',
    description: '集成3D打印和机器人技术，创建低成本AGV小车。'
  },
  {
    projectName: '基于ROS的SCARA机械臂设计与开发',
    leader: '卜卫东, 赵楗磊, 姜启龙',
    description: '使用ROS和3D打印技术开发SCARA机械臂。'
  },
  {
    projectName: '移动机器人的设计与开发',
    leader: '尹玉涛, 姜启龙',
    description: '设计和开发用于教育目的的移动机器人。'
  },
  {
    projectName: '基于FDM-3D打印技术的Delta型打印机设计与优化',
    leader: '金立涛, 姜启龙',
    description: '使用FDM技术优化和设计Delta 3D打印机。'
  },
  {
    projectName: '低成本教育用多关节机械臂设计',
    leader: '孙杰, 姜启龙',
    description: '设计用于低成本生产的教育用多关节机械臂。'
  },
  {
    projectName: '基于机器视觉的教学用机器人工作站设计与开发',
    leader: '李云飞, 姜启龙',
    description: '使用机器视觉技术创建教学用机器人工作站。'
  }
]);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>