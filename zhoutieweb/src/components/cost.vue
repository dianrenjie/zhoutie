

<template>
  <div>
    <el-table :data="tableData" style="width: 85%;margin: 20px auto;">
      <el-table-column prop="id" label="序号" width="100"></el-table-column>

      <el-table-column prop="m_realname" label="姓名" width="100"></el-table-column>
      <el-table-column prop="total" label="合计" width="100"></el-table-column>
      <el-table-column label="一季度">
        <el-table-column prop="one" label="一月" width="80"></el-table-column>
        <el-table-column prop="two" label="二月" width="80"></el-table-column>
        <el-table-column prop="three" label="三月" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="二季度">
        <el-table-column prop="four" label="四月" width="80"></el-table-column>
        <el-table-column prop="five" label="五月" width="80"></el-table-column>
        <el-table-column prop="six" label="六月" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="三季度">
        <el-table-column prop="seven" label="七月" width="80"></el-table-column>
        <el-table-column prop="eight" label="八月" width="80"></el-table-column>
        <el-table-column prop="nine" label="九月" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="四季度">
        <el-table-column prop="ten" label="十月" width="80"></el-table-column>
        <el-table-column prop="eleven" label="十一月" width="80"></el-table-column>
        <el-table-column prop="twelve" label="十二月" width="80"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
       organ_id:this.$route.query.id,
      tableData: [

      ]
    };
  },
  mounted(){
     this.showId(this.organ_id)
    var _this = this;
      var data=this.qs.stringify({organ_id:this.organ_id})
      this.$axios({
        url: "https://zhoutie.xiaohecheng.com/api/api/dues_list",
        header:_this.header,
        method: "POST",
        data: data
      }).then(function(res){
        console.log(res.data);
        _this.tableData = res.data.data;
        console.log(_this.tableData)
      })
  },
  methods:{
...mapMutations(['showId'])
  }
};
</script>

<style scoped>
@import url("../../static/css/cost.css");
</style>
