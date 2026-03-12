#!/bin/bash
# Skript na push na GitHub – stačí zadať token keď sa spýta

set -e
cd "$(dirname "$0")/.."

echo "Token z GitHub (Settings → Developer settings → Personal access tokens):"
read -rs TOKEN
echo ""

# Odstráni medzery a nové riadky (pri vložení sa často dostanú do tokenu)
TOKEN=$(printf '%s' "$TOKEN" | tr -d '\n\r \t')

if [ -z "$TOKEN" ]; then
  echo "Token nebol zadaný. Koniec."
  exit 1
fi

echo "Nastavujem remote a pushujem..."
git remote set-url origin "https://matus-babiak:${TOKEN}@github.com/matus-babiak/js-investor.git"
git push origin main

echo "Odstraňujem token z konfigurácie..."
git remote set-url origin "https://matus-babiak@github.com/matus-babiak/js-investor.git"

echo "Hotovo. Push na GitHub prebehol úspešne."
