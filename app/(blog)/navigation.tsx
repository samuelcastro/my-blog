import Link from "next/link";

export default function Navigation({ pathname }: { pathname: string }) {
  return (
    <nav className="border-b border-slate-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-5">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors duration-300"
        >
          My Blog
        </Link>

        <div className="flex items-center">
          <div className="flex space-x-6 mr-6">
            <NavLink href="/" isActive={pathname === "/"}>
              Home
            </NavLink>
            <NavLink href="/experience" isActive={pathname === "/experience"}>
              Experience
            </NavLink>
            <NavLink href="/about" isActive={pathname === "/about"}>
              About Me
            </NavLink>
          </div>

          <a
            href="https://calendly.com/samsilvas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`font-medium transition-colors duration-300 ${
        isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}
