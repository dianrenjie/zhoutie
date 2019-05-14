<template>
	<div>
		<my-header></my-header>
		<div style="clear: both;"></div>
		<div class="left" id="left">
			<left></left>
		</div>
		<div class="right" :style="myheight">
			<router-view></router-view>
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
					"min-height":window.innerHeight-98+"px"
				}
			}
		},
		mounted(){
			
			
			
		}
	}
</script>

<style scoped>
	@import url("../../static/css/home.css");
</style>