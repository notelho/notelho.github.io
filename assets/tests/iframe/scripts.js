const images = [
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
]
const nav = document.getElementById('nav')
const wrapper = document.getElementById('wrapper')

for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img')
    img.src = images[i]
    img.id = 'img-' + i
    nav.append(img)
    wrapper.append(img)
}