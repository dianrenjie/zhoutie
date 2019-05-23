<template>
  <div class="wrap">
    <el-tabs type="border-card">
      <el-tab-pane label="学习内容">
        <div>
          <ul class="cont-box">
            <li v-for="(v,i) in arr" :key="(v,i)">
              <img src="../assets/disc.png" alt>
              <a :href="`#/home/partyText?type=3&id=${v.id}`">
                <span class="title">{{v.title}}</span>
              </a>

              <span class="time">{{v.time}}</span>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="年度计划">
        <el-table :data="tableData" style="width: 100%;margin-left: 25px;">
          <el-table-column prop="y_name" label="年份" width="180"></el-table-column>
          <el-table-column prop="month" label="月份" width="180"></el-table-column>
          <el-table-column prop="content" label="学习内容"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      organ_id: this.$route.query.id,
      arr: [],
      tableData: []
    };
  },

  mounted() {
    this.showId(this.organ_id);
    this.getlearning();
    this.getyear()
  },
  methods: {
    ...mapMutations(["showId"]),
    getlearning() {
      var _this = this;
      var data = this.qs.stringify({ organ_id: this.organ_id });
      this.$axios({
        url: "https://zhoutie.xiaohecheng.com/api/api/threeone_list",
        header: _this.header,
        method: "POST",
        data: data
      }).then(function(res) {
        console.log(res.data);
        _this.arr = res.data.data;
      });
    },
    getyear(){
      var _this = this;
      var data = this.qs.stringify({ organ_id: this.organ_id });
      this.$axios({
        url: "https://zhoutie.xiaohecheng.com/api/api/learningcontent_list",
        header: _this.header,
        method: "POST",
        data: data
      }).then(function(res) {
        console.log(res.data.data);
        _this.tableData = res.data.data;
      });
    }
  }
};
</script>

<style scoped>
@import url("../../static/css/threeClass.css");
</style>