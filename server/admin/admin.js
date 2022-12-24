const form = document.getElementById("form");

// form.addEventListener("submit", submitForm);

function submitForm(e) {
    // e.preventDefault();
    const id = document.getElementById("id");
    const title = document.getElementById("title");
    const newsBody = document.getElementById("title");
    const category = document.getElementById("category");
    const img = document.getElementById("img");
    alert('title=>', title.value)
    alert('smallBody=>', smallBody.value)
    alert('category=>', category.value)
    alert('img=>', img.value)
    const formData = new FormData();
    formData.append("id", id.value);
    formData.append("title", title.value);
    formData.append("newsBody", newsBody.value);
    formData.append("category", category.value);
    formData.append("img", img.value)
    fetch("http://localhost:8800/uploadNewsByAdmin", {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
}