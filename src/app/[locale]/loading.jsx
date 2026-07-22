export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* لوجو أو أيقونة التحميل */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* الدائرة الخارجية المتحركة */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-teal-700"></div>
          
          {/* المربع الداخلي (يمثل اللوجو) */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500 shadow-lg shadow-yellow-500/20">
            <span className="font-display text-2xl font-bold text-teal-900">H</span>
          </div>
        </div>

        {/* نص التحميل */}
        <div className="text-center">
          <p className="font-display text-lg font-bold text-teal-900">HIGH DAM GROUP</p>
          <p className="readout mt-1 text-xs text-gray-500">Loading project data...</p>
        </div>
      </div>
    </div>
  );
}