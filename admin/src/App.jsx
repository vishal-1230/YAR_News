// import logo from './logo.svg';
import './App.module.css';

function App() {

  const uploadNews = async ()=>{
    const id = document.getElementById("id");
    const title = document.getElementById("title");
    const newsBody = document.getElementById("title");
    const smallBody = document.getElementById("smallBody")
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
    const response = await fetch("http://localhost:8800/uploadNewsByAdmin", {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        }
    })
  }

  return (
    <div className="App">
      <div className="left">
        <h1>Upload News</h1>
        <form action="" onSubmit={uploadNews} enctype="multipart/form-data" method="post" id="form">
            <label htmlFor="">News ID</label>
            <input type="number" name="id" id="id" required /><br />
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Title of News" name="title" id="title" required /><br />
            <label htmlFor="">Body</label>
            <textarea name="newsBody" id="newsBody" style={{fontFamily: 'sans-serif'}} placeholder='News Content' cols="30" rows="10"></textarea>
            {/* <input type="textarea" placeholder="News Content" name="newsBody" id="newsBody" required /><br /> */}
            <select name="category" id="category" required>
                <option value="" disabled selected>Select News Category</option>
                <option value="india">India</option>
                <option value="finance">Finance</option>
                <option value="world">World</option>
                <option value="politics">Politics</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
            </select><br />
            <label htmlFor="">News Image</label>
            <input type="file" name="img" id="img" required src="" alt="" /><br />
            <button type="submit" id="submit">UPLOAD</button>
        </form>
        <iframe width="1366" height="768" src="https://www.youtube.com/embed/_x4PKIJ6JVI" title="INTERFERENCE PART 1.4 young's double slit experiment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <hr />
        <div className="updateHomepage">
            <h2>Top 3 Headlines</h2>
        </div>
      </div>
      {/* <div className="right" style={{flexGrow: 1}}>
        <h1>News for Approvals</h1>
      </div>
      <div className="right2" style={{flexGrow: 1}}>
        <h1>News List</h1>
      </div> */}
    </div>
  );
}

export default App;
