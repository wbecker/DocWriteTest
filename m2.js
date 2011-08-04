s = s.split(",");
try {
  pos = pos.split(",")[0];
} catch (e) {
  pos = null;
}
var text = []
document.write = function (t) {
  text.push(t);
}
var loads = 0;
for (var i = 0, ii = s.length; i < ii; i++) {
  var el = document.createElement("script");
  el.src=s[i];
  el.onload = function () {
    loads ++;
    if (loads === ii) {
      var c; 
      if (pos) {
        c = document.getElementById(pos);
      } else {
        c = document.body;
      }
      c.innerHTML += text.join("\n");
    }
  }
  document.getElementsByTagName("head")[0].appendChild(el);
}
