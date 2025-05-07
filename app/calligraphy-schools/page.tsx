import Image from "next/image"
import Link from "next/link"

export default function CalligraphySchoolsPage() {
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">書法流派</h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                從秦漢至今，書法藝術歷經千年演變，形成了眾多風格迥異的流派。
              </p>
            </div>
          </div>
        </section>

        <section id="timeline" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-center mb-8">書法藝術發展時間軸</h2>
              <div className="relative border-l border-gray-200 pl-8 ml-4">
                <div className="mb-12 relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">先秦時期（公元前1600年-公元前221年）</h3>
                  <p className="mt-2 text-gray-600">
                    甲骨文、金文、大篆、小篆等文字形式的出現與發展，為中國書法藝術奠定了基礎。
                  </p>
                </div>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">秦漢時期（公元前221年-公元220年）</h3>
                  <p className="mt-2 text-gray-600">
                    隸書的興起與發展，標誌著中國書法藝術的正式形成。漢代隸書的成熟，為後世書法藝術的發展奠定了基礎。
                  </p>
                </div>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">魏晉南北朝（220年-589年）</h3>
                  <p className="mt-2 text-gray-600">
                    楷書、行書、草書的興起與發展，書法藝術進入了一個新的階段。王羲之、王獻之等書法大家的出現，使書法藝術達到了新的高度。
                  </p>
                </div>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">唐代（618年-907年）</h3>
                  <p className="mt-2 text-gray-600">
                    唐代是中國書法藝術的黃金時期，顏真卿、柳公權等書法大家的出現，使楷書藝術達到了巔峰。
                  </p>
                </div>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">宋元時期（960年-1368年）</h3>
                  <p className="mt-2 text-gray-600">
                    宋代書法藝術注重個性的發揮，蘇軾、黃庭堅等書法家的出現，使書法藝術更加多元化。元代趙孟頫的出現，使書法藝術進入了一個新的階段。
                  </p>
                </div>
                <div className="mb-12 relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">明清時期（1368年-1911年）</h3>
                  <p className="mt-2 text-gray-600">
                    明代董其昌、清代鄭板橋等書法家的出現，使書法藝術更加多元化。碑學與帖學的對立與融合，為書法藝術注入了新的活力。
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-black"></div>
                  <h3 className="text-xl font-bold">近現代（1911年至今）</h3>
                  <p className="mt-2 text-gray-600">
                    近現代書法藝術在傳統的基礎上，融入了新的時代元素，形成了多元化的發展趨勢。書法藝術不斷創新，不斷發展，展現出新的活力與魅力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="styles" className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">主要書法字體</h2>
              <p className="mt-4 text-gray-600">
                中國書法藝術主要有篆書、隸書、楷書、行書、草書五種基本字體，每種字體都有其獨特的藝術風格與表現力。
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="篆書"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">篆書</h3>
                  <p className="mt-2 text-gray-600">
                    篆書是中國最古老的書體之一，分為大篆和小篆。大篆包括甲骨文、金文等，小篆則是秦代統一文字後的標準字體。篆書結構勻稱，線條圓轉，具有濃厚的古典美。
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/calligraphy-schools/seal-script"
                      className="inline-flex items-center text-sm font-medium text-black hover:underline"
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="隸書"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">隸書</h3>
                  <p className="mt-2 text-gray-600">
                    隸書起源於秦代，成熟於漢代，是篆書向楷書過渡的書體。隸書結構扁平，橫畫拖長，豎畫收短，筆畫有「蠶頭燕尾」的特點，端莊大方，氣勢雄渾。
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/calligraphy-schools/clerical-script"
                      className="inline-flex items-center text-sm font-medium text-black hover:underline"
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="楷書"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">楷書</h3>
                  <p className="mt-2 text-gray-600">
                    楷書起源於漢代，成熟於魏晉南北朝，是中國書法中最規範的書體。楷書結構方正，筆畫清晰，點畫分明，是初學書法的基礎書體。唐代的顏真卿、柳公權是楷書的代表人物。
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/calligraphy-schools/regular-script"
                      className="inline-flex items-center text-sm font-medium text-black hover:underline"
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="行書"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">行書</h3>
                  <p className="mt-2 text-gray-600">
                    行書是介於楷書與草書之間的書體，兼具楷書的規範性和草書的流暢性。行書筆畫連貫，結構靈活，既保持了漢字的基本結構，又有一定的變化，是日常書寫中最常用的書體。
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/calligraphy-schools/running-script"
                      className="inline-flex items-center text-sm font-medium text-black hover:underline"
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="草書"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">草書</h3>
                  <p className="mt-2 text-gray-600">
                    草書是中國書法中最為奔放的書體，分為章草、今草和狂草。草書筆畫連綿，結構簡化，變化多端，具有極強的藝術表現力。草書的書寫需要深厚的書法功底和豐富的藝術修養。
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/calligraphy-schools/cursive-script"
                      className="inline-flex items-center text-sm font-medium text-black hover:underline"
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
            </div>
          </div>
        </section>

        <section id="masters" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">歷代書法大師</h2>
              <p className="mt-4 text-gray-600">
                千百年來，無數書法大師在書法藝術的長河中留下了璀璨的星光，他們的作品成為後世學習的典範。
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="王羲之"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">王羲之（303年-361年）</h3>
                  <p className="mt-2 text-gray-600">
                    東晉書法家，被譽為「書聖」，其代表作《蘭亭序》被譽為「天下第一行書」。王羲之的書法風格典雅秀麗，筆法圓轉流暢，對後世書法藝術產生了深遠的影響。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="顏真卿"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">顏真卿（709年-785年）</h3>
                  <p className="mt-2 text-gray-600">
                    唐代書法家，其楷書被稱為「顏體」，與柳公權的「柳體」並稱「顏柳」。顏真卿的書法風格雄渾厚重，筆力剛健，氣勢磅礴，代表作有《多寶塔碑》、《顏氏家廟碑》等。
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
