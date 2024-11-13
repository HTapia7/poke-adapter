// pages/index.js or Home.js
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Navbar />
      <div className="container px-4 py-6 mx-auto">
        <Searchbar />
      </div>
    </div>
  );
}
