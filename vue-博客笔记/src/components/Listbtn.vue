<template>
	<button class="btn" :class="btnType" @click="btnClick">
		<slot>添加笔记</slot>
	</button>
</template>

<script>
export default{
	name:"Listbtn",
	data(){
		return{

		}
	},
	props:{
		type:String
	},
	methods:{
		btnClick(){
			var array=[
            // {id:1,title:"vue框架结构",date:new Date()},
            // {id:2,title:"react框架结构",date:new Date()}  
			]
			//子组件向父组件传数据,参数1是父组件的事件名，参数2是传输数据
			this.$emit('btnClick',array)
		}
	},
	computed:{
		btnType(){
			console.log(this.type);
			return{

				"btn-danger":this.type==='danger'?true:false,
				"btn-info":this.type==='info'?true:false
			}
		}
	}
}
</script>

<style>
	
</style>