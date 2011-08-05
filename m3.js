s = s.split(",");
var text = []
document.write = function (t) {
  text.push(t);
}
var i = 0, ii = s.length;
var addText = function (elName) {
  var f = function () {
    console.debug("writing to ", elName);
    var c;
    if (elName) {
      c = document.getElementById(elName);
    } else {
      c = document.body;
    }
    console.debug(c, !c);
    if (c) {
      console.debug(text);
      c.innerHTML += text.join("\n");
      text=[];
      i++;
      console.debug(i, ii);
      if (i < ii) {
        doNext();
      }
    } else {
      console.debug("waiting for element to exist");
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
  console.debug("doNext", p, s[i]);
  var el = document.createElement("script");
  el.src="../"+s[i];
  el.defer="true";
  el.onload = function () {
    addText(p)();
  }
  var beenRun = false;
  el.onreadystatechange = function () {
    
    console.debug(this.readyState, s[i]);
    if (beenRun) return;
    if ((this.readyState === "complete") || 
        (this.readyState === "loaded")) {
      beenRun = true;
      console.debug(document.getElementById);
      addText(p)();
    }
  };
  document.getElementsByTagName("head")[0].appendChild(el);
}
doNext();
