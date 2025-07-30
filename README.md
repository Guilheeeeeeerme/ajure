# Ajure - Three-Project Setup

*Ajurê – embora mais do nheengatu, remete a "união de vozes" (usado no norte).*

This workspace contains three interconnected projects that form a complete application stack:

## Projects Structure

```
/ajure
├── backend/          # NestJS API Server
├── admin-web/        # React Admin Dashboard
├── mobile-app/       # React Native Mobile App
└── README.md         # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- For mobile development: Expo CLI

### 1. Backend (NestJS) - Port 3001

```bash
cd backend
npm install
npm run start:dev
```

The backend will be available at `http://localhost:3001`

**Available endpoints:**
- `GET /` - Hello World message
- `GET /api/health` - Health check with status info

### 2. Admin Web App (React) - Port 3000

```bash
cd admin-web
npm install
npm start
```

The admin dashboard will be available at `http://localhost:3000`

### 3. Mobile App (React Native)

```bash
cd mobile-app
npm install
npx expo start
```

Use the Expo Go app on your phone or an emulator to run the mobile app.

## 🔧 Architecture

- **Backend (NestJS)**: Serves as the API layer with CORS enabled for both frontend applications
- **Admin Web (React)**: Web-based admin interface that communicates with the backend
- **Mobile App (React Native)**: Mobile application that communicates with the same backend

## 📡 Communication

Both frontend applications communicate with the backend API:
- Admin Web: `http://localhost:3000` → `http://localhost:3001`
- Mobile App: Expo client → `http://localhost:3001`

## 🛠️ Development

### Starting all services:

1. **Terminal 1 - Backend:**
   ```bash
   cd backend && npm run start:dev
   ```

2. **Terminal 2 - Admin Web:**
   ```bash
   cd admin-web && npm start
   ```

3. **Terminal 3 - Mobile App:**
   ```bash
   cd mobile-app && npx expo start
   ```

### Key Features

- **CORS Configuration**: Backend is configured to accept requests from both frontends
- **Health Monitoring**: Both apps include backend connectivity status
- **TypeScript**: All projects use TypeScript for better development experience
- **Hot Reload**: All projects support hot reloading during development

## 📝 Next Steps

1. **Backend**: Add database integration, authentication, and more API endpoints
2. **Admin Web**: Implement admin features like user management, analytics dashboard
3. **Mobile App**: Add navigation, authentication, and mobile-specific features
4. **Shared**: Consider adding shared types/interfaces between projects

## 🐛 Troubleshooting

- **Backend not connecting**: Ensure port 3001 is available
- **CORS errors**: Check that the backend CORS configuration includes your frontend URLs
- **Mobile app can't reach backend**: If using a physical device, replace `localhost` with your computer's IP addressjurê – embora mais do nheengatu, remete a “união de vozes” (usado no norte).
