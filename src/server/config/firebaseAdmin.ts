// Firebase Admin SDK initialization boundary.
// Actual initialization requires GOOGLE_APPLICATION_CREDENTIALS or equivalent.
// In local dev without credentials this module safely returns null.

export function getFirestore(): null {
  return null;
}
