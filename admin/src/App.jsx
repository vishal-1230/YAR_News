// import logo from './logo.svg';
import './App.module.css';

function App() {

  const uploadNews = async (e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("id", document.getElementById('id').value);
    alert(document.getElementById('id').value)
    formData.append("title", document.getElementById('title').value);
    formData.append("newsBody", document.getElementById('newsBody').value);
    formData.append("category", document.getElementById('category').value);
    formData.append("img", document.getElementById('img').value)
    await fetch("http://localhost:8800/uploadNewsByAdmin", {
        method: 'POST',
        body: formData,
    })
  }

  return (
    <div className="App">
      <div className="left">
        <h1>Upload News</h1>
        <form action='http://localhost:8800/uploadNewsByAdmin' method='post' preventDefault id="form">
            <label htmlFor="">News ID</label>
            <input type="number" name="id" required id="id" /><br />
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Title of News" required name="title" id="title" /><br />
            <label htmlFor="">Body</label>
            <textarea name="newsBody" id="newsBody" required style={{fontFamily: 'sans-serif'}} placeholder='News Content' cols="30" rows="10"></textarea><br />
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
            <label htmlFor="">News Image URL</label><br />
            <input type="text" name="img" id="img" required placeholder='Image URL' /><br />
            <button type="submit" id="submit">UPLOAD</button>
        </form>
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
