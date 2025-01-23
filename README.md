# **E-Commerce Store**

This is an e-commerce store app built with React and Firebase. Follow the steps below to set up and run the project locally.

---

## **Installation Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## **Firebase Setup**

To use Firebase services in this project, follow these steps:

### **1. Create a Firebase Project**
- Go to the [Firebase Console](https://console.firebase.google.com/).
- Click on **"Add Project"** and follow the steps to create a project.
- Register a web app within the Firebase project.

### **2. Get Firebase Configuration**
- After creating the project, go to **Project Settings** > **General**.
- Scroll down to **Your Apps** and find the Firebase config object, which looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## **Environment Variables**

Store your Firebase configuration in environment variables:

1. Create a `.env` file in the root of the project.
2. Add the following environment variables:
   ```
   REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
   REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
   ```

Replace the placeholders (`YOUR_API_KEY`, `YOUR_PROJECT_ID`, etc.) with the actual values from your Firebase config object.

---

## **Firebase Configuration File**

The Firebase configuration is handled in the `firebase.ts` file located in the `lib` folder:

### **File Path:**  
`src/lib/firebase.ts`

### **Code:**
```typescript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
```

---

## **Run the Project**

After setting up Firebase and environment variables, start the project with:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:5173).

---

## **Troubleshooting**

1. **Firebase Error:**  
   - Ensure you've added the correct Firebase config to your `.env` file.
   - Restart the server after modifying the `.env` file.

2. **Missing Dependencies:**  
   - If you face errors related to missing Firebase or React packages, try reinstalling:
     ```bash
     npm install
     ```

3. **Branch Issues:**  
   - Ensure you're on the correct branch by running:
     ```bash
     git branch
     ```

---
