<template>
    <div class="header_wrap">
        <div class="header_left">
			<div class="logo">
				
			</div>
			<div class="title">
				周铁党建平台
			</div>
		</div>
		<div class="header_right"> 
        </div>           
   </div>     
</template>

<script>
export default {
    
}
</script>

<style scoped>
	.header_wrap{
		height: 98px;
		background:rgb(244, 67, 54);
		overflow: hidden;
	}
    .header_left{
		float: left;
	}
	.header_right{
		float: right;
	}
	.logo{
		width: 70px;
		height: 70px;
		background: url(../assets/logo.png);
		background-size: cover;
		margin: 15px 20px 60px 60px ;
		float: left;
	}
    .title{
		font-size: 30px;
		color: white;
		font-weight: bold;
		line-height: 98px;
		float: left;
		font-family: '宋体';
	}    
</style>

