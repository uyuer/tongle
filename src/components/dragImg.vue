<template>
	<div class="drag-img" v-drag v-bind:style="imgStyle">
		<img v-bind:src="imgItem.src" alt="src.alt"/>
	</div>
</template>
<script>
	export default {
		name: 'dragImg',
		props:{
			imgItem:{
				type:Object
			}
		},
		created(){
			// console.log(this.$refs.homeBody)
		},
		computed:{
			imgStyle(){
				let imgItem=this.imgItem.style;
				let style={};
				for(let item in imgItem){
					console.log(item)
					style[item]=imgItem[item];
				}
				return style;
			}
		},
		methods:{

		}
	}
</script>
<style lang='scss'>
	.drag-img {
		display: inline-block;
		position:absolute;
		z-index: 2;
		top:0;
		left: 0;
		>img{
			display: block;
		}
		>.shade{
			position: absolute;height: inherit;width: inherit;top: 0;left: 0
		}
	}
</style>