---
---

const url = '{{site.url}}'

document.addEventListener("DOMContentLoaded", () => {

    new SweetScroll({})

    for (let el of particle_js_elements)
        if (document.getElementById(el))
            particlesJS(el, particle_js_option)

}, false)

function navigatePostPage(path) {

    sessionStorage.setItem('last__page',
        JSON.stringify(
            { url, path }
        ))

    window.location.href = `${url}${path}`
}

function lastPostPage() {

    let
        last = sessionStorage.getItem('last__page'),
        navigate = url

    if (last) {
        last = JSON.parse(last)
        navigate = `${last.url}${last.path}`
    } else {
        navigate = `${url}/articles/`
    }

    window.location.href = navigate
}

function openSample(name, path) {

    console.log(name);
    console.log(path);

}