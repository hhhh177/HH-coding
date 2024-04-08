<template>
    <div class="home">
          <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
// .home{
//   width: 100vw;
//   height: 100vh;
//   .common-layout{
//     height: 100%;
//   }
// }
.el-container{
  width: 100vw;
  height: 100vh;
}
</style>