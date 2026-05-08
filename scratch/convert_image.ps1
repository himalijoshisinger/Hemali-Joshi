Param(
    [string]$SourcePath,
    [string]$DestPath
)

Add-Type -AssemblyName PresentationCore

try {
    $stream = New-Object System.IO.FileStream($SourcePath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read)
    $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($stream, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::None)
    $frame = $decoder.Frames[0]
    $bitmap = New-Object System.Windows.Media.Imaging.WriteableBitmap($frame)
    
    $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
    $encoder.QualityLevel = 90
    $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bitmap))
    
    $outStream = New-Object System.IO.FileStream($DestPath, [System.IO.FileMode]::Create)
    $encoder.Save($outStream)
    
    $outStream.Close()
    $stream.Close()
    Write-Output "Successfully converted $SourcePath to $DestPath"
} catch {
    Write-Error "Failed to convert $($SourcePath): $($_.Exception.Message)"
}
