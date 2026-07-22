import { useTranslations } from 'next-intl';

export default function TestPage() {
  const t = useTranslations('hero');
  
  return (
    <div style={{ padding: '100px', background: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>🧪 Translation Test</h1>
      <div style={{ fontSize: '24px', lineHeight: '2' }}>
        <p><strong>badge:</strong> {t('badge')}</p>
        <p><strong>title1:</strong> {t('title1')}</p>
        <p><strong>title2:</strong> {t('title2')}</p>
        <p><strong>title3:</strong> {t('title3')}</p>
        <p><strong>cta1:</strong> {t('cta1')}</p>
      </div>
    </div>
  );
}