<template>
	<div class="homeStyle">
		<div class="wrap">
			<a href="/about/">
				<img src="../../assets/img/image.jpg" alt="">
			</a>
			<!-- <div>记录点滴</div> -->
		</div>
	<!-- 	<a href="https://xugaoyi.com/">链接</a>
		<a href="https://blog.csdn.net/loveshanqian/article/details/106332636"></a> -->
		<ul>
			<!-- <li v-for="item in listData">
				<a :href="item.path"
				   class="blog-post__link">
				    {{ item.title }}
				</a>
			</li> -->
		</ul>
	</div>
</template>

<script>
	export default{
		props: {
		    list: {
		        type: Array,
		        default: () => []
		    }
		},
		data(){
			return{
				listData:[]
			}
		},
		created(){
			console.log(this.list,'2323')
			this.list.forEach((item,index)=>{
				if(item.path.indexOf('/blog/') > -1){
					this.listData.push(item)
				}
			})
			
		}
	}
</script>

<style scoped="scoped">
	.homeStyle{
		width:100%;
		height: 100vh;
		background:url(../../assets/img/bing.png);
		/* background:url(../../assets/img/bgH.jpg); */
		background-size: cover;
	}
	.wrap{
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-size: 30px;
	}
	.wrap>a{
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 30px;
	}
	.wrap img:hover{
		transform: scale(1.2);
		transition: all 2s;
	}
</style>
