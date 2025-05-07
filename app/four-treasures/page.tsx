import Image from "next/image"
import Link from "next/link"

export default function FourTreasuresPage() {
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
            <Link href="/four-treasures" className="text-sm font-medium underline underline-offset-4">
              文房四寶
            </Link>
            <Link href="/calligraphy-schools" className="text-sm font-medium hover:underline underline-offset-4">
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">文房四寶</h1>
              <p className="mt-4 text-gray-600 md:text-lg">筆、墨、紙、硯，書法藝術的靈魂所在，千年文化的精髓所在。</p>
            </div>
          </div>
        </section>

        <section id="brush" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AD%86_%E7%8E%84%E5%9C%83%E7%A9%8D%E7%8E%89.jpg-m1xSggzohBfBFO8iVysLdwio5sVxEc.jpeg"
                  alt="毛筆"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">毛筆</h2>
                <p className="mt-4 text-gray-600">
                  毛筆是中國書法藝術的靈魂工具，其歷史可追溯至新石器時代。毛筆的製作工藝精湛，選材考究，主要由筆毫、筆管和筆肚三部分組成。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">筆的種類</h3>
                    <p className="mt-2 text-gray-600">
                      根據筆毫材質的不同，毛筆可分為狼毫筆、羊毫筆、兼毫筆等。不同的筆毫有不同的特性，適合不同的書法風格。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">筆的選擇</h3>
                    <p className="mt-2 text-gray-600">
                      選擇毛筆時，應考慮筆鋒的彈性、蓄墨量和書寫風格。初學者可選擇中楷筆，熟練後可根據個人風格選擇不同的毛筆。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">筆的保養</h3>
                    <p className="mt-2 text-gray-600">
                      使用後的毛筆應及時清洗，並保持筆鋒的形狀。存放時應避免陽光直射和潮濕環境，以延長毛筆的使用壽命。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ink" className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight">墨</h2>
                <p className="mt-4 text-gray-600">
                  墨是中國書法藝術的重要材料，其製作工藝精湛，選材考究。傳統墨主要由松煙或油煙與膠質混合製成，經過多道工序精製而成。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">墨的種類</h3>
                    <p className="mt-2 text-gray-600">
                      根據原料的不同，墨可分為松煙墨和油煙墨。松煙墨色澤青黑，適合寫大字；油煙墨色澤純黑，適合寫小字。圖中展示的是傳統的黃山松煙墨，採用古法製作，品質上乘。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">墨的選擇</h3>
                    <p className="mt-2 text-gray-600">
                      選擇墨時，應考慮墨的質地、色澤和書寫風格。好的墨應該色澤純正，研磨細膩，書寫流暢。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">墨的保養</h3>
                    <p className="mt-2 text-gray-600">
                      墨應存放在乾燥通風的環境中，避免陽光直射和潮濕環境。使用時應輕拿輕放，避免碰撞和摔落。
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9D%BE%E7%85%992.jpg-Eto2kolEIYJJsjbGy3DtaGJpCxfPv0.jpeg"
                  alt="墨"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="paper" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%A3%E7%B4%99_%E6%A1%83%E8%A8%98.jpg-9SPNMkJSJXOyOfExHmrAUqRzq8rUK2.jpeg"
                  alt="宣紙"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">紙</h2>
                <p className="mt-4 text-gray-600">
                  紙是中國書法藝術的重要載體，其歷史可追溯至東漢時期。宣紙是書法藝術中最常用的紙張，其製作工藝精湛，選材考究。圖中展示的是傳統的桃記宣紙，是書法創作的優質選擇。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">紙的種類</h3>
                    <p className="mt-2 text-gray-600">
                      根據製作工藝的不同，宣紙可分為生宣和熟宣。生宣吸水性強，適合寫潑墨大字；熟宣吸水性弱，適合寫精細小字。此外，還有各種特殊用途的宣紙，如金箋、棉料宣等。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">紙的選擇</h3>
                    <p className="mt-2 text-gray-600">
                      選擇紙時，應考慮紙的質地、吸水性和書寫風格。好的宣紙應該質地均勻，吸水性適中，書寫流暢。初學者可選擇熟宣練習，熟練後可嘗試使用生宣創作。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">紙的保養</h3>
                    <p className="mt-2 text-gray-600">
                      宣紙應存放在乾燥通風的環境中，避免陽光直射和潮濕環境。使用時應輕拿輕放，避免折疊和撕裂。珍貴的書法作品應裝裱保存，以延長保存時間。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inkstone" className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight">硯</h2>
                <p className="mt-4 text-gray-600">
                  硯是中國書法藝術的重要工具，其歷史可追溯至新石器時代。硯的主要功能是研墨，但同時也是文人雅士的珍藏品。圖中展示的是精美的端硯，黑色橢圓形硯台具有光滑的研墨面，旁邊的石硯則刻有古老題詞，還有胡開文墨廠出品的精美墨塊，這些都是書法創作中不可或缺的寶貴工具。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">硯的種類</h3>
                    <p className="mt-2 text-gray-600">
                      根據產地的不同，硯可分為端硯、歙硯、洮硯等。不同的硯石有不同的特性，適合不同的書法風格。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">硯的選擇</h3>
                    <p className="mt-2 text-gray-600">
                      選擇硯時，應考慮硯的質地、研墨效果和書寫風格。好的硯應該質地細膩，研墨效果好，使用壽命長。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">硯的保養</h3>
                    <p className="mt-2 text-gray-600">
                      硯應存放在乾燥通風的環境中，避免陽光直射和潮濕環境。使用後應及時清洗，並保持硯面的乾燥。
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/images/inkstone.png"
                  alt="硯台"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover shadow-md mx-auto"
                />
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
