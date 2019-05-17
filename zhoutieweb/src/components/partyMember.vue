<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 80%;margin: 20px auto;">
      <el-table-column
        prop="number"
        label="序号"
        width="180"
        column-key="number"
        :filters="[{text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4', value: '4'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="name" label="党员名称" width="180"></el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100"
        :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.sex === '男' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.sex}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="birthday" label="出生日期" :formatter="formatter"></el-table-column>
      <el-table-column prop="education" label="学历" :formatter="education"></el-table-column>
      <el-table-column prop="partyTime" label="入党时间" :formatter="partyTime"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "1",
          name: "王小虎",
          birthday: "2019-2-15",
          sex: "男",
          education:"硕士",
          partyTime:"2019-5-15"
        },
        {
          number: "2",
          name: "王小虎",
          birthday: "2019-1-15",
          sex: "女",
          education:"博士",
          partyTime:"2019-2-15",
        },
        {
          number: "3",
          name: "王小虎",
          birthday: "2019-2-15",
          sex: "男",
          education:"大学",
          partyTime:"2019-3-15",
        },
        {
          number: "4",
          name: "王小虎",
          birthday: "2019-3-15",
          sex: "女",
          education:"高中",
          partyTime:"2019-4-15",
        }
      ]
    };
  },
  mounted(){
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
    
    partyTime(row, column) {
      return row.partyTime;
    }, 
    education(row, column) {
      return row.education;
    }, 
    formatter(row, column) {
      return row.birthday;
    },
    filterTag(value, row) {
      return row.sex === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>