// -*- javascript -*-

// This is based on the code for the 404 page on milosophical.me

var _text;

var TEXT = [
    [ '* login as: guest\n', 45],
    [ ' *****************************************\n', 45 ],
    [ ' ***                                   ***\n', 45 ],
    [ ' ***     --ooOO MILOHAX.NET OOoo--     ***\n', 45 ],
    [ ' ***                                   ***\n', 45 ],
    [ ' *** Public memex of Mike J Lockhart   ***\n', 45 ],
    [ ' ***                                   ***\n', 45 ],
    [ ' *** Points to note:                   ***\n', 45 ],
    [ ' ***  - tiddlywiki, single file wiki   ***\n', 45 ],
    [ ' ***  - download a local offline copy  ***\n', 45 ],
    [ ' ***  - crypto-signed via Keybase      ***\n', 45 ],
    [ ' ***                                   ***\n', 45 ],
    [ ' *****************************************\n', 45 ],
    [ '*\n' ],
    [ '*\n' ],
    [ '*Loading milohax.net wiki\n' ],
    [ '*Please wait......' ]
];

var text = [];
var speedup = 2;
var echo_delay = 20;

function init(_text)
{
    for (var i = 0, m = _text.length; i < m; i++) {
        if (!_text[i][0]) break;

        if (_text[i][0][0] !== '*') {
            text.push(_text[i]);
            continue;
        }

        // Emulate teletype
        var s = _text[i][0];
        for (var j = 1, mj = s.length; j < mj; j++) {
            var d = echo_delay;
            text.push([s[j], d]);
        }
    }
}

$(window).load(function(){
    var $w = $('#wrapper');
    var $t = $('#terminal');
    var $c = $('#wrapper .cursor');
    $t.hide();
    $w.scrollTop($w[0].scrollHeight);

    $('#wrapper').click(function(){speedup = 1;});

    function show(i) {
      if (i == text.length) {
          setTimeout(function(){
            window.location.href = "https://sinewalker.keybase.pub/net/milohax/";
          }, 3333);
      return;
    }

    var s = text[i][0];
    var delay = text[i][1];

    $t.show();
    $c.before(s);
    $w.scrollTop($w[0].scrollHeight);

    setTimeout(function(){
            show(i+1);
        }, Math.round((delay * (Math.random() * 0.5 + 0.75)) / speedup));
    }

    $w.addClass('loaded');
    setTimeout(function(){show(0)}, 0);
});
