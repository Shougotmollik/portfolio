import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfaf2] flex items-center justify-center p-8">
      <div className="max-w-lg w-full text-center">
        <div className="inline-block mb-8">
          <div className="w-24 h-24 rounded-2xl bg-[#fa8f76] border-[3px] border-[#111111] neo-shadow-lg flex items-center justify-center mx-auto">
            <span className="text-5xl font-black text-[#111111]">404</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-[#111111] leading-tight mb-4">
          Page not found
        </h1>

        <p className="text-base font-bold text-[#111111]/70 max-w-md mx-auto mb-10 leading-relaxed">
          Looks like this page wandered off. Let&rsquo;s get you back to somewhere that exists.
        </p>

        <Link
          href="/"
          className="neo-btn neo-btn-primary text-sm font-black px-10 py-4"
        >
          Back to Home
        </Link>

        <div className="mt-16 flex justify-center gap-2 text-4xl opacity-30 select-none">
          <span>〰️</span>
          <span>✖</span>
          <span>〰️</span>
          <span>✖</span>
          <span>〰️</span>
        </div>
      </div>
    </div>
  );
}
