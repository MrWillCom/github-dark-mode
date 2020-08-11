#!/bin/bash
Compress-Archive -Path .\img\, .\js\, .\styles\, .\manifest.json, .\LICENSE -DestinationPath .\source-code.zip

zip -r source-code.zip img js styles manifest.json LICENSE
