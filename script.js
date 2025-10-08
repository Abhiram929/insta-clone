// script.js

// Render posts to either index.html or profile.html
document.addEventListener("DOMContentLoaded", () => {
  const feedContainer = document.getElementById("feed-container");
  const profilePostsContainer = document.getElementById("profile-posts");

  if (feedContainer) {
    // Show all posts
    posts.forEach(post => {
      feedContainer.innerHTML += createPostHTML(post);
    });
  }

  if (profilePostsContainer) {
    // Show only john doe's posts
    const userPosts = posts.filter(p => p.username === "johndoe");
    userPosts.forEach(post => {
      profilePostsContainer.innerHTML += createPostHTML(post);
    });
  }
});

function createPostHTML(post) {
  return `
    <div class="post">
      <h3>@${post.username}</h3>
      <img src="${post.image}" alt="Post by ${post.username}" />
      <p>${post.caption}</p>
    </div>
  `;
}
