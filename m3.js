s = s.split(",");
var text = []
document.write = function (t) {
  text.push(t);
}
var i = 0, ii = s.length;
var addText = function (elName) {
  var f = function () {
    var c;
    if (elName) {
      c = document.getElementById(elName);
    } else {
      c = document.body;
    }
    if (c) {
      c.innerHTML += text.join("\n");
      text=[];
      i++;
      if (i < ii) {
        doNext();
      }
    } else {
      setTimeout(f, 10);
    }
  };
  return f;
}
var doNext = function () {
  var p; 
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
  var el = document.createElement("script");
  el.src="../"+s[i];
  el.onload = function () {
    addText(p)();
  }
  el.onreadystatechange = function () {
    if ((this.readyState === "complete") || 
        (this.readyState === "loading")) {
      addText(p)();
    }
  };
  document.getElementsByTagName("head")[0].appendChild(el);
}
doNext();
