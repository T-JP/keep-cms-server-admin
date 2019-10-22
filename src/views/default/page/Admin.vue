<template>
  <div class="df-content df-page-admin">
    <!-- <div class="df-filter-tag">
      <span>过滤条件：</span>
      <el-tag size="mini" closable>超小标签</el-tag>
      <el-tag size="mini" closable>超小标签</el-tag>
      <el-tag size="mini" closable>超小标签</el-tag>
    </div> -->
    <div class="df-filter-form">
      <df-form type="filter" inline>
        <el-form-item>
          <el-input v-model="filterForm.name" placeholder="名称"></el-input>
        </el-form-item>
      </df-form>
    </div>
    <div class="df-data-table">
      <df-table :data="table.page.data" :cols="table.page.cols">
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <el-button title="预览">预览</el-button>
          </template>
        </el-table-column>
      </df-table>
    </div>
  </div>
</template>
<script>
import DfForm from "../components/Form";
import DfTable from "../components/Table";
export default {
  name: "DfPageAdmin",
  components: { DfForm, DfTable },
  data() {
    return {
      filterForm: {
        name: ""
      },
      table: {
        page: {
          data: [],
          cols: [
            {
              id: "name",
              label: "名称"
            },
            {
              id: "file",
              label: "路径"
            },
            {
              id: "custom_name",
              label: "变量名称"
            },
            {
              id: "page_category_name",
              label: "类别"
            },
            {
              id: "created_at",
              label: "创建时间"
            },
            {
              id: "modified_at",
              label: "修改时间"
            },
            {
              id: "generated_at",
              label: "生成时间"
            }
          ]
        }
      },
      page: {}
    };
  },
  methods: {
    async getData() {
      this.$ajax
        .QueryPage(this.filterForm)
        .then(res => {
          const { status, data, msg } = res;
          if (status === 200) {
            this.table.page.data = data;
          } else {
            alert(msg);
          }
          // console.log(data);
        })
        .catch(data => {
          console.log(data);
        });
    }
  },
  created() {
    this.getData();
    // this.$ajax
    //   .QueryPage()
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(data => {
    //     console.log(data);
    //   });
    // this.$ajax
    //   .Post("/Login", { account: "admin", password: "123" })
    //   .then(data => {
    //     console.log(data, "111");
    //     // this.getData();
    //   });
  }
};
</script>
<style lang="scss" scoped>
.df-page-admin {
  // padding: 10px;
}
.el-row {
  flex-basis: calc(100% / 7);
  flex-wrap: wrap;
  flex-grow: 7;
  justify-content: space-between;
}
.el-col {
  flex-grow: 1;
  min-width: 240px;
  margin: 0 0 10px 0;
  &:last-child {
    flex-grow: 1;
  }
}
</style>
