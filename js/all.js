$(document).ready(function () {
  //*先把目錄關閉 icon 與文章列表隱藏
  $(".menu-close").hide();
  //* 最新文章與最新回應初始狀態
  $(".new-article-btn").find("button > svg").hide();
  $(".new-article-btn").removeClass("bg-highlight");
  $(".response-btn").find("button > svg").hide();
  $(".response-btn").removeClass("bg-highlight");

  //*漢堡選單點擊事件
  $(".menu-block").click(function () {
    $(".menu-close").show(); //*關閉 icon 顯示
    $(this).hide(); //*漢堡選單隱藏
    $(".article-list").slideDown(700); //*列表向下滑動
    //* 最新文章與最新回應初始狀態
    $(".new-article-btn").find("button > svg").hide();
    $(".new-article-btn").removeClass("bg-highlight");
    $(".response-btn").find("button > svg").hide();
    $(".response-btn").removeClass("bg-highlight");
  });

  //*關閉漢堡選單 icon
  $(".menu-close").click(function (e) {
    $(this).hide(); //*隱藏關閉 icon
    $(".article-list").slideUp(700); //*文章列表向上滑動
    $(".menu-block").show(); //* 顯示漢堡選單
  });

  //*文章分類按鈕
  $(".article-category-btn").click(function (e) {
    e.preventDefault();
    //*文章分類按鈕顯示狀態
    $(this).find("button > svg").show();
    $(this).addClass("bg-highlight");
    //*其他項目背景與按鈕不顯示
    $(".article-category > ul").slideDown(700);
    $(".new-articles > ul").slideUp(700);
    $(".new-article-btn").find("button > svg").hide();
    $(".new-article-btn").removeClass("bg-highlight");
    $(".response > ul").slideUp(700);
    $(".response-btn").find("button > svg").hide();
    $(".response-btn").removeClass("bg-highlight");
  });

  //*最新文章按鈕
  $(".new-article-btn").click(function (e) {
    e.preventDefault();
    //*最新文章按鈕顯示狀態
    $(this).addClass("bg-highlight");
    $(this).find("button > svg").show();
    //*其他項目背景與按鈕不顯示
    $(".new-articles > ul").slideDown(700);
    $(".article-category > ul").slideUp(700);
    $(".article-category-btn").find("button > svg").hide();
    $(".article-category-btn").removeClass("bg-highlight");
    $(".response > ul").slideUp(700);
    $(".response-btn").find("button > svg").hide();
    $(".response-btn").removeClass("bg-highlight");
  });

  //*最新回應按鈕
  $(".response-btn").click(function (e) {
    //*最新回應按鈕顯示狀態
    e.preventDefault();
    $(this).find("button > svg").show();
    $(this).addClass("bg-highlight");
    //*其他項目背景與按鈕不顯示
    $(".response > ul").slideDown(700);
    $(".new-articles > ul").slideUp(700);
    $(".new-article-btn").find("button > svg").hide();
    $(".new-article-btn").removeClass("bg-highlight");
    $(".article-category > ul").slideUp(700);
    $(".article-category-btn").removeClass("bg-highlight");
  });

  //* 回到頂點
  $(".go-top").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
