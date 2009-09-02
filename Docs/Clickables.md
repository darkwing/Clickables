Class: Clickables {#Clickables}
=========================================

Clickables is a MooTools plugin that allows non-anchor items to clicked like standard links.  The first anchor in the element will be used for the link URL.


![Screenshot](http://davidwalsh.name/dw-content/scrollspy.png)

### Implements:

Options




Clickables Method: constructor {#Clickables:constructor}
-------------------------------------------------------------------


### Syntax:

	var clix = new Clickables(options);

### Arguments:

1. options - (*object*) Options for the class.

### Options:

* elements - (*string*) A selector string of elements to act as the clickable.
* selectClass - (*string*) The CSS class of the anchor/link that should be used for the block's HREF.
* anchorToSpan - (*boolean*) Whether or not the original link should be changed to a SPAN element.