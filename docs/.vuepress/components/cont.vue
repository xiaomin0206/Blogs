<template>
	<div class="cont_wrap">
		<div>
			<div class="cont_wrap_img">
				<a href="/Blogs">
					<img src="../../assets/img/image.jpg" alt="">
				</a>
				<div>zz</div>
			</div>
			<ul  class="cont_wrap_nav">
				<li v-for="(item,index) in navData":class="activeIndex==index?'active':''" @click="changeFun(index)">
					<img :src="item.img" alt="">
					<span >{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="cont_wrap_right">
			<ul>
				<li v-for="(item,index) in listData" >
					<a :href="'/Blogs'+item.path"
					   class="blog-post__link" v-if="index%2==0">
						<div>
							<img src="../../assets/img/time.png" alt="">
							<span>{{item.frontmatter.date?item.frontmatter.date.slice(0,10):''}}</span>
						</div>
						<div>
							<img src="../../assets/img/title.png" alt="">
							<span>{{item.frontmatter.title}}</span>
						</div>
					</a>
					<div v-if="index%2==0">
						<img src="../public/bgH.jpg" alt="">
					</div>
					<div v-if="index%2!=0">
						<img src="../public/bgH.jpg" alt="">
					</div>
					<a :href="'/Blogs'+item.path"
					   class="blog-post__link" v-if="index%2!=0">
						<div>
							<img src="../../assets/img/time.png" alt="">
							<span>{{item.frontmatter.date}}</span>
						</div>
						<div>
							<img src="../../assets/img/title.png" alt="">
							<span>{{item.frontmatter.title}}</span>
						</div>
					</a>
				</li>
				<!-- <li v-for="(item,index) in listData" v-if="index%2!=0">
					
					
				</li> -->
			</ul>
		</div>
		
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
				listData:[],
				navData:[{
					name:'动画',
					img:require('../../assets/img/nav1.png')
				},{
					name:'插件',
					img:require('../../assets/img/nav2.png')
				},{
					name:'其他',
					img:require('../../assets/img/nav3.png')
				}],
				activeIndex:0
			}
		},
		mounted(){
			sessionStorage.getItem('activeIndex')?this.activeIndex=window.sessionStorage.getItem('activeIndex'):this.activeIndex=0
			// this.list.forEach((item,index)=>{
			// 	if(item.path.indexOf('/blog/Animate') > -1){
			// 		this.listData.push(item)
			// 	}
			// })
			this.init(this.activeIndex)
		},
		// created(){
			
			
		// },
		methods:{
			changeFun(index){
				sessionStorage.setItem('activeIndex',index)
				this.activeIndex=index
				this.init(index)
				this.$forceUpdate()
			},
			init(index){
				this.listData=[]
				var value=''
				if(index==0){
					value='/blog/Animate'
				}else if(index==1){
					value='/blog/plugIn'
				}else{
					value='/blog/other'
				}
				this.list.forEach((item,index)=>{
					if(item.path.indexOf(value) > -1){
						this.listData.push(item)
						console.log(this.listData,item,'22222')
					}
				})
			}
		},
		
		
	}
</script>

<style scoped="scoped">
	.cont_wrap{
		display: flex;
		margin-top: 0;
		justify-content: center;
	}
	.cont_wrap>div:first-child{
		width: 20%;
		height:70vh;
		padding:30px;
		text-align: center;
		/* overflow-y: scroll; */
		border-radius: 10px;
		transition: all .5s;
		box-shadow: 0 1px 20px -6px grey;
		box-sizing: border-box;
		margin-right:100px;
	}
	.cont_wrap>div:last-child{
		width:70%;
	}
	.cont_wrap_img{
		display: flex;
		margin: 30px auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 30px;
		padding-bottom: 20px;
		border-bottom: 2px solid #CCCCCC;
	}
	.cont_wrap_img>a{
		width: 100px;
		height:100px;
		border-radius: 50%;
		border: 3px solid skyblue;
		overflow: hidden;
		margin-bottom: 10px;
	}
	.cont_wrap_img img:hover{
		transform: scale(1.2);
		transition: all 2s;
	}
	.cont_wrap_right{
		height: calc(100vh - 150px);
		overflow-y: scroll;
		padding: 10px;
		/* padding-top: 0; */
		box-sizing: border-box;
	}
	.cont_wrap_right ul li{
		list-style: none;
		display: flex;
		height:220px;
		width:100%;
		min-height: 230px;
		/* margin: 30px 40px 40px; */
		overflow: hidden;
		border-radius: 10px;
		transition: all .5s;
		box-shadow: 0 1px 20px -6px grey;
		margin-bottom: 20px;
	}
	.cont_wrap_right ul{
		margin: 0;
		padding: 0;
	}
	.cont_wrap_right ul li a{
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 40px;
		box-sizing: border-box;
	}
	.cont_wrap_right ul li a div{
		display: flex;
		align-items: center;
		margin: 10px 0;
	}
	.cont_wrap_right ul li>div{
		flex: 2;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	.cont_wrap_right ul li>div img{
		width: 100%;
		height: 100%;
	}
	.cont_wrap_right ul li>div img:hover{
		transform: scale(1.2);
		transition: all 2s;
	}
	.cont_wrap_right ul li a img{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.cont_wrap_nav li{
		list-style: none;
		display: flex;
		align-items: center;
		font-size: 22px;
		margin: 20px 0;
		cursor: pointer;
	}
	.cont_wrap_nav img{
		width: 50px;
		margin-right: 10px;
	}
	.active{
		color: green;
	}
</style>

