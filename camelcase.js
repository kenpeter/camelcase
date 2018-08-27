function camelcase(str) {
	// Split by Cap case
	// ?=
	// [A-Z]
	var res = str.split(/(?=[A-Z])/).map(s => s.toLowerCase());
	return res.length;
}

var s = 'saveChangesInTheEditor';
var out = camelcase(s);
console.log(out);
