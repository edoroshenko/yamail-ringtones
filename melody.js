;(function() {
	var melody = '1|e|8,1|g|8,1|b|8,1|g|8,1|a|4,1|g|8,1|f#|8,1|b|4,1|a|4,1|e|2';
	var scale = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
	var bounces = $('.b-ball_bounce');
	var playNote = function(str) {
		if (!str) {
			return;
		}
		var notes    = str.split(',');
		var note     = notes.shift();
		var parts    = note.split('|');
		var octave   = parseInt(parts[0]);
		var tone     = parts[1];
		var duration = parseInt(parts[2]);
		var index    = $.inArray(tone, scale) + 12 * octave;
		var timeout  = 4000 / duration;

		bounces.eq(index).trigger('mouseover');
		window.setTimeout(function() {
			playNote(notes.join(','));
		}, timeout);
	};

	playNote(melody);
})();