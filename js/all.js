$(function () {
  $("#menu-open").click(function (e) {
    $("#menu-close").show();
    $("#menu-open").hide();
    $("#article-list").show();
  });

  $("#menu-close").click(function (e) {
    $("#menu-open").show();
    $("#menu-close").hide();
    $("#article-list").hide();
  });
});
