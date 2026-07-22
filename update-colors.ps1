# ملف: update-colors.ps1
# استبدال teal بـ brand في كل ملفات المشروع

Write-Host "🎨 Starting color update..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

$files = Get-ChildItem -Path "src" -Recurse -Include *.jsx,*.tsx,*.js,*.ts,*.css

# خريطة الاستبدال
$replacements = @{
    'teal-950' = 'brand-950'
    'teal-900' = 'brand-900'
    'teal-800' = 'brand-800'
    'teal-700' = 'brand-700'
    'teal-600' = 'brand-600'
    'teal-500' = 'brand-500'
    'teal-400' = 'brand-400'
    'teal-300' = 'brand-300'
    'teal-200' = 'brand-200'
    'teal-100' = 'brand-100'
    'teal-50'  = 'brand-50'
}

$fileCount = 0
$replacementCount = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content -replace $key, $replacements[$key]
    }
    
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -NoNewline -Encoding UTF8
        $fileCount++
        $replacementCount += ($originalContent -split $replacements.Keys -join '').Length
    }
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "✅ Updated $fileCount files successfully!" -ForegroundColor Green
Write-Host "🔄 Don't forget to restart the dev server!" -ForegroundColor Yellow