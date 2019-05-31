<template>
<div>
<div class="wrap" @click="skip(v.id)" v-for="(v,i) in list" :key="(v,i)">
    <div class="time">
      <p class="day">{{v.time.slice(8,10)}}</p>
      <p class="month">{{v.time.slice(0,7)}}</p>
    </div>
    <div class="img">
      <img :src="v.image.indexOf('http')==-1?imgpath+v.image:v.image" alt>
    </div>
    <div class="r_content">
      <div class="title">
        <b>{{v.title}}</b>
      </div>
      <div class="intro">
        &nbsp;&nbsp;&nbsp;&nbsp;{{v.intro}}
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return{
           organ_id:this.$route.query.id,
            list:[],
            imgpath:this.imgpath
        }
    },
  methods: {
    skip(id) {
      window.location.href = "#/home/partyText?organ="+this.organ_id+"&type=2&id=" + id;
    },
    ...mapMutations(['showId'])
  },
   
  mounted() {
    this.showId(this.organ_id)
    var _this = this;
    var data = this.qs.stringify({ organ_id:this.organ_id});
    this.$axios({
      url: "https://zhoutie.xiaohecheng.com/api/api/help_list",
      header: _this.header,
      method: "POST",
      data: data
    }).then(function(res) {
      console.log(res.data);
      _this.list = res.data.data;
    });
  }
};
</script>

<style scoped>
@import url("../../static/css/partyAssist.css");
</style>
