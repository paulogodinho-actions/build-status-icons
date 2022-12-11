$files = Get-ChildItem -Path ./RemixIcon/icons -Recurse -File
$files | Foreach-Object -ThrottleLimit 12 -Parallel {
  node ./index.js $_.FullName
  Write-Output "Generated icons for: $($_.Name)"
}