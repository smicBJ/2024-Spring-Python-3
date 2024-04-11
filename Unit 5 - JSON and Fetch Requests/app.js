student={name:"Henry",grade:12,weight:"70kg"};console.log(student.name)

const url = "http://10.6.20.170:8000/static/mock/blogs.json"

const putUserInfo = data => {
  const userListDiv = document.getElementById("blog-list")

  userListDiv.innerHTML = ""

  let counter = 0

  data.forEach(user => {
    const divElement = document.createElement("div")
    if (counter == 0) {
      divElement.classList.add("active")
    }
    divElement.classList.add("carousel-item")

    const h1Element = document.createElement("h1")
    h1Element.textContent = `Title: ${user.title}`

    divElement.appendChild(h1Element)
    console.log(divElement)
    userListDiv.appendChild(divElement)
    console.log(userListDiv)

    counter++
  })
  // console.log(userListDiv)
}

fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error("Network sucks")
  }

  console.log(response)

  return response.json()
})
.then(data => {
  console.log(data)
  putUserInfo(data)
})
.catch(err => {
  console.error(err)
})


const urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get("id"))
