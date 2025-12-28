# GitHub Actions Setup Guide for AppStack

This guide will help you set up automated Android builds using GitHub Actions.

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "appstack-app")
3. Don't initialize with README (we already have files)

## Step 2: Add GitHub Secrets

You need to add your keystore and credentials as secrets so GitHub Actions can sign your app.

### Get the Keystore Base64

The keystore has been encoded to base64. View it with:
```bash
cat android/keystores/keystore-base64.txt
```

### Add Secrets to GitHub

1. Go to your repository on GitHub
2. Click **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret** and add these 4 secrets:

| Secret Name | Value |
|------------|-------|
| `KEYSTORE_BASE64` | Copy ALL content from `android/keystores/keystore-base64.txt` |
| `KEYSTORE_PASSWORD` | `AppStack2025@Secure!` |
| `KEY_ALIAS` | `appstack` |
| `KEY_PASSWORD` | `AppStack2025@Secure!` |

## Step 3: Push Code to GitHub

Initialize git and push your code:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AppStack Android app"

# Add remote (replace USERNAME and REPO with yours)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git branch -M master
git push -u origin master
```

## Step 4: Download Your Built App

After pushing, GitHub Actions will automatically build your app!

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Click on the latest workflow run
4. Wait for it to complete (takes ~5-10 minutes)
5. Scroll down to **Artifacts**
6. Download:
   - `app-release-aab` - For Google Play Store
   - `app-release-apk` - For testing on your device

## Step 5: Upload to Play Store

1. Go to https://play.google.com/console
2. Create a new app
3. Fill in app details (name, description, screenshots)
4. Go to **Production** > **Create new release**
5. Upload the `app-release.aab` file
6. Follow Google's review process

## Important Notes

- **NEVER** commit your keystore files to GitHub (they're in .gitignore)
- Keep your keystore password safe - you'll need it for all future updates
- The workflow runs on every push to master/main branch
- You can also manually trigger builds from the Actions tab

## Troubleshooting

### Build fails on GitHub Actions
- Check that all 4 secrets are correctly added
- Verify the KEYSTORE_BASE64 secret has the complete base64 string

### Can't push to GitHub
- Make sure you've created the repository on GitHub first
- Use a Personal Access Token instead of password for authentication

## Next Steps

1. Add app screenshots and Play Store listing details
2. Test the APK on your device before uploading AAB to Play Store
3. Set up beta testing through Play Store's internal testing track

---

Good luck with your app launch! 🚀
