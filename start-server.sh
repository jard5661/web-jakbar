#!/bin/bash

# Script untuk start local server

echo "🚀 Starting Local Development Server..."
echo ""
echo "📂 Project: Web Monitoring Jakarta Barat"
echo "🌐 URL: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

# Start Python HTTP Server
python3 -m http.server 8001
