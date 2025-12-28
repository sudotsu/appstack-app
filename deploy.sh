#!/bin/bash

# One-command deployment script for Next.js Mastery Lab
# Run this after extracting the project: ./deploy.sh

set -e

echo "🚀 Deploying Next.js Mastery Lab to Vercel..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the nextjs-mastery-app directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Deploy to Vercel
echo ""
echo "🌐 Deploying to Vercel..."
echo "You may need to login to Vercel if this is your first time."
echo ""
npx vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📱 To install on Android:"
echo "1. Open the URL above in Chrome on your phone"
echo "2. Tap the menu (⋮) and select 'Install app'"
echo "3. Done! The app will be on your home screen"
echo ""
