(function(a){this.Clickables=new Class({Implements:[Options],options:{elements:"li",selectClass:"",anchorToSpan:false},initialize:function(b){this.setOptions(b);this.elements=$$(this.options.elements);this.doClickables();},doClickables:function(){this.elements.each(function(d){var b=d.getElements("a"+(this.options.selectClass?"."+this.options.selectClass:""))[0];if($defined(b)){this.setClick(d,b.get("href"));if(this.options.anchorToSpan){var c=new Element("span",{text:b.get("text")}).replaces(b);}}},this);},setClick:function(c,b){c.addEvent("click",function(){window.location=b;});}});})(document.id);