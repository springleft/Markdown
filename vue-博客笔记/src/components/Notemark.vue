<template>
	<div class=" panel panel-info">
		<div class="panel-heading">
			<span>MarkDown编辑器</span>
			<button class="btn btn-primary" data-toggle="modal" data-target="#myModal">保存并添加</button>

			<!--Modal--> 
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">提示框</h4>
		      </div>
		      <div class="modal-body">
		                      确定保存添加你的笔记
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		        <button type="button" class="btn btn-primary" @click="add">确定</button>
		      </div>
		    </div>
		  </div>
		</div>	

		</div>

        <div class="  panel-body">
            <input type="text" class="form-control" v-model="title" placeholder="笔记标题">
        </div>
		<div class="row panel-body">

			<div class="col-lg-6">
					<textarea v-model='text' class="form-control css" rows="15"></textarea>	
					
			</div>
			<div class="col-lg-6">
				<div v-html="html" class="form-control sle" ></div>
			</div>
		</div>
	</div>


</template>

<script>
import Marked from 'marked'
	export default{
		name:'Notemark',
		data(){
			return{
               text:'',
               title:''
               
			}
		},
		methods:{
            
			add(){
               // this.$store.commit('add',{title:this.title,comment:this.text,date:new Date()})
                $('#myModal').modal('hide');
                var _this=this;
                $.ajax({
                	url:'http://127.0.0.1:3100/api/comments',
                	type:'POST',
                	data:{
                		title:_this.title,
                		comment:_this.text
                	},
                	success:function(data){
                        _this.$store.state.arr=data;
                	}
                })
			}
			
		},
		computed:{
			title(){
				return this.title=this.$store.state.show.title;
				console.log(this.title)
			},
			text(){
				return this.text=this.$store.state.show.comment
			},
			
			html(){
				return Marked(this.text);
				
			}
		}

	}
</script>
<style>
.sle{
	width: 100%;
	height:434px;
	font-size: 15px;
	position: relative;
	/*overflow: scroll;*/
}
.sle:hover{
	box-shadow:  1px 1px 10px 5px  rgba(9,88,222,.1);
	transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	top:-0.5px;
}
.css{
	background-color:rgba(0,0,0,.8);
	color: #ffffff;
	font-size: 20px;
}
</style>