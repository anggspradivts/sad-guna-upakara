// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-10">
      <h1 className="text-3xl font-bold">404 - Halaman Tidak Ditemukan</h1>
      <p className="mt-4 text-lg">Oops! Halaman yang kamu cari sedang dalam pengembangan.</p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Kembali
      </Link>
    </div>
  );
}
