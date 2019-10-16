function autoplay() {
    if(!isPlaying) {
        output_added += "AUTO PLAY!<br>"
        isPlaying = true;
        excecute(10);
    }
    //draw_text(width * 2 / 5, 25, "autoplay_mood");
}

function settostep(n) { //it is actually stop now
    isPlaying = false;
    output_added += "STOP!<br>"
    get_output();
    //draw_text(width * 2 / 5, 50, "set_to_step: 0");
}

function nextstep() {
    draw_text(width * 2 / 5, 75, "nextstep");
}