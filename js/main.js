document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const songTitle = document.querySelector('input').value
    try {
        const response = await fetch(`https://ben-folds-api.up.railway.app/api/${songTitle}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('songTitle').innerText = data.title
        document.getElementById('artist').innerText = data.artist
        document.getElementById('album').innerText = data.album
        document.getElementById('year').innerText = data.year
        document.getElementById('albumImage').src = data.image
        document.getElementById('albumCaption').innerText = data.album
    } catch(error) {
        console.log(error)
    }
}