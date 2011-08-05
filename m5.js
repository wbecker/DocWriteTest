s = s.split(",");
for (var i = 0, ii = s.length; i < ii; i++) {
  var el = document.createElement("script");
  el.src="../"+s[i];
  el.async=true;
  document.getElementsByTagName("head")[0].appendChild(el);
}
