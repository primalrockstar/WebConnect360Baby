import Link from "next/link"

export function Navbar() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" aria-label="Home">
            <span className="text-2xl font-bold">Brand</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
