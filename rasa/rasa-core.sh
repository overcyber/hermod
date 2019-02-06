#!/bin/bash

set -Eeuo pipefail
exec  python -m rasa_core.run --enable_api -d models/current/dialogue -u models/current/nlu -o out.log 