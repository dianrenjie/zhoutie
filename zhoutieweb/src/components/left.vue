<template>
    <div>
        <ul class="home_left">
            <li class="now">
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
                <a href="#"><li>党内帮扶</li></a>
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
			$('.home_left>li').click(function(){
                $('.lists').eq(index).stop().slideToggle();
                $('.lists').eq(index).siblings('.lists').slideUp();
                $(this).addClass('now').siblings('li').removeClass('now')
            })            
        }    
}
</script>

<style>
	.home_left{
		color: black;	
	}
	a{
		color: black;
		text-decoration: none;
	} 
	.home_left li{
		line-height: 92px;
        text-align: center
	}
	.now{
		background: rgb(255, 237, 235);
	}           
</style>
