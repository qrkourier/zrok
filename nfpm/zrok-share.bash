#!/usr/bin/env bash
#
# this script shares the configured backend for a reserved share token
#

set -o errexit
set -o nounset
set -o pipefail

if (( $# )); then
  if [[ -s "$1" ]]; then
    source "$1"
  else
    echo "ERROR: $1 is empty or not a readable file" >&2
    exit 1
  fi
else
  if [[ -s /opt/openziti/etc/zrok.env ]]; then
    source /opt/openziti/etc/zrok.env
  else
    echo "ERROR: need /opt/openziti/etc/zrok.env or filename argument to read share configuration" >&2
    exit 1
  fi
fi

if [[ -n "${ZROK_RESERVED_TOKEN:-}" ]]; then
  echo "INFO: running: zrok share reserved ${ZROK_RESERVED_TOKEN} ..."
  if [[ -n "${ZROK_BACKEND:-}" ]]; then
    ZROK_SHARE_RESERVED_OPTS+=" --override-endpoint ${ZROK_BACKEND}"
  fi
  exec zrok share reserved "${ZROK_RESERVED_TOKEN}" --headless \
    "${ZROK_VERBOSE:-}" \
    "${ZROK_INSECURE:-}" \
    ${ZROK_SHARE_RESERVED_OPTS:-}
else
  echo "ERROR: ZROK_RESERVED_TOKEN not defined" >&2
  exit 1
  # if ! [[ -s ~/.zrok/reserved.json ]]; then
  #   echo "ERROR: empty or missing reserved.json" >&2
  #   exit 1
  # else
  #   ZROK_PUBLIC_URLS=$(jq -cr '.frontend_endpoints' ~/.zrok/reserved.json 2>/dev/null)
  #   if [[ -z "${ZROK_PUBLIC_URLS}" || "${ZROK_PUBLIC_URLS}" == null ]]; then
  #     echo "ERROR: frontend endpoints not defined" >&2
  #     exit 1
  #   else 
  #     echo "INFO: zrok public URLs: ${ZROK_PUBLIC_URLS}"
  #   fi
  #   ZROK_RESERVED_TOKEN=$(jq -r '.token' ~/.zrok/reserved.json 2>/dev/null)
  #   if [[ -z "${ZROK_RESERVED_TOKEN}" && "${ZROK_RESERVED_TOKEN}" == null ]]; then
  #     echo "ERROR: zrok reservation token not defined" >&2
  #     exit 1
  #   else 
  #     echo "INFO: zrok reservation token: ${ZROK_RESERVED_TOKEN}"
  #   fi

  #   echo "INFO: running: zrok share reserved ..."
  #   exec zrok share reserved --headless "${ZROK_RESERVED_TOKEN}"
  # fi
fi
