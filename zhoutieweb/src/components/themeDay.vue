<template>
  <div>
    <ul class="cont-box">
      <li v-for="(v,i) in arr" :key="(v,i)">
        <img src="../assets/disc.png" alt>
        <span class="title">{{v.name}}</span>
        <span class="time">{{v.time}}</span>
      </li>
     
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "学习《关于新形势下党内政治生活的去哦干标准》",
          time: "2019-05-07"
        },
        {
          name: "学习《关于新形势下党内政治生活的去哦干标准》",
          time: "2019-05-07"
        },
        {
          name: "学习《关于新形势下党内政治生活的去哦干标准》",
          time: "2019-05-07"
        },
        {
          name: "学习《关于新形势下党内政治生活的去哦干标准》",
          time: "2019-05-07"
        },
        {
          name: "学习《关于新形势下党内政治生活的去哦干标准》",
          time: "2019-05-07"
        },
        {
          name: "学习《关于新形势下党内政治生活的去哦干标准》",
          time: "2019-05-07"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import url("../../static/css/themeDay.css");
</style>
