/**
 * Single source of truth for every FERGA link used on this landing page.
 *
 * Verified 2026-10-06:
 *  · App Store listing is LIVE  (id 6808258219, "FERGA – Teaching & Learning", free, 13+)
 *  · Google Play returns 404    — the Android build is still on Play **internal testing**
 *    (release-report.md: "version code 22 (1.0.1) released to internal testing")
 *
 * ⚠️ Flip PLAY_PUBLISHED to true the day the Android track goes to production.
 * Every "Coming soon" badge, the Play button and the /get.html quick page read this flag.
 */
export const PLAY_PUBLISHED = false;

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
