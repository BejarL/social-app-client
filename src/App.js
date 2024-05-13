import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { PostProvider } from "./contexts/PostContext";
import { Post } from "./components/Post";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route
            path="/posts/:id"
            element={
              <PostProvider>
                <Post />
              </PostProvider>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
