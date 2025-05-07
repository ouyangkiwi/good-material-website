import Image from "next/image"
import Link from "next/link"

export function FourTreasuresPreview() {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">文房四寶</h2>
        <p className="mt-4 text-gray-600">筆、墨、紙、硯，書法藝術的靈魂所在，千年文化的精髓所在。</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
          <div className="aspect-square overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AD%86_%E7%8E%84%E5%9C%83%E7%A9%8D%E7%8E%89.jpg-m1xSggzohBfBFO8iVysLdwio5sVxEc.jpeg"
              alt="毛筆"
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">毛筆</h3>
            <p className="mt-2 text-sm text-gray-600">
              自古以來，毛筆是書法家的靈魂延伸，筆鋒的剛柔並濟，展現書法的神韻與氣質。
            </p>
            <Link
              href="/four-treasures/brush"
              className="mt-4 inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              了解更多
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
          <div className="aspect-square overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9D%BE%E7%85%992.jpg-Eto2kolEIYJJsjbGy3DtaGJpCxfPv0.jpeg"
              alt="墨"
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">墨</h3>
            <p className="mt-2 text-sm text-gray-600">
              墨的濃淡變化，是書法藝術的靈魂所在，從松煙墨到油煙墨，各具特色，各有千秋。
            </p>
            <Link
              href="/four-treasures/ink"
              className="mt-4 inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              了解更多
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
          <div className="aspect-square overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%A3%E7%B4%99_%E6%A1%83%E8%A8%98.jpg-9SPNMkJSJXOyOfExHmrAUqRzq8rUK2.jpeg"
              alt="紙"
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">紙</h3>
            <p className="mt-2 text-sm text-gray-600">
              宣紙的柔韌與吸墨性，為書法提供了最佳的表現空間，從生宣到熟宣，各有不同的藝術效果。
            </p>
            <Link
              href="/four-treasures/paper"
              className="mt-4 inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              了解更多
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
          <div className="aspect-square overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A2%A8_%E8%83%A1%E9%96%8B%E6%96%87%E4%BA%94%E5%8D%81%E9%80%B1%E5%B9%B4.jpg-Ij9Yd9Iy9Ij9Yd9Iy9Ij9Yd9Iy9Ij9Yd9Iy.jpeg"
              alt="硯"
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">硯</h3>
            <p className="mt-2 text-sm text-gray-600">
              硯台是研墨的工具，也是文人雅士的珍藏，端硯、歙硯、洮硯等，各具特色，各有千秋。
            </p>
            <Link
              href="/four-treasures/inkstone"
              className="mt-4 inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              了解更多
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/four-treasures"
          className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
        >
          探索全部文房四寶
        </Link>
      </div>
    </section>
  )
}
