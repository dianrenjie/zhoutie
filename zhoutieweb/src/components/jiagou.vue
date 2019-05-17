<template>
  <div>
    <div class="all-box">
      <div class="one-title title">党总支部书记：佃仁杰</div>
      <div class="border"></div>
      <div class="two-title title">党总支部副书记：佃仁杰</div>
       <div class="border"></div>
       <div class="title-box">
           <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
            <div class="three-title">
             委员：佃仁杰
           </div>
           
       </div>
       <div class="border"></div>
       <div class="title-box">
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
            <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           <div class="three-title">
             XX支部书记：<br>
             佃仁杰
           </div>
           
       </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {id:0,
          label:"redregrf",
          children:[

              {
            id: 2,
            label: "产品研发部   |  当副手到附近 | 当副手到附近 |当副手到附近 | 当副手到附近 | 当副手到附近 | 当副手到附近 | 当副手到附近 | 当副手到附近",
            
          },
          
          ]
          }
        ]
      },
      horizontal: false,
      collapsable: true,
      expandAll: false,
      labelClassName: "bg-white"
    };
  },

  mountrd() {},
  methods: {
    onExpand(data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    onNodeClick(e, data) {
      alert(data.label);
    }
  }
};
</script>
<style scoped>
@import url("../../static/css/jiagou.css");
</style>
