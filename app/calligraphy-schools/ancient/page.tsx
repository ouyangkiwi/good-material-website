import Image from "next/image"
import Link from "next/link"

export default function AncientCalligraphyPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">先秦至漢代書法</h1>
              <p className="mt-4 text-gray-600 md:text-lg">從甲骨文到隸書，中國書法藝術的起源與早期發展</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="/images/ancient-calligraphy.png"
                  alt="漢代石刻書法"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">石刻書法藝術</h2>
                <p className="mt-4 text-gray-600">
                  圖中展示的是漢代石刻拓片，這種石刻藝術不僅是書法的重要載體，也是研究古代文字演變的珍貴史料。漢代石刻書法承襲了秦代小篆的特點，但已開始向隸書過渡，字形更加方正，筆畫更加挺拔有力。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">歷史背景</h3>
                    <p className="mt-2 text-gray-600">
                      漢代是中國書法藝術發展的重要時期，隸書的成熟標誌著中國書法藝術的正式形成。漢代石刻書法多見於碑碣、墓誌等，內容多為紀功、頌德、記事等。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">藝術特點</h3>
                    <p className="mt-2 text-gray-600">
                      漢代石刻書法筆畫挺拔有力，結構嚴謹，字形方正，具有濃厚的時代特色。其中，「蠶頭燕尾」是漢隸的典型特徵，即橫畫的起筆處如蠶頭，收筆處如燕尾，生動形象。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">代表作品</h3>
                    <p className="mt-2 text-gray-600">
                      漢代石刻書法的代表作品有《石門頌》、《乙瑛碑》、《張遷碑》、《禮器碑》等，這些作品不僅是書法藝術的瑰寶，也是研究漢代歷史、文化的重要資料。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="/images/clerical-script-calligraphy.jpeg"
                  alt="漢代《禮器碑》隸書"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">漢代《禮器碑》</h2>
                <p className="mt-4 text-gray-600">
                  圖中展示的是東漢時期著名的《禮器碑》拓片，這是漢代隸書的代表作品之一。《禮器碑》刻於東漢建和二年（148年），是研究漢代隸書的重要資料。從拓片中可以清晰地看到漢隸「蠶頭燕尾」的特點，即橫畫的起筆處如蠶頭，收筆處如燕尾，生動形象。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">藝術特點</h3>
                    <p className="mt-2 text-gray-600">
                      《禮器碑》的隸書筆畫挺拔有力，結構嚴謹，字形方正，具有濃厚的時代特色。其中，「蠶頭燕尾」是漢隸的典型特徵，橫畫的起筆處如蠶頭，收筆處如燕尾，生動形象。此外，漢隸還有「一波三折」的特點，即豎畫在書寫時有三次轉折，增加了書法的韻律感。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">歷史意義</h3>
                    <p className="mt-2 text-gray-600">
                      《禮器碑》不僅是書法藝術的瑰寶，也是研究漢代歷史、文化的重要資料。碑文內容主要記載了東漢時期的禮儀制度和器物使用規範，反映了當時的社會文化和思想觀念。《禮器碑》與《乙瑛碑》、《張遷碑》並稱為「漢隸三大名碑」，在中國書法史上具有重要地位。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">先秦至漢代書法發展</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">甲骨文</h3>
                  <p className="mt-2 text-gray-600">
                    商代（公元前1600年-公元前1046年）的文字，刻於龜甲獸骨之上，用於占卜記事。甲骨文筆畫簡練，形象生動，是中國最早的成熟文字系統。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">金文</h3>
                  <p className="mt-2 text-gray-600">
                    周代（公元前1046年-公元前256年）的文字，鑄於青銅器物之上，用於記功頌德。金文筆畫較甲骨文更加豐滿圓潤，字形更加規範。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">小篆</h3>
                  <p className="mt-2 text-gray-600">
                    秦代（公元前221年-公元前206年）統一文字後的標準字體，由秦丞相李斯主持整理。小篆筆畫圓轉，結構勻稱，是中國書法藝術的重要里程碑。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">隸書</h3>
                  <p className="mt-2 text-gray-600">
                    漢代（公元前206年-公元220年）的主要字體，由篆書演變而來。隸書筆畫方正，結構平穩，具有「蠶頭燕尾」的特點，是中國書法藝術正式形成的標誌。
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
