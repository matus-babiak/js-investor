#!/bin/bash
# Push cez SSH – žiadny token. Potrebuješ mať na GitHube pridaný SSH kľúč.
# (Settings → SSH and GPG keys → New SSH key)

set -e
cd "$(dirname "$0")/.."

git remote set-url origin "git@github.com:matus-babiak/js-investor.git"
git push origin main

echo "Hotovo. Push na GitHub prebehol úspešne."
