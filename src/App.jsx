import { useSelector, useStore } from "react-redux";
import AddPostForm from "./components/AddPostForm";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  return (
    <div className="w-screen min-h-screen bg-slate-400 overflow-y-auto overflow-x-hidden">
      <div className="w-full sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-4/12 mx-auto flex items-center h-screen flex-col">
        <Header />
        {auth.isLoggedIn ? <AddPostForm /> : <AuthForm />}
        <Posts />
      </div>
    </div>
  );
}

export default App;
