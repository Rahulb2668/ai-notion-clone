import { credential } from "firebase-admin";
import { initializeApp, App, getApp, getApps, cert } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";

const serviceKey = require("./service-key.json");

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
