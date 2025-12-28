# Google Play Store Submission Guide

**App Name:** AppStack
**Package ID:** com.appstack.app
**Developer:** AxP Labs

---

## 📥 Step 1: Download Your Build Files

### From GitHub Actions:
1. Go to: https://github.com/sudotsu/appstack-app/actions
2. Click the latest **successful** workflow run (green checkmark)
3. Scroll to **Artifacts** section at the bottom
4. Download both:
   - **app-release-aab** - For Play Store upload
   - **app-release-apk** - For testing on your device

### What's the difference?
- **AAB (Android App Bundle)** - Upload to Play Store, Google optimizes for each device
- **APK** - Install directly on your phone for testing

---

## 📱 Step 2: Test Your App

**Before submitting to Play Store, TEST IT!**

1. Transfer `app-release.apk` to your Android phone
2. Open the file on your phone
3. You may need to enable "Install from Unknown Sources" in Settings
4. Install and test all features
5. Make sure everything works as expected

**If you find bugs, fix them FIRST before Play Store submission!**

---

## 💳 Step 3: Google Play Console Account

### Create Account:
1. Go to: https://play.google.com/console/signup
2. Sign in with your Google account (use soowoouser@gmail.com or business account)
3. Accept Developer Distribution Agreement
4. **Pay $25 registration fee** (one-time, lifetime access)
5. Complete account details

### Developer Info You'll Need:
- **Developer name:** AxP Labs
- **Email:** soowoouser@gmail.com (or your business email)
- **Website:** (optional but recommended)
- **Physical address:** Required for paid apps, optional for free

---

## 🎨 Step 4: Prepare App Assets

### Required Screenshots

**Phone Screenshots (REQUIRED):**
- Minimum: 2 screenshots
- Recommended: 4-8 screenshots
- Format: PNG or JPG
- Dimensions:
  - Min: 320px on shortest side
  - Max: 3840px on longest side
  - Recommended: 1080x1920 (portrait) or 1920x1080 (landscape)

**7-inch Tablet Screenshots (OPTIONAL but recommended):**
- Same requirements as phone
- Recommended: 1200x1920 or 1920x1200

**10-inch Tablet Screenshots (OPTIONAL):**
- Same requirements

### How to Take Screenshots:
1. Install APK on your phone
2. Open the app
3. Take screenshots of:
   - Home screen
   - Main features (3-4 different screens)
   - Anything that looks good
4. Transfer screenshots to your PC

### Feature Graphic (REQUIRED)

**Specifications:**
- Dimensions: **1024 x 500 pixels** (EXACT)
- Format: PNG or JPG
- Max file size: 1MB
- What it shows: Your app logo/name on nice background

**I can help you create this if you want!**

### App Icon (Should already be set)
- Already configured in your app
- Will be auto-extracted from APK

---

## ✍️ Step 5: Write App Descriptions

### Short Description (REQUIRED)
- **Max 80 characters**
- Shows in search results
- Make it catchy!

**Example for AppStack:**
```
Next.js Mastery Lab - Learn by doing, not memorizing. Progressive challenges.
```

### Full Description (REQUIRED)
- **Max 4000 characters**
- Full details about your app
- Use formatting (bullets, bold, etc.)

**Example Template:**
```
Next.js Mastery Lab - Progressive Learning Platform

Master Next.js 15 through hands-on challenges that test understanding, not syntax memorization.

🎯 FEATURES:
• AI-Powered Validation - Claude evaluates your comprehension
• Progressive Unlocking - Prove mastery before advancing
• Persistent Progress - Your achievements saved locally
• Smart Hints - Guidance without spoilers

📚 LEARN:
• TypeScript + JSX Fundamentals
• Tailwind v4 Dynamic Styling
• State Management Patterns
• Form Handling & Validation
• Next.js Routing Concepts
• Async Data Fetching
• Custom Hooks & Composition

💪 WHY IT WORKS:
Instead of copying code, you'll explain concepts, solve real problems, and build muscle memory through practice. Each challenge requires demonstrating true understanding.

🚀 BUILT WITH:
• Next.js 15 (App Router)
• TypeScript 5
• Tailwind CSS v4
• Anthropic Claude API

Perfect for developers who want to truly master Next.js, not just copy tutorials.
```

**Customize this for your actual app!** What does your app actually do right now?

---

## 🔒 Step 6: Privacy Policy

### Do you need one?
**YES if your app:**
- Collects any user data
- Uses internet connection to send data anywhere
- Has analytics/tracking
- Uses third-party services (like Claude API)

### Your app probably needs one because:
- Uses Anthropic Claude API
- Likely sends user queries to external services

### Create Simple Privacy Policy:

**Option 1: Use a generator**
- https://www.freeprivacypolicy.com/
- https://app-privacy-policy-generator.nisrulz.com/

