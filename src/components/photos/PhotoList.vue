<template>
    <div>
    <div class="amap-page-container">
        <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom" :events="events">
      </el-amap>

      <div class="toolbar">
        <span>
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span>正在定位</span>
      </div>
    </div>
        <!-- 顶部滑动条 -->
        <!-- <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>
           
        </div> -->
    </div>
</template>
<script>
//导入mui
import mui from '@/lib/mui/js/mui.min.js'

// 暴露数据
export default {
    data () {
        let self = this;
        return {
          zoom: 10,  
          positions: {
            lng: 0,
            lat: 0,
            address: '',
            loaded: false
         }, 
        //  center: [121.59996, 31.197646],
         center: [116.389088,39.907983],
          lng: 0,
          lat: 0,
          loaded: false,
          plugin: [{
             pName: 'Geolocation',
            events: {
                init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                    // console.log(result);  //  能获取定位的所有信息
                    if (result && result.position) {
                    self.str = result.formattedAddress;
                    self.positions.address = self.str.substring(self.str.indexOf('市') + 1);
                    self.positions.lng = result.position.lng;
                    self.positions.lat = result.position.lat;
                    self.positions.loaded = true;
                    self.$nextTick();
                    // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                    //self.$store.commit('POSITION', self.positions);
                    // console.log(self.positions);
                    sessionStorage.setItem('id', JSON.stringify(self.positions));
                }
             });
            }
         }
     }],
     events: {
                click(e) {
                    let {
                        lng,
                        lat
                    } = e.lnglat;
                    self.lng = lng;
                    self.lat = lat;
                    var geocoder = new AMap.Geocoder({
                        radius: 1000,
                        extensions: "all"
                    });
                    geocoder.getAddress([lng, lat], function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            if (result && result.regeocode) {
                                self.address = result.regeocode.formattedAddress;
                                //console.log('lng', self.lng);
                                //console.log('lat', self.lat);
                                // console.log('address', self.address);
                                self.$nextTick();
                                self.positions.address = self.address
                                self.positions.lng = self.lng
                                self.positions.lat = self.lat
                        }
                    }
                });
            }
     } 
    //  plugin: [{
    //         pName: 'Geolocation',
    //         events: {
    //           init(o) {
    //             // o 是高德地图定位插件实例
    //             o.getCurrentPosition((status, result) => {
    //               if (result && result.position) {
    //                 //   console.log(result)
    //                 self.lng = result.position.lng;
    //                 self.lat = result.position.lat;
    //                 self.center = [self.lng, self.lat];
    //                 self.loaded = true;
    //                 self.$nextTick();
    //               }
    //             });
    //           }
    //         }
    //       }]
        }
    },
    methods:{},
    mounted () {
        //初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
        
        deceleration : 0.005
        
        });
    }
}
</script>
<style scoped>
    .amap-page-container {
        height: 400px;
    }
</style>