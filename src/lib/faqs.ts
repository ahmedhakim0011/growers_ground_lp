export type SiteFaq = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

/** Shown on the home page and in FAQPage JSON-LD. Keep claims true of the product today. */
export const siteFaqs: SiteFaq[] = [
  {
    q: "What is Growers Ground?",
    a: "Growers Ground is a map-first garden sharing app (also called a yard sharing app) that connects people who want to grow with people who have unused yard or garden space, plus community gardens and other places to grow. The app is not in the app stores yet. The website's garden maps and guides are free now, and you can join the waitlist for the app.",
    link: { href: "/about", label: "About Growers Ground" },
  },
  {
    q: "How can I find a community garden near me?",
    a: "Start with a directory. The American Community Gardening Association has a Find-a-Garden search by ZIP code, and many city parks departments list their gardens. Our city pages map community gardens by metro. A listing does not mean plots are open, so contact the garden or its organizer before you visit.",
    link: { href: "/cities", label: "Community gardens by city" },
  },
  {
    q: "Where can I grow vegetables if I don't have a backyard?",
    a: "Most people combine two or three routes: a community garden waitlist for the long term, a yard share or container garden for this season, and volunteering at a garden to get to know the people there.",
    link: { href: "/gardening-without-a-backyard", label: "Gardening without a backyard" },
  },
  {
    q: "How can I share my unused garden space?",
    a: "Decide whether your space is suitable, check any lease, HOA or insurance limits, choose what you want in return, and put the agreement in writing before anyone plants. You can find a gardener by asking neighbors, local gardening clubs or community boards.",
    link: { href: "/share-your-yard", label: "Share your backyard" },
  },
  {
    q: "How do I connect with local gardeners?",
    a: "Talk to neighbors, then try gardening clubs, master gardener programs, community gardens and seed swaps. A small shared task, such as swapping seedlings, is an easier start than sharing a bed.",
    link: { href: "/local-gardeners", label: "Find local gardeners" },
  },
  {
    q: "Where can I find available gardening space?",
    a: "There is no single list of open plots. Ask community gardens directly about openings and waitlists, and ask neighbors or local groups about unused yards. Growers Ground is being built to show gardeners and hosts on one map, and is not in the app stores yet.",
    link: { href: "/find-garden-space", label: "Find garden space near you" },
  },
  {
    q: "Can I rent someone's backyard to grow vegetables?",
    a: "Yes. Renting a backyard garden is a private agreement with the homeowner: some ask for seasonal rent, many prefer a harvest share or help with upkeep. Agree on water, access and an end date in writing before you plant.",
    link: { href: "/garden-space-for-rent", label: "Garden space for rent" },
  },
  {
    q: "Is there an app to find garden space?",
    a: "Growers Ground is a garden sharing app built for that: it maps hosts with unused yard space and gardeners looking for ground, near you. It is not in the app stores yet; join the waitlist to hear when your city opens.",
    link: { href: "/how-it-works", label: "How garden sharing works" },
  },
  {
    q: "How is a yard share different from a community garden?",
    a: "A community garden plot is usually run by a city, nonprofit or garden association, often with a waitlist and fixed rules. A yard share is a private agreement between a host and a gardener, so the two of you set the terms.",
  },
  {
    q: "Will my exact address be shown on the map?",
    a: "No. In the app, locations are approximate until you choose to connect with someone.",
  },
  {
    q: "What do gardeners give hosts in return?",
    a: "That is up to the two of you. Common arrangements include a harvest share, barter or seasonal rent, agreed before anyone gardens. Growers Ground does not handle payments for plots.",
  },
  {
    q: "What are the two map layers?",
    a: "The Discover layer shows people, meaning hosts and gardeners. The Community layer shows public-good places such as seed swaps.",
  },
  {
    q: "Is there a swipe deck?",
    a: "No. You browse a map, read profiles and message like a neighbor.",
  },
  {
    q: "When will the app launch in my city?",
    a: "The app is not in the app stores yet. We are launching city by city across the US and Canada. Join the waitlist and we will let you know when your area opens.",
    link: { href: "/#waitlist", label: "Join the waitlist" },
  },
];
