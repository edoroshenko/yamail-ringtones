# Рингтоны для Яндекс.Почты

В продолжение темы почтовых шариков (http://www.youtube.com/watch?v=-QAChuT8OwM) родился скриптик, который умеет играть на этих самых шариках мелодии по нотам.

 
## Запустить можно двумя способами.
  1. С помощью букмарклета (не работает в FireFox)

    * открываем mail.yandex.ru с новогодним оформлением
    * вставляем в адресную строку браузера такую строчку:

            javascript:(function(a){var b="1|e|8,1|g|8,1|b|8,1|g|8,1|a|4,1|g|8,1|f#|8,1|b|4,1|a|4,1|e|2",c=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],d=a(".b-ball_bounce"),e=function(b){var f=b.split(","),g=f.shift(),h=g.split("|"),i=parseInt(h[0]),j=h[1],k=parseInt(h[2]),l=a.inArray(j,c)+12*i,m=4e3/k;d.eq(l).trigger("mouseover"),window.setTimeout(function(){e(f.join(","))},m)};e(b)})(jQuery);

    * или такую

            javascript:(function(a){var b="1|d|16,1|a|16,1|g|16,1|a#|16,1|a|4,10|a|8,1|f|16,1|g|16,1|a|16,1|a#|8,1|a|16,1|d|2,10|a|16,10|a|4,1|d|16,1|a|16,1|g|16,1|a#|16,1|a|4,10|a|8,1|a|16,1|g|16,1|f|16,1|e|8,1|f|16,1|c|2,10|a|16,10|a|4,1|d|16,1|a|16,1|g|16,1|a#|16,1|a|4,10|a|8,1|f|16,1|g|16,1|a|16,1|a#|8,1|a|16,1|c|4,10|a|16,10|a|8,1|d|8,1|e|16,1|f|16,1|g|8,1|f|16,1|d|4,10|a|16,10|a|8,1|f|8,1|e|16,1|d|16,1|c|8,1|d|1",c=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],d=a(".b-ball_bounce"),e=function(b){var f=b.split(","),g=f.shift(),h=g.split("|"),i=parseInt(h[0]),j=h[1],k=parseInt(h[2]),l=a.inArray(j,c)+12*i,m=3e3/k;d.eq(l).trigger("mouseover"),window.setTimeout(function(){e(f.join(","))},m)};e(b)})(jQuery);

  2. Из любой js-консоли выполнить следующий код:

        (function(a){var b="1|e|8,1|g|8,1|b|8,1|g|8,1|a|4,1|g|8,1|f#|8,1|b|4,1|a|4,1|e|2",c=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],d=a(".b-ball_bounce"),e=function(b){var f=b.split(","),g=f.shift(),h=g.split("|"),i=parseInt(h[0]),j=h[1],k=parseInt(h[2]),l=a.inArray(j,c)+12*i,m=4e3/k;d.eq(l).trigger("mouseover"),window.setTimeout(function(){e(f.join(","))},m)};e(b)})(jQuery);

## Как писать ноты
 
Ноты пишем в переменную melody через запятую в следующем формате: октава|нота|доля.

В нашем распоряжении чуть больше пяти октав: 0 - самая низкая, 5 - кусочек самой высокой.

Ноты выбираем из ряда: c, c#, d, d#, e, f, f#, g, g#, a, a#, b

Доли соответствуют обычным нотным долям: 2 - половинка, 4 - четвёртая, 8 - восьмая и т.д.