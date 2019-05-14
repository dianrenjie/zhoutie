<template>
    <div>
        <ul class="home_left">
            <li class="lists now">
                <a href="#"><li>组织架构</li></a>
            </li>
            <li class="lists">
                <a href="#"><li>党员名册</li></a>
            </li>
            <li class="lists">
                <a href="#"><li>陈地建设</li></a>
            </li>
            <li class="lists">
                <a href="#"><li>三会一课</li></a>
            </li>
            <li class="lists">
                <a href="#"><li>主题党日</li></a>
            </li>
            <li class="lists">
                <a href="#"><li>党员缴费</li></a>
            </li>
            <li class="lists">
                <a href="#/home/partyAssist"><li>党内帮扶</li></a>
            </li>
            <li class="lists">
                <a href="#"><li>民主评议</li></a>
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

<style>
	@import url("../../static/css/left.css");           
</style>
