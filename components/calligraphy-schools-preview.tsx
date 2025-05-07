import Image from "next/image"
import Link from "next/link"

export function CalligraphySchoolsPreview() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">書法流派</h2>
          <p className="mt-4 text-gray-600">從秦漢至今，書法藝術歷經千年演變，形成了眾多風格迥異的流派。</p>
        </div>
        <div className="mt-12 space-y-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold">先秦至漢代</h3>
              <p className="mt-4 text-gray-600">
                書法藝術的起源與發展，從甲骨文、金文到小篆、隸書，展現了中國文字的演變歷程。漢代隸書的成熟，標誌著中國書法藝術的正式形成。
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">甲骨文（商代）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">金文（周代）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">小篆（秦代）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">隸書（漢代）</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/calligraphy-schools/ancient"
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
            <div className="order-1 md:order-2">
              <Image
                src="/images/stone-drum-seal-script.jpeg"
                alt="石鼓文篆書"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2">
              <Image
                src="/images/wei-jin-calligraphy.png"
                alt="王羲之《遠宦帖》"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
            <div className="order-1">
              <h3 className="text-2xl font-bold">魏晉南北朝</h3>
              <p className="mt-4 text-gray-600">
                魏晉時期，書法藝術進入了一個新的階段，草書與行書的發展，為書法藝術注入了新的活力。王羲之、王獻之等書法大家的出現，使書法藝術達到了新的高度。圖中展示的是「書聖」王羲之的《遠宦帖》，展現了東晉時期行草書的典雅流暢與自然灑脫。
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">鍾繇（三國魏）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">王羲之（東晉）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">王獻之（東晉）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">智永（南朝）</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/calligraphy-schools/wei-jin"
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
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold">唐宋元明清</h3>
              <p className="mt-4 text-gray-600">
                唐代是中國書法藝術的黃金時期，顏真卿、柳公權等書法大家的出現，使楷書藝術達到了巔峰。宋元明清時期，書法藝術繼續發展，形成了眾多風格迥異的流派。圖中展示的是唐代書法大家顏真卿的《劉中使帖》，展現了其雄渾剛勁、氣勢磅礴的書法風格。
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">顏真卿、柳公權（唐）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">蘇軾、黃庭堅（宋）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">趙孟頫（元）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">董其昌（明）、鄭板橋（清）</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/calligraphy-schools/tang-qing"
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
            <div className="order-1 md:order-2">
              <Image
                src="/images/tang-calligraphy.jpeg"
                alt="顏真卿《劉中使帖》"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="order-2">
              <Image
                src="/images/modern-calligraphy.jpeg"
                alt="于右任書法作品"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
            <div className="order-1">
              <h3 className="text-2xl font-bold">近現代</h3>
              <p className="mt-4 text-gray-600">
                近現代書法藝術在傳統的基礎上，融入了新的時代元素，形成了多元化的發展趨勢。書法藝術不斷創新，不斷發展，展現出新的活力與魅力。圖中展示的是民國時期著名書法家于右任的作品，他創立了「標準草書」，將傳統草書簡化並提高其可讀性，對現代書法藝術產生了深遠影響。
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">康有為、吳昌碩（晚清民初）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">于右任、沈尹默（民國）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">啟功、沙孟海（現代）</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="ml-2 text-sm font-medium">劉炳森、歐陽中石（當代）</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/calligraphy-schools/modern"
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
        <div className="mt-12 text-center">
          <Link
            href="/calligraphy-schools"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          >
            探索全部書法流派
          </Link>
        </div>
      </div>
    </section>
  )
}
