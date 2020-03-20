<!-- 头部导航栏组件 -->
<template>
  <div class="header">
    <div class="main">
      <li>
        <router-link to="/">
          <ul>首页</ul>
        </router-link>
        <ul>技术分享</ul>
        <ul>生活随笔</ul>
        <ul>时光轴</ul>
        <ul>留言板</ul>
        <ul>关于我</ul>
      </li>

      <router-link to="login">
        <span class="loginBtn">登陆</span>
      </router-link>
      <router-link to="register">
        <span class="registerBtn">注册</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 58px;
  background-color: #3c3c3c;
  border-bottom: 1px solid #2f2f2f;
}
.main {
  width: 1200px;
  margin: 0 auto;
}
.header li ul {
  height: 58px;
  line-height: 58px;
  float: left;
  margin-left: 20px;
  color: #999999;
  cursor: pointer;
}
.header li ul:hover {
  color: #dddddd;
}
.loginBtn,
.registerBtn {
  width: 80px;
  height: 34px;
  display: block;
  float: right;
  line-height: 34px;
  border-radius: 4px;
  border: 1px solid #b84a4a;
  color: #b84a4a;
  font-size: 17px;
  text-align: center;
  margin-top: 12px;
  margin-right: 30px;
}
.loginBtn:hover,
.registerBtn:hover {
  color: #55b946;
  border: 1px solid #55b946;
}
</style>
