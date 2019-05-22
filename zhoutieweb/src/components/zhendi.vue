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
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
       organ_id:this.$route.query.id,
      list: [],
      imgpath:this.imgpath
    };
  },
   
  mounted(){
    this.showId(this.organ_id)
    var _this = this;
    var data = this.qs.stringify({ organ_id:this.organ_id});
    this.$axios({
      url: "https://zhoutie.xiaohecheng.com/api/api/camp_list",
      header: _this.header,
      method: "POST",
      data: data
    }).then(function(res) {
      console.log(res.data);
      _this.list = res.data.data;
    });
  },
  methods:{
    ...mapMutations(['showId'])
  }
};
</script>
<style scoped>
@import url("../../static/css/zhendi.css");
</style>
