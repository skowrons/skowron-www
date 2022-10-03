#!/bin/bash
set -euo pipefail

make watch_tailwind &
make watch_hugo &

trap 'kill $(jobs -p)' EXIT
wait