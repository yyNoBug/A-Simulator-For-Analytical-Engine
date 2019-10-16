// items below are data to be presented
const num_reg = 10;
const digits = 8;

var data = new Object();
data.digits = new Array();
for (var i = 0; i < 5 + num_reg; ++i) {
    data.digits[i] = new Array();
    for (var j = 0; j < digits; ++j) {
        data.digits[i][j] = 0;
    }
}
data.op = '+';
data.runup = '-';

var data_set = new Object();
data_set.size = 0;
data_set.content = new Array();

// TODO: get data from buildinfo 
function get_data(){
    data.digits[0][0] += 1;
    data.digits[0][1] += parseInt(data.digits[0][0] / 10);
    data.digits[0][0] %= 10;
}

var output_added = "";

function get_output() {
    t = document.getElementById("text");
    t.innerHTML += output_added;
    output_added = "";
}