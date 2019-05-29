<template>
  <div>
    <div class="all-box">
      <div class="one-title title">{{show==true?"党总支部书记":"党支部书记"}}：{{show==true?allbranch:onebranch}}</div>
      <div class="border"></div>
      <div class="two-title title">{{show==true?"党总支部副书记":"党支部副书记"}}：{{show==true?fuallbranch:fuonebranch}}</div>
      <div class="border"></div>
      <div class="title-box">
        <div v-for="(v,i) in weiyuan" :key="(v,i)" class="three-title">{{v.r_name}}：{{v.realname}}</div>
      </div>
      <div class="border" v-if="show"></div>
      <div class="title-box" v-if="show">
        <div v-for="(v,i) in branch" :key="(v,i)" class="three-title">
          {{v.r_name}}：
          <br>{{v.realname}}
        </div>
       
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
      weiyuan: [],
      branch: [],
      allbranch:"",
      fuallbranch:"",
      show:false,
      onebranch:"",
      fuonebranch:""
    };
  },

  mounted() {
    this.showId(this.organ_id);
    var that = this;
    var data = this.qs.stringify({ organ_id: that.organ_id });
    this.$axios({
      url: "https://zhoutie.xiaohecheng.com/api/api/organ_list",
      header: that.header,
      method: "POST",
      data: data
    }).then(res => {
      console.log(res.data);
      var data = res.data.data;
      
      for (var i = 0; i < data.length; i++) {
        if (data[i].r_name == "委员") {
          that.weiyuan.push(data[i]);
        }
        if (data[i].r_name == "党总支部书记") {
          that.show=true
        }
        if (data[i].r_name == "党支部书记") {
          that.branch.push(data[i]);
          that.onebranch=data[i].realname
        }
         if (data[i].r_name == "党总支部书记") {
          that.allbranch=data[i].realname
        }
        if (data[i].r_name == "党总支部副书记") {
          that.fuallbranch=data[i].realname
        }
        if (data[i].r_name == "党支部副书记") {
          that.fuonebranch=data[i].realname
        }
      }
    });
  },
  methods: {
    ...mapMutations(["showId"])
  }
};
</script>
<style scoped>
@import url("../../static/css/jiagou.css");
</style>
