var isExecuting = false;
var auto = false;
var curStep = 0;

function excecute(i) {
    //window.alert(i);
    if (!auto) {
        isExecuting = false;
        return;
    }
    if (curStep < data_set.size) {
        get_data();
        get_output();
        draw_canvas();
        draw_store();
        draw_mill();
        setTimeout(function(a){ excecute(a); }, 1000, i - 1);
    }
    else {
        isExecuting = false;
        pauseit();
    }
}

readin();
draw_canvas();
draw_store();
draw_mill();