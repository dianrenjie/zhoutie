<template>
  <div>
    <div class="text-center" style="text-align:center;margin-top:50px;">
      
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
</style>
