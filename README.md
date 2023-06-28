# Tiny Notes - the note taking app
## Getting Started

First, run the backend service:

before run the service add your MySQL Connection URL in ```.env``` file

```bash
cd backend
npm install
npx prisma db push
npm run dev
```

Then, run the React-native Application:

```bash
cd tiny-note
npm install
npm run android
```

