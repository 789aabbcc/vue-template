<!-- 页面主体，将头部作为组件传入 -->
<template>
  <div class="wrapper">
    <v-header></v-header>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// 引入头部组件
import vHeader from "./header";

export default {
  data() {
    return {};
  },
  components: {
    vHeader
  }
};
</script>

