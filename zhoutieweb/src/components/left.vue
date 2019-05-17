<template>
    <div>
        <ul class="home_left">
            <li class="lists now">
                <a href="#/home/jiagou"><img src="../assets/zuzhi.png" alt=""><span>组织架构</span></a>
            </li>
            <li class="lists">
                <a href="#/home/partyMember"><img src="../assets/mingce.png" alt=""><span>党员名册</span></a>
            </li>
            <li class="lists">
                <a href="#/home/zhendi"><img src="../assets/chendi.png" alt=""><span>陈地建设</span></a>
            </li>
            <li class="lists">
                <a href="#/home/threeClass"><img src="../assets/sanhui.png" alt=""><span>三会一课</span></a>
            </li>
            <li class="lists">
                <a href="#/home/themeday"><img src="../assets/dangri.png" alt=""><span>主题党日</span></a>
            </li>
            <li class="lists">
                <a href="#/home/cost"><img src="../assets/jiaofei.png" alt=""><span>党员缴费</span></a>
            </li>
            <li class="lists">
                <a href="#/home/partyAssist"><img src="../assets/bangfu.png" alt=""><span>党内帮扶</span></a>
            </li>
            <li class="lists">
                <a href="#/home/democratic"><img src="../assets/pingyi.png" alt=""><span>民主评议</span></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
		mounted(){
              $(".lists").click(function(){
                  $(this).addClass("now")
                  $(this).siblings().removeClass("now")
              })
              
                  
        }    
}
</script>

<style scoped>
	@import url("../../static/css/left.css");           
</style>
