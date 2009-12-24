Clickables
=========

Clickables is a MooTools plugin that allows non-anchor items to clicked like standard links.  The first anchor in the element will be used for the link URL.

![Screenshot](http://davidwalsh.name/dw-content/clickables.png)


How to Use
----------

Clickables can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.
	
<div>
	<ul class="block-list">
		<li>Clicking this block will take you to <a href="http://davidwalsh.name">DavidWalsh.name</a></li>
		<li>Clicking this block will take you to <a href="http://scriptandstyle.com">Script&Style.com</a>.</li>
		<li>Clicking this block will take you to <a href="http://mootools.net">MooTools.net</a></li>
	</ul>
</div>
	
### Javascript
	var clix = new dwClickables({
		elements: $$('.block-list li'),
		anchorToSpan: true
	});	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/clickables](http://davidwalsh.name/js/clickables)