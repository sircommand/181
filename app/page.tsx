'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">StylePins Admin</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          خوش آمدید به پنل ادمین StylePins
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/login" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            ورود
          </Link>
          
          <div className="mt-8 text-slate-600 dark:text-slate-400">
            <p>یا به صفحات دیگر بروید:</p>
            <div className="mt-4 space-x-4">
              <Link href="/api/images" className="text-blue-600 hover:underline">
                Images API
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}