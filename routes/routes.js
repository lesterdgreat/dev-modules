var appRouter = function(application) {
 application.get("/", function(req, res) {
 	res.send("hello");
 });

 application.get("/addData", function(req, res) {
 	console.log("page for adding data");
 	res.send("this page is for adding of data");
 });

 application.post("/addData", function(req, res) {
 	var name = req.body.user.name;
 	var address = req.body.user.address;
 	console.log('your name is ' + name + ' and your address is ' + address);
 	res.send("successfully added");
 });
}
 
module.exports = appRouter;