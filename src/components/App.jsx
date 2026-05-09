import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Links from "./Links";
import blog from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />
      
      <About about={blog.about} image={blog.image} />
      
      <ArticleList posts={blog.posts} />
      
      <Links links={blog.links} />
    </div>
  );
}

export default App;