<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
         <img src="./assets/logo.png" width="30" height="30" alt="">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li role="presentation" v-bind:class="{active:change.block}" @click="show">
          <router-link to="/admin">主页 <span class="sr-only">(current)</span></router-link>
        </li>
        <li role="presentation" v-bind:class="{active:change.none}" @click="show1">
           <router-link to="/note">笔记</router-link>
        </li>
       <li >
         <a href="https://springleft.github.io/"target="_blank">
           博客
         </a>
       </li>
       <li >
         <router-link to="/map"><span class="glyphicon glyphicon-globe"></span>
         </router-link>
       </li>
      </ul>
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="搜索">
        </div>
        <button type="submit" class="btn btn-success">搜索</button>
      </form>
     
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      change:{
         'block':true,
         'none':false,
         
         }
    }
  },
  methods:{
    show(){

      this.change.block=!this.change.block
      this.change.none=!this.change.none
      
    },
    show1(){
      this.change.block=!this.change.block
      this.change.none=!this.change.none
      
    }
  },
  mounted(){
    var _this=this;
    $.ajax({
      url:'http://127.0.0.1:3100/api/comments',
      type:'GET',
      success:function(data){
        console.log(data)
          _this.$store.state.arr=data;
      }
    })

  }
}
</script>

<style>

</style>
