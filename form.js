const form = document.querySelector('#post-form')
const title = document.querySelector('#title')
const body = document.querySelector('#body')
const errorMassage = document.querySelector('#error-message')
const postsList = document.querySelector('#posts-list')
let editingPost = null


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

  const hasDuplicate = posts.some((post) => {
    if(post === editingPost){
      return false
    }
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

  if(editingPost){
    const editTitle = editingPost.querySelector('h2')
    const editBody = editingPost.querySelector('p')
    editTitle.textContent =  titleValue
    editBody.textContent =  bodyValue

    form.reset()
    editingPost = null
    return
  }

  const li = document.createElement('li')
  const postTitle = document.createElement('h2')
  const postBody = document.createElement('p')
  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.textContent = 'Удалить'
  deleteButton.classList.add('delete-button')
  const editButton = document.createElement('button')
  editButton.type = 'button'
  editButton.textContent = 'Редактировать'
  editButton.classList.add('edit-button')

  postTitle.textContent = titleValue
  postBody.textContent = bodyValue
  li.append(postTitle, postBody, deleteButton, editButton)
  postsList.append(li)
  form.reset()
  
})

postsList.addEventListener('click', (event)=>{
  if(event.target.classList.contains('delete-button')){
    const li = event.target.closest('li')
    if(editingPost === li){
      editingPost = null
      form.reset()
    }
    li.remove()
  }
  if(event.target.classList.contains('edit-button')){
    const li = event.target.closest('li')
    editingPost = li
    const postTitle = li.querySelector('h2')
    const postBody = li.querySelector('p')

    title.value = postTitle.textContent
    body.value = postBody.textContent
  }
})