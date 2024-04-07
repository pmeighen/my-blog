const backBtn = document.getElementById("backButton")
document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.getElementById('blog-posts');

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <article>
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p>Author: ${post.username}</p>
            </article>
        `;
        blogPosts.appendChild(postElement);
    });
});

backBtn.addEventListener("click",function(){
    window.location.href = 'index.html';
})

