
const url = "http://localhost:8000/static/mock/blogs.json"

const getQueryParamaters = () => {
  const url = window.location
  let params = {}

  new URL(url).searchParams.forEach((val, key) => {
    params[key] = val
  })

  return params
}

const presentHero = data => {
  const heroTitleElement = document.getElementById("hero-title")
  const heroDescriptionElement = document.getElementById("hero-description")

  heroTitleElement.innerText = ""
  heroTitleElement.innerText = data[0].title

  heroDescriptionElement.innerText = ""
  heroDescriptionElement.innerText = data[0].description
}

const presentCards = data => {
  console.log("Cards")

  const cardRow = document.getElementById("card-row")
  let counter = 0


  data.forEach(blog => {
    if (counter != 0) {
      const colElement = document.createElement("div")
      const cardElement = document.createElement("div")
      const cardBodyElement = document.createElement("div")
      const headlineElement = document.createElement("h5")
      const paraElement = document.createElement("p")
      const linkElement = document.createElement("a")

      colElement.classList.add("col-sm-12")
      colElement.classList.add("col-md-6")
      colElement.classList.add("col-lg-4")
      colElement.classList.add("mb-3")

      cardElement.classList.add("card")

      cardBodyElement.classList.add("card-body")

      headlineElement.classList.add("card-title")
      headlineElement.innerText = blog.title

      paraElement.classList.add("card-text")
      paraElement.innerText = blog.description

      linkElement.classList.add("card-link")
      linkElement.innerText = "Read More"
      linkElement.href = `detail.html?index=${counter}`

      cardBodyElement.appendChild(headlineElement)
      cardBodyElement.appendChild(paraElement)
      cardBodyElement.appendChild(linkElement)

      cardElement.appendChild(cardBodyElement)

      colElement.appendChild(cardElement)

      cardRow.appendChild(colElement)
    }

    counter++
  })
}

const presentDetailedBlog = blog => {
  console.log(typeof(blog.description))
  const detailTitleElement = document.getElementById("detail-title")
  const detailDescriptionElement = document.getElementById("detail-description")
  const detailDateElement = document.getElementById("detail-date")
  const detailBodyElement = document.getElementById("detail-body")

  const date = new Date(blog.created_on)
  const formattedDate = date.toLocaleString()

  detailTitleElement.innerText = blog.title
  detailDescriptionElement.innerText = blog.description
  detailDateElement.innerText = formattedDate
  detailBodyElement.innerText = blog.body
}

fetch(url)
  .then(response => {
    if (!response.ok) {
      console.error("The response was bad")
    }
    return response.json()
  })
  .then(data => {
    const params = getQueryParamaters()

    if (params.index) {
      presentDetailedBlog(data[params.index])
    } else {
      console.log("Params Do Not Exist")

      presentHero(data)

      presentCards(data)
    }
  })

