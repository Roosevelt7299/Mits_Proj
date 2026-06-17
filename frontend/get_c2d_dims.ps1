Add-Type -AssemblyName System.Drawing
$folder = "C:\Users\Jude Roosevelt\Desktop\mithun-portfolio\frontend\src\images\Concept&2D_Art"
Get-ChildItem $folder -File | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    $name = $_.Name
    $w = $img.Width
    $h = $img.Height
    $img.Dispose()
    Write-Host "$name | ${w} x ${h}"
}
