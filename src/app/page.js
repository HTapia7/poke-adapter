import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar"
import Card from './components/PokeCards'

export default function Home() {
  return (
    <>
        <Navbar/>
        <Searchbar/>
        <h1>Home</h1>
        <Card/>
    </>
  );
}
