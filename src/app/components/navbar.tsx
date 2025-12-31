"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PicafeLogo from "./logo";

interface Nav {
  className: string;
  animated: boolean;
}

const navigation = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "skills", href: "/skills" },
];

export default function Navbar(props: Nav) {
  const pathname = usePathname();
  return (
    <nav
      className={`${props.className} ${props.animated ? "animate-fade-in" : ""
        } z-10 flex flex-col items-center`}
    >
      {
        pathname !== "/" && (

          <div className="mb-3">
            <PicafeLogo textSize="text-xl sm:text-4xl" />
          </div>
        )
      }
      <ul className="font-pixel flex items-center justify-center gap-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-medium duration-500  ${isActive ? "text-zinc-200" : "text-zinc-400"
                } hover:text-zinc-200`}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
