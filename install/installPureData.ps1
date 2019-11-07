Invoke-WebRequest -Uri http://msp.ucsd.edu/Software/pd-0.50-0.windows-installer.exe -OutFile "$PSScriptRoot\pd-0.50-0.windows-installer.exe"
# Below didn't work so it is in config file.
# Invoke-Command -FilePath pd-0.50-0.windows-installer.exe