"use strict";

$(document).ready(function () {
  $("#header_menuIcon-phone").on("click", function () {
    if ($("#header_menu-phone").hasClass("d-sm-none")) {
      $("#header_menu-phone").removeClass("d-sm-none").addClass("d-sm-flex");
    } else {
      $("#header_menu-phone").addClass("d-sm-none").removeClass("d-sm-flex");
    }
  });
});
//# sourceMappingURL=all.js.map
