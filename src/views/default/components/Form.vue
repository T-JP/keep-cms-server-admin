<template>
  <el-form :class="type" :inline="inline" :label-width="labelWidth">
    <slot />
  </el-form>
</template>
<script>
export default {
  name: "DfForm",
  props: {
    type: {
      type: String,
      default: "view"
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelWidth: String
  },
  data() {
    return {};
  }
};
</script>
