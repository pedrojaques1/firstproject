function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// ao invés de html.classlist.toggle('light')
// da pra fazer assim também, aqui embaixo:
//
// if(html.classList.contains('light')){
//  html.classList.remove('light')
// } else {
//html.classList.add('light')
