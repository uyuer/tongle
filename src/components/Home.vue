<template>
	<div class="container">
		<div class="home-body" ref="homeBody">
			<img class="home-body-img" :src="tempurl">
			<drag-img
				v-if="bodyImgLoaded"
				v-for="img in imgs" 
				v-bind:imgItem="img" 
				v-bind:key="img.id">
			</drag-img>	
			
		</div>
	</div>
</template>
<script>
	import dragImg from '@/components/dragImg'
 	export default{
		name:"Home",
		components:{
			'drag-img':dragImg
		},
		data(){
			return {
				bodyImgLoaded:false,
				tempurl:'',
				url:'./static/img/home/home_body.png',
				imgs:[
					{
						src:'./static/img/home/garniture_1.png',
						alt:'棒棒糖',
						style:{
							left:'0px',
							top:'0px',
							width:'auto',
							height:'250px',
							transform:'rotate(-60deg)'
						}					
					},
					{
						src:'./static/img/home/garniture_2.png',
						alt:'棒棒糖',
						style:{
							left:'0px',
							top:'0px',
							width:'250px',
							height:'auto',
							transform:'rotate(30deg)'
						}						
					},
					
				]
			}
		},
		computed:{
			
		},
		mounted(){
			this.bodyImgload();
			console.log(this.$refs.homeBody)
		},
		methods:{
			bodyImgload(){
				var newImg=new Image();
				newImg.src=this.url;
				newImg.onerror=()=>{
					console.log(123)
				}
				newImg.onload=()=>{
					console.log(newImg.src)
					this.tempurl=newImg.src;
					this.bodyImgLoaded=true;
				}
			},

		},

	}
</script>
<style lang="scss">
	.container{
		overflow: hidden;
	}
	.home-body{
		width: 100%;
		position: relative;
		user-select:none;
		.home-body-img{
			position:relative;
			z-index: 1;
			width: inherit;
		}
	}
</style>