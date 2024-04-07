const form = document.getElementById('blog-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete the form');
        return; //early return
    }

    const post = {
        username: username,
        title: title,
        content: content
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    

    window.location.href = 'blog.html';
});