// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.module.css';

function App() {
  const [featured, setfeatured] = useState('')
  const [featuredLoaded, setfeaturedLoaded] = useState(false)

  useEffect(()=>{
    async function getHompageConfig(){
      const response = await fetch('http://localhost:8800/getHomepageConfig')
      const data = await response.json()

      setfeatured(JSON.stringify(data))
      setfeaturedLoaded(true)
    }
    getHompageConfig()
  }, [])

  return (
    <div className="App">
      <div className="left">
        <h1>Upload News</h1>
        <form action='http://156.67.219.185:8800/uploadNewsByAdmin' method='post' preventDefault id="form">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Title of News" required name="title" id="title" /><br />
            <label htmlFor="">Body</label>
            <textarea name="newsBody" id="newsBody" required style={{fontFamily: 'sans-serif'}} placeholder='News Content' cols="30" rows="10"></textarea><br />
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
      </div>
      <div className="right">
        <h1>Homepage Configuration</h1>
        <form action="http://156.67.219.185:8800/editHomepageConfig" method='post' id='form2'>
          <div id='form2div'>
          <label htmlFor="h1">Headline 1</label>
          <input type="number" placeholder='First Main Headline' name='headline_1' defaultValue={featuredLoaded ? parseInt(JSON.parse(featured)['headline_1']):''} /><br /><br />
          <label htmlFor="">Sub Headline 1</label>
          <input type="number" placeholder='First SubHeadline under Main Headline' name='headline_2' defaultValue={featuredLoaded ? parseInt(JSON.parse(featured)['headline_2']):''} />
          <label htmlFor="">Sub Headline 1</label>
          <input type="number" placeholder='Second SubHeadline under Main Headline' name='headline_3' defaultValue={featuredLoaded ? parseInt(JSON.parse(featured)['headline_3']):''} /><br /><br />
          <label htmlFor="">Top Headlines</label>
          {
            featuredLoaded ? JSON.parse(featured)['latest_headlines'].map((i)=>{
              return <div>
                <input type="number" name="latest_headlines" placeholder='Latest Headline Number' defaultValue={parseInt(i)} /><br />
              </div>
            }):''
          }
          </div>
          <button onClick={()=>{}}>Remove Headline --</button><br />
          <button type='button' onClick={()=>{
            const form=document.getElementById('form2div')
            const input=document.createElement('input')
            input.name="latest_headlines"
            input.type="number"
            input.placeholder="Latest Headline Number"
            form.appendChild(input)
            form.appendChild('br')
          }}>Add Headline +</button><br />
          {/* <input type="number" placeholder='Latest Headlines' /><br /> */}
          {/* <input type="number" placeholder='Latest Headlines' /><br /> */}
          {/* <input type="number" placeholder='Latest Headlines' /><br /> */}
          {/* <input type="number" placeholder='Latest Headlines' /><br /> */}
          <input type="number" placeholder='Latest Headlines' /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
