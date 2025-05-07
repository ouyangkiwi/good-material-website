import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/calligraphy-schools" className="text-sm font-medium hover:underline underline-offset-4">
              書法流派
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
              作品展示
            </Link>
            <Link href="/about" className="text-sm font-medium underline underline-offset-4">
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">關於我</h1>
              <p className="mt-4 text-gray-600 md:text-lg">三十年書法藝術探索，傳承與創新並重</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-8 md:grid-cols-3 items-start">
                <div className="md:col-span-1">
                  <div className="sticky top-20">
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-md">
                      <Image
                        src="/images/kiwi-photo.jpeg"
                        alt="書法家照片"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: "350px", objectPosition: "center top" }}
                      />
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-2">
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
                          className="h-5 w-5 text-gray-500"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-sm text-gray-500">Line ID: kiwiouyang</span>
                      </div>
                      <div className="flex items-center gap-2">
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
                          className="h-5 w-5 text-gray-500"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span className="text-sm text-gray-500">penda@mail2000.com.tw</span>
                      </div>
                      <div className="flex items-center gap-2">
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
                          className="h-5 w-5 text-gray-500"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-sm text-gray-500">台北市、廣州、重慶</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="prose prose-slate max-w-none">
                    <h2>書法藝術之路</h2>
                    <p>
                      自幼受家學薰陶，對中國傳統書法藝術產生濃厚興趣。三十餘年來，不斷探索書法藝術的奧妙，從臨摹古代名家作品開始，逐漸形成自己獨特的藝術風格。
                    </p>
                    <p>
                      曾師從多位書法大師，深入研習各種書體，尤其專注於行書與草書的藝術表現。多年來參與國內外書法展覽與交流活動，作品曾在台北、廣州、重慶等地展出，獲得專業評論家的高度評價。
                    </p>

                    <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="italic text-gray-700">
                        往返兩岸三地，書法學習上、文房選擇上、筆法與線質的體悟上，有些心得分享，歡迎各位書友交流。
                      </p>
                      <p className="mt-2 font-medium text-gray-700">聯絡方式：Line ID: kiwiouyang</p>
                    </div>

                    <h2>未來展望</h2>
                    <p>
                      將繼續在書法藝術的道路上探索前行，致力於中國傳統書法藝術的傳承與創新。計劃開展更多的書法教學活動，培養更多的書法愛好者，讓這門古老的藝術在現代社會煥發新的生機。
                    </p>
                    <p>
                      同時，將積極參與國際文化交流活動，向世界展示中國傳統書法藝術的魅力，促進不同文化之間的交流與融合。
                    </p>

                    <div className="mt-8">
                      <h3>聯絡方式</h3>
                      <p>如果您對書法藝術有興趣，或者想要找優質的文房(毛筆或端硯)，歡迎通過以下方式與我聯繫：</p>
                      <p>
                        <strong>Line ID：kiwiouyang</strong>
                        <br />
                        電子郵件：penda@mail2000.com.tw
                      </p>
                    </div>
                  </div>
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
