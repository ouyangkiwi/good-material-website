import Image from "next/image"
import Link from "next/link"

export function CalligraphyHero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="書法藝術"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">墨韻書藝</h1>
          <p className="mt-4 max-w-3xl text-xl">三十年書法藝術精髓，傳承千年文化底蘊</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/four-treasures"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              探索文房四寶
            </Link>
            <Link
              href="/calligraphy-schools"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              了解書法流派
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
