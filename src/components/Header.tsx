import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-brand">
          Carbosia
        </Link>

        <nav className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link> {/* nuovo link */}
          <Link href="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
