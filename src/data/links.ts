/**
 * Single source of truth for every FERGA link used on this landing page.
 *
 * Verified 2026-10-06:
 *  · App Store listing is LIVE  (id 6808258219, "FERGA – Teaching & Learning", free, 13+)
 *  · Google Play is LIVE        (com.ferga.mobile — accepted, returns 200)
 *
 * PLAY_PUBLISHED gates the "Coming soon" badges and the quick page's Android path.
 * It is true now, so every Play button and link goes straight to the store.
 */
export const PLAY_PUBLISHED = true;

export const LINKS = {
  appStore: 'https://apps.apple.com/us/app/ferga-teaching-learning/id6808258219',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.ferga.mobile',
  /** Support / legal pages already registered with App Store Connect */
  support: 'https://ferga.expo.app/support',
  privacy: 'https://ferga.expo.app/privacy-policy',
  dataDeletion: 'https://ferga.expo.app/data-deletion',
  /** Short "quick download" page that the QR code points at */
  quickGet: '/get.html',
  /** Apple app id — used for the Safari smart-app banner */
  appleAppId: '6808258219',
  /** Apple's age rating for the shipped app (ASC 13+ override) */
  ageRating: '13+',
  /** Android package id */
  androidPackage: 'com.ferga.mobile',
} as const;

/** Google Play only when it actually resolves, otherwise the quick page. */
export const playHref = () => (PLAY_PUBLISHED ? LINKS.googlePlay : LINKS.quickGet);
