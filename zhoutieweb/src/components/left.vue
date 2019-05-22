<template>
    <div>
        <ul class="home_left">
            <li class="lists now">
                <a :href="`#/home/jiagou?id=${organ_id}`"><img src="../assets/zuzhi.png" alt=""><span>组织架构</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/partyMember?id=${organ_id}`"><img src="../assets/mingce.png" alt=""><span>党员名册</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/zhendi?id=${organ_id}`"><img src="../assets/chendi.png" alt=""><span>陈地建设</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/threeClass?id=${organ_id}`"><img src="../assets/sanhui.png" alt=""><span>三会一课</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/themeday?id=${organ_id}`"><img src="../assets/dangri.png" alt=""><span>主题党日</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/cost?id=${organ_id}`"><img src="../assets/jiaofei.png" alt=""><span>党员缴费</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/partyAssist?id=${organ_id}`"><img src="../assets/bangfu.png" alt=""><span>党内帮扶</span></a>
            </li>
            <li class="lists">
                <a :href="`#/home/democratic?id=${organ_id}`"><img src="../assets/pingyi.png" alt=""><span>民主评议</span></a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
		mounted(){
              $(".lists").click(function(){
                  $(this).addClass("now")
                  $(this).siblings().removeClass("now")
              })
              
                  
        },
        computed:{
...mapState(["organ_id"])
  }, 
}
</script>

<style scoped>
	@import url("../../static/css/left.css");           
</style>
