if(!window._) 
{
	alert("MISSING SOMETHING!");
}
else
{
	// Add a Plugin "MyPlugin"
	_.fn.myPlugin = function(name) { console.log("myPlugin: " + name); };
	_.fn.equalHeight = function() {
           // find the tallest height in the collection
           // that was passed in (.column)
            tallest = 0;
            this.each(function(){
                thisHeight = _(this).height();
                if( thisHeight > tallest)
                    tallest = thisHeight;
            });

            // set each items height to use the tallest value found
            this.each(function(){
                _(this).height(tallest);
            });
        }
	// Call the new "Plugin"
	_("wrapper").myPlugin("WDGWV.com");
}