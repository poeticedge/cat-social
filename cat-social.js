const cats = [
    {
        name: 'Pumpkin',
        thumbnail: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg'
    },
     {
        name: 'Snuggles',
        thumbnail: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142774.jpg'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cruella',
        thumbnail: 'https://www.npvet.co.nz/wp-content/uploads/2019/11/adorable-animal-baby-blur-177809.jpg',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    }
]

const catBasket = document.getElementById ('cat-basket'
  // console.log(cat-basket)
)

cats.forEach(cat => {
    const card = document.createElement('div')
    card.classList.add('card');
    catBasket.appendChild(card)

    const pic = document.createElement('img')
    pic.classList.add('pic');
    pic.src = cat.thumbnail
    card.appendChild(pic)

    const catName = document.createElement('h2')
    catName.classList.add('cat-name');
    catName.textContent = cat.name
    card.appendChild(catName)
})



