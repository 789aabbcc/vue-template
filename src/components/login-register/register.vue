<!-- 注册 -->
<template>
  <div class="login">
    <i>注 &nbsp; 册</i>
    <input type="text" class="phone" placeholder="请输入用户名" />
    <input type="password" class="password" placeholder="请输入密码" />
    <span class="logined" @click="btnClick">注册</span>
    <router-link to="/login">
      <span class="toRegister">登陆</span>
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
      swal("注册成功", "你点击了注册按钮!", "success");
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/login-register.css";
</style>