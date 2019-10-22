//window.buildinfo = document.querySelector("div.container-fluid pre").innerHTML;
window.buildinfo = 
"Step 1:\
~ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
Step 2:\
~ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
Step 3:\
~ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 1 7 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
Step 4:\
+ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 1 7 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
Step 5:\
+ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 1 7 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
Step 6:\
+ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 1 7 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
Step 7:\
+ -\
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 2 5 \
0 0 0 0 0 0 1 7 \
0 0 0 0 0 0 4 2 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
0 0 0 0 0 0 0 0 \
42\
"

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
data.op = '~';
data.runup = '-';
data.output = "";


var data_set = new Object();
data_set.size = 0;
data_set.content = new Array(); // 1-base

function cal_digit(num) {
    ans = 0;
    while (num) {
        ans++;
        num = parseInt(num / 10);
    }
    //window.alert(ans);
    return ans;
}

function readin() {
    input_length = buildinfo.length;
    read_length = 0;
    while (read_length < input_length) {
        data_set.size++;
        var start = read_length + 9 + cal_digit(data_set.size);
        var sub = buildinfo.slice(start, input_length);
        //start = buildinfo.search(":", read_length) + 6;
        var end = sub.search("Step", start + 10);
        if (end == -1) end = input_length;
        
        read_length = start + end;

        data_set.content[data_set.size] = new Object();
        data_set.content[data_set.size].op = buildinfo[start - 3];
        //window.alert(data_set.content[data_set.size].op);
        data_set.content[data_set.size].runup = buildinfo[start - 1];
        data_set.content[data_set.size].digits = new Array();

        var cnt = 0;
        //var sub = buildinfo.slice(start, end);
        for (var i = 0; i < 5 + num_reg; ++i) {
            data_set.content[data_set.size].digits[i] = new Array();
            for (var j = 0; j < digits; ++j) {
                data_set.content[data_set.size].digits[i][j] = parseInt(sub[cnt]);
                cnt += 2;
            }
            //cnt += 2;
        }
        data_set.content[data_set.size].output = sub.slice(cnt, end);
    }
}


// TODO: get data from buildinfo
function get_data(){
    curStep++;
    data = data_set.content[curStep];
    output_added += data.output;
    //window.alert(data);
    /*
    data.digits[0][0] += 1;
    data.digits[0][1] += parseInt(data.digits[0][0] / 10);
    data.digits[0][0] %= 10;*/
}

var output_added = "";

function get_output() {
    t = document.getElementById("text");
    t.innerHTML += output_added;
    output_added = "";
}