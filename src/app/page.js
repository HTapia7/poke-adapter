import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <header className="w-full py-12 text-white bg-blue-500 dark:bg-blue-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to the Pokémon Nav</h1>
          <p className="mt-4 text-lg">
            Find your favorite Pokémon, explore their stats, and discover their unique types!
          </p>
        </div>
      </header>

      <main className="container px-4 py-6 mx-auto">
        <div className="max-w-xl mx-auto">
          <Searchbar />
        </div>
      </main>
    </div>
  );
}
