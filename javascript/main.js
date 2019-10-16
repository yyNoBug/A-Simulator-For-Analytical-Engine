function readin() {

}

var isPlaying = false;
var stop = false;

function excecute(i) {
    //window.alert(i);
    if (!isPlaying) return;
    if (i > 0) {
        get_data();
        get_output();
        draw_canvas();
        draw_store();
        draw_mill();
        setTimeout(function(a){ excecute(a); }, 1000, i - 1);
    }
}

readin();
draw_canvas();
draw_store();
draw_mill();