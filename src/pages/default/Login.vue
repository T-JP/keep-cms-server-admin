<template>
  <div class="df-login">
    <div>
      <router-link :to="{ name: 'Admin' }">Go to admin</router-link>登录
    </div>
  </div>
</template>
<script>
export default {
  name: "DfLogin",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
