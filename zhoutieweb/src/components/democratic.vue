<template>
  <div class="wrap">
    <div class="header">
      <div class="time">会议时间：</div>
      <div class="address">会议地点：</div>
    </div>
    <div class="body">
      <div class="body_hd">
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo1.png" alt>
          </div>
          <div class="number">
            <p class="person">3166</p>
            <p class="name">党员总数</p>
          </div>
        </div>
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo2.png" alt>
          </div>
          <div class="number">
            <p class="person">3166</p>
            <p class="name">党员总数</p>
          </div>
        </div>
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo3.png" alt>
          </div>
          <div class="number">
            <p class="person">3166</p>
            <p class="name">党员总数</p>
          </div>
        </div>
        <div class="statistics">
          <div class="logo">
            <img src="../../src/assets/logo4.png" alt>
          </div>
          <div class="number">
            <p class="person">3166</p>
            <p class="name">党员总数</p>
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
              <el-progress :percentage="75" color="rgb(243,77,78)"></el-progress>
              <el-progress :percentage="80" color="rgb(37,208,105)"></el-progress>
              <el-progress :percentage="70" color="rgb(253,216,67)"></el-progress>
              <el-progress :percentage="20" color="rgb(64,138,255)"></el-progress>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="excellent">优秀党员：</p>
        </div>
      </div>
    </div>
    <div class="foot">
      <p class="disqualification">不合格党员情况：</p>
      <div class="form">
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="姓名" width="120"></el-table-column>
            <el-table-column prop="time" label="入党时间" width="120"></el-table-column>
            <el-table-column prop="post" label="岗位" width="200"></el-table-column>
            <el-table-column prop="cause" label="不合格原因" width="450"></el-table-column>
            <el-table-column prop="result" label="处理结果" ></el-table-column>
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
export default {
        data() {
      return {
         organ_id:this.$route.query.id,
        tableData: [{
          date: '2016-05-02',
          time: '王小虎',
          post: '村长',
          cause: '工作不认真',
          result: 'pass',
        }]
      }
    }
};
</script>
<style scoped>
@import url("../../static/css/democratic.css");
</style>

