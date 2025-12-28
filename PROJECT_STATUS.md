# AppStack - Project Status & Development Guide

**Last Updated:** December 28, 2025
**Repository:** https://github.com/sudotsu/appstack-app
**Developer:** AxP Labs

---

## 📱 What This Is

A **Next.js 16 web application** packaged as a **native Android app** using Capacitor. The goal is to publish on Google Play Store.

---

## ✅ What's Been Completed

### 1. Core Setup
- ✅ Next.js 16.1.1 with Turbopack (latest)
- ✅ React 19.2.3 (latest)
- ✅ Tailwind CSS 4.0 (as requested)
- ✅ TypeScript 5
- ✅ Static export configuration for mobile

### 2. Android Native Integration
- ✅ Capacitor 8.0.0 (latest stable)
- ✅ Android platform configured
- ✅ App ID: `com.appstack.app`
- ✅ App Name: **AppStack**
- ✅ Developer: **AxP Labs**

### 3. Branding & Design
- ✅ **Custom app icon** - Dark theme (#1F2937) with modern stacked layers design
- ✅ **Splash screen** - Dark background with app icon
- ✅ **App colors**:
  - Primary: #1F2937 (Dark gray)
  - Primary Dark: #111827 (Darker gray)
  - Accent: #60A5FA (Blue)
- ✅ **Status bar & navigation bar** - Themed to match

### 4. Release Signing (CRITICAL - REQUIRED FOR PLAY STORE)
- ✅ **Keystore created:** `android/keystores/appstack-release.jks`
- ✅ **Credentials:**
  - Password: `AppStack2025@Secure!`
  - Alias: `appstack`
  - Key Password: `AppStack2025@Secure!`
- ⚠️ **BACKUP THIS KEYSTORE!** Stored in: `android/keystores/`
- ⚠️ **Credentials file:** `android/keystores/KEYSTORE_CREDENTIALS.txt`
- 🔒 **Security:** Keystore is in `.gitignore` (not committed to GitHub)

### 5. GitHub Actions CI/CD
- ✅ **Automated builds** on every push to master
- ✅ **Workflow file:** `.github/workflows/build-android.yml`
- ✅ **Outputs:**
  - Signed AAB (for Play Store)
  - Signed APK (for testing)
- ✅ **Secrets configured:**
  - `KEYSTORE_BASE64` - Base64-encoded keystore
  - `KEYSTORE_PASSWORD` - Keystore password
  - `KEY_ALIAS` - Key alias
  - `KEY_PASSWORD` - Key password

---

## 🖥️ **IMPORTANT: Development Environment**

### ⚠️ DO NOT Develop on Termux (Android)

**Why:**
- Next.js 16 Turbopack requires x86/ARM64 desktop binaries
- Termux uses WASM fallback which is broken/limited
- Android SDK build tools (AAPT2) won't run on Termux
- You'll waste time fighting compatibility issues

### ✅ USE PC for Development

**PC has:**
- ✅ Full Turbopack support (700x faster builds)
- ✅ Android Studio for native debugging
- ✅ Proper hot module replacement
- ✅ No build errors

---

## 🚀 Proper Development Workflow (PC)

### Initial Setup on PC

```bash
# Clone the repository
git clone https://github.com/sudotsu/appstack-app.git
cd appstack-app

# Install dependencies (requires Node.js 22+)
npm install

# Start development server with Turbopack
npm run dev
# Opens at http://localhost:3000
```

### Building & Testing Android App

```bash
# 1. Build the Next.js app
npm run build

# 2. Sync to Capacitor Android
npx cap sync android

# 3. Open in Android Studio
npx cap open android

# 4. In Android Studio:
#    - Build > Build Bundle(s) / APK(s) > Build APK
#    - Or run on emulator/device for testing
```

### Quick Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build production Next.js app |
| `npx cap sync` | Sync web assets to Android |
| `npx cap open android` | Open Android Studio |
| `npm run android` | Build + sync + open (one command) |

---

## 🤖 GitHub Actions Automated Builds

### How It Works

1. **Push to GitHub** → Automatically triggers build
2. **Builds:**
   - Next.js static export
   - Signed Android AAB (Play Store)
   - Signed APK (testing)
3. **Download artifacts** from Actions tab

### Accessing Build Artifacts

1. Go to: https://github.com/sudotsu/appstack-app/actions
2. Click latest workflow run
3. Scroll to **Artifacts** section
4. Download:
   - `app-release-aab` - For Play Store submission
   - `app-release-apk` - For device testing

### Manual Trigger

If you want to build without pushing:
1. Go to Actions tab
2. Click "Build Android Release"
3. Click "Run workflow" > "Run workflow"

---

## 📁 Important Files & Directories

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts |
| `next.config.js` | Next.js configuration (static export, images) |
| `capacitor.config.ts` | Capacitor config (app ID, name, colors) |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Tailwind CSS config |

### Android-Specific

| Path | Purpose |
|------|---------|
| `android/` | Android native project |
| `android/app/build.gradle` | Build config, signing setup |
| `android/app/src/main/res/` | Android resources (icons, splash, etc.) |
| `android/keystores/` | **CRITICAL** - Signing keystore (not in git) |
| `android/app/src/main/AndroidManifest.xml` | App permissions, settings |

### Documentation

| File | Purpose |
|------|---------|
| `PROJECT_STATUS.md` | **This file** - Current status |
| `GITHUB_ACTIONS_SETUP.md` | GitHub Actions setup guide |
| `README.md` | General project info |

---

## 🔧 Technology Stack (All Latest as of 12/28/2025)

### Frontend
- **Next.js** 16.1.1 (with Turbopack)
- **React** 19.2.3
- **React-DOM** 19.2.3
- **Tailwind CSS** 4.0.0
- **TypeScript** 5.x
- **lucide-react** 0.562.0 (icons)

### Mobile
- **Capacitor Core** 8.0.0
- **Capacitor Android** 8.0.0
- **Target SDK:** Android 34 (Android 14)
- **Min SDK:** (check `android/variables.gradle`)

### Build & CI/CD
- **Node.js** 22+ (required by Capacitor)
- **GitHub Actions** (automated builds)
- **Gradle** (Android builds)
- **Java/JDK** 17 (Android compilation)

---

## ⚠️ Common Issues & Solutions

### "Turbopack error" on Termux
**Solution:** Don't use Termux for development. Use PC.

### "AAPT2 daemon failed" on Termux
**Solution:** Don't build Android on Termux. Use PC or GitHub Actions.

### "Base64 invalid input" in GitHub Actions
**Already fixed** - Workflow strips whitespace before decoding.

### Build fails - missing keystore
**Solution:** Ensure all 4 GitHub secrets are added correctly.

### Can't find Android SDK
**On PC:** Install Android Studio, it includes SDK.

---

## 📱 Play Store Submission

**Everything you need is ready!**

### Complete Guide:
📖 **[MOBILE_GUIDE.md](MOBILE_GUIDE.md)** - Full step-by-step guide with all info in one place

### Other Resources:
- [PLAY_STORE_SUBMISSION.md](PLAY_STORE_SUBMISSION.md) - Detailed submission guide
- [PLAY_STORE_ASSETS_CHECKLIST.md](PLAY_STORE_ASSETS_CHECKLIST.md) - Checklist
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Quick reference card
- [store-assets/](store-assets/) - Templates and asset folders

## 📝 Before Play Store Submission

1. **Test the app thoroughly**
   - Download APK from GitHub Actions
   - Install on physical Android device
   - Test all features

2. **Prepare Play Store assets**
   - Screenshots (phone + tablet)
   - Feature graphic (1024x500)
   - App description
   - Privacy policy (if collecting data)

3. **Update version for releases**
   - Edit `android/app/build.gradle`
   - Increment `versionCode` and `versionName`

4. **Build release AAB**
   - Push to GitHub (auto-builds)
   - Or build locally in Android Studio

5. **Upload to Play Console**
   - Go to https://play.google.com/console
   - Create app listing
   - Upload AAB from artifacts
   - Submit for review

### Future Development

- [ ] Add more features to Next.js app
- [ ] Configure app icons for different densities (optional)
- [ ] Set up beta testing track in Play Store
- [ ] Add Capacitor plugins as needed (camera, storage, etc.)
- [ ] Configure Firebase/analytics (if needed)

---

## 🔐 Security Notes

### NEVER Commit to Git:
- ❌ `android/keystores/*.jks`
- ❌ `android/keystores/KEYSTORE_CREDENTIALS.txt`
- ❌ `android/local.properties`
- ❌ `.env` files with secrets

### Always Backup:
- ✅ Keystore file (`appstack-release.jks`)
- ✅ Keystore credentials
- ✅ GitHub secrets (document them securely)

**Losing your keystore = can't update your app on Play Store!**

---

## 🎯 Current Status: READY FOR PC DEVELOPMENT

**What works:**
- ✅ All code committed to GitHub
- ✅ GitHub Actions builds successfully
- ✅ App is fully configured
- ✅ Ready to develop on PC

**What to do next:**
1. Clone repo on PC
2. Run `npm install`
3. Start developing with `npm run dev`
4. Build Android app in Android Studio when ready
5. Download AAB from GitHub Actions for Play Store

---

## 📞 Quick Reference

**Repository:** https://github.com/sudotsu/appstack-app
**Actions:** https://github.com/sudotsu/appstack-app/actions
**Secrets:** https://github.com/sudotsu/appstack-app/settings/secrets/actions

**Keystore Location:** `android/keystores/appstack-release.jks` (local only)
**Keystore Password:** `AppStack2025@Secure!`
**Package ID:** `com.appstack.app`

---

**Ready to build something awesome! 🚀**
