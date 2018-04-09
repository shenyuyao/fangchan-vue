<template>
	<div class="newxq">
		<div class="top">
			<div class="con">
				楼市动向 ＞ {{state.p1xq}}
			</div>
		</div>
		<div class="newxq_cont">
			<div class="newxq_left">
				<h2	>{{state.p1xq}}</h2>
				<div class="newxq_text">
					<p>发布者：网站管理员</p>
					<p>发布时间：2018-01-11 10:34</p>
					<p>分类：楼市动向</p>
				</div>
				<img :src="state.img" alt="" />
				<p class="newxq_p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果需要添加一条新的资讯，我们建议你复制本页资讯，然后更改分类。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;応 损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩 忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙 怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;応 损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩 忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙 怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑！恒！恓！恔恖恗恘恙恚恛恜恝恞恠恡恦，恧恫恬恮恰恱恲恴恷恹恺，恻恽恾恿悀悁悂悃悆悇悈悊。</p>
			</div>
			<div class="newxq_right">
				<Newsss />
			</div>
		</div>
	</div>
</template>

<script>
	import Newsss from '@/components/Newsss.vue'
    export default {
        name:"Newxq",
        data(){
            return {
                state:{}
            }
        },
        components: {
			Newsss
		},
        created(){
            this.$http.post("http://localhost:3000/newxq",{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.state=e.body[0])
        }
    }
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	.top {
		width: 100%;
		height: 80px;
		background-color: #F4F4F4;
		line-height: 80px;
		font-size: 14px;
		color: #333333;
	}
	
	.con {
		width: 85%;
		margin: 0 auto;
	}
	
	.newxq_cont {
		width: 86%;
		margin: auto;
	}
	
	.newxq_left {
		width: 70%;
		float: left;
		margin-bottom: 50px;
	}
	.newxq_left h2{
		margin-top: 50px;
		margin-bottom: 25px;
	}
	.newxq_text{
		width: 100%;
		height: 40px;
		background-color: #F4F4F4;
	}
	.newxq_text p{
		width: 33%;
		float: left;
		font-size: 12px;
		line-height: 40px;
		text-align: center;
	}
	.newxq_left img{
		width: 100%;
		height: 320px;
	}
	.newxq_p{
		font-size: 12px;
		line-height: 30px;
		margin-top: 20px;
	}
	.newxq_right{
		float: right;
		width: 25%;
	}
</style>
