# miscellany
various scripts accumulated over time ?

- convert_skins.ps1: powershell script that takes a minecraft launcher "launcher_custom_skins.json" file and converts it to a format used by prism launcher and maybe some other launchers that use its specific format. also exports PNGs from the json file, which are necessary; if the manage skins window is opened and there is a skin entry that doesn't have a matching local image, it's removed.
  - you'll probably want to run this in a blank directory. it'll write to an index.json, and as many PNGs for each entry, with filenames dictated by the name property.
