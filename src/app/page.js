import { redirect } from 'next/navigation';

export default function RootPage() {
  // ✅ Redirect من / إلى /en تلقائياً
  redirect('/en');
}