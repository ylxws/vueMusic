<template>
  <div class="timeline">
      <h1>文档时间线</h1>
      <div class="cards">
        <section class="card">
          <header class="card_header">
              <div class="header_number">
                <span>1</span>
              </div>
              <h2 class="header_title">
                <span class="title_date">2019-03-11</span>
                <span class="title_sub">副标题</span>
              </h2>
          </header>
          <article class="card_article">
            <p>今天太阳出来咯</p>
          </article>
        </section>
        <section class="card">
          <header class="card_header">
              <div class="header_number">
                <span>2</span>
              </div>
              <h2 class="header_title">
                <span class="title_date">2019-03-11</span>
                <span class="title_sub">副标题</span>
              </h2>
          </header>
          <article class="card_article">
            <p>今天太阳出来咯</p>
          </article>
        </section>
        <section class="card">
          <header class="card_header">
              <div class="header_number">
                <span>3</span>
              </div>
              <h2 class="header_title">
                <span class="title_date">2019-03-11</span>
                <span class="title_sub">副标题</span>
              </h2>
          </header>
          <article class="card_article">
            <p>今天太阳出来咯</p>
          </article>
        </section>
        <section class="card">
          <header class="card_header">
              <div class="header_number">
                <span>4</span>
              </div>
              <h2 class="header_title">
                <span class="title_date">2019-03-11</span>
                <span class="title_sub">副标题</span>
              </h2>
          </header>
          <article class="card_article">
            <p>今天太阳出来咯</p>
          </article>
        </section>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
}
</script>
<style lang="stylus" scoped rel="stylesheet.stylus">
$bg-color = #10aec2

.timeline
  height: calc(100vh - 88px)
  background: #fff
  color: #999
  h1
    text-align: center
    margin-bottom: 10px
    font-size: 1.5rem
    padding: 10px 0
  .cards
    position: relative
    display: flex
    flex-direction: column
    height: 100%
    padding: 10px 16px
    &::after
      z-index: 9
      content: ""
      position: absolute
      top: 0
      bottom: 0
      left: 50%
      border-left: 1px solid rgba(200, 200, 200, 0.5)
  .card
    position: relative
    width: 46%
    height: 200px
    display: flex
    flex-direction: column
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
    .card_header
      display: flex
      align-items: center
      width: 100%
      height: 35%
      color: #fff
      // background-color: #134857
      overflow: hidden
      .header_number
        display: flex
        align-items: center
        justify-content: center
        margin: 0 20px
        padding: 6px 14px
        font-size: 0.6rem
        background-color: rgba(0,0,0,0.17)
      .header_title
        display: flex
        margin-left: 10px
        flex-direction: column
        font-size: 0.6rem
      .title_sub
        padding-top: 6px
        font-size: 1.2rem
    .card_article
      width: 100%
      height: 65%
      background-color: #fff
      border-top: 1px solid rgba(200, 200, 200, 0.5)
      border-top: none
      padding: 10px
  .card:nth-child(odd)
    align-self: flex-start
    .card_header
      &::after
        position: absolute
        left: 100%
        content: ""
        width: 0
        height: 0
        border-style: solid
        border-width: 10px 0 10px 18px
        // border-color: transparent transparent transparent #134857
  .card:nth-child(even)
    align-self: flex-end
    .card_header
      &::after
        position: absolute
        right: 100%
        content: ""
        width: 0
        height: 0
        border-style: solid
        border-width: 10px 18px 10px 0
        // border-color: transparent #134857 transparent transparent
  .card:nth-child(odd) 
    .card_header
      &::before
        z-index: 10
        position: absolute
        left: calc(100% - -25px)
        content: ""
        width: 10px
        height: 10px
        border-radius: 10px
        background-color: #bdbdbd
        box-shadow: 0 0 2px 6px #fff
  .card:nth-child(even) 
    .card_header
      &::before
        z-index: 10
        position: absolute
        right: calc(100% - -25px)
        content: ""
        width: 10px
        height: 10px
        border-radius: 10px
        background-color: #bdbdbd
        box-shadow: 0 0 2px 6px #fff
:root
  --bg-color: $bg-color; 
// .card_header
//   background-color: $bg-color
.card_header
  background-color: var(--bg-color)
.card:nth-child(odd)
  .card_header
    &::after
      border-color: transparent transparent transparent $bg-color
.card:nth-child(even)
  .card_header
    &::after
      border-color: transparent $bg-color transparent transparent
.card:nth-child(4n)
  background-color: #10aec2
.card:nth-child(4n+1)
  background-color: #fbc82f
.card:nth-child(4n+2)
  background-color: #74759b
.card:nth-child(4n+3)
  background-color: #346c9c
</style>
