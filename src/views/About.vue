<template>
	<div class="about">
		<div class="about_top">
			<p>首页  > {{tit}}</p>
		</div>
		<div class="about_cont">
			<div class="about_left">
				<div class="about_text">
					<div class="block_kuai"></div>
					<p>{{tit}}- NEWS</p>
				</div>
				<div v-for="i in state">
					<router-link :to="'/detail/'+i.id">
						<Item :content="i" />
					</router-link>
				</div>
			</div>
			<div class="about_right">
				<Newsss />
			</div>
		</div>
	</div>
</template>
<script>
	import Item from './Item.vue'
	import Newsss from '@/components/Newsss.vue'
	export default {
		data() {
			return {
				state: [],
				tit: ""
			}
		},
		components: {
			Item,
			Newsss
		},
		watch: {
			arr: function() {},
			'$route' () {
				if(this.$route.params.fenlei == 1) {
					this.tit = "全新楼盘"
				}
				if(this.$route.params.fenlei == 2) {
					this.tit = "二手楼盘"
				}
				if(this.$route.params.fenlei == 3) {
					this.tit = "全新商铺"
				}
				this.$http.post('http://localhost:3000', {
					fenlei: this.$route.params.fenlei
				}, {
					emulateJSON: true
				}).then(e => this.state = e.body)
			}
		},
		created() {
			if(this.$route.params.fenlei == 1) {
				this.tit = "全新楼盘"
			}
			if(this.$route.params.fenlei == 2) {
				this.tit = "二手楼盘"
			}
			if(this.$route.params.fenlei == 3) {
					this.tit = "全新商铺"
				}
			this.$http.post('http://localhost:3000', {
				fenlei: this.$route.params.fenlei
			}, {
				emulateJSON: true
			}).then(e => this.state = e.body)
		}
	}
</script>
<style>
	.about_top {
		width: 100%;
		height: 80px;
		background-color: #F7F7F7;
	}
	
	.about_top p {
		width: 86%;
		margin: auto;
		line-height: 80px;
		font-size: 14px;
	}
	.about_cont {
		width: 86%;
		margin: auto;
	}
	.about_left {
		width: 70%;
		float: left;
	}
	.about_right{
		float: right;
		width: 25%;
	}
	.about_text {
		width: 100%;
		height: 120px;
		line-height: 120px;
		font-size: 14px;
	}
	
	.about_text .block_kuai {
		width: 20px;
		height: 20px;
		background-color: #000000;
		float: left;
		margin: 50px 15px 50px 0;
	}
</style>