**Option 2: Basic Template**
```
Privacy Policy for AppStack

Last updated: December 28, 2025

AppStack ("we", "our", or "us") operates the AppStack mobile application.

INFORMATION COLLECTION
We do not collect, store, or share any personally identifiable information.

THIRD-PARTY SERVICES
Our app uses Anthropic Claude API for educational features. Please review Anthropic's privacy policy at https://www.anthropic.com/legal/privacy

DATA STORAGE
All progress data is stored locally on your device. We do not have access to this data.

CONTACT US
If you have questions about this Privacy Policy, contact us at: soowoouser@gmail.com
```

**Host this somewhere:**
- GitHub Pages (easy and free)
- Your website
- Google Docs (set to public view)

---

## 📝 Step 7: Create App in Play Console

### Once you have Play Console access:

1. **Click "Create App"**
2. Fill out:
   - **App name:** AppStack
   - **Default language:** English (United States)
   - **App or game:** App
   - **Free or paid:** Free (or Paid if charging)
   - **Declarations:** Check required boxes

3. **Set up your app store listing:**
   - Short description (80 chars)
   - Full description (4000 chars max)
   - App icon (auto-detected from APK)
   - Feature graphic (1024x500 PNG)
   - Screenshots (phone + tablet)
   - App category: Education or Productivity
   - Contact email: soowoouser@gmail.com
   - Privacy policy URL (if applicable)

4. **Complete Store Settings:**
   - App category
   - Tags (optional)
   - Contact details

---

## 📤 Step 8: Upload Your AAB

### In Play Console:

1. Go to **Production** → **Create new release**
2. **Upload** your `app-release.aab` file
3. **Release name:** 1.0 (or whatever version)
4. **Release notes:** "Initial release"
5. Save

### First release checklist (Play Console will guide you):
- ✅ Store listing complete
- ✅ Content rating complete
- ✅ Target audience selected
- ✅ App category selected
- ✅ Contact details provided
- ✅ Privacy policy (if required)

---

## 🎮 Step 9: Content Rating

**Required by Google Play**

1. In Play Console, go to **Content Rating**
2. Answer questionnaire honestly:
   - Does app have violence? No
   - Sexual content? No
   - Profanity? No
   - Controlled substances? No
   - Etc.

3. Get your rating (probably E for Everyone or T for Teen)

---

## 🎯 Step 10: Target Audience & Content

### Set Target Audience:
- Who is your app for? (Adults, teens, kids?)
- For educational app: Likely 13+ or 18+

### Data Safety Section:
- What data do you collect? (None, or specify)
- Is data encrypted? (N/A if not collecting)
- Can users request data deletion? (N/A if not collecting)

---

## 🚀 Step 11: Submit for Review

### Final Steps:
1. Review all sections in Play Console (all must have checkmarks)
2. Click **"Send for Review"** in Production track
3. Wait for review (1-7 days typical)

### What Google Reviews:
- App functionality
- Policy compliance
- Content rating accuracy
- Metadata accuracy
- Security/malware scan

### If Rejected:
- Google will tell you why
- Fix the issues
- Resubmit

---

## ⏱️ What Happens Next?

### Review Timeline:
- **1-3 days** - Most apps
- **Up to 7 days** - First submission or complex apps
- You'll get email notifications

### Once Approved:
- App goes live on Google Play Store
- Available worldwide (unless you restrict countries)
- Users can download immediately

### After Publishing:
- Monitor reviews and ratings
- Respond to user feedback
- Release updates as needed (increment versionCode in build.gradle)

---

## 🔄 Future Updates

### When you want to update your app:

1. Make changes to your code
2. Update version in `android/app/build.gradle`:
   ```gradle
   versionCode 2      // Increment by 1
   versionName "1.1"  // Update version name
   ```
3. Commit and push to GitHub
4. Download new AAB from GitHub Actions
5. In Play Console: Production → Create new release
6. Upload new AAB
7. Add release notes describing changes
8. Submit for review

**Updates are usually approved faster (1-2 days)**

---

## 📞 Need Help?

### Common Issues:

**App rejected for policy violation:**
- Read Google's email carefully
- Common issues: Privacy policy missing, misleading content, IP violations
- Fix and resubmit

**Build errors:**
- Check GitHub Actions for errors
- Fix code and push again

**Can't upload AAB:**
- Make sure versionCode is higher than previous
- Check file size (max 150MB for AAB)

### Resources:
- Play Console Help: https://support.google.com/googleplay/android-developer
- Play Policy: https://play.google.com/about/developer-content-policy/
- This repo: https://github.com/sudotsu/appstack-app

---

## ✅ Quick Checklist

Before submitting, make sure you have:

- [ ] Tested APK on real Android device
- [ ] Google Play Console account created ($25 paid)
- [ ] 2-8 phone screenshots (PNG/JPG, 1080x1920)
- [ ] Feature graphic (1024x500 PNG)
- [ ] Short description (80 chars)
- [ ] Full description (up to 4000 chars)
- [ ] Privacy policy URL (if app uses internet/APIs)
- [ ] AAB file downloaded from GitHub Actions
- [ ] Content rating completed
- [ ] Target audience selected
- [ ] Store listing complete
- [ ] All Play Console sections have checkmarks

---

**Ready to dominate the Play Store! Let's get this bread! 💰**
