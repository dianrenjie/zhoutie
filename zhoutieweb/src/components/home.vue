<template>
	<div>
		<my-header></my-header>
		<div style="clear: both;"></div>
		<div class="left" :style="myheight">
			<left></left>
		</div>
		<div class="right" :style="myheight">
			<router-view>111</router-view>
		</div>
	</div>
</template>

<script>
	import myHeader from './header'
	import left from './left'
	export default{
		components:{
			myHeader,
			left
		},
		data(){
			return{
				myheight:{
					height:window.innerHeight-98+'px'
				}
			}
		},
		mounted(){
			var _this=this;
			window.onresize=function(){  //当服务器窗口大小发生变化时执行函数
				_this.myheight={
					height:window.innerHeight-98+'px'
				}
			}
		}
	}
</script>

<style scoped>
	@import url("../../static/css/home.css");
</style>