<template>
  <div>
    <el-table ref="filterTable" :data="arr" style="width: 80%;margin: 20px auto;">
      <el-table-column prop="id" label="序号" width="180" column-key="id"></el-table-column>
      <el-table-column prop="realname" label="党员名称" width="180"></el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="100"
        :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.gender === '男' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.gender}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="birth" label="出生日期" :formatter="formatter"></el-table-column>
      <el-table-column prop="education" label="学历" :formatter="education"></el-table-column>
      <el-table-column prop="passtime" label="入党时间" :formatter="passtime"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="size" :current-page.sync="currentpage"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      currentpage: 1,
      value: "5"
    };
  },
  mounted() {
    var _this = this;
    var data = this.qs.stringify({ organ_id: "1" });
    this.$axios({
      url: "/api/api/member_list",
      header: _this.header,
      method: "POST",
      data: data
    }).then(function(res) {
      console.log(res.data);    
      _this.list = res.data.data;
    });
  },
  methods: {
    passtime(row, column) {
      return row.passtime;
    },
    education(row, column) {
      return row.education;
    },
    formatter(row, column) {
      return row.birth;
    },
    filterTag(value, row) {
      return row.gender === value;
    }
  },
  computed: {
    //分页
    arr() {
      var currentpage = this.currentpage;
      var arr2 = [];
      var size = this.value;
      for (var i = currentpage * size - size; i < size * currentpage; i++) {
        if (i < this.list.length) {
          arr2.push(this.list[i]);
        }
      }
      return arr2;
    },
    size() {
      var len = this.list.length;
      var size;
      size = Math.ceil(len / this.value) * 10;
      return size;
    }
  }
};
</script>
<style scoped>
@import url("../../static/css/partyMember.css");
</style>