/*
---
description:     Clickables

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - Clickables
...
*/
var Clickables=new Class({Implements:[Options],options:{elements:"li",selectClass:"",anchorToSpan:false},initialize:function(a){this.setOptions(a);this.elements=$$(this.options.elements);this.doClickables();},doClickables:function(){this.elements.each(function(c){var a=c.getElements("a"+(this.options.selectClass?"."+this.options.selectClass:""))[0];if($defined(a)){this.setClick(c,a.get("href"));if(this.options.anchorToSpan){var b=new Element("span",{text:a.get("text")}).replaces(a);}}},this);},setClick:function(b,a){b.addEvent("click",function(){window.location=a;});}});