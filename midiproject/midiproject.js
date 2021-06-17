'use strict';

function requestMidiAccess(useSysex){
	const div = document.getElementById('midiInfo');
	if (navigator.requestMIDIAccess){
		navigator.requestMIDIAccess(useSysex).then(
			function(midiAccess){
				div.innerHTML = 'granted midi access: ' + midiAccess;
			},
			function(e){
				div.innerHTML = 'denied midi access: ' + e;
			}
		);
	}
	else
		div.innerHTML = 'no midi support in your browser';
}

// Ok in Chrome on non-SSL host, fails in Opera
requestMidiAccess({ sysex: false });

