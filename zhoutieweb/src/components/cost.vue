

<template>
  <div class="app">
    <el-table :data="tableData" style="width: 100%;margin:auto;">
      <el-table-column prop="date" label="序号" width="100"></el-table-column>

      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="name" label="合计" width="100"></el-table-column>
      <el-table-column label="一季度">
        <el-table-column prop="province" label="一月" width="80"></el-table-column>
        <el-table-column prop="city" label="二月" width="80"></el-table-column>
        <el-table-column prop="address" label="三月" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="二季度">
        <el-table-column prop="province" label="四月" width="80"></el-table-column>
        <el-table-column prop="city" label="五月" width="80"></el-table-column>
        <el-table-column prop="address" label="六月" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="三季度">
        <el-table-column prop="province" label="七月" width="80"></el-table-column>
        <el-table-column prop="city" label="八月" width="80"></el-table-column>
        <el-table-column prop="address" label="九月" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="四季度">
        <el-table-column prop="province" label="十月" width="80"></el-table-column>
        <el-table-column prop="city" label="十一月" width="80"></el-table-column>
        <el-table-column prop="address" label="十二月" width="80"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [

      ]
    };
  }
};
</script>

<style scoped>
@import url("../../static/css/cost.css");
</style>
