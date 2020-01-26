---
---

const url = '{{site.url}}'

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
    }

    window.location.href = navigate
}