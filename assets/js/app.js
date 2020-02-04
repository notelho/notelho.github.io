document.addEventListener("DOMContentLoaded", () => {

  new SweetScroll({})

  for (let el of particle_js_elements)
    if (document.getElementById(el))
      particlesJS(el, particle_js_option)

}, false)