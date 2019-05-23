<template>
  <div class="wrap">
    <div class="header">
      <div class="time">会议时间：{{appdata[0].time}}</div>
      <div class="address">会议地点：{{appdata[0].address}}</div>
    </div>
    <div class="body">
      <div class="body_hd">
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo1.png" alt>
          </div>
          <div class="number">
            <p class="person">{{appdata[0].partytotal}}</p>
            <p class="name">党员总数</p>
          </div>
        </div>
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo2.png" alt>
          </div>
          <div class="number">
            <p class="person">{{appdata[0].partypre}}</p>
            <p class="name">预备党员数</p>
          </div>
        </div>
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo3.png" alt>
          </div>
          <div class="number">
            <p class="person">{{appdata[0].partycanjia}}</p>
            <p class="name">参加人数</p>
          </div>
        </div>
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo4.png" alt>
          </div>
          <div class="number">
            <p class="person">{{appdata[0].partyreport}}</p>
            <p class="name">书面汇报人数</p>
          </div>
        </div>
      </div>
      <div class="body_bd">
        <div class="left">
          <div class="left_title">
            <p class="evaluate">评价结果：</p>
            <p class="ratio">占党员总数比例</p>
          </div>
          <div class="party_member">
            <div class="party_left">
              <p>优秀党员</p>
              <p>合格党员</p>
              <p>基本合格党员</p>
              <p>不合格党员</p>
            </div>
            <div class="party_right">
              <el-progress :percentage="good_num" color="rgb(243,77,78)"></el-progress>
              <el-progress :percentage="qualified_num" color="rgb(37,208,105)"></el-progress>
              <el-progress :percentage="basic_num" color="rgb(253,216,67)"></el-progress>
              <el-progress :percentage="tableData_num" color="rgb(64,138,255)"></el-progress>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="excellent">优秀党员：</p>
          <span v-for="(v,i) in good" :key="(v,i)">{{v.m_realname}}&emsp;</span>
        </div>
      </div>
    </div>
    <div class="foot">
      <p class="disqualification">不合格党员情况：</p>
      <div class="form">
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="m_realname" label="姓名" width="120"></el-table-column>
            <el-table-column prop="m_passtime" label="入党时间" width="120"></el-table-column>
            
            <el-table-column prop="reason" label="不合格原因" width="450"></el-table-column>
            <el-table-column prop="result" label="处理结果"></el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      organ_id: this.$route.query.id,
      // 这是不合格的
      tableData: [],
      // 这是优秀的
      good:[],
      // 这是合格的
      qualified:[],
      // 这是基本合格的
      basic:[],
      good_num:"",
      qualified_num:"",
      basic_num:"",
      tableData_num:"",
      appdata:[]
    };
  },
  mounted() {
    this.showId(this.organ_id)
    var _this = this;
    var data = this.qs.stringify({ organ_id: this.organ_id });
    this.$axios({
      url: "https://zhoutie.xiaohecheng.com/api/api/appraise_list",
      header: _this.header,
      method: "POST",
      data: data
    }).then(function(res) {
      console.log(res.data);
     var data=res.data.data;
     _this.appdata=res.data.appdata;
     for(var i=0;i<data.length;i++){
       if(data[i].qu_status==4){
           _this.tableData.push(data[i])
           _this.tableData_num=Math.ceil(_this.tableData.length/data.length*100)
       }
       if(data[i].qu_status==3){
           _this.basic.push(data[i])
            _this.basic_num=Math.ceil(_this.basic.length/data.length*100)
       }
       if(data[i].qu_status==2){
           _this.qualified.push(data[i])
            _this.qualified_num=Math.ceil(_this.qualified.length/data.length*100)
       }
       if(data[i].qu_status==1){
           _this.good.push(data[i])
            _this.good_num=Math.ceil(_this.good.length/data.length*100)
       }
     }
    });
  },
  methods:{
    ...mapMutations(['showId'])
  }
};
</script>
<style scoped>
@import url("../../static/css/democratic.css");
</style>

