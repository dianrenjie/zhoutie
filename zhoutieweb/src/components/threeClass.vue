<template>
  <div class="wrap">
    <div class="disc_box">
<img class="disc" src="../assets/disc1.png" alt>党员大会
    <img class="disc" src="../assets/disc2.png" alt>支部委员会
    <img class="disc" src="../assets/disc3.png" alt>党小组会
    <img class="disc" src="../assets/disc4.png" alt>党课
    </div>
    
    <el-tabs type="border-card">
      <el-tab-pane label="学习内容">
        <div>
          <ul class="cont-box">
            <li v-for="(v,i) in arr" :key="(v,i)">
              <img v-if="v.type_id==1" src="../assets/disc1.png" alt>
              <img v-if="v.type_id==2" src="../assets/disc2.png" alt>
              <img v-if="v.type_id==3" src="../assets/disc3.png" alt>
              <img v-if="v.type_id==4" src="../assets/disc4.png" alt>
              <a :href="`#/home/partyText?organ=${organ_id}&type=3&id=${v.id}`">
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