<template>
  <div>
    <div class="all-img-box">
      <div v-for="(v,i) in arr" :key="(v,i)" class="img-box">
        <div class="img_box">
          <img :src="v.img" alt>
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
      arr: [
        {
          img: require("../assets/mingce.png"),
          title: "阵地文化墙"
        },
       
        {
          img: require("../assets/logo.png"),
          title: "水电费就含税单价覅和时代峻峰his度覅无金额胜多负少"
        },
        {
          img: require("../assets/mingce.png"),
          title: "水电费就含税单价覅和时代峻峰his度覅无金额胜多负少"
        },
        {
          img: require("../assets/sanhui.png"),
          title: "水电费就含税"
        },
        {
          img: require("../assets/mingce.png"),
          title: "水电费就含税单价覅和时代峻峰his度覅无金额胜多负少"
        },
        {
          img: require("../assets/mingce.png"),
          title: "水电费就含税单价覅和时代峻峰his度覅无金额胜多负少"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import url("../../static/css/zhendi.css");
</style>
