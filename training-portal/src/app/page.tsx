export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card w-full max-w-3xl p-10 text-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">بوابة التدريب الصيفي</h1>
          <p className="mt-2 text-gray-500">موقع بسيط لعرض إنجازاتي ومشاريعي خلال التدريب.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/login" className="btn btn-primary">تسجيل الدخول</a>
          <a href="/dashboard" className="btn btn-secondary">تجربة لوحة التحكم</a>
        </div>
      </div>
    </div>
  );
}
