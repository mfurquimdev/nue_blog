var v=function(w){const f=w.matches,j=window.sessionStorage.getItem("color-scheme"),u=document.documentElement;switch(j){case"dark":{if(f)window.sessionStorage.setItem("color-scheme","automatic");u.classList.toggle("light-mode",!1),u.classList.toggle("dark-mode",!0);break}case"light":{if(!f)window.sessionStorage.setItem("color-scheme","automatic");u.classList.toggle("light-mode",!0),u.classList.toggle("dark-mode",!1);break}case"automatic":default:{u.classList.toggle("light-mode",f===!1),u.classList.toggle("dark-mode",f===!0);break}}},z=function(){const w=window.matchMedia("(prefers-color-scheme: dark)"),f=w.matches;switch(window.sessionStorage.getItem("color-scheme")){case"dark":{window.sessionStorage.setItem("color-scheme",f?"light":"automatic");break}case"light":{window.sessionStorage.setItem("color-scheme",f?"automatic":"dark");break}case"automatic":default:{window.sessionStorage.setItem("color-scheme",f?"light":"dark");break}}v(w)},B=function(w,f=A){const j=document.querySelector(w),u=window.sessionStorage.getItem(f);j.classList.toggle("serif",u==="serif"),j.classList.toggle("round",u==="round"),j.classList.toggle("sans",u==="sans")},x=window.matchMedia("(prefers-color-scheme: dark)");x.addListener(v);v(window.matchMedia("(prefers-color-scheme: dark)"));var A="mine-type-scheme";B("body");window.toggleTheme=z;
