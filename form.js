const form = document.querySelector('#post-form')
const title = document.querySelector('#title')
const body = document.querySelector('#body')
const errorMassage = document.querySelector('#error-message')
const postsList = document.querySelector('#posts-list')



form.addEventListener('submit', (event) =>{
  const posts = Array.from(postsList.querySelectorAll('li'))
  event.preventDefault()
  const titleValue = title.value
  const bodyValue = body.value

  errorMassage.textContent = ''
  if(titleValue.trim() === '' || bodyValue.trim() === ''){
    errorMassage.textContent = 'Заполните все поля'
    return
  }

  const li = document.createElement('li')
  const postTitle = document.createElement('h2')
  const postBody = document.createElement('p')

  const hasDuplicate = posts.some((post) => {
    const h2 = post.querySelector('h2')
    const p = post.querySelector('p')
    return(
      h2.textContent === titleValue || 
      p.textContent === bodyValue
    )
  })

  if(hasDuplicate){
    errorMassage.textContent = 'Пост с таким именем или такстом уже создан'
    return
  }

  postTitle.textContent = titleValue
  postBody.textContent = bodyValue
  li.append(postTitle, postBody)
  postsList.append(li)
  form.reset()
  
})