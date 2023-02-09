import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
    <div>
      <diV className="topNav">
        <Image
          alt="logo"
          src={"/images/logo_black.png"}
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </diV>
      <p className="title">sed ut perspiciatis unde omis</p>
    </div>
  </header>
);
