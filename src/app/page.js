import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 py-6 mx-auto">
        <Searchbar />
      </div>
    </div>
  );
}
