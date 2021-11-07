import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import PostsScreen from './components/PostsScreen'
import ProjectsScreen from './components/ProjectsScreen'
import ConditionalNav from './components/ConditionalNav'

function App() {
  return (
    <>
      <ConditionalNav />
      <Routes>
        <Route element={<About />} path='/about' />
        <Route element={<SinglePost />} path='/post/:slug' />
        <Route element={<PostsScreen />} path='/post' />
        <Route element={<ProjectsScreen />} path='/project' />
        <Route element={<Home />} path='/' />
      </Routes>
    </>
  );
}

export default App;
