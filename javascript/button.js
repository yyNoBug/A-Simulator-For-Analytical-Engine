function playit() {
    $('#play').attr('onclick', 'pauseit();');
    $('#icon').attr('class', 'glyphicon glyphicon-pause');
    auto = true;
    //output_added += "AUTO PLAY!<br>"
    if (!isExecuting) {
        isExecuting = true;
        excecute(100000);
    }
    //draw_text(width * 2 / 5, 25, "autoplay_mood");
}

function pauseit() {
    $('#play').attr('onclick', 'playit();');
    $('#icon').attr('class', 'glyphicon glyphicon-play');
    auto = false;
    //output_added += "PAUSE!<br>"
    get_output();
}

function stopit() {
    pauseit();
    curStep = 0;
    t = document.getElementById("text");
    t.innerHTML = "Output:<br>";
    get_data();
    get_output();
    draw_canvas();
    draw_store();
    draw_mill();
}

function nextstep() {
    pauseit();
    if (curStep <= data_set.size){
        get_data();
        get_output();
        draw_canvas();
        draw_store();
        draw_mill();
    }
}