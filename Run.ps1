npm install
Get-ChildItem *.svg | ForEach-Object { npx svgo "$_" }