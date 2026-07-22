/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //  اللون الأساسي الجديد (مطابق للوجو)
        brand: {
          50: '#e8f2fc',   // خلفيات فاتحة جداً
          100: '#d0e5f9',  // خلفيات فاتحة
          200: '#a1cbf3',  // حدود فاتحة
          300: '#6baef0',  // أيقونات فاتحة
          400: '#3d92e8',  // أزرار ثانوية
          500: '#1a75d8',  // اللون الأساسي من اللوجو
          600: '#0f5fbf',  // Hover states
          700: '#0a4a96',  // نصوص وأيقونات
          800: '#063770',  // خلفيات متوسطة
          900: '#042652',  // خلفيات غامقة (بديل teal-900)
          950: '#021530',  // أغمق درجة
        },
        
        //  اللون الذهبي (Accent) - محفوظ كما هو
        yellow: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FFC107',  // اللون الذهبي الأساسي
          500: '#FFB300',  // Hover
          600: '#FFA000',
          700: '#FF8F00',
          800: '#FF6F00',
          900: '#FF3D00',
        },
        
        // ⚪ الرمادي (Neutral) - محفوظ
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      
      // 🎨 إضافة Gradients مخصصة
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #042652 0%, #0a4a96 50%, #1a75d8 100%)',
        'brand-gradient-dark': 'linear-gradient(180deg, #042652 0%, #021530 100%)',
        'brand-gradient-hero': 'linear-gradient(to top, #042652 0%, rgba(4, 38, 82, 0.6) 60%, rgba(4, 38, 82, 0.3) 100%)',
      },
    },
  },
  plugins: [],
}