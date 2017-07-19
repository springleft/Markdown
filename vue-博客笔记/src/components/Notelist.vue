<template>
	 <div class="panel panel-danger">
        <div class="panel-heading ">
          <!-- 绑定class -->
          <!-- <Listbtn type="danger" ></Listbtn> -->
          笔记列表
        </div>

        <ul class="list-group">
          <Listitem v-for="(item,index) in get" key="index" :datas="item" :ind='index' ></Listitem>
        </ul>
      </div>
</template>
     
<script>
// import Listbtn from './Listbtn'
import Listitem from './Listitem'
     export default{
     	name:'Notelist',
     	data(){
     		return{
     			array:[]
     		}
     	},
     	methods:{
     		
     	},
     	computed:{
           get(){
            return this.$store.state.arr;
           }
     	},
     	//子组件挂载到父组件
     	components:{
     		// Listbtn,
     		Listitem
     	}
     }
</script>

<style>
	
</style>