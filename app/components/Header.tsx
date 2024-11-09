import Link from "next/link";
export default function Header() {
    return (
      <div className="flex justify-between px-4 bg-gray-500" > LOGO
        <ul className="flex gap-3 bg-gray-500">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/contact-us">Contact</Link>
                </li>
            <li>
                <Link href="/about">About</Link>
                </li>
            <li>
                <Link href="/email">Email</Link>
                </li>
        </ul>
        <h1></h1>
      </div>
    );
  }

