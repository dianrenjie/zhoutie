<template>
  <div>
    <div class="all-img-box">
      <div v-for="(v,i) in list" :key="(v,i)" class="img-box">
        <div class="img_box">
          <img :src="imgpath+v.image" alt>
        </div>
        <p class="img-title">{{v.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      imgpath:this.imgpath
    };
  },
  mounted(){
    var _this = this;
    var data = this.qs.stringify({ organ_id: "14" });
    this.$axios({
      url: "/api/api/camp_list",
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
@import url("../../static/css/zhendi.css");
</style>
