$(document).ready(function () {
  //*先把目錄關閉 icon 與文章列表隱藏
  $(".menu-close").hide();

  //*漢堡選單點擊事件
  $(".menu-block").click(function () {
    $(".menu-close").show(); //*關閉 icon 顯示
    $(this).hide(); //*漢堡選單隱藏
    $(".article-list").slideDown(500); //*列表向下滑動
  });

  //*關閉漢堡選單 icon
  $(".menu-close").click(function (e) {
    $(this).hide(); //*隱藏關閉 icon
    $(".article-list").slideUp(500); //*文章列表向上滑動
    $(".menu-block").show(); //* 顯示漢堡選單
  });

  //*文章列表按鈕
  $(".article-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().parent().find(".article-category > ul").slideToggle(500);
    $(this).parent().parent().siblings().find(".hidden").slideUp();
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".bg-highlight")
      .removeClass("bg-highlight");
    $(this).parent().addClass("bg-highlight");
    $(this).parent().parent().siblings().find(".article-btn > svg").hide();
    $(this).find("svg").show();
  });
});
