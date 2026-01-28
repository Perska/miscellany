param(
    [Parameter(Mandatory=$true)][string]$launcher_custom_skins_json
)

$x = ConvertFrom-Json (Get-Content -Raw $launcher_custom_skins_json)
$list = @()
foreach ($skin in $x.customSkins.PSObject.Properties) {
    $list += @{ url = "https://textures.minecraft.net/texture/"+$skin.Value.textureId; name = $skin.Value.name; capeId = ($skin.Value.capeId ?? ""); model = $skin.Value.slim ? "SLIM" : "CLASSIC" }
    $bytes = [System.Convert]::FromBase64String($skin.Value.skinImage.Split(',')[1])
    $bytes | Set-Content -AsByteStream ($skin.Value.name+".png")
}
ConvertTo-Json @{skins = $list} | Set-Content "./index.json"
