# 🎵 Spotify Clone

A modern Spotify web player clone built with Vite and Vanilla JavaScript. Stream music, browse playlists, and control playback using the Spotify Web API.

## ✨ Features

- **🔐 Spotify OAuth Authentication**: Secure login with your Spotify account
- **🎵 Music Playback**: Play, pause, and control your music
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🎨 Modern UI**: Clean interface inspired by Spotify's design
- **🔍 Search**: Find your favorite tracks and artists
- **📋 Playlists**: Browse and play your Spotify playlists
- **👤 User Profile**: View your Spotify profile information

## 🛠️ Tech Stack

- **Build Tool**: Vite (fast development with HMR)
- **JavaScript**: Vanilla JS (no framework dependencies)
- **Styling**: Tailwind CSS
- **API**: Spotify Web API
- **Authentication**: OAuth 2.0

## 📁 Project Structure

```
Spotify-Clone/
├── src/
│   ├── login/
│   │   ├── login.html      # Login page
│   │   └── login.js        # OAuth flow logic
│   ├── dashboard/
│   │   ├── dashboard.html  # Main player interface
│   │   └── dashboard.js    # Player functionality
│   ├── assets/             # Spotify logos and icons
│   ├── api.js              # Spotify API wrapper
│   ├── common.js           # Utility functions
│   ├── config.js           # API configuration
│   └── style.css           # Global styles
├── vite.config.js          # Vite configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn
- Spotify Developer Account
- Spotify Premium (for playback features)

### Spotify API Setup

1. **Create a Spotify App**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Click "Create an App"
   - Note your **Client ID**

2. **Configure Redirect URI**
   - In your app settings, add redirect URI:
   - For local: `http://localhost:5173/login/login.html`
   - For production: `https://yourdomain.com/login/login.html`

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kapucuonur/Spotify-Clone.git
cd Spotify-Clone
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment**

Create `.env` file in the root:
```env
VITE_CLIENT_ID=your_spotify_client_id
VITE_REDIRECT_URI=http://localhost:5173/login/login.html
```

Or update `src/config.js` directly:
```javascript
export const CLIENT_ID = "your_client_id_here";
export const REDIRECT_URI = "http://localhost:5173/login/login.html";
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The app will open at [http://localhost:5173](http://localhost:5173)

## 🎯 Usage

1. **Login**: Click "Login with Spotify" to authenticate
2. **Browse**: View your playlists and saved tracks
3. **Search**: Find songs, artists, and albums
4. **Play**: Click any track to start playback
5. **Control**: Use play/pause, next/previous controls

## 🔑 Key Features Explained

### OAuth Authentication
- Implements Spotify's Authorization Code Flow
- Stores access token in localStorage
- Auto-redirects on token expiry

### API Integration
- Fetches user profile and playlists
- Retrieves track information
- Controls playback on active devices
- Search functionality

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for all screen sizes
- Touch-friendly controls

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Styling
Modify `tailwind.config.cjs` to customize:
- Colors (Spotify green theme)
- Spacing and breakpoints
- Typography

### API Scopes
Update `src/config.js` to add more Spotify permissions:
```javascript
export const SCOPES = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "user-modify-playback-state",
  // Add more scopes as needed
];
```

## 🚧 Limitations

- Requires Spotify Premium for playback
- Needs active Spotify device for playback control
- Rate limited by Spotify API

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Onur Kapucu**
- GitHub: [@kapucuonur](https://github.com/kapucuonur)

## 🙏 Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## ⚠️ Disclaimer

This is a clone project for educational purposes. Spotify and the Spotify logo are trademarks of Spotify AB.

---

⭐ Star this repo if you find it helpful!
