import AddPost from "./components/AddPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="w-screen min-h-screen bg-slate-400 overflow-auto">
      <div className="w-full sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-4/12 mx-auto flex items-center h-screen flex-col">
        <AddPost />
        <Posts />
      </div>
    </div>
  );
}

export default App;
