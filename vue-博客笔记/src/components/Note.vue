<template>
	<div class="container">
	  <div class="row">
       <div class="col-lg-12">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">我的笔记</h3>
            </div>
            <div class="panel-body">
               <div class="row">
                 <div class="col-lg-3">
                   <!-- 笔记列表 -->
                    <Notelist></Notelist>
                    
                 </div>
                 <div class="col-lg-9">
                   <!-- 我的markdown编辑器 -->
                   <Notemark></Notemark>
                 </div>
               </div>
            </div>
          </div>
       </div>
    </div>
	</div>
</template>

<script>
	//在父组件中导入子组件
  import Notelist from './Notelist'
  import Notemark from './Notemark'
  export default{
    name:'Note',
    date(){
      return{

      }
    },
    //将子组件挂载到父组件
    components:{
      Notelist,
      Notemark
    }
  }
</script>

<style>
	

</style>