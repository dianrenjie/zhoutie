<template>
  <div>
    <ul class="cont-box">
      <li v-for="(v,i) in arr" :key="(v,i)">
        <img src="../assets/disc.png" alt>
        <a :href="`#/home/partyText?type=1&organ=${organ_id}&id=${v.id}`"><span class="title">{{v.title}}</span></a>
        <span class="time">{{v.time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
      organ_id:this.$route.query.id,
      arr: []
      // {
      //   name: "学习《关于新形势下党内政治生活的去哦干标准》",
      //   time: "2019-05-07"
      // },
      // {
      //   name: "学习《关于新形势下党内政治生活的去哦干标准》",
      //   time: "2019-05-07"
      // },
      // {
      //   name: "学习《关于新形势下党内政治生活的去哦干标准》",
      //   time: "2019-05-07"
      // },
      // {
      //   name: "学习《关于新形势下党内政治生活的去哦干标准》",
      //   time: "2019-05-07"
      // },
      // {
      //   name: "学习《关于新形势下党内政治生活的去哦干标准》",
      //   time: "2019-05-07"
      // },
      // {
      //   name: "学习《关于新形势下党内政治生活的去哦干标准》",
      //   time: "2019-05-07"
      // }
    };
  },
  
  methods: {
    ...mapMutations(['showId']),
    getData() {
      var _this = this;
      var data=this.qs.stringify({organ_id:this.organ_id})
      this.$axios({
        url: "https://zhoutie.xiaohecheng.com/api/api/news_list",
        header:_this.header,
        method: "POST",
        data: data
      }).then(function(res){
        console.log(res.data);
        _this.arr = res.data.data;
      })
     
    }
    
  },
  mounted() {
    this.showId(this.organ_id)
    console.log(this.organ_id)
      this.getData();
      
      
  }
};
</script>
<style scoped>
@import url("../../static/css/themeDay.css");
</style>
