<template>
	<div>
		<ul>
			<li v-for="item in listData">
				<a :href="item.path"
				   class="blog-post__link">
				    {{ item.title }}
				</a>
			</li>
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
			this.list.forEach((item,index)=>{
				if(item.path.indexOf('/blog/other') > -1){
					this.listData.push(item)
				}
			})
			
		}
	}
</script>

<style scoped="scoped">
	
</style>
