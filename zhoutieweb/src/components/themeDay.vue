<template>
  <div>
    <ul class="cont-box">
      <li v-for="(v,i) in arr" :key="(v,i)">
        <img src="../assets/disc.png" alt>
        <span class="title">{{v.title}}</span>
        <span class="time">{{v.time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    getData() {
      var _this = this;
      var data=this.qs.stringify({organ_id:"2"})
      this.$axios({
        url: "/api/api/news_list",
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
      this.getData();
      
      
  }
};
</script>
<style scoped>
@import url("../../static/css/themeDay.css");
</style>
