import logo from './logo.svg';
// import './App.css';
import styled from '@emotion/styled'
import bg from './images/waterbg.jpg'
import me from './images/me.png'
import { useState } from 'react';

const colors = {
  dark: "#2A2929",
  light: "#B7B9A9"
}
const Body = styled.div`
  font-family: "Ubuntu", monospace;
  background: url(${bg});
  min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  .wrapper {
    width: 75vw;
    margin: auto;
    display: flex;
    flex-direction: row;
  }
  h2 {
    // font-size: 2rem
  }
  // div {
  //   margin: 0 15px;
  // }
  // div:last-of-type {
  //   margin: 0 0 0 30px;
  // }
  // div:first-of-type {
  //   margin: 0 30px 0 0;
  // }
`

const Box = styled.div`
  background: ${colors.dark};
  border: 3px solid ${colors.light};
  color: ${colors.light};
  padding: 15px;
  flex: ${props => props.active ? "3" : "1"};
  max-height: ${props => props.active ? "60vh" : "5vh"};
  overflow: ${props => props.active ? "auto" : "hidden"};
  transition: 0.4s flex;
  margin: ${props => props.middle ? "0 15px" : 0};
  // max-height: 50vh;
  a {

    color: ${colors.light};
    text-decoration: none;
    &:hover {
      opacity: .75;
    }
  }
  dl, h3 {
    opacity: 0.01;
    display: none;
    // font-size: 0.01rem;
    // white-space: nowrap;
  }
  dt, dd, dl {
    padding: 10px;
  }
  dt {
    font-weight: 900;
    // font-size: 1.25rem;
  }
  .show {
    transition: 0.25s all;
    transition-delay: 0.2s;
    display: flex;
    flex-direction: column;
    opacity: 0.99;
    // font-size: inherit;
    // white-space: normal;
  }
`

function App() {
  const [ active, setActive ] = useState(0)
  const data = [
    {
      title: ["listening","lots of vaporwave recently, but not exclusively"],
      content: [
        ["Tycho", "Remixes of his new album", "https://www.youtube.com/watch?v=v7OyTySd83g&list=PL7oQgtXrnU0BsI1uHynhiBeA1bDOGqlKq"],
        ["Com Truise", "Old stuff recently released: In Decay, Too", "https://youtu.be/7oToD8Nnh0k"],
        ["Madlib", "Shades of Blue caught my ear recently", "https://www.youtube.com/watch?v=WY0Sap4Q0sg&list=PLcxmmGC6Lv9youEshjI5K7UQOZydxKzOn"],
        ["Acid Mothers Temple", "It's always fun to see what they're up to", "https://www.youtube.com/watch?v=YlGjzvt-Eto"],
        ["Lofi hip hop beats to relax/study to", "Pretty much always", "https://www.youtube.com/watch?v=5qap5aO4i9A"]]
    },{
  
      title: ["making","mostly work stuff"],
      content: [
        ["Collective Wisdom Handbook: Perspectives on Crowdsourcing in Cultural Heritage","Finished the book yesterday - look for it on the NTY BS list soon.","https://collectivewisdomproject.org.uk/"],
        ["Newberry Transcribe", "Literally 65,000 pages so far.", "https://publications.newberry.org/transcribe"],
        ["Midwest Time Machine", "Mostly Jen, I just did the code.", "https://publications.newberry.org/time-machine"],
        ["Digital Collections for the Classroom", "Huge project; I just put their content on the internet.", "https://dcc.newberry.org"],
        ["Foreign Language Press Survey", "Articles from the 19th c, transcribed in the 20th, internetted in 2007, rebuilt this winter.", "https://flps.newberry.org"],
        ["Chicago 1919", "It's almost like all this has happened before.", "https://chicago1919.org"]]
    },{
  
      title: ["reading", "these are the things I've pulled off my shelves recently"],
      content: [["Leo Cohen's Beautiful Losers", "Honestly, it was just because his 'about the author' was so good, I needed to reread it for inspiration."],
      ["Borges Collected Fictions", "Ask me about camels in the Koran, or those Romantic Gauchos - two of my favorite rants."],
      ["Ricardo Piglia's Artificial Respiration", "If you look for hidden meaning for long enough, you'll find it."],
      ["Maurice Blanchot's When the Time Comes", "'Still a face I know!' Even trying to describe his ideas sends me off into spirals."],
      ["Alphonso Lingis's Trust", "Not my favorite but his books are disappearing."]]
    }
  ]
  const contentBoxes = data.map((i, index)=> {
    function dont (e){ e.stopPropagation()}
    const deeEll = i.content.map(o => <><dt><a href={o[2]}target="_blank" rel="noopener noreferrer" onClick={(e) => dont(e)}>{o[0]}</a></dt><dd>{o[1]}</dd></>)
    return <Box 
      className={i.title[0]} 
      active={active === index + 1} 
      middle={index === 1} 
      onClick={() => setActive(active === index+1 ? 0 : index+1)}>
        <h2>{i.title[0]}</h2>
        <h3 className={active === index + 1 ? "show" : "hide"} >
          {i.title[1]}
        </h3>
        <dl className={active === index + 1  ? "show" : "hide"} >
          {deeEll}
        </dl>
      </Box>})
    return (
    <Body className="App">
      <Header className="wrapper"/>
      <main className="wrapper">{contentBoxes}
      </main>
    </Body>
  );
}

export default App;

const Header = () => {
  // const data = ["1:52pm","not responsive, less than 60 seconds"]
  const data = ["Nick White", "Web Developer / Librarian at the Newberry Library"]
  return (
    <HeaderCss>
      <div className="banner">
        <div>

        <h1>{data[0]}</h1>
        <span>{data[1]}</span>
        </div>
        <div>
          <img src={me} />
        </div>
      </div>
    </HeaderCss>
  )
}

const HeaderCss = styled.header`
  width: 75vw;
  margin: 15px auto;
  .banner {
    margin: 0;
    height: 100px;
    display: flex;
    background: ${colors.dark};
    border: 3px solid ${colors.light};
    color: ${colors.light};
    padding: 15px;
    align-content: space-between;
    justify-content: space-between;
  }
  h1 {
    display: inline-block;
    padding-right: 20px;
  }
  img {
    height: 100px;
  }
`