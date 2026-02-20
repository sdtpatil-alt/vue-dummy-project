#!/usr/bin/env bash
# Smoke test: hit GET /items and check for 200
set -e
STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/items)
if [ "$STATUS" = "200" ]; then
  echo "✅ GET /items returned 200"
else
  echo "❌ GET /items returned $STATUS"
  exit 1
fi
