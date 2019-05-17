<template>
<div>
<div class="wrap" @click="skip(v.id)" v-for="(v,i) in list" :key="(v,i)">
    <div class="time">
      <p class="day">{{v.time.slice(8,10)}}</p>
      <p class="month">{{v.time.slice(0,7)}}</p>
    </div>
    <div class="img">
      <img :src="imgpath+v.image" alt>
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
export default {
    data(){
        return{
            list:[],
            imgpath:this.imgpath
        }
    },
  methods: {
    skip(id) {
      window.location.href = "#/home/partyText?type=2&id=" + id;
    }
  },
  mounted() {
    var _this = this;
    var data = this.qs.stringify({ organ_id: "13" });
    this.$axios({
      url: "/api/api/help_list",
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
