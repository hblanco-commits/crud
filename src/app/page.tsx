import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


    <div>
      <h1 className="text-4xl font-bold text-blue-700 leading-tight">
        Want to read <br /> Stories?
      </h1>

      <p className="text-gray-600 mt-4">
        In this website you'll be able to read a lot of stories available.
        Just create an account and login.
      </p>

      
      <Link href="/login">
  <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
    Login
  </button>
</Link>
    </div>


    <div className="flex gap-6 justify-center">
      <img
        src="/Ponyo.jpg"
        alt="ponyo"
        className="w-40 h-72 object-cover rounded-3xl shadow-md"
      />
      <img
        src="/Anime.jpg"
        alt="anime"
        className="w-40 h-72 object-cover rounded-3xl shadow-md"
      />
    </div>

  </div>
</div>
  );
}
