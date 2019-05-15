function replace(ref) {
    ref = {};           // this code does _not_ affect the object passed
}

function update(ref) {
    ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
}

var a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed
