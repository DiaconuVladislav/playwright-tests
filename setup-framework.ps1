# Playwright ATF - Framework Setup Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Playwright ATF Framework Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Root directories

$directories = @(
"tests",
"tests\smoke",
"tests\regression",
"tests\e2e",

```
"pages",

"components",

"fixtures",

"utils",

"data",

"config",

"helpers",

"reports",

"scripts"
```

)

# Create directories

foreach ($directory in $directories) {

```
if (-not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
    Write-Host "[CREATED] $directory" -ForegroundColor Green
}
else {
    Write-Host "[EXISTS]  $directory" -ForegroundColor Yellow
}
```

}

Write-Host ""
Write-Host "Creating framework files..." -ForegroundColor Cyan

# Files to create

$files = @(
"pages\BasePage.ts",
"fixtures\test.fixture.ts",
"utils\logger.ts",
"utils\test-data.ts",
"config\environment.ts",
"helpers\api.helper.ts",
"helpers\database.helper.ts",

```
"tests\smoke\smoke.spec.ts",
"tests\regression\regression.spec.ts",
"tests\e2e\e2e.spec.ts",

".env.example",
"README.md"
```

)

foreach ($file in $files) {

```
if (-not (Test-Path $file)) {
    New-Item -ItemType File -Path $file | Out-Null
    Write-Host "[CREATED] $file" -ForegroundColor Green
}
else {
    Write-Host "[EXISTS]  $file" -ForegroundColor Yellow
}
```

}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Framework structure created successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next step:" -ForegroundColor Cyan
Write-Host "Run: npx playwright test"
Write-Host ""
