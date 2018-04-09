<template>
	<div class="news clearfix">
		<div class="news_inp">
			<input type="text" placeholder="输入楼盘名称"/>
		</div>
		<div class="news_text">
			<div class="block_kuai"></div>
			<p>楼市动向 - NEWS</p>
		</div>
		<ul>
			<li v-for="i in arr">
				<a href="News.vue#/new"><p>{{i.p1}}</p></a>
				<p class="p2">{{i.p2}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr:[]
			}
		},
		created(){
			this.$http.get("http://localhost:3000/news").then(e=>this.arr=e.body)
		}
	}
</script>

<style>
	.news{
		width: 100%;
		height: 630px;
		background-color: #F7F7F7;
		float: right;
		font-size: 14px;
		margin-top: 50px;
	}
	.news_inp{
		width: 100%;
		height: 70px;
	}
	.news_inp input{
		width: 225px;
		height: 35px;
		margin-left: 10%;
		margin-top: 30px;
	}
	.news_text{
		height: 90px;
		line-height: 90px;
	}
	.news_text .block_kuai{
		width: 20px;
		height: 20px;
		background-color: #000000;
		float: left;
		margin: 35px 15px 35px 30px;
	}
	
	
	.news li{
		list-style: none;
		line-height: 23px;
		margin-left: 30px;
		margin-bottom: 24px;
	}
	li a{
		color: #000000;
		text-decoration: none;                                                                                               
	}
	.news li .p2{
		color: #ccc;
	}
</style>