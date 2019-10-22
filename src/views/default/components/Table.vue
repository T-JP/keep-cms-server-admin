<template>
  <el-table :data="data" :height="height" stripe border highlight-current-row>
    <el-table-column
      v-for="col in cols"
      :prop="col.id"
      :key="col.id"
      :label="col.label"
      :width="col.width"
      :formatter="col.formatter"
      :show-overflow-tooltip="col.isOverflow"
      :align="col.align || 'center'"
    >
    </el-table-column>
    <slot />
  </el-table>
</template>
<script>
export default {
  name: "DfForm",
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    height: [String, Number],
    cols: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
