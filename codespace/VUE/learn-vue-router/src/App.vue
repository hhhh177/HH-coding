<template>
  <div  class="nav">
    <router-link to="/home">首页</router-link>
    <router-link to="/hot">沸点</router-link>
    <router-link to="/class">课程</router-link>
  </div>
<!-- 路由路口：所有配了路由的页面都会在该口子上展示 -->
  <div class="page">
    <router-view></router-view>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="css" scoped>
.nav{
  width: 800px;
  background-color: aquamarine;
  margin: 0 auto;
  font-size: 30px;
  padding: 10px 20px;
}
a{
  text-decoration: none;
  margin-right: 30px;
}
.page{
  width: 1000px;
  margin: 0 auto;
  background: #e7e5e5;
  height: 1000px;
  font-size: 24px;
}
</style>