<template>
  <table>
    <thead>
      <tr>
        <th>专利名称</th>
        <th>专利类型</th>
        <th>专利号</th>
        <th>授权公告日期</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="patent in patents" :key="patent.patentNumber">
        <td>{{ patent.patentName }}</td>
        <td>{{ patent.patentType }}</td>
        <td>{{ patent.patentNumber }}</td>
        <td>{{ patent.announcementDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue';

const patents = ref([
  {
    patentName: '多关节夹爪机械臂',
    patentType: '实用新型专利',
    patentNumber: 'ZL 2022 2 3278718.6',
    announcementDate: '2023年6月13日'
  },
  {
    patentName: '用于多功能可扩展FDM - 3D打印机外接混合器的选择阀',
    patentType: '发明专利',
    patentNumber: 'ZL 2017 1 0131545.X',
    announcementDate: '2023年03月17日'
  },
  {
    patentName: '一种空间侧式停车装置',
    patentType: '发明专利',
    patentNumber: 'ZL 2017 1 0131545.X',
    announcementDate: '2023年03月17日'
  },
  {
    patentName: '一种多功能可扩展FDM - 3D打印机外接混合器',
    patentType: '发明专利',
    patentNumber: 'ZL 2017 1 0132192.5',
    announcementDate: '2024年03月19日'
  },
  {
    patentName: '一种FDM - 3D打印机外接混色器',
    patentType: '发明专利',
    patentNumber: 'ZL 20171 0132191.0',
    announcementDate: '2024年03月19日'
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