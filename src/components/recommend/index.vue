<template>
    <div class="recommend">
        <scroll ref="srocll" class="recommend-content" :data="discList">
          <div>
            <div v-if="recommends.length" class="slider-wrapper">
              <div class="slider-content">
                <slider ref="slider">
                  <div v-for="item in recommends" :key="item.id">
                    <a :href="item.linkUrl">
                      <img @load="loadImage" :src="item.picUrl">
                    </a>
                  </div>
                </slider>
              </div>
            </div>
            <!-- <div v-show="recommends.length" class="slider-wrapper">
                <el-carousel  :interval="4000" height="150px" :autoplay="false"  arrow="always" indicator-position="none">
                    <div class="slider-item" v-for="item in recommends" :key="item.id">
                        <el-carousel-item>
                            <a :href="item.linkUrl">
                                <img @load="loadImage" class="carouselImg needsclick" :src="item.picUrl" ref="carouselImg">
                            </a>
                        </el-carousel-item>
                    </div>
                </el-carousel>
            </div> -->
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
                <ul>
                  <li v-for="item in discList" class="item" :key="item.dissid">
                    <div class="icon">
                      <img v-lazy="item.imgurl" width="60" height="60">
                    </div>
                    <div class="text">
                      <h2 class="name" v-html="item.creator.name"></h2>
                      <p class="desc" v-html="item.dissname"></p>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
          <div class="loading-container" v-show="!discList.length">
            <loading></loading>
          </div>
        </scroll>
    </div>
</template>
<script type="text/ecmascript-6">
import Slider from 'base/slider'
import Scroll from 'base/scroll'
import Loading from 'base/loading'
import { getRecommend, getDiscList } from 'api/recommend'

export default {
    data() {
        return {
            recommends: [],
            carouselHeight: 150,
            discList: []
        }
    },
    created() {
        setTimeout(() => {
          this._getRecommend()
        }, 1000)
        setTimeout(() => {
          this._getDiscList()
        }, 1000)
        // this._getRecommend()
        // this._getDiscList()
    },
    methods: {
        _getRecommend() {
            getRecommend().then((res) => {
                if (res.code === 0) {
                    this.recommends = res.data.slider
                }
            })
        },
        _getDiscList() {
            getDiscList().then((res) => {
                if (res.code === 0) {
                  this.discList = res.data.list
                }
            })
        },
        loadImage() {
          if (!this.checkLoad) {
            this.$refs.srocll.refresh()
            this.checkLoad = true
          }
        }
    },
    components: {
        Slider,
        Scroll,
        Loading
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
