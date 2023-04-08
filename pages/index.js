import Homepage from "../components/Homepage";
import Navbar from "../components/Shared/Navbar";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <Homepage />
    </div>
  );
}
