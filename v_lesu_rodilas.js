;(function () {

    // формат: клавиша|пауза, клавиша|пауза, клавиша, клавиша
    // если пауза не указана, то 8
    // пауза = 4000мс / <пауза>
    var melody = '1,0,0,8,0,6,1,1,1,0,0,8,e,q|4,q,6,6,=,=,0,8,6,1,0,0,8,0,6';


    var keys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\'
    ];

    var keysToNotes = {};
    for (var i = 0, j = keys.length; i < j; i++) {
        keysToNotes[keys[i].charCodeAt(0)] = i;
    }

    var playNote = function (str) {
        if (!str) {
            return;
        }
        var notes = str.split(',');
        var note = notes.shift();
        var parts = note.split('|');
        var key = parts[0];
        var duration = parseInt(parts[1], 10) || 8;

        var timeout = 4000 / duration;

        if (key.charCodeAt(0) in keysToNotes) {
            document['z-audio__player'].playSound(keysToNotes[key.charCodeAt(0)]);
        }

        window.setTimeout(function () {
            playNote(notes.join(','));
        }, timeout);
    };

    playNote(melody);
})();