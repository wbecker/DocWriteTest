s = s.split(",");
try {
  pos = pos.split(",");
} catch (e) {
  pos = null;
}
for (var i = 0, ii = s.length; i < ii; i++) {
  var iframe = document.createElement("iframe");
  iframe.style.border = 0;
  if (pos) {
    c = document.getElementById(pos[i]);
  } else {
    c = document.body;
  }
  c.appendChild(iframe);
  
  iframe.contentWindow.document.write('<script src="'+"../"+s[i]+'" ></script>');
  
  /*
  var el = document.createElement("script");
  el.src="../"+s[i];
  //el.async=true;
  //el.defer=true;
  iframe.contentWindow.document.body.appendChild(el);
  */
}
