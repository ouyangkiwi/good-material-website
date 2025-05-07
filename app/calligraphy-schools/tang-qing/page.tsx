import Image from "next/image"
import Link from "next/link"

export default function TangQingCalligraphyPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">唐宋元明清書法</h1>
              <p className="mt-4 text-gray-600 md:text-lg">從唐代的黃金時期到明清的多元發展，中國書法藝術的輝煌歷程</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Image
                  src="/images/tang-calligraphy.jpeg"
                  alt="顏真卿《劉中使帖》"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">顏真卿與《劉中使帖》</h2>
                <p className="mt-4 text-gray-600">
                  圖中展示的是唐代書法大家顏真卿的《劉中使帖》，這是顏真卿楷書的代表作之一。《劉中使帖》筆法雄健有力，結構嚴謹，字形方正，筆畫挺拔，充分展現了顏體楷書雄渾剛勁、氣勢磅礴的特點。作品以深藍色紙為底，墨色濃重，加上右側眾多歷代收藏家的印章，彰顯了此作品的珍貴價值與歷史地位。
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">歷史背景</h3>
                    <p className="mt-2 text-gray-600">
                      唐代（618年-907年）是中國書法藝術的黃金時期，楷書、行書、草書等書體在這一時期得到了充分的發展。顏真卿（709年-785年）是唐代著名的書法家、政治家，他在安史之亂中表現出的忠義精神，也反映在他的書法作品中，剛正不阿，雄渾有力。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">藝術特點</h3>
                    <p className="mt-2 text-gray-600">
                      顏真卿的楷書被稱為「顏體」，其特點是筆畫雄健有力，結構嚴謹，字形方正，筆畫挺拔，給人以剛正不阿、雄渾厚重之感。顏體楷書與柳公權的「柳體」楷書並稱為「顏柳」，成為後世學習楷書的重要典範。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">影響與傳承</h3>
                    <p className="mt-2 text-gray-600">
                      顏真卿的書法對後世產生了深遠的影響，宋代書法家黃庭堅曾評價顏真卿的書法「如萬夫長，執鐵鞭立於道左，使人畏而愛之」。顏體楷書成為後世學習楷書的重要典範，影響了無數書法家，成為中國書法藝術的重要組成部分。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">唐宋元明清書法發展</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">唐代（618年-907年）</h3>
                  <p className="mt-2 text-gray-600">
                    唐代是中國書法藝術的黃金時期，楷書、行書、草書等書體在這一時期得到了充分的發展。顏真卿、柳公權等書法大家的出現，使楷書藝術達到了巔峰。唐代書法強調筆法的嚴謹與結構的完美，形成了獨特的藝術風格。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">宋代（960年-1279年）</h3>
                  <p className="mt-2 text-gray-600">
                    宋代書法藝術注重個性的發揮，蘇軾、黃庭堅等書法家的出現，使書法藝術更加多元化。宋代書法強調書法與文學、繪畫的結合，形成了「詩書畫一體」的藝術理念，為書法藝術注入了新的活力。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">元代（1271年-1368年）</h3>
                  <p className="mt-2 text-gray-600">
                    元代趙孟頫的出現，使書法藝術進入了一個新的階段。趙孟頫提出「復古」的藝術主張，強調對唐代書法的學習與繼承，同時又融入了自己的藝術創新，形成了獨特的「趙體」書法風格。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">明代（1368年-1644年）</h3>
                  <p className="mt-2 text-gray-600">
                    明代書法藝術繼續發展，董其昌等書法家的出現，使書法藝術更加多元化。明代書法強調「帖學」，即對古代法帖的臨摹與學習，形成了以董其昌為代表的「吳門書派」。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold">清代（1644年-1911年）</h3>
                  <p className="mt-2 text-gray-600">
                    清代書法藝術呈現出多元化的發展趨勢，鄭板橋、傅山等書法家的出現，使書法藝術更加豐富多彩。清代書法出現了「碑學」與「帖學」的對立與融合，為書法藝術注入了新的活力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">唐宋元明清書法大師</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/images/tang-calligraphy.jpeg"
                    alt="顏真卿"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">顏真卿（709年-785年）</h3>
                  <p className="mt-2 text-gray-600">
                    唐代書法家，其楷書被稱為「顏體」，與柳公權的「柳體」並稱「顏柳」。顏真卿的書法風格雄渾厚重，筆力剛健，氣勢磅礴，代表作有《多寶塔碑》、《顏氏家廟碑》、《劉中使帖》等。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="蘇軾"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">蘇軾（1037年-1101年）</h3>
                  <p className="mt-2 text-gray-600">
                    北宋文學家、書法家，其書法被稱為「蘇體」，風格豪放不羈，筆力雄健，氣勢磅礴。蘇軾的書法融合了顏真卿、李邕等人的風格，又有自己的獨特創新，代表作有《黃州寒食詩帖》等。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="趙孟頫"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">趙孟頫（1254年-1322年）</h3>
                  <p className="mt-2 text-gray-600">
                    元代書法家、畫家，其書法被稱為「趙體」，風格典雅秀麗，筆法圓轉流暢。趙孟頫的書法融合了唐代書法的精髓，又有自己的獨特創新，對後世書法藝術產生了深遠的影響。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="董其昌"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">董其昌（1555年-1636年）</h3>
                  <p className="mt-2 text-gray-600">
                    明代書法家、畫家，其書法被稱為「董體」，風格典雅秀麗，筆法圓轉流暢。董其昌的書法融合了趙孟頫、文徵明等人的風格，又有自己的獨特創新，對後世書法藝術產生了深遠的影響。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="鄭板橋"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">鄭板橋（1693年-1765年）</h3>
                  <p className="mt-2 text-gray-600">
                    清代書法家、畫家，其書法被稱為「鄭體」，風格清新俊逸，筆法灑脫自如。鄭板橋的書法融合了魏晉風骨和唐宋筆法，又有自己的獨特創新，對後世書法藝術產生了深遠的影響。
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
