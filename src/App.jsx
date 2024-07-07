import {useState, useEffect} from 'react'
import Blog from './components/Blog.jsx'
import Login from "./components/Login.jsx";
import blogService from './services/blogs.js'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)


  useEffect(() => {
    blogService.getAll()
      .then(blogs => setBlogs(blogs))
      .catch(error => {
        console.error("Error fetching blogs:", error);
      });
  }, [])


  return (
    <div>
      {user === null && <Login setUser={setUser}/>}
      {user !== null &&
        <>
          <h2>blogs</h2>

          <p>{user.name} logged in</p>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
          )}
        </>
      }

    </div>
  )
}

export default App