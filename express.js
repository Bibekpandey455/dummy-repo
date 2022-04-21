var express=require('express');
var app=express();
app.set('view-engine','Rakshya Pandey is love !!');
app.get('/',function(req,res)
{
	res.end(app.get('view-engine'));
});
var server=app.listen(3000,function()
{
});