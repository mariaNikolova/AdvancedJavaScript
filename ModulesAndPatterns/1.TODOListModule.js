var Item = (function () {
	function Item (content,status){
		this._content = content;
		this._status= status ;
	}
	Item.prototype.addToDOM = function() {
		var list = document.getElementById("list");
		var element = document.createElement("div");
		var element2 = document.createElement("input");
		element2.type = "checkBox";
		list.appendChild(element2);
	};

	return Item;
}());
//document.body.addEventListener('click', addToDOM);

var item = new Item("qllal",true);
console.log(item);
//item.addToDOM();
//item.addToDOM();