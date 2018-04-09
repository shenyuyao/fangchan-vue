<template>
	<div class="item">
		<img :src="content.img">  
			<ul>
				<li class="name">{{content.name}}</li>
				<li>地区：{{content.des}}</li>
				<li>户型：{{content.house}}</li>
				<li>价格：{{content.price}}</li>
			</ul>
	</div>
</template>
<script>
	export default {
		name: "Item",
		props: {
			content: Object
		}
	}
</script>
<style>
	.item{
		width: 32%;
		height: 320px;
		background-color: #ffffff;
		float: left;
		margin-left: 1%;
		margin-bottom: 30px;
		color: #000000;
	}
	.item img{
		width: 100%;
		height: 175px;
	}
	.item li{
		font-size: 13px;
		line-height: 22px;
		list-style: none;
		margin-left: 15px;
	}
	.item .name{
		line-height: 55px;
		font-size: 16px;
	}
</style>
