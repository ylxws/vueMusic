<template>
  <div class="singer">
  </div>
</template>
<script type="text/ecmascript-6">
import { getSingerList } from 'api/singer'
const listIndex = -100

export default {
  data() {
      return {
        singers: []
      }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList(listIndex).then((res) => {
        if (res.code === 0) {
          this.singers = res.singerList.data.singerlist
          console.log(this.singers)
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet.stylus">
  // @import "~common/stylus/variable"
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
