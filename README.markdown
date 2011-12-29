# Рингтоны для Яндекс.Почты

В продолжение темы почтовых шариков (http://www.youtube.com/watch?v=-QAChuT8OwM) родился скриптик, который умеет играть на этих самых шариках мелодии по нотам.

 
## Запустить можно двумя способами.
  1. С помощью букмарклета (не работает в FireFox)

    * открываем mail.yandex.ru с новогодним оформлением
    * вставляем в адресную строку браузера следующую строчку:

        javascript:(function(a){var b="1|e|8,1|g|8,1|b|8,1|g|8,1|a|4,1|g|8,1|f#|8,1|b|4,1|a|4,1|e|2",c=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],d=a(".b-ball_bounce"),e=function(b){var f=b.split(","),g=f.shift(),h=g.split("|"),i=parseInt(h[0]),j=h[1],k=parseInt(h[2]),l=a.inArray(j,c)+12*i,m=4e3/k;d.eq(l).trigger("mouseover"),window.setTimeout(function(){e(f.join(","))},m)};e(b)})(jQuery);

  2. Из любой js-консоли выполнить следующий код:

        (function(a){var b="1|e|8,1|g|8,1|b|8,1|g|8,1|a|4,1|g|8,1|f#|8,1|b|4,1|a|4,1|e|2",c=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],d=a(".b-ball_bounce"),e=function(b){var f=b.split(","),g=f.shift(),h=g.split("|"),i=parseInt(h[0]),j=h[1],k=parseInt(h[2]),l=a.inArray(j,c)+12*i,m=4e3/k;d.eq(l).trigger("mouseover"),window.setTimeout(function(){e(f.join(","))},m)};e(b)})(jQuery);

 
## Исходный код:
 
    ;(function($) {
        var melody = '1|e|8,1|g|8,1|b|8,1|g|8,1|a|4,1|g|8,1|f#|8,1|b|4,1|a|4,1|e|2';
        var scale = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
        var bounces = $('.b-ball_bounce');
        var play = function(str) {
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
                play(notes.join(','));
            }, timeout);
        };
     
        play(melody);
    })(jQuery);


## Как писать ноты
 
Ноты пишем в переменную melody через запятую в следующем формате: октава|нота|доля.

В нашем распоряжении чуть больше пяти октав: 0 - самая низкая, 5 - кусочек самой высокой.

Ноты выбираем из ряда: c, c#, d, d#, e, f, f#, g, g#, a, a#, b

Доли соответствуют обычным нотным долям: 2 - половинка, 4 - четвёртая, 8 - восьмая итд.