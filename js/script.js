var w = $(window).width();
if ( w < 1000) {
  console.log("window width less than 1000");
  $(function() {
      $( ".expand" ).accordion({
        heightStyle:"content",
        active: false,
        collapsible: true,
        header:"div.accordion-header"
      });
    });
}
$(window).resize(function() {
      location.reload();
});
