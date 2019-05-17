<template>
  <div class="box">
    <div class="hint" v-if="type==2">
      <span class="return" @click="back">党内帮扶列表</span> > 正文
    </div>
    <div class="hint" v-if="type==1">
      <span class="return" @click="back">主题党日列表</span> > 正文
    </div>
    <div class="title">{{text.title}}</div>
    <div class="time">
      {{text.time}}
     
    </div>

    <div class="text" v-html="text.content">
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: this.$route.query.type,
      id: this.$route.query.id,
      text: {}
    };
  },
  mounted() {
    // 这是从主题党日进来的内容
    if (this.type == 1) {
      var that = this;
      var data = this.qs.stringify({ id: that.id });
      this.$axios({
        url: "/api/api/news_detail",
        header: that.header,
        method: "POST",
        data: data
      }).then(res => {
        console.log(res.data);
        that.text = res.data.data;
      });
    }
    // 这是从党内帮扶进来的内容
    if (this.type == 2) {
      var that = this;
      var data = this.qs.stringify({ id: that.id });
      this.$axios({
        url: "/api/api/help_detail",
        header: that.header,
        method: "POST",
        data: data
      }).then(res => {
        console.log(res.data);
        that.text = res.data.data;
      });
    }
  },
  methods: {
    back() {
      if (this.type == 1) {
        window.location.href = "#/home/themeDay";
      }
      if (this.type == 2) {
        window.location.href = "#/home/partyAssist";
      }
    }
  }
};
</script>

<style scoped>
@import url("../../static/css/partyText.css");
</style>


