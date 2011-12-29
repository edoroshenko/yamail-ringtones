/*
(c) @zebra_nm
*/

(function(a){var b="1|g|8,1|f|8,1|f|2,1|a|8,1|b|8,2|c#|8,2|d|8,2|e|8,2|f|8,2|e|8,2|d|8,2|d|2,2|d|8,2|d|8,2|c|8,1|b|8,1|a|8,1|g|8,1|a#|4,1|a|8,1|a|4,1|g|4,1|f|4,1|a|8,1|g|4,1|d|4,1|f|4,1|a|8,1|a|2",c=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],d=a(".b-ball_bounce"),e=function(b){var f=b.split(","),g=f.shift(),h=g.split("|"),i=parseInt(h[0]),j=h[1],k=parseInt(h[2]),l=a.inArray(j,c)+12*i,m=4e3/k;d.eq(l).trigger("mouseover"),window.setTimeout(function(){e(f.join(","))},m)};e(b)})(jQuery);
