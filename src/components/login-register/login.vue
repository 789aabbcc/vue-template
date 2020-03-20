<!-- 登陆 -->
<template>
  <div class="login">
    <i>登 &nbsp; 陆</i>
    <input type="text" class="phone" placeholder="请输入用户名" />
    <input type="password" class="password" placeholder="请输入密码" />
    <span class="logined" @click="btnClick">登陆</span>
    <input type="radio" class="radio" /> 下次自动登陆
    <router-link to="/register">
      <span class="toRegister">注册</span>
    </router-link>
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

  methods: {
    btnClick() {
      swal("登陆成功", "你点击了登陆按钮!", "success");
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/login-register.css";
</style>