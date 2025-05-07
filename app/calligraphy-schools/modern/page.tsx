import Image from "next/image"
import Link from "next/link"

export default function ModernCalligraphyPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">近現代書法</h1>
              <p className="mt-4 text-gray-600 md:text-lg">傳統與創新的融合，中國書法藝術的現代轉型</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="/images/modern-calligraphy.jpeg"
                  alt="于右任草書"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">于右任與標準草書</h2>
                <p className="mt-4 text-gray-600">
                  圖中展示的是民國時期著名政治家、書法家于右任（1879年-1964年）的草書作品。于右任創立了「標準草書」，將傳統草書簡化並提高其可讀性，使草書藝術在現代社會得以更廣泛的傳播與應用。他的書法作品筆法灑脫自如，結構嚴謹，融合了傳統與現代，展現了近現代書法藝術的獨特魅力。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">歷史背景</h3>
                    <p className="mt-2 text-gray-600">
                      近現代（1911年至今）是中國社會發生巨大變革的時期，書法藝術也面臨著傳統與現代的碰撞與融合。在這一時期，書法家們一方面繼承傳統，一方面探索創新，形成了多元化的發展趨勢。于右任作為民國時期的重要政治家和文化人，其書法藝術對現代中國書法的發展產生了深遠的影響。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">藝術特點</h3>
                    <p className="mt-2 text-gray-600">
                      于右任的標準草書融合了傳統草書的藝術特點和現代社會的實用需求，筆法灑脫自如，結構嚴謹，既保留了草書的藝術美感，又提高了其可讀性。他的書法作品線條剛柔並濟，結構疏密有致，展現了書法家深厚的藝術修養和獨特的藝術個性。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">影響與傳承</h3>
                    <p className="mt-2 text-gray-600">
                      于右任的標準草書對現代中國書法藝術產生了深遠的影響，他的書法理念和實踐為現代書法藝術的發展提供了新的思路和方向。今天，標準草書已成為中國書法藝術的重要組成部分，被廣泛應用於藝術創作、教育和日常生活中。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">近現代書法發展階段</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">晚清民初（1840年-1919年）</h3>
                  <p className="mt-2 text-gray-600">
                    這一時期，中國社會面臨著西方文化的衝擊，書法藝術也開始了傳統與現代的碰撞。康有為提出「復古」的藝術主張，強調對漢唐書法的學習與繼承；吳昌碩則融合書法、繪畫和篆刻，形成了獨特的藝術風格。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">民國時期（1912年-1949年）</h3>
                  <p className="mt-2 text-gray-600">
                    民國時期，書法藝術在傳統與現代的碰撞中尋求新的發展方向。于右任創立了「標準草書」，將傳統草書簡化並提高其可讀性；沈尹默則強調書法藝術的人文精神和藝術價值，對現代書法教育產生了深遠的影響。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">現代時期（1949年至今）</h3>
                  <p className="mt-2 text-gray-600">
                    現代時期，書法藝術在傳統的基礎上，融入了新的時代元素，形成了多元化的發展趨勢。啟功、沙孟海等書法家繼承傳統，又有所創新；劉炳森、歐陽中石等當代書法家則在傳統與現代的融合中，探索書法藝術的新路徑。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">近現代書法流派</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">碑學</h3>
                  <p className="mt-2 text-gray-600">
                    碑學是近現代書法藝術的重要流派，強調對漢唐碑刻的學習與繼承。碑學派書法家認為，漢唐碑刻保存了中國書法藝術的原始風貌，應該成為書法學習的主要對象。康有為、吳昌碩等書法家是碑學派的代表人物。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">帖學</h3>
                  <p className="mt-2 text-gray-600">
                    帖學是近現代書法藝術的另一重要流派，強調對古代法帖的臨摹與學習。帖學派書法家認為，古代法帖保存了中國書法藝術的精髓，應該成為書法學習的主要對象。沈尹默、于右任等書法家是帖學派的代表人物。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">現代派</h3>
                  <p className="mt-2 text-gray-600">
                    現代派是近現代書法藝術的新興流派，強調書法藝術的現代轉型和創新發展。現代派書法家認為，書法藝術應該與時俱進，融入現代藝術元素，探索書法藝術的新路徑。劉正成、王冬齡等書法家是現代派的代表人物。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">綜合派</h3>
                  <p className="mt-2 text-gray-600">
                    綜合派是近現代書法藝術的主流流派，強調對傳統書法藝術的繼承和創新發展。綜合派書法家認為，書法藝術應該在繼承傳統的基礎上，融入現代元素，形成自己的藝術風格。啟功、沙孟海等書法家是綜合派的代表人物。
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
