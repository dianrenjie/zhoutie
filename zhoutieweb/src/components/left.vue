<template>
  <div>
    <ul class="home_left">
      <li class="lists now">
        <a :href="`#/home/jiagou?id=${organ_id}`">
          <img src="../assets/zuzhi.png" alt>
          <span>组织架构</span>
        </a>
      </li>
      <li class="lists">
        <a :href="`#/home/partyMember?id=${organ_id}`">
          <img src="../assets/mingce.png" alt>
          <span>党员名册</span>
        </a>
      </li>
      <li class="lists">
        <a :href="`#/home/zhendi?id=${organ_id}`">
          <img src="../assets/chendi.png" alt>
          <span>阵地建设</span>
        </a>
      </li>
      <li class="lists">
        <a :href="`#/home/threeClass?id=${organ_id}`">
          <img src="../assets/sanhui.png" alt>
          <span>三会一课</span>
          <span v-if="show" class="slider" @click="slider">></span>
        </a>
        <ul style="background:white;" v-if="show" class="slider_box">
            <li  class="lists1" v-for="(v,i) in arr.fen_arr" :key="(v,i)"><a target="_blank" :href="`#/home/threeClass?id=${v.id}`">{{v.name}}</a></li>
            
        </ul>
      </li>
      <li class="lists">
        <a :href="`#/home/themeday?id=${organ_id}`">
          <img src="../assets/dangri.png" alt>
          <span>主题党日</span>
        </a>
      </li>
      <li class="lists">
        <a :href="`#/home/cost?id=${organ_id}`">
          <img src="../assets/jiaofei.png" alt>
          <span>党员缴费</span>
        </a>
      </li>
      <li class="lists">
        <a :href="`#/home/partyAssist?id=${organ_id}`">
          <img src="../assets/bangfu.png" alt>
          <span>党内帮扶</span>
        </a>
      </li>
      <li class="lists">
        <a :href="`#/home/democratic?id=${organ_id}`">
          <img src="../assets/pingyi.png" alt>
          <span>民主评议</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
        arr:{},
        m_id:this.$route.query.id,
        show:false
    };
  },
  mounted() {
    $(".lists").click(function() {
        console.log('adas')
      $(this).addClass("now");
      $(this)
        .siblings()
        .removeClass("now");
    });
    var _this = this;
    var data = this.qs.stringify({ organ_id: this.m_id });
    this.$axios({
      url: "https://zhoutie.xiaohecheng.com/api/api/threeone_list",
      header: _this.header,
      method: "POST",
      data: data
    }).then(function(res) {
      console.log(res.data);
      _this.arr = res.data;
      if(res.data.fen_arr){
          if(res.data.fen_arr.length>0){
_this.show=true
          }
      }
    });
  },
  computed: {
    ...mapState(["organ_id"])
  },
  methods:{
        slider(){
            $(".slider_box").slideToggle();
        }
    }
};
</script>

<style scoped>
@import url("../../static/css/left.css");
</style>
