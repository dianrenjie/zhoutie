<template>
    <div class="wrap" @click="skip">
        <div class="time">
            <p class="day">08</p>
            <p class="month">2019.05</p>
        </div>
        <div class="img">
            <img src="../assets/party.png" alt="">
        </div>
        <div class="r_content">
            <div class="title">
               <b> 加强党内帮扶，共促关爱风尚——中共欧派党委积极开展困难党员走访慰问</b>
            </div>
            <div class="intro">
                &nbsp;&nbsp;&nbsp;&nbsp;为加强党内关爱帮扶,让党员、干部和广大员工切身感受到党的关怀和温暖,中共欧派集团党委在元旦春节期间持续开展走访慰问生活困难党员、老党员和老干部活动。1月15日下午，集团党委书记姚良柏、党委副书记沈崇照
                、党委员兼纪委书记李峰、党委委员黎兰等人代表欧派集团党委到江高
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        skip(){
            window.location.href='#/home/partyText'
        }
    }
}
</script>

<style scoped>
	@import url("../../static/css/partyAssist.css");
</style>
