import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    
      <div className="flex w-100 border pt-16 bg-gray-100" >
        <div className="px-3 w-32">
          <Link href="/about">About</Link>
        </div>
        <div className="px-3 w-32">
          <Link href="/heroes">Heroes</Link>
        </div>
        <div className="px-3 w-32">
          <Link href="/search">Search</Link>
        </div>
      </div>
    
  );
}
