<template>
	<div class="footer">
		<div class="footer-items">
			<a href="">Home</a><span>|</span>
			<a href="">Home</a><span>|</span>
			<a href="">Home</a><span>|</span>
			<a href="">Home</a><span>|</span>
			<a href="">Home</a><span>|</span>
		</div>
		<div class="footer-info">
			<a href="">童乐童行有限公司版权所有</a><span>|</span>
			<a href="">蜀ICP16018773</a><span>|</span>
			<a href="">川公安网安备51019002000429</a><span>|</span>
		</div>
	</div>
</template>
<script>
	export default {
		name:"cFooter"
	}
</script>
<style lang="scss">
	.footer{
		width:100%;
		height:180px;
		background-color: #6f5582;
		display: flex;
		flex-direction: column;
		// align-items:baseline ;
		justify-content: center;
		.footer-info-common{
			display: flex;
			align-items: center;
			max-width: 1200px;
			margin: 0 auto;
			text-align: center;
			color:#fefefe;
			>a{
				color:inherit;	
				display: inline;
				padding:3px 5px;
				&:last-child{
					border:none;
				}
			}
			>span{
				&:last-child{
					display: none;
				}
			}
		}
		.footer-items{
			@extend .footer-info-common;
			flex:1;			
		}
		.footer-info{
			@extend .footer-info-common;
			height:40px;
		}
	}
</style>