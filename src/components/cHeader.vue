<template>
	<div class="header">
		<div class="header-con">
			<div class="logo">
				<img src="./../assets/img/logo.png" alt="童乐童行">
			</div>
			<div class="nav">
				<div class="active">Home</div>
				<div>Home</div>
				<div>Home</div>
				<div>Home</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"cHeader"
	}
</script>
<style lang="scss">
.header{
	width:100%;height:60px;
	background-color: #6f5582;
	.header-con{
		display: flex;
		max-width:1200px;
		height:inherit;
		margin:0 auto;
		flex-direction: row;
		.logo{
			width:60px;
			height: inherit;
			img{
				height:inherit;
			}
		}
		.nav{
			display: flex;
			height:inherit;
			flex:1;
			flex-direction:row; 
			justify-content: flex-end;
			>div{
				width:100px;height: inherit;
				display: flex;
				justify-content: center;
				align-items: center;
				color:#fefefe;
				&.active{
					background-color: #f46f2a;
				}
			}
		}
	}
}
	
</style>