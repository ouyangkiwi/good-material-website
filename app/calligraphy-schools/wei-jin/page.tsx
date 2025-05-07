import Image from "next/image"
import Link from "next/link"

export default function WeiJinCalligraphyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-sm" />
            <span className="text-xl font-semibold tracking-wider">墨韻書藝</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              首頁
            </Link>
            <Link href="/four-treasures" className="text-sm font-medium hover:underline underline-offset-4">
              文房四寶
            </Link>
            <Link href="/calligraphy-schools" className="text-sm font-medium underline underline-offset-4">
              書法流派
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
              作品展示
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              關於我
            </Link>
          </nav>
          <button className="flex items-center justify-center rounded-md w-8 h-8 md:hidden">
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
              className="h-4 w-4"
            >
              <path d="M4 6h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">魏晉南北朝書法</h1>
              <p className="mt-4 text-gray-600 md:text-lg">楷書、行書、草書的興起與發展，書法藝術的黃金時代</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="/images/wei-jin-calligraphy.png"
                  alt="王羲之《遠宦帖》"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">王羲之與《遠宦帖》</h2>
                <p className="mt-4 text-gray-600">
                  圖中展示的是東晉「書聖」王羲之的《遠宦帖》，這是王羲之行書的代表作之一。《遠宦帖》筆法流暢自然，結構靈活多變，字與字之間連綿不斷，展現了王羲之行書的典雅流暢與自然灑脫。紙面上的紅色印章是歷代收藏者和鑑賞者的印記，顯示了此作品的珍貴價值。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">歷史背景</h3>
                    <p className="mt-2 text-gray-600">
                      魏晉南北朝時期（220年-589年）是中國書法藝術發展的重要階段，楷書、行書、草書在這一時期得到了充分的發展。王羲之生活在東晉時期，他融合了前人的書法精華，創造了自己獨特的書法風格，被後世尊為「書聖」。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">藝術特點</h3>
                    <p className="mt-2 text-gray-600">
                      王羲之的行書筆法圓轉流暢，結構靈活多變，字與字之間連綿不斷，既保持了漢字的基本結構，又有一定的變化，展現了行書的典雅流暢與自然灑脫。王羲之的書法被譽為「飄若浮雲，矯若驚龍」，形象地描述了其書法的飄逸灑脫與剛健有力。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">影響與傳承</h3>
                    <p className="mt-2 text-gray-600">
                      王羲之的書法對後世產生了深遠的影響，唐太宗李世民對王羲之的書法推崇備至，下令收集王羲之的書法作品，並將其《蘭亭序》奉為「天下第一行書」。王羲之的書法風格影響了後世無數書法家，成為中國書法藝術的重要典範。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">魏晉南北朝書法大師</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">鍾繇（151年-230年）</h3>
                  <p className="mt-2 text-gray-600">
                    三國魏臣，被譽為「楷書之祖」。鍾繇的書法承襲漢隸，開創楷書，筆法遒勁有力，結構嚴謹，為後世楷書的發展奠定了基礎。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">王羲之（303年-361年）</h3>
                  <p className="mt-2 text-gray-600">
                    東晉書法家，被譽為「書聖」。王羲之的書法融合了前人的書法精華，創造了自己獨特的書法風格，其行書《蘭亭序》被譽為「天下第一行書」。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">王獻之（344年-386年）</h3>
                  <p className="mt-2 text-gray-600">
                    東晉書法家，王羲之之子，被譽為「小聖」。王獻之的書法繼承了父親的風格，但更加靈活多變，其代表作有《洛神賦》等。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">智永（約6世紀）</h3>
                  <p className="mt-2 text-gray-600">
                    南朝書法家，王羲之的七世孫。智永一生致力於書法藝術，其書法繼承了王氏家族的傳統，代表作有《真草千字文》等。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Logo"
                width={24}
                height={24}
                className="rounded-sm"
              />
              <span className="text-lg font-semibold tracking-wider">墨韻書藝</span>
            </Link>
            <p className="text-sm text-gray-500">專注書法藝術三十餘載，傳承經典，開創新風。</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">網站導覽</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-sm hover:underline">
                  首頁
                </Link>
                <Link href="/four-treasures" className="text-sm hover:underline">
                  文房四寶
                </Link>
                <Link href="/calligraphy-schools" className="text-sm hover:underline">
                  書法流派
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">資源</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/gallery" className="text-sm hover:underline">
                  作品展示
                </Link>
                <Link href="/courses" className="text-sm hover:underline">
                  書法課程
                </Link>
                <Link href="/articles" className="text-sm hover:underline">
                  書法文章
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">聯絡方式</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/about" className="text-sm hover:underline">
                  關於我
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  聯絡我們
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
            <p className="text-xs text-gray-500">© 2024 墨韻書藝. 保留所有權利.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-gray-500 hover:underline">
                隱私政策
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:underline">
                使用條款
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
