#!/usr/bin/env bash
#
# this script uses a zrok enable token to enable a zrok environment in $HOME/.zrok
#

set -o errexit
set -o nounset
set -o pipefail

# set HOME to the first colon-sep dir in STATE_DIRECTORY inherited from systemd, e.g. /var/lib/zrok-share
export HOME="${STATE_DIRECTORY%:*}" 

if (( $# )); then
  if [[ -s "$1" ]]; then
    source "$1"
  else
    echo "ERROR: $1 is empty or not a readable file" >&2
    exit 1
  fi
else
  # TODO: consider defining a default environment file
  # if [[ -s /opt/openziti/etc/zrok.env ]]; then
  #   source /opt/openziti/etc/zrok.env
  # else
  #   echo "ERROR: need /opt/openziti/etc/zrok.env or filename argument to read share configuration" >&2
  #   exit 1
  # fi
  echo "ERROR: need filename argument to read env configuration" >&2
  exit 1
fi

if [[ -s ~/.zrok/environment.json ]]; then
  echo "INFO: zrok environment is already enabled. Delete '$(realpath ~/.zrok/environment.json)' if you want to destroy"\
        " it and create a new environment."
  exit 0
else
  if [[ -z "${ZROK_ENABLE_TOKEN}" ]]; then
    echo "ERROR: ZROK_ENABLE_TOKEN is not defined" >&2
    exit 1
  else
    zrok config set apiEndpoint "${ZROK_API_ENDPOINT:-https://api.zrok.io}"
    echo "INFO: running: zrok enable ..."
    exec zrok enable --headless --description "${ZROK_ENVIRONMENT_NAME:-$(hostname -s) reserved public share}" "${ZROK_ENABLE_TOKEN}"
  fi
fi

