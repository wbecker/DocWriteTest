s = s.split(",");
for (var i = 0, ii = s.length; i < ii; i++) {
  var el = document.createElement("script");
  el.src="../"+s[i];
  document.body.appendChild(el);
}
