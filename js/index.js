window.addEventListener("load",function () {
    
     
  var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //这样写跟一下那种写法是一样的
    autoplay: {
      delay: 1000,
      // 是否要滚动到最后一张结束自动轮播图  false不结束  true就结束(loop模式无效)
      stopOnLastSlide: true,
      // 在手指滑动的轮播图的时候是否要禁用轮播图自动切换  默认true禁用 改为false不仅用
      disableOnInteraction: false,
  },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    })
})