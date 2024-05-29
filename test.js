var alert = Cookies.get(type);
if(alert == "true") {
  $("." + type).removeClass("hidden").show();
  $("." + type)
} else if(alert == "false") {
  $("." + type).hide();
} else {
  
}
