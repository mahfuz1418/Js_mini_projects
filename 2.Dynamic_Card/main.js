// const posts = [
//     {
//         title : "title 1",
//         description: "description 1",
//     },
//     {
//         title : "title 2",
//         description: "description 2",
//     },
//     {
//         title : "title 3",
//         description: "description 3",
//     },
//     {
//         title : "title 4",
//         description: "description 4",
//     },
//     {
//         title : "title 5",
//         description: "description 5",
//     },
//     {
//         title : "title 6",
//         description: "description 6",
//     },
//     {
//         title : "title 7",
//         description: "description 7",
//     },
//     {
//         title : "title 8",
//         description: "description 8",
//     },

// ]
{/* <div class="post">
        <h4 class="post-title">This is title 1</h4>
        <p class="post-body">Post Description 1</p>
</div> */}
// const postsElement = document.querySelector('.posts');
// const loadAllData = () => {
//     posts.map((post) => {
//         const postElement = document.createElement('div');
//         postElement.classList.add('post');
//         postElement.innerHTML = `
//             <h4 class="post-title">${post.title}</h4>
//             <p class="post-body">${post.description}</p>
//         `;
//         postsElement.appendChild(postElement);
//     });
// };
// loadAllData();

// fetch data 
const fetchData = async(config) => {

    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error('data not found');
    }
    
};


const postsElement = document.querySelector('.posts');
const loadAllData = async() => {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
};
loadAllData();








