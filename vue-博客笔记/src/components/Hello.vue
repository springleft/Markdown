<template>
  <div class="hello">
          <!-- <audio id="audio"src="./assets/时间都去哪了.mp3"  autoplay ></audio> -->
          <canvas id="canvas"></canvas>
          <h1>Welcome To My Vue</h1>
         

  </div>
</template>

<script>
    export default{
    	name:'Hello'
    	
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-image: url('../assets/bg.jpg');
  width: 100%;
  height: 580px;
  background-size: cover;
}
h1{
	text-align: center;
	line-height: 200px;
	color: #ffffff;
}
</style>
