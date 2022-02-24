const commentHandler = async (evt) => {
    evt.preventDefault();
  
    const comment_text = document.querySelector("#comment_text").value.trim();
    const post_id = document.querySelector("#submitBtn").value.trim();
  
    if (comment_text) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({comment_text, post_id }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace(`/posts/${post_id}?`);
      } else {
        alert("Failed to post comment");
      }
    }
  };
  
  document
    .querySelector(".commentForm")
    .addEventListener("submit", commentHandler);