import { siteConfig } from "./site";

export const legalLastUpdated = "September 11, 2026";

export const privacySections = [
  {
    title: "Overview",
    body: `${siteConfig.name} respects your privacy. This policy explains what we collect, why we collect it, and the choices you have. The app is available in the United States and Canada.`,
  },
  {
    title: "Information we collect",
    list: [
      "Account: email address, display name, profile photos, and role (gardener or host)",
      "Profile: bio, garden questionnaire answers, phone number (optional), and general location for matching",
      "Usage: likes, messages, community posts, journal entries, and in-app activity",
      "Device: push notification tokens and basic diagnostic data",
      "Waitlist: email address if you join through our website before launch",
    ],
  },
  {
    title: "How we use information",
    list: [
      "Show nearby hosts or gardeners on the map and ranked lists",
      "Enable messaging, community spots, groups, and events",
      "Improve matching, safety, and product quality",
      "Send service, security, and launch updates you opt into",
    ],
  },
  {
    title: "Sharing",
    body: "We do not sell your personal data. Profile information you choose to share is visible to other users as part of the service. We use trusted infrastructure providers (including Supabase for secure storage) to operate the app. Location is used for matching and is shared with other users only as part of your profile when you connect.",
  },
  {
    title: "Your choices",
    list: [
      "Edit profile data anytime in the app",
      "Control notification preferences in Settings",
      "Delete your account in Settings or via our delete account page",
      "Contact us to request access to or correction of your data",
    ],
  },
  {
    title: "Retention",
    body: "We keep account data while your account is active. When you delete your account, we remove personal data from active systems within a reasonable period, typically within 30 days, except where retention is required by law or for safety.",
  },
  {
    title: "Contact",
    body: `Privacy questions: ${siteConfig.supportEmail}`,
  },
] as const;

export const termsSections = [
  {
    title: "Agreement",
    body: `By using ${siteConfig.name} (the "Service"), you agree to these Terms of Service. If you do not agree, do not use the Service.`,
  },
  {
    title: "The Service",
    body: `${siteConfig.name} connects gardeners with hosts who share private garden space. We provide map-first discovery, messaging, and community features including garden spots, journals, groups, and events. We are a community platform — not a payment processor or landlord. Rent and barter terms are agreed directly between users.`,
  },
  {
    title: "Eligibility",
    body: "You must be at least 18 years old and located in the United States or Canada to use the Service. You agree to provide accurate profile information and keep your account secure.",
  },
  {
    title: "Subscriptions",
    body: "Discover and messaging may require an active subscription purchased through the Apple App Store or Google Play. Billing, renewals, and refunds are handled by the store where you subscribed and follow their policies.",
  },
  {
    title: "Your conduct",
    body: "You agree to treat other users respectfully, follow our Community Guidelines, and use the Service lawfully. Harassment, spam, misleading profiles, and misuse of map or messaging features are prohibited.",
  },
  {
    title: "Content",
    body: "You retain ownership of photos and content you upload. You grant us a license to host, display, and distribute that content within the Service for matching, community, and safety purposes.",
  },
  {
    title: "Safety",
    body: "Meet responsibly, verify garden spaces, and use in-app Report and Block tools when needed. In an emergency, contact local authorities first.",
  },
  {
    title: "Termination",
    body: "We may suspend or terminate accounts that violate these terms or create risk for the community. You may delete your account at any time in Settings or through our account deletion page.",
  },
  {
    title: "Disclaimer",
    body: 'The Service is provided "as is" without warranties. We are not responsible for agreements, injuries, property damage, or disputes between users. Your use of garden space is at your own risk.',
  },
  {
    title: "Contact",
    body: `Legal questions: ${siteConfig.supportEmail}`,
  },
] as const;

export const supportTopics = [
  {
    title: "Account & profile",
    description:
      "Update your profile, change your role, or manage notification preferences in Settings.",
  },
  {
    title: "Billing & subscriptions",
    description:
      "Subscriptions are managed through the App Store or Google Play. For refund questions, use the store where you subscribed.",
  },
  {
    title: "Safety & reporting",
    description:
      "Use Report or Block in the app on any profile or chat. We review every report.",
  },
  {
    title: "Delete your account",
    description: "Permanent deletion instructions and data removal details.",
    href: "/delete-account",
  },
] as const;
