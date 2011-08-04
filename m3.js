s = s.split(",");
var text = []
document.write = function (t) {
  text.push(t);
}
var i = 0, ii = s.length;
var doNext = function () {
  var el = document.createElement("script");
  el.src=s[i];
  el.onload = function () {
    var c, p; 
    try {
      p = pos;
      p = pos.split(",").length > i ? pos.split(",")[i] : pos.split(",")[0];
    } catch (e1) {
      try {
        p = pos.split(",")[0];
      } catch (e2) {
        p = null;
      }
    }
    if (p) {
      c = document.getElementById(p);
    } else {
      c = document.body;
    }
    c.innerHTML += text.join("\n");
    text=[];
    i++;
    if (i < ii) {
      doNext();
    }
  }
  document.getElementsByTagName("head")[0].appendChild(el);
}
doNext();
