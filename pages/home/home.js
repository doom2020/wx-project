Page({
      data: {
        imgUrls: [
          '/images/meng/meng01.jpg',
          '/images/meng/meng02.jpg',
          '/images/meng/meng03.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000
      },
      changeIndicatorDots: function(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        })
      },
      changeAutoplay: function(e) {
        this.setData({
          autoplay: !this.data.autoplay
        })
      },
      intervalChange: function(e) {
        this.setData({
          interval: e.detail.value
        })
      },
      durationChange: function(e) {
        this.setData({
          duration: e.detail.value
        })
      },
      onLoad: function(options) {
        // Do some initialize when page load.
      },
      onShow: function() {
        // Do something when page show.
      },
      onReady: function() {
        // Do something when page ready.
      },
      onHide: function() {
        // Do something when page hide.
      },
      onUnload: function() {
        // Do something when page close.
      },
      onPullDownRefresh: function() {
        // Do something when pull down.
      },
      onReachBottom: function() {
        // Do something when page reach bottom.
      },
      onShareAppMessage: function () {
        // return custom share data when user share.
      },
      onPageScroll: function() {
        // Do something when page scroll
      },
      onResize: function() {
        // Do something when page resize
      }
})