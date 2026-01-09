# Android Development Setup Guide for ProMedix EMS

## 📱 **Android Studio Configuration Steps**

### **1. After Installing Android Studio:**

1. **Open Android Studio**
2. **Go to:** Android Studio → Settings → Appearance & Behavior → System Settings → Android SDK
3. **Install Required Components:**
   - ✅ Android SDK Platform 34 (Android 14)
   - ✅ Android SDK Build-Tools 34.0.0
   - ✅ Android Emulator
   - ✅ Android SDK Platform-Tools

### **2. Create Android Virtual Device (AVD):**

1. **Open:** Tools → AVD Manager
2. **Create Virtual Device**
3. **Choose:** Pixel 6 or similar (recommended for testing)
4. **System Image:** API 34 (Android 14)
5. **Click:** Finish

### **3. Environment Variables (Add to ~/.bash_profile or ~/.zshrc):**

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**Apply changes:**
```bash
source ~/.bash_profile  # or ~/.zshrc
```

### **4. Verify Setup:**

```bash
cd /Users/macbook/Desktop/ProMedixEMS/ProMedixEMSApp
npx @react-native-community/cli doctor
```

### **5. Run Your ProMedix EMS App:**

```bash
# Start emulator first (or use AVD Manager)
emulator @YOUR_AVD_NAME

# In another terminal, start Metro
npm start

# In a third terminal, run the app
npx react-native run-android
```

---

## 🚀 **Quick Commands Reference**

### **Start Everything:**
```bash
# Terminal 1: Start Metro bundler
cd /Users/macbook/Desktop/ProMedixEMS/ProMedixEMSApp && npm start

# Terminal 2: Run on Android
cd /Users/macbook/Desktop/ProMedixEMS/ProMedixEMSApp && npx react-native run-android
```

### **Development Commands:**
```bash
# Reload app (in Metro terminal)
r

# Open developer menu (in Metro terminal) 
d

# Clean build (if issues)
cd android && ./gradlew clean && cd ..
```

---

## 📱 **Expected Result**

Once setup is complete, you'll see your **ProMedix EMS app** running with:

- ✅ Professional medical UI design
- ✅ 45 chapters showcase (41 core + 4 bonus)
- ✅ NASEMSO 2022 enhanced content integration
- ✅ Interactive features and navigation
- ✅ Free trial and premium subscription interface

---

## 🔧 **Troubleshooting**

### **If Build Fails:**
```bash
# Clean everything and rebuild
cd /Users/macbook/Desktop/ProMedixEMS/ProMedixEMSApp
rm -rf node_modules
npm install
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

### **If Emulator Won't Start:**
- Check AVD Manager for created devices
- Verify Android SDK path in Android Studio
- Ensure Hardware Acceleration is enabled (Intel HAXM/Hypervisor)

---

## 📞 **Next Steps After Setup**

1. **Test Core Features:**
   - Navigation between screens
   - Feature showcase interactions
   - Alert dialogs and UI responses

2. **Integration Testing:**
   - NASEMSO 2022 enhanced content
   - Enhanced flashcard system
   - Clinical calculator tools

3. **App Store Preparation:**
   - Review deployment documentation
   - Test subscription flow
   - Verify compliance disclaimers

---

**Your ProMedix EMS app is ready to run as soon as Android Studio setup is complete!**