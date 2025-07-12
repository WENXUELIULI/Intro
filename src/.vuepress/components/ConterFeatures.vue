<template>
  <div>
    <!-- 教育与培训 -->
    <div
      :style="{ backgroundImage: `url(/assets/image/bgimage.jpg)` }"
      class="highlight-section"
    >
      <div class="highlight-content">
        <h2>教育与培训</h2>
        <ul>
          <li>提供多种形式的培训和教育活动。</li>
          <li>举办技术讲座和培训课程。</li>
        </ul>
      </div>
    </div>
    <!-- 成就与专利 -->
    <div
      :style="{ backgroundImage: `url(/assets/image/bgimage.jpg)` }"
      class="highlight-section"
    >
      <div class="highlight-content">
        <h2>成就与专利</h2>
        <ul>
          <li>获得多项专利授权。</li>
          <li>促进科技成果的转化和传播。</li>
        </ul>
      </div>
    </div>
    <!-- 开源平台 -->
    <div
      :style="{ backgroundImage: `url(/assets/image/bgimage.jpg)` }"
      class="highlight-section"
    >
      <div class="highlight-content">
        <h2>开源平台</h2>
        <ul>
          <li>通过开源硬件和软件降低开发成本。</li>
          <li>为创客和DIY爱好者提供强大的工具和平台。</li>
        </ul>
      </div>
    </div>
    <!-- 未来展望 -->
    <div
      :style="{ backgroundImage: `url(/assets/image/bgimage.jpg)` }"
      class="highlight-section"
    >
      <div class="highlight-content">
        <h2>未来展望</h2>
        <p>
          沧州市智能3D打印制造技术创新中心将继续致力于推动3D打印与机器人技术的创新和应用。计划进一步加强与企业和科研机构的合作，不断提升技术水平和应用效果。未来，中心将通过不断优化管理和技术研发，为创客和教育领域提供更多的资源和平台，推动技术的普及和发展。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加组件的逻辑代码，如果没有特殊逻辑，此部分可以为空
</script>

<style scoped>
.highlight-section {
  padding: 20px;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
}

.highlight-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
}

h2 {
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>