var win = Titanium.UI.currentWindow;

var data = []
// create the rest of the rows
for (var c=0;c<50;c++)
{
	var row = Ti.UI.createTableViewRow();
	row.height  =100;
	
	var user = Ti.UI.createLabel({
		color:'#576996',
		font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
		left:20,
		top:2,
		height:30,
		width:200,
		text:'Fred Smith'
	});
	user.rowNum = c;
	row.add(user);

	var comment = Ti.UI.createLabel({
		color:'#222',
		font:{fontSize:16,fontWeight:'normal', fontFamily:'Arial'},
		left:20,
		top:21,
		height:50,
		width:200,
		text:'Got some fresh fruit, conducted some business, took a nap'
	});
	comment.rowNum = c;
	row.add(comment);

	
    data.push(row);
}
var tableView = Titanium.UI.createTableView({
	data:data
});


// add delete event listener
tableView.addEventListener('delete',function(e)
{
	Titanium.API.info("deleted - row="+e.row+", index="+e.index+", section="+e.section + ' table view row length = ' + tableView.section.data.length);
});

win.add(tableView);

//
//  create edit/cancel buttons for nav bar
//
var edit = Titanium.UI.createButton({
	title:'Edit'
});

edit.addEventListener('click', function()
{
	win.setRightNavButton(cancel);
	tableView.editing = true;
});

var cancel = Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});
cancel.addEventListener('click', function()
{
	win.setRightNavButton(edit);
	tableView.editing = false;
});

win.setRightNavButton(edit);


