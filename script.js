// async function getPost() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     response = await response.json()
//     console.log(response);
//     console.log(response.title)
// }

async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    response = await response.json();
    return response;
}
async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    response = await response.json();
    return response;
}

async function getComments() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    response = await response.json()
    return response
}

function getUserByID(users, id) {
    return users.find(user => user.id == id);
}

window.onload = async () => {
    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments()
    

    const postsElement = document.getElementById("posts");
    const searchByName = document.getElementById("searchByName")
    const searchBtn = document.getElementById("searchBtn")
    const limitInput = document.getElementById("limitPosts")
    const commentElement = document.getElementById("comments")

    renderPosts(posts, comments)

    searchBtn.addEventListener('click', () => {
        const filteredPosts = filterByName(searchByName.value)
        renderPosts(filteredPosts)
    })

    function filterByName(query) {
        return posts.filter((post) => post.title.includes(query))
    }

   

    async function renderPosts(posts, comments){
            postsElement.innerHTML = '';
            posts.slice(0, limitInput.value).forEach(post => {
                const postelement = document.createElement('div');
                postelement.classList.add('post');

                const user = getUserByID(users, post.userId)

                postelement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <p>${user.name}</p>
                <p>${comments.email}</p>
            
                `;
                postsElement.append(postelement)
            })
    }

}

