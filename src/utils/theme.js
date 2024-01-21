// 要考量到 themeName(給 localStorage) 跟 ClassName(for toggle)

function setTheme(themeName, setClassName) {
  localStorage.setItem('theme', themeName); // dark, light (放在 localStorage)
  setClassName(themeName); // theme-dark; theme-light
}

function keepTheme(setClassName) {
  const theme = localStorage.getItem('theme');
  if (theme) { //若預設有提供 假設是 light
    setTheme(theme, setClassName); // setTheme("light", setClassName) //傳入 setTheme => localStorage 命名 light (再次命名？？) ＆ setClassName("light")
    // 前者用意是反正有遇到有提供、就再命名一次、return 
    //  不過多做了一個動作，把 className 命名叫做 light (而不是 theme-light) @@?why?
    return;
  }

  // 如果預設沒提供（或是空？）、則會繼續往下走到這裡 => 但沒有呀 有東西下面才能動，還是說這個 prefer scheme 是在哪裡找到的？跟 localStorage 沒關係？
  // 當取得了 localStorage 的 theme 是 match light
  // 則 setTheme 名稱叫做 theme-light, 同時也命名 className (之後就換掉了、不會再取原生的 dark/light 而是都改叫做 theme-light/theme-dark)
  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
  if (prefersLightTheme.matches) {
    setTheme('theme-light', setClassName); //將 light 改叫做 theme-light
    return;
  }
  // 沒 match 代表是 theme-dark
  setTheme('theme-dark', setClassName);
}

export { setTheme, keepTheme }

