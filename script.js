$("#arrondissements a").click(function () {
  if ($(this).attr("xlink:href").substring(0, 1) == "#") {
    var the_id = $(this).attr("xlink:href");
    $("html, body").animate(
      {
        scrollTop: $(the_id).offset().top,
      },
      "slow"
    );
  }
  return false;
}); /**/

// Smoothscrolling for standards anchors
$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(the_id).offset().top,
    },
    "slow"
  );
  return false;
});
