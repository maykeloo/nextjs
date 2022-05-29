import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src="/image 1.png" width={128} height={110} alt="logo" />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/people"><a>People list</a></Link>
    </nav>
  );
};

export default Navbar;
