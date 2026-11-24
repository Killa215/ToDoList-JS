const postsList = document.querySelector('#posts-list')
const statusServer = document.querySelector('#status')

async function getPosts(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok)throw new Error(`Ошибка: ${response.status}`)
    const data = await response.json()
    if (!Array.isArray(data)) {
      throw new Error('Некорректные данные')
    }
    if (data.length === 0) {
      statusServer.textContent = "Постов пока нет"
      return
    }
    const isValid = data.every((post) =>{
      return(
        typeof post.id === "number" && 
        typeof post.title === "string" && post.title.trim() !== "" &&
        typeof post.body === "string" && post.body.trim() !== "" 
      )
    })
    if (!isValid) {
      throw new Error(`Некорректная структура постов`)
    }
    statusServer.textContent = ""
    data.slice(0, 3).forEach((post) => {
      const li = document.createElement('li')
      const title = document.createElement('h2')
      title.textContent = post.title
      const body = document.createElement('p')
      body.textContent = post.body

      li.append(title, body)
      postsList.append(li)
    });
    
  } catch (error) {
    statusServer.textContent = "Не удалось загрузить посты"
  }
} 

getPosts()