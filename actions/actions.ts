"use server";
import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export const createNewDocument = async () => {
  const { userId, redirectToSignIn, sessionClaims } = await auth();

  if (!userId) return redirectToSignIn();

  // Create a new document

  const documentCollectionRef = adminDb.collection("documents");

  const docRef = await documentCollectionRef.add({
    title: "New Doc",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims.email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims.email,
      roomId: docRef.id,
      role: "owner",
      createdAt: new Date(),
    });

  return { docId: docRef.id };
};
