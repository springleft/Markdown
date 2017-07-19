<template>
	<li class="list-group-item" @click="show">
		<h4>{{this.datas.title}}</h4>
		<p>{{this.datas.date}}</p>
		<button class="btn btn-danger" @click="del">删除</button>
	</li>
</template>

<script>
	export default{
		name:'Listitem',
		data(){
			return{

			}
		},
		props:{
			datas:Object,
			ind:Number
		},
		methods:{
			del(){
				this.$store.commit('de',this.ind)
				$.ajax({
					url:'http://127.0.0.1:3100/api/comments',
					type:'get',
					succcess:function(){
						
					}
				})
				
			},
			show(){
				this.$store.commit('show',this.datas)
				console.log(this.datas)
			}
		}
	}
</script>

<style>
	
</style>