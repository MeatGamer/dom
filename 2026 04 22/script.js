// async function getPost() {
//     let response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//     response = await response.json()
//     console.log(response)
//     console.log(response.userId)
//     console.log(response.title)
// }

async function getPost() {
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    response = await response.json()
    return response
}

window.onload = async () => {
    const posts = await getPost()
    console.log(posts)
    // for(let i = 0; i < posts.length; i++){
    //     const post = document.getElementById('post')
    //     const li = document.createElement('li')
    //     li.textContent = posts[i].title
    //     post.appendChild(li)
    // }

    const postElements = document.getElementById('post')

    posts.forEach(post => {
        const postElement = document.createElement('div')
        postElement.innerHTML = `
            <p>${post.title}</p>
            <p>${post.body}</p>        
        `
        postElements.append(postElement)
    });
}


