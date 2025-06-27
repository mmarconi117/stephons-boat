const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      {/* Navigation */}
      <nav className="flex items-center space-x-10 font-bold text-sm uppercase text-black">
        {/* HOME (underline effect) */}
        <a href="/" className="border-b-2 border-blue-600 pb-1">Home</a>

        {/* OUR FLEET (boxed with dropdown arrow) */}
        <div className="flex items-center border-2 border-blue-600 rounded px-3 py-1">
          <a href="/fleet">Our Fleet</a>
          <span className="ml-1">▼</span>
        </div>

        {/* EXPERIENCES (with dropdown arrow, no box) */}
        <div className="flex items-center">
          <a href="/experiences">Experiences</a>
          <span className="ml-1">▼</span>
        </div>

        {/* CONTACT */}
        <a href="/contact">Contact</a>
      </nav>

      {/* BOOK NOW button */}
      <a
        href="/book"
        className="bg-blue-700 text-white px-6 py-2 font-bold text-sm uppercase hover:bg-blue-800 transition"
      >
        Book Now
      </a>
    </header>
  );
};

export default Header;
