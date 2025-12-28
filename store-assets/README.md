# Play Store Assets

This directory contains all the assets needed for Google Play Store submission.

## Directory Structure

```
store-assets/
├── screenshots/
│   ├── phone/          # Phone screenshots (1080x1920 recommended)
│   └── tablet/         # Tablet screenshots (optional)
├── text-content/       # App descriptions and text
│   ├── SHORT_DESCRIPTION.txt
│   ├── FULL_DESCRIPTION.txt
│   ├── RELEASE_NOTES_v1.0.txt
│   └── PRIVACY_POLICY_TEMPLATE.txt
└── feature-graphic.png # 1024x500 feature graphic (CREATE THIS)
```

## What You Need to Create

### 1. Feature Graphic (REQUIRED)
- **Size:** Exactly 1024 x 500 pixels
- **Format:** PNG or JPG
- **Content:** App logo/name on attractive background
- **Save as:** `feature-graphic.png`

**How to create:**
- Use Canva (free): https://www.canva.com/
- Use Figma (free): https://www.figma.com/
- Use Photoshop/GIMP
- Hire on Fiverr ($5-20)

**Tips:**
- Use your app colors (Dark gray #1F2937, Blue #60A5FA)
- Include app name "AppStack"
- Include tagline: "Next.js Mastery Lab"
- Keep it clean and professional
- No text smaller than 40px

### 2. Screenshots (REQUIRED - minimum 2)
**Take from your actual app:**

1. Install the APK on your Android phone
2. Open the app
3. Take 4-8 screenshots showing:
   - Home screen / main interface
   - Key features in action
   - Different screens of the app
   - Anything that looks impressive

4. Transfer screenshots to PC
5. Rename them:
   - `phone/01-home.png`
   - `phone/02-challenges.png`
   - `phone/03-progress.png`
   - `phone/04-hints.png`
   - etc.

**Screenshot tips:**
- Capture on a modern phone (1080x1920 or similar)
- Show the app actually working
- Make sure UI looks good (no errors, lorem ipsum, etc.)
- Can add text overlays explaining features (optional)

### 3. Text Content (DONE)
Already created in `text-content/`:
- ✅ Short description (80 chars)
- ✅ Full description
- ✅ Release notes
- ✅ Privacy policy template

**Review and customize these if needed!**

## Privacy Policy Hosting

Your app uses Anthropic Claude API, so you **NEED** a privacy policy.

**Option 1: GitHub Pages (Recommended - Free)**
```bash
# Create a simple HTML file
echo '<html><body><pre>' > privacy.html
cat text-content/PRIVACY_POLICY_TEMPLATE.txt >> privacy.html
echo '</pre></body></html>' >> privacy.html

# Push to gh-pages branch or enable Pages on main branch
# Then access at: https://sudotsu.github.io/appstack-app/privacy.html
```

**Option 2: Google Docs**
1. Copy text from `PRIVACY_POLICY_TEMPLATE.txt`
2. Create new Google Doc
3. Paste the text
4. Click "Share" → "Anyone with the link can view"
5. Copy the sharing URL
6. Use that URL in Play Console

**Option 3: Your website**
Upload to your existing website if you have one.

## Quick Start Checklist

- [ ] Download APK from GitHub Actions
- [ ] Install and test APK on your phone
- [ ] Take 4-8 screenshots while using app
- [ ] Transfer screenshots to `screenshots/phone/`
- [ ] Create feature graphic (1024x500) → save as `feature-graphic.png`
- [ ] Review text content files and customize if needed
- [ ] Host privacy policy and get public URL
- [ ] Follow PLAY_STORE_SUBMISSION.md guide
- [ ] Submit to Play Console!

## Need Help?

See the full submission guide: `../PLAY_STORE_SUBMISSION.md`

Questions? Issues? Check `../PROJECT_STATUS.md` for contact info.

---

**Let's get this app on the Play Store! 🚀**
