#!/usr/bin/env bash
set -euo pipefail

# Defaults (edit these if you'd like other defaults)
DEFAULT_NAME="catalinstanciu/portfolio:latest"
DEFAULT_SSH="root@151.241.109.85"

# Accept positional args: ./script.sh <image-name> <ssh-destination>
NAME="${1:-}"
SSH_LOCATION="${2:-}"

# Prompt for missing values (use defaults when user presses Enter)
if [[ -z "$NAME" ]]; then
  read -r -p "Image name [${DEFAULT_NAME}]: " NAME
  NAME="${NAME:-$DEFAULT_NAME}"
fi

if [[ -z "$SSH_LOCATION" ]]; then
  read -r -p "SSH destination (user@host) [${DEFAULT_SSH}]: " SSH_LOCATION
  SSH_LOCATION="${SSH_LOCATION:-$DEFAULT_SSH}"
fi

echo "Building Docker image '$NAME' (platform linux/amd64)..."
docker build -t "$NAME" . --platform linux/amd64

echo "Checking SSH access to ${SSH_LOCATION}..."
if ! ssh -o BatchMode=yes -o ConnectTimeout=5 "$SSH_LOCATION" 'echo ok' >/dev/null 2>&1; then
  echo "Warning: quick SSH check failed. We'll still attempt the upload, but verify SSH access and that the remote user can run docker."
  read -r -p "Continue anyway? (y/N): " yn
  case "$yn" in
    [Yy]*) ;;
    *) echo "Aborted."; exit 1 ;;
  esac
fi

echo "Streaming image to ${SSH_LOCATION} and loading it into remote Docker..."
# Stream the saved image (gzip for compression) over SSH and load it remotely.
# This requires 'docker' to be available to the SSH user on the remote host.
docker save "$NAME" | gzip -c | ssh "$SSH_LOCATION" 'gunzip -c | docker load'

echo "Done — image '$NAME' should now be available on ${SSH_LOCATION} (as the same tag)."
