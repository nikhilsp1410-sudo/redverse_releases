# RedVerse - Your Ultimate Desktop & Mobile AI Companion

Welcome to RedVerse! RedVerse is an incredibly powerful, fully-featured AI assistant designed to give you complete hands-free control over your digital life. Whether you are sitting at your computer or walking around with your phone, RedVerse is always listening, always ready, and deeply integrated into your daily workflow.

RedVerse is split into two seamless experiences: a powerful Desktop Application for your Windows PC, and a sleek Remote Companion App for your Android device.

---

## 💻 RedVerse Windows Desktop Application

The Windows application is the core brain of RedVerse. It lives on your computer, manages your files, controls your apps, and acts as your ultimate voice-activated desktop assistant. 

### Core Desktop Features:

#### 🎙️ Always-On "Wake Word" Activation
Just like your favorite smart speakers, RedVerse is constantly listening in the background. You don't need to press any buttons to get its attention. Just say the wake word (e.g., *"Hey RedVerse"*), and it instantly wakes up to execute your commands. 

#### 🤫 Intelligent Background Listening
RedVerse knows the difference between you talking to it, and you just having a conversation in the room. If it hears speech that isn't directed at it, it will completely ignore it, keeping your workspace quiet and undisturbed. The UI beautifully visualizes when it is silently listening and when it is actively processing your commands.

#### 🛑 Rapid Voice Interruptions
Is RedVerse reading a long response and you want it to stop? You don't need to click anything! Just speak over it, and RedVerse will instantly detect your voice, stop talking, and listen to your new command. It feels exactly like a natural human conversation.

#### ⌨️ Complete Desktop Automation
RedVerse isn't just a chatbot; it actually controls your computer. You can ask it to:
- Open any installed application on your PC instantly (e.g., *"Open Spotify"*).
- Launch your favorite websites directly into your default browser.
- Perform web searches for you.
- Type out paragraphs of text automatically into whichever window you currently have open!

#### 🌐 True Offline Mode
Going off the grid? No problem. RedVerse's brain runs entirely locally on your machine. You do not need an internet connection to chat, generate text, or automate your computer. Your privacy is 100% guaranteed because your data never leaves your hard drive.

#### 🎨 Stunning, Animated User Interface
RedVerse features a gorgeous, dark-themed UI that feels alive. When you speak, the microphone pulses and animates. When RedVerse speaks, visual audio indicators react to its voice. It provides a premium, futuristic experience every time you use it.

---

## 📱 RedVerse Android App

The RedVerse Android App is a fully standalone, private AI assistant that runs directly on your mobile device hardware.

### Core Mobile Features:

#### 🧠 100% Local On-Device AI
RedVerse for Android does not rely on the cloud or a PC. It utilizes `llama-cpp-capacitor` to download and run optimized GGUF language models natively on your phone's processor. 

#### 🔋 Highly Optimized for Mobile
Choose from a curated list of tiny, highly efficient models (like Qwen 2.5 0.5B, TinyLlama 1.1B, or Phi-3 Mini) that run blazingly fast without draining your battery or requiring a flagship device.

#### 🎙️ Mobile Voice Dictation & Text-to-Speech
Just tap the glowing microphone on your phone's screen and speak naturally. RedVerse transcribes your voice, processes it locally through the LLM, and speaks the response back to you using native Android text-to-speech.

#### 🌟 Polished Mobile Dashboard
The Android app features a curated, futuristic design with custom icons, smooth animations, and a layout that looks and feels like a state-of-the-art premium application, fully optimized for touch screens.

---

## 🚀 Installation & Setup

We provide incredibly simple, one-click installers for Windows, and a ready-to-use APK for Android!

### Windows Installers:
- **Online Web Setup (`RedVerse_Web_Setup.exe`):** A tiny, lightning-fast installer that downloads everything you need directly from the internet as it installs. Perfect if you have a fast connection.
- **Offline Setup (`RedVerse_Offline_Setup.exe`):** A massive, all-in-one package that contains everything required to run RedVerse without needing to download huge files during installation.

### Android Installation:
- **RedVerse Android App (`RedVerse_Android_v1.0.0.apk`):** Simply download this file directly to your Android device, tap to install, and you are ready to connect to your desktop!

---

## 🗣️ Supported Commands

### Windows Desktop Application
The Windows App has an extensive list of hardcoded system commands. If you have "Voice Command Mode" enabled, say your wake word (e.g., *"Hey RedVerse"*) followed by any of these commands:

**System & App Management**
* `"Open [App Name]"` (e.g., *Open Spotify*, *Open Notepad*)
* `"Open [Website Name]"` (e.g., *Open GitHub*)
* `"Switch to [App Name]"` or `"Switch app"`
* `"Close window"`, `"Maximize window"`, `"Minimize window"`, `"Show desktop"`
* `"Snap left"`, `"Snap right"`
* `"Rescan apps"` (Refreshes the index of installed apps)
* `"Download [App Name]"` or `"Install [App Name]"` (Installs via winget)

**Web Browsing & Search**
* `"Search for [query]"` or `"Search [query]"`
* `"Search for [query] and open the first result"`
* `"Open its website"` (Opens the site for your last search context)
* `"New tab"`, `"Close tab"`

**Media & Playback**
* `"Play [Song/Artist]"` (Defaults to Spotify)
* `"Open Spotify"`, `"Pause music"`, `"Next track"`, `"Previous track"`
* `"Volume up"`, `"Volume down"`, `"Mute"`
* `"YouTube search for [query]"` or `"YouTube play [query]"`
* `"Skip ad"`, `"Fullscreen"`, `"Pause video"` (While YouTube is active)

**Productivity & Typing**
* `"Start dictation"` (Types exactly what you say) and `"Stop dictation"`
* `"Type [text]"`
* `"Press enter"`, `"Press tab [X] times"`, `"Press backspace [X] times"`
* `"Copy that"`, `"Paste that"`, `"Delete that"`, `"Undo that"`

**Mouse Control & Vision**
* `"Click here"`, `"Double click"`, `"Right click"`
* `"Click on the [Button/Element Name]"`
* `"Click the [1st/2nd/3rd] result"`
* `"Move mouse up/down/left/right"`
* `"Scroll up"`, `"Scroll down"`
* `"What's on my screen?"` or `"What error is this?"` (Analyzes screen via Vision model)

**Personal Data & Settings**
* `"What's on my calendar?"`, `"Read my emails"`
* `"Backup my files"`
* `"Open settings"`, `"Open Bluetooth"`, `"Open Wi-Fi"`
* `"Friday mode"` or `"Jarvis mode"` (Switches TTS voice personality)
* `"Stop"`, `"Quiet"`, `"Shut up"` (Stops current TTS generation)
* `"Exit"` or `"Goodbye"`

### Android App
The Android App functions as a pure, offline conversational AI companion. It does not control your phone's operating system with hardcoded commands. Simply tap the microphone and speak naturally to the AI!
