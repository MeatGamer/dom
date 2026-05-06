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

function getUserByID(users, id) {
    return users.find(user => user.id == id);
}

window.onload = async () => {
    const posts = await getPosts();
    const users = await getUsers();

    const postsElement = document.getElementById("posts");
    const searchByName = document.getElementById("searchByName")
    const searchBtn = document.getElementById("searchBtn")
    const limitInput = document.getElementById("limitPosts")

    renderPosts(posts)

    searchBtn.addEventListener('click', () => {
        const filteredPosts = filterByName(searchByName.value)
        renderPosts(filteredPosts)
    })

    function filterByName(query) {
        return posts.filter((post) => post.title.includes(query))
    }

   

    async function renderPosts(posts) {
        postsElement.innerHTML = ''

        posts.slice(0, limitInput.value).forEach(post => {
            const postElement = document.createElement
        })

        posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const user = getUserByID(users, post.userId);

        postElement.innerHTML = `
            <p>${post.title}</p>
            <p>${post.body}</p>
            <p>${user.name}</p>
        `;
        postsElement.append(postElement);
    });
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const user = getUserByID(users, post.userId);

        postElement.innerHTML = `
            <p>${post.title}</p>
            <p>${post.body}</p>
            <p>${user.name}</p>
        `;
        postsElement.append(postElement);
    });
}

