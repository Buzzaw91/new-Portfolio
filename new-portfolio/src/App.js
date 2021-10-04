import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import PostsScreen from './components/PostsScreen'
import ProjectsScreen from './components/ProjectsScreen'
import ConditionalNav from './components/ConditionalNav'

function App() {
  return (
    <BrowserRouter>
      <ConditionalNav />
      <Switch>
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={PostsScreen} path='/post' />
        <Route component={ProjectsScreen} path='/project' />
        <Route component={Home} path='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
