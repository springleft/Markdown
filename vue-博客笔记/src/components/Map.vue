<template>
  <div>
    <div id="container" ></div>
  </div>
</template>
<script>
  import AMap from 'AMap'
  var map
  export default {
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        map = new AMap.Map('container', {
           resizeEnable: true,
            zoom: 13,
            center: [116.39,39.9]

        })
        var marker = new AMap.Marker({
		    position: [116.480983, 39.989628],//marker所在的位置
		    map:map//创建时直接赋予map属性
			});
			//也可以在创建完成后通过setMap方法执行地图对象
			marker.setMap(map);
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
        })
      }
    }
  }
</script>
<style>
 #container{
 	width: 800px;
 	height: 550px;
 	margin: 0 auto;
 }
</style>