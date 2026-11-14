import type { GuideSection } from "@/lib/guides";

/**
 * Keyword landing pages: one page per search intent (see seo/keyword-strategy-2026-11-14.md).
 * Rules: one primary keyword per page, no two pages chasing the same phrase, every claim true of
 * the product today (the app is not in the stores yet; it does not process payments for plots).
 */
export type LandingFaq = { q: string; a: string };

export type LandingPage = {
  slug: string;
  /** Short label for nav, footer and related-page cards. */
  navLabel: string;
  primaryKeyword: string;
  /** Close variants used naturally in headings and copy. Kept here so the plan is auditable. */
  secondaryKeywords: string[];
  audience: "gardeners" | "hosts" | "both";
  eyebrow: string;
  /** Visible H1. */
  title: string;
  /** <title>; keep under about 60 characters. */
  seoTitle: string;
  metaDescription: string;
  /** Two- or three-sentence direct answer shown first; written to be quotable by AI answers. */
  answer: string;
  lead: string;
  sections: GuideSection[];
  faqs: LandingFaq[];
  related: string[];
  updatedAt: string;
};

const UPDATED = "2026-11-14";

const appStatus =
  "Growers Ground is not in the App Store or Google Play yet. It is launching city by city across the US and Canada, and the waitlist is open now. Until then, the free [community garden maps](/cities) and [guides](/guides) on this site work without an account.";

export const landingPages: LandingPage[] = [
  {
    slug: "find-garden-space",
    navLabel: "Find garden space",
    primaryKeyword: "find garden space near me",
    secondaryKeywords: [
      "find a place to garden",
      "garden space near me",
      "looking for garden space",
      "where can I grow vegetables",
      "place to grow vegetables near me",
      "find a backyard to garden in",
      "somewhere to grow my own food",
    ],
    audience: "gardeners",
    eyebrow: "For gardeners",
    title: "Find garden space near you, even without a yard",
    seoTitle: "Find Garden Space Near Me: Yards, Plots & Shared Gardens",
    metaDescription:
      "Looking for garden space near you? Compare shared backyards, community garden plots and rentals, and see how Growers Ground maps local hosts with unused yards.",
    answer:
      "To find garden space near you, combine three routes: ask nearby community gardens about open plots and waitlists, look for a homeowner with an unused yard who will share it (a yard share), and check city or nonprofit programs that lend land. Growers Ground puts hosts with spare yard space and gardeners looking for ground on one map, so you can find a place to garden close to home.",
    lead:
      "Plenty of people want to grow vegetables, herbs or flowers but have no yard, a shaded balcony or a lease that rules out digging. If you are looking for garden space, somewhere to grow your own food, or just outdoor space for gardening this season, you are not alone. Meanwhile, many backyards near you sit unused. Finding garden space is mostly about knowing where that ground is and who to ask.",
    sections: [
      {
        title: "Where to look for a place to garden",
        body:
          "There is no single list of open garden space, so most people check several sources at once. Whether you need a place to grow vegetables near you or land to grow vegetables on a larger scale, here are the options, roughly in the order people try them.",
        visual: {
          type: "compare",
          cornerLabel: "Option",
          columns: ["Typical cost", "How fast", "Best for"],
          rows: [
            { label: "Shared backyard (yard share)", cells: ["Free, harvest share or agreed rent", "Days to weeks", "Growing close to home this season"] },
            { label: "Community garden plot", cells: ["Low yearly fee", "Often a waitlist", "Long-term, social gardening"] },
            { label: "City or nonprofit land program", cells: ["Varies", "Seasonal application", "Larger plots, market growers"] },
            { label: "Church, school or business grounds", cells: ["Usually free", "Depends on who you ask", "Groups and volunteers"] },
            { label: "Containers on a balcony or stoop", cells: ["Cost of pots and soil", "Today", "Herbs, greens, tomatoes"] },
          ],
          caption: "Costs and wait times vary a lot by city. Treat this as a starting point.",
        },
      },
      {
        title: "Find a backyard to garden in",
        body:
          "Gardening in someone else's backyard is often the fastest way to get real in-ground beds. A yard share is a private agreement: a homeowner (the host) lets a gardener grow in part of their yard. Hosts are often people who like the idea of a garden but lack the time, mobility or know-how to keep one. In return they might get a share of the harvest, help with upkeep, or simply a tidy, productive yard.\n\nHow can you find someone with a backyard to share? Ask neighbors directly, post on a neighborhood board, or ask at a local gardening club; many homeowners have backyard space for gardening they would happily lend. Growers Ground is being built to make this easier: hosts mark roughly where their space is and what it offers (size, sun, water access), and gardeners browse a map of nearby yards, read profiles and message before anyone commits. Read [how yard sharing works](/guides/how-yard-sharing-works) for the full picture.",
      },
      {
        title: "Find land for gardening on a larger scale",
        body:
          "If you want more than a bed, for example to grow for a market or a food bank, look for unused land for gardening: vacant lots in city land-access or adopt-a-lot programs, church and school grounds, and farm incubator programs that rent small parcels. Ask your city or county about urban agriculture programs. Private hosts with large lots, sometimes an acre or more, also list on Growers Ground.",
      },
      {
        title: "Find garden plots near you",
        body:
          "Community gardens rent individual plots, usually for a small yearly fee. Popular gardens fill up, so join a waitlist early, often in late winter. Our [community garden maps by city](/cities) list mapped gardens in more than 30 US and Canadian metros, and the guide on [how to find a community garden](/guides/how-to-find-a-community-garden) explains how to contact one. A garden on a map does not always have open plots, so ask before you visit.",
      },
      {
        title: "What to check before you start digging",
        body: "Whatever kind of space you find, settle a few things first.",
        visual: {
          type: "checklist",
          items: [
            "Sun: most vegetables need six or more hours of direct sun a day",
            "Water: a tap or hose within reach, and who pays for it",
            "Access: which days and hours you can come and go",
            "Soil: ask what the ground was used for; test it if you are unsure",
            "Terms: what the host gets in return, written down before you plant",
            "End date: what happens to beds and perennials when the season or agreement ends",
          ],
        },
      },
      {
        title: "How Growers Ground helps you find garden space",
        body:
          "Growers Ground is a map-first garden sharing app. The Discover layer shows hosts with unused yards and gardeners looking for ground, each with a profile. Exact addresses stay hidden until both people choose to connect. The Community layer shows public places to grow and swap, such as seed swaps, tool libraries and compost drops.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "I want to grow vegetables but don't have a garden. What can I do?",
        a: "Ask a neighbor with an unused yard about a yard share, join a community garden waitlist, and grow herbs and greens in containers in the meantime. Many people use all three in their first year.",
      },
      {
        q: "Is there an app to find garden space?",
        a: "Growers Ground is a garden sharing app built for this: it maps hosts with unused yard space and gardeners looking for ground. It is not in the app stores yet; you can join the waitlist to hear when it opens in your city.",
      },
      {
        q: "How do I find a yard to garden in, or a place to grow vegetables near me?",
        a: "Ask neighbors and local gardening groups whether anyone has unused yard space, check nearby community gardens, and browse hosts on Growers Ground. It is common to garden in someone else's backyard, as long as you agree the terms first.",
      },
      {
        q: "I need somewhere to grow my own food. How do I find outdoor gardening space fast?",
        a: "A yard share is usually fastest because there is no waitlist: once you and a host agree, you can start. Grow in containers while you look.",
      },
      {
        q: "Where can I start a garden if I don't have land?",
        a: "Start in someone else's yard through a yard share, a community garden plot, or containers. If you want more land, ask your city about vacant-lot or urban agriculture programs.",
      },
      {
        q: "How can I find someone with a backyard to share?",
        a: "Ask neighbors, post on a neighborhood board or gardening group, or use a yard sharing app. On Growers Ground, hosts with backyard garden space appear on a map near you.",
      },
      {
        q: "Can I use someone else's garden?",
        a: "Yes, with their permission. That arrangement is usually called a yard share or garden share. Agree in writing on access, water, what the host gets in return and when it ends.",
      },
      {
        q: "Where can I grow food in the city?",
        a: "Community gardens, shared backyards, rooftop and church gardens, and containers on a balcony are the main options. See our guide to gardening without a backyard for more.",
      },
    ],
    related: ["share-your-yard", "garden-space-for-rent", "gardening-without-a-backyard", "how-it-works"],
    updatedAt: UPDATED,
  },
  {
    slug: "share-your-yard",
    navLabel: "Share your yard",
    primaryKeyword: "share my backyard",
    secondaryKeywords: [
      "share my yard",
      "share my garden",
      "share your backyard",
      "unused yard space",
      "let someone garden in my yard",
      "find gardeners for my yard",
      "rent out my backyard for gardening",
      "garden hosting",
    ],
    audience: "hosts",
    eyebrow: "For hosts",
    title: "Share your backyard with a local gardener",
    seoTitle: "Share My Backyard: Turn Unused Yard Space into a Garden",
    metaDescription:
      "Have unused yard space? Share your backyard with a local gardener for a harvest share, help or agreed rent. A host's guide to garden sharing with Growers Ground.",
    answer:
      "To share your backyard, choose the area you can offer, check your lease, HOA and insurance, decide what you want in return (a harvest share, upkeep, or an agreed rent), and put the terms in writing before anyone plants. Growers Ground lets you list unused yard space on a map so nearby gardeners can find you and message you first.",
    lead:
      "A lawn you never use, a sunny corner of the yard, a raised bed you have stopped planting: all of it is yard space for growing food that someone nearby would love to use. If you want to share your yard, or share your garden with a neighbor, it can turn your backyard into a garden, even a backyard vegetable garden, without you doing the work.",
    sections: [
      {
        title: "Why homeowners share their yards",
        body: "Homeowners sharing garden space give different reasons. These come up most often, and all of them make use of unused yard space.",
        visual: {
          type: "cards",
          items: [
            { title: "Fresh produce", text: "Many hosts take a share of what is grown, often a box a week in summer." },
            { title: "A tended yard", text: "A gardener keeps the space weeded and watered instead of mowed." },
            { title: "Company", text: "Some hosts, including older homeowners, enjoy having a friendly face around." },
            { title: "Make use of unused space", text: "Ground that would sit idle grows food instead. Share unused land, a side yard or an old bed." },
          ],
        },
      },
      {
        title: "Is my yard suitable for a garden?",
        body:
          "Most vegetables want six or more hours of direct sun, an outdoor tap within hose reach, and a way for the gardener to get in without walking through your home. A space of 100 square feet is enough for a productive bed; a few hundred square feet is plenty for one gardener. If you rent, ask your landlord first. If you have an HOA, check its rules on vegetable beds and visible structures.",
      },
      {
        title: "Can I rent out my backyard for gardening?",
        body:
          "You can rent out garden space, and some hosts do charge a seasonal rent for their garden space. Others prefer a harvest share or barter, and plenty ask for nothing. Whatever you choose, agree on it up front and write it down. Growers Ground does not process payments for plots: hosts and gardeners set and settle their own terms. If you plan to charge, check local rules and talk to your insurer about someone working on your property.",
      },
      {
        title: "Write a simple garden-sharing agreement",
        body:
          "A one-page agreement avoids most problems. Our [garden host checklist](/guides/share-your-yard-as-a-garden-host) walks through each point.",
        visual: {
          type: "checklist",
          title: "Cover at least these points",
          items: [
            "Which part of the yard, and what can be built there (beds, trellis, compost)",
            "Access days and hours, and how the gardener gets in",
            "Water: who pays and any limits in dry spells",
            "What the host gets: harvest share, help, rent, or nothing",
            "Chemicals: whether pesticides or herbicides are allowed",
            "How either side can end it, and what happens to the beds",
          ],
        },
      },
      {
        title: "How to find gardeners for your yard",
        body:
          "Want to let someone garden in your yard, or find someone to maintain your garden in exchange for growing space? That is garden hosting: you offer garden space for others to use, and a gardener does the work. Neighbors, local gardening clubs, community garden waitlists and master gardener programs are all good places to ask; people on a community garden waitlist are often looking for space right now. On Growers Ground, you create a host profile with an approximate pin, the size of your space, sun and water details. Gardeners nearby find you on the map and message you, so you can share your yard with gardeners you have spoken to first and share land with gardeners on your terms. Your exact address stays private until you choose to connect.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "What can I do with an unused backyard?",
        a: "Share it with a gardener who needs space, start a small vegetable bed with their help, plant a pollinator garden, or host a neighborhood garden. Sharing it is the easiest option if you lack time to garden yourself.",
      },
      {
        q: "How can I share my garden with others?",
        a: "Pick the area, check lease, HOA and insurance limits, decide what you want in return, then find a gardener through neighbors, local groups or a garden sharing app like Growers Ground. Write the terms down before planting.",
      },
      {
        q: "Can I earn money from unused garden space?",
        a: "Some hosts charge seasonal rent for garden space, but most yard shares run on a harvest share or barter. Growers Ground does not handle payments; you and the gardener agree on and settle any rent yourselves.",
      },
      {
        q: "How do I share my yard with gardeners?",
        a: "Decide which part of your yard to share, then find gardeners for your yard through neighbors, garden clubs or Growers Ground. Meet first, agree the terms in writing, and only then let them start.",
      },
      {
        q: "Is it safe to let someone garden in my yard?",
        a: "With sensible steps, yes: message first, meet in daylight, agree access days and hours, and keep your address private until you connect. Check that your home insurance covers a visitor working on your property.",
      },
      {
        q: "Can I share unused yard space if I don't garden myself?",
        a: "Yes. Most hosts who share an unused yard do not garden. The gardener does the planting and upkeep, and you agree what you get in return.",
      },
      {
        q: "How can I turn my backyard into a garden without doing the work?",
        a: "Find someone to maintain your garden in exchange for growing space. A gardener plants and tends the beds, and you usually get a share of the harvest. This is how most yard shares work.",
      },
      {
        q: "How do I find gardeners for my yard?",
        a: "Ask neighbors, garden clubs and people on community garden waitlists. Searching \"find a gardener near me\" mostly turns up paid landscapers, so list your space on Growers Ground, where a gardener near you who wants growing space can find it on the map.",
      },
      {
        q: "Can I rent my garden space to someone?",
        a: "Yes. Agree a price or a harvest share in writing, check your lease, HOA and insurance, and settle payment directly. Growers Ground does not process payments.",
      },
      {
        q: "Will strangers know my address?",
        a: "Not from Growers Ground. Host locations show as approximate areas on the map until you choose to connect with a specific gardener.",
      },
    ],
    related: ["how-it-works", "find-garden-space", "local-gardeners", "garden-space-for-rent"],
    updatedAt: UPDATED,
  },
  {
    slug: "how-it-works",
    navLabel: "How it works",
    primaryKeyword: "how garden sharing works",
    secondaryKeywords: [
      "yard sharing app",
      "garden sharing platform",
      "backyard garden sharing",
      "garden space sharing",
      "shared garden space",
      "neighborhood garden sharing",
      "land sharing for gardening",
    ],
    audience: "both",
    eyebrow: "How it works",
    title: "How garden sharing works on Growers Ground",
    seoTitle: "How Garden Sharing Works: The Yard Sharing App, Step by Step",
    metaDescription:
      "How garden sharing works: hosts list unused yard space, gardeners find it on a map, and both agree terms before planting. See the Growers Ground yard sharing app step by step.",
    answer:
      "Garden sharing (also called yard sharing or land sharing) pairs a homeowner who has unused yard space with a gardener who needs somewhere to grow. On Growers Ground, hosts and gardeners create profiles, find each other on a map, message to agree terms, and then garden together. The host keeps their address private until they choose to connect.",
    lead:
      "Garden sharing is an old idea, neighbors sharing gardens and lending a patch of ground, made easier with a map. Growers Ground is a garden sharing platform for both sides: people with yards and people who want to grow. You may also hear it called garden space sharing, backyard sharing, private garden sharing or land sharing for gardening; they all describe the same thing.",
    sections: [
      {
        title: "The four steps",
        body: "Whether you are a host or a gardener, the flow is the same.",
        visual: {
          type: "steps",
          items: [
            { title: "Create a profile", text: "Say whether you are a host, a gardener or both. Hosts describe their space: rough size, sun, water access. Gardeners describe what they want to grow and how often they can come." },
            { title: "Browse the map", text: "The Discover layer shows hosts and gardeners near you as approximate pins. Open a profile to see photos and details." },
            { title: "Message before you commit", text: "Ask questions, meet at the space, and agree on access, water and what the host gets in return." },
            { title: "Grow together", text: "Plant, share the harvest and keep in touch in the app. Either side can end the arrangement as agreed." },
          ],
        },
      },
      {
        title: "Two map layers: people and places",
        body:
          "Shared garden space is only half of it; a backyard gardening community grows around it. The Discover layer is for people: hosts with garden space and gardeners looking for it. The Community layer is for places: seed swaps, tool libraries, compost drops, pollinator gardens and community events. Together they answer the question the app is named for: where can I grow, and who can I grow with?",
      },
      {
        title: "Yard sharing compared with a community garden",
        body:
          "Both get you shared growing space. A shared backyard garden is private; a community garden plot is public. The difference is who runs it and how fast you can start.",
        visual: {
          type: "compare",
          cornerLabel: "",
          columns: ["Yard share (Growers Ground)", "Community garden plot"],
          rows: [
            { label: "Who runs it", cells: ["You and the host", "A city, nonprofit or garden association"] },
            { label: "Rules", cells: ["Set by the two of you", "Fixed garden rules"] },
            { label: "Wait", cells: ["As soon as you agree", "Often a waitlist"] },
            { label: "Cost", cells: ["Free, harvest share or agreed rent", "Usually a small yearly fee"] },
            { label: "Distance", cells: ["Can be on your street", "Wherever the garden is"] },
          ],
        },
      },
      {
        title: "Privacy and safety",
        body:
          "Locations on the map are approximate; exact addresses are only shared when both people choose to connect. You can read a profile and message before meeting. Good practice: meet in daylight, bring a friend the first time if you like, and write down the agreement. The [yard sharing guide](/guides/how-yard-sharing-works) covers this in more detail.",
      },
      {
        title: "What Growers Ground does not do",
        body:
          "It is not a swipe-to-match app, and it is not a paid garden space marketplace or garden space exchange that takes a cut. Think of it as neighborhood garden sharing on a map. Hosts and gardeners agree on any rent, harvest share or barter themselves; Growers Ground does not handle payments for plots.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "What is a garden sharing app?",
        a: "A garden sharing app connects people who have unused yard or garden space with people who want somewhere to grow. Growers Ground does this on a map, with profiles and messaging.",
      },
      {
        q: "What is garden plot sharing?",
        a: "Garden plot sharing means splitting one plot or shared backyard space between two or more growers, for example a host and a gardener, or two neighbors sharing a community garden plot.",
      },
      {
        q: "How can neighbors share a garden?",
        a: "Garden sharing with neighbors works when one neighbor offers the space, the other does most of the growing, and both agree on access, water and how the harvest is split. Write it down, keep it simple, and review it each season.",
      },
      {
        q: "How do I find someone with a backyard to share?",
        a: "Ask neighbors and local gardening groups, or use a yard sharing app. On Growers Ground, hosts with spare space appear on a map near you, and you can message them before meeting.",
      },
      {
        q: "Is garden sharing free?",
        a: "Often, yes. Many yard shares run on a harvest share or help with upkeep. Some hosts ask for rent. Whatever you agree, Growers Ground does not take payments for plots.",
      },
    ],
    related: ["find-garden-space", "share-your-yard", "community-garden-app", "local-gardeners"],
    updatedAt: UPDATED,
  },
  {
    slug: "garden-space-for-rent",
    navLabel: "Garden space for rent",
    primaryKeyword: "garden space for rent",
    secondaryKeywords: [
      "rent a garden plot",
      "garden plots near me",
      "private garden plots near me",
      "gardening space for rent",
      "rent a backyard garden",
      "can I rent someone's backyard to grow vegetables",
    ],
    audience: "gardeners",
    eyebrow: "For gardeners",
    title: "Garden space for rent: plots, backyards and what they cost",
    seoTitle: "Garden Space for Rent: How to Rent a Garden Plot Near You",
    metaDescription:
      "Looking for garden space for rent? Compare community garden plots, private backyard plots and land programs, what each usually costs, and how to rent a garden plot near you.",
    answer:
      "You can rent garden space in three main ways: a plot in a community garden (usually a small yearly fee, often with a waitlist), a private plot in someone's backyard (rent, harvest share or free, agreed with the owner), or a larger plot from a city or farm land program. Start by asking local community gardens about openings, and look for homeowners with unused yard space nearby.",
    lead:
      "Renting a garden plot, whether a community garden plot, allotment garden or private backyard bed, is the most common way to grow food without owning land. Gardening space for rent is rarely advertised, so it helps to know where to look. The right option depends on how much space you need, how far you will travel, and how soon you want to start.",
    sections: [
      {
        title: "Ways to rent a garden plot",
        body: "Each option has trade-offs. Prices below are typical ranges people report, not quotes, and vary widely by city.",
        visual: {
          type: "compare",
          cornerLabel: "Type",
          columns: ["What you get", "Typical cost", "Watch out for"],
          rows: [
            { label: "Community garden plot", cells: ["A marked bed in a shared garden, often with water and tools", "Small yearly fee; some gardens waive it", "Waitlists, plot inspection rules"] },
            { label: "Private backyard plot", cells: ["Part of a homeowner's yard", "Free, harvest share or seasonal rent", "Unwritten terms, access hours"] },
            { label: "City or farm land program", cells: ["Larger plots for serious growers", "Varies by program", "Application windows, travel distance"] },
            { label: "Allotment site (Canada)", cells: ["A numbered allotment plot", "Yearly fee", "Long waitlists in big cities"] },
          ],
        },
      },
      {
        title: "Can I rent someone's backyard to grow vegetables?",
        body:
          "Yes. To rent a backyard garden, you make a private agreement with the homeowner. Some hosts ask for a seasonal fee, others take a share of the harvest, and some want nothing more than a tidy yard. Agree on the price or exchange, water, access and an end date before you plant, and write it down. Our [yard sharing guide](/guides/how-yard-sharing-works) includes a list of what to cover.",
      },
      {
        title: "How to find garden plots and allotments near you",
        body:
          "- Check our [community garden maps by city](/cities) and contact the gardens closest to you about open plots and waitlists. In Canada, ask about garden allotments near you; Toronto, Ottawa and other cities run allotment gardens with their own application process.\n- Ask your city's parks department; many run or list community garden programs.\n- Ask neighbors, gardening clubs and local boards whether anyone has unused yard space.\n- Join the Growers Ground waitlist: the app maps private hosts with garden space near you.",
      },
      {
        title: "Questions to ask before you rent",
        body: "Ask these whether you are renting from a garden or a homeowner.",
        visual: {
          type: "checklist",
          items: [
            "What is included: water, tools, compost, fencing?",
            "How much sun does the plot get in midsummer?",
            "When can I come, and can I bring a friend to help?",
            "What can I grow: perennials, tall crops, flowers?",
            "Are there rules on chemicals or organic growing?",
            "When does the rental end, and can I renew?",
          ],
        },
      },
      {
        title: "Where Growers Ground fits",
        body:
          "Growers Ground maps private hosts who share garden space, so you can find a backyard plot near you instead of waiting years for a community garden. You and the host agree on any rent or harvest share between yourselves; Growers Ground does not process payments for plots.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "How do I find a garden plot to rent?",
        a: "Contact community gardens near you about openings and waitlists, ask your city parks department, and look for homeowners sharing unused yard space, for example on Growers Ground once it launches in your city.",
      },
      {
        q: "How much does it cost to rent a garden plot?",
        a: "Community garden plots usually cost a small yearly fee. Private backyard plots range from free (with a harvest share) to a seasonal rent agreed with the owner. Prices vary widely by city.",
      },
      {
        q: "What is the difference between an allotment garden and a community garden?",
        a: "Both rent individual garden plots. Allotment gardens, common in Canada and the UK, are usually run by the city with numbered plots and yearly permits; community gardens are often run by nonprofits or volunteers and may share some beds.",
      },
      {
        q: "Are there private garden plots near me?",
        a: "Often, but they are rarely advertised. Ask neighbors and local groups, or use a garden sharing app that maps homeowners with unused yard space.",
      },
    ],
    related: ["find-garden-space", "community-garden-app", "share-your-yard", "how-it-works"],
    updatedAt: UPDATED,
  },
  {
    slug: "gardening-without-a-backyard",
    navLabel: "Gardening without a backyard",
    primaryKeyword: "gardening without a backyard",
    secondaryKeywords: [
      "urban gardening community",
      "gardening without a garden",
      "growing vegetables without a yard",
      "garden space for renters",
      "gardening for apartment dwellers",
      "gardening in the city",
      "grow vegetables in someone else's yard",
      "urban gardening app",
    ],
    audience: "gardeners",
    eyebrow: "Urban gardening",
    title: "Gardening without a backyard: 6 ways to grow in the city",
    seoTitle: "Gardening Without a Backyard: 6 Ways to Grow in the City",
    metaDescription:
      "No yard? Here are six ways to garden without a backyard: grow in someone else's yard, join a community garden, use containers and more. Urban gardening for renters.",
    answer:
      "You can garden without a backyard by growing in someone else's yard through a yard share, renting a community garden plot, using containers on a balcony or windowsill, joining a rooftop or church garden, volunteering at an urban farm, or growing indoors under lights. Most city gardeners combine two of these.",
    lead:
      "Renters, apartment dwellers and people with shady yards make up a big share of would-be gardeners. Gardening without a garden, or no backyard gardening, sounds like a contradiction, but gardening in the city is mostly about finding alternative gardening spaces. Not having a yard limits where you grow, not whether you can.",
    sections: [
      {
        title: "Six ways to garden without a yard",
        body: "From most ground to least.",
        visual: {
          type: "cards",
          items: [
            { tag: "Most space", title: "Grow in someone else's yard", text: "A yard share gives you real in-ground beds, often within walking distance. Hosts offer unused yard space in return for a harvest share, help or rent." },
            { tag: "Social", title: "Join a community garden", text: "Rent a plot in a shared garden. Join waitlists early; see our city maps." },
            { tag: "Shared", title: "Rooftop, church or school gardens", text: "Many institutions have growing space and welcome volunteers." },
            { tag: "Learn", title: "Volunteer at an urban farm", text: "Learn by doing, and often take produce home." },
            { tag: "Today", title: "Containers", text: "Tomatoes, peppers, herbs and greens do well in pots on a sunny balcony or stoop." },
            { tag: "Year-round", title: "Indoors under lights", text: "Microgreens, herbs and seedlings for the season ahead." },
          ],
        },
      },
      {
        title: "Grow vegetables in someone else's yard",
        body:
          "Growing vegetables without a yard of your own is easiest when you borrow one. This is the option most people have not tried, and it often gives the most space. Many homeowners have yards they do not use and would welcome a gardener. You get proper ground; they get a tended yard and usually a share of the harvest. Read [how yard sharing works](/guides/how-yard-sharing-works), then [find garden space near you](/find-garden-space).",
      },
      {
        title: "Garden space for renters and apartment dwellers",
        body:
          "Gardening for apartment dwellers usually starts with small space gardening: containers, window boxes and vertical planters. For urban vegetable gardening at a larger scale, look at shared urban gardens and urban garden spaces run by your city.\n\n" +
          "If you rent a house with a yard, ask your landlord before digging; many say yes to raised beds or containers that leave no trace. If you rent an apartment, check whether the building has a roof or courtyard that residents can use. Either way, a yard share or community plot keeps you clear of lease problems.",
      },
      {
        title: "Find an urban gardening community",
        body:
          "City gardening is easier with people around you, and urban food growing is often a group effort. A city gardening community can be a community garden, a seed library or a neighborhood group. Community gardens, seed swaps and gardening clubs are the classic ways in; see [gardening with neighbors](/guides/gardening-with-neighbors) and [seed swaps](/guides/seed-swaps). The Growers Ground Community layer maps seed swaps, tool libraries, compost drops and garden events near you, and the Discover layer shows local gardeners and hosts.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "Where can I grow food in the city?",
        a: "In a shared backyard, a community garden plot, a rooftop or church garden, an urban farm, or in containers on a balcony. A yard share usually gives the most ground.",
      },
      {
        q: "Where can I grow my own vegetables if I don't have a backyard?",
        a: "Try a yard share with a neighbor, a community garden plot, or containers for herbs, greens and tomatoes. Many people start with containers while waiting for a plot.",
      },
      {
        q: "Is there an urban gardening app?",
        a: "Growers Ground is a garden sharing app for city and suburban growers. It maps hosts with spare yard space, local gardeners and community spots like seed swaps. It is launching city by city; join the waitlist.",
      },
    ],
    related: ["find-garden-space", "garden-space-for-rent", "local-gardeners", "community-garden-app"],
    updatedAt: UPDATED,
  },
  {
    slug: "local-gardeners",
    navLabel: "Find local gardeners",
    primaryKeyword: "find local gardeners",
    secondaryKeywords: [
      "find gardeners near me",
      "meet local gardeners",
      "connect with local gardeners",
      "gardening community near me",
      "gardening groups near me",
      "gardening friends near me",
      "find garden buddies",
      "seed swap near me",
    ],
    audience: "both",
    eyebrow: "Gardening community",
    title: "Find local gardeners and gardening groups near you",
    seoTitle: "Find Local Gardeners Near Me: Groups, Swaps & Garden Buddies",
    metaDescription:
      "Find local gardeners near you: gardening clubs, community gardens, seed swaps and garden buddies. Plus how Growers Ground maps gardeners and hosts in your neighborhood.",
    answer:
      "To find local gardeners, start with places gardeners already gather: community gardens, gardening clubs, master gardener programs, seed swaps and plant sales. Neighborhood groups are good for finding garden buddies nearby. Growers Ground shows gardeners and hosts on a map, so you can see who grows near you and message them.",
    lead:
      "Whether you want to find garden buddies, meet people who love gardening, find someone to tend your yard, or just swap seedlings, local gardeners are closer than you think. There is a local gardening community in almost every neighborhood. The trick is knowing where they meet.",
    sections: [
      {
        title: "Where to meet local gardeners",
        body: "These are the most reliable places to find gardeners near you and meet gardeners in your area.",
        visual: {
          type: "cards",
          items: [
            { title: "Community gardens", text: "Visit on a weekend morning. Gardeners are usually happy to talk." },
            { title: "Gardening clubs and groups", text: "Search for gardening clubs near me or gardening groups near me: garden clubs and horticultural societies meet monthly in most towns." },
            { title: "Master gardener programs", text: "Extension programs run classes, help lines and volunteer projects." },
            { title: "Seed swaps and plant sales", text: "Late winter and spring events bring growers together." },
            { title: "Neighborhood groups", text: "Neighborhood gardening starts on your street. Ask who gardens nearby; many people will share seeds or space." },
            { title: "Gardening events", text: "Gardening events near you, such as workshops, plant swaps and garden tours, are easy ways to make gardening friends." },
          ],
        },
      },
      {
        title: "Find a gardener for your yard",
        body:
          "If you have space but not time, and you are thinking \"I need to find someone to maintain my garden\", look for a gardener rather than a gardening service: someone who wants ground to grow on and will tend part of your yard in return. People on community garden waitlists are a good bet. See [share your backyard](/share-your-yard) for how to set it up.",
      },
      {
        title: "Seed swaps and community spots near you",
        body:
          "Seed swaps, a local seed exchange or seed library, and tool libraries are low-pressure ways to meet growers. Community compost locations are another place to meet neighbors who garden. Our guide to [seed swaps](/guides/seed-swaps) explains how they work. In the Growers Ground app, the Community layer maps seed swaps, tool libraries, compost drops, pollinator gardens and garden events, and anyone can add an event.",
      },
      {
        title: "Meet gardeners on the Growers Ground map",
        body:
          "The Discover layer shows gardeners and hosts near you as approximate pins. Profiles say what people grow, what they are looking for and how much time they have. You message first and meet when you are ready; exact locations stay private until both people connect. It is not a swipe app, more like a neighborhood gardening community notice board on a map.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "How do I connect with local gardeners?",
        a: "Join a community garden or gardening club, go to seed swaps and plant sales, ask neighbors, and use a map-based app like Growers Ground to see gardeners near you.",
      },
      {
        q: "How do I find people to garden with?",
        a: "Ask at community gardens and garden clubs, post on a neighborhood board, or find a garden buddy through a garden sharing app. A small shared task, like swapping seedlings, is an easy start.",
      },
      {
        q: "How do I find gardeners near me, or gardeners in my area?",
        a: "Start at the nearest community garden or garden club, then try seed swaps and plant sales. On Growers Ground you can see gardeners in your area on a map and message them.",
      },
      {
        q: "Where can I make gardening friends near me?",
        a: "Volunteer at a community garden, join a garden club, or go to gardening events near you, such as workshops, seed swaps and plant sales. Regular events make it easy to see the same people again.",
      },
      {
        q: "Are there gardening events near me?",
        a: "Libraries, extension offices, garden clubs and community gardens post events, especially in late winter and spring. The Growers Ground Community layer will list community events too.",
      },
      {
        q: "How do I find a gardening community near me?",
        a: "Visit the nearest community garden, join a local garden club, check library and extension office event calendars for gardening events near you, or browse gardeners in your area on Growers Ground.",
      },
      {
        q: "Where can I find a seed swap near me?",
        a: "Libraries, community gardens and garden clubs often host seed swaps in late winter. Seed libraries run year-round in many cities. The Growers Ground Community layer maps them too.",
      },
    ],
    related: ["community-garden-app", "share-your-yard", "gardening-without-a-backyard", "how-it-works"],
    updatedAt: UPDATED,
  },
  {
    slug: "community-garden-app",
    navLabel: "Community garden app",
    primaryKeyword: "community garden app",
    secondaryKeywords: [
      "community gardening app",
      "community garden finder",
      "community garden map",
      "gardening community app",
      "local garden network",
      "community growing spaces",
    ],
    audience: "gardeners",
    eyebrow: "Community gardens",
    title: "A community garden app that also maps private garden space",
    seoTitle: "Community Garden App: Map Gardens, Plots & Shared Yards",
    metaDescription:
      "Growers Ground is a community garden app and map: find community gardens near you, plus private hosts sharing yard space, seed swaps and local gardeners in one place.",
    answer:
      "Growers Ground is a community garden app built around a map. It shows community gardens and public growing spots like seed swaps and tool libraries, and adds something most community garden finders lack: private hosts sharing unused yard space and gardeners looking for it. The free community garden maps on this website cover more than 30 US and Canadian metros.",
    lead:
      "Community garden directories answer one question: where are the community garden locations near me? A community gardening app, or gardening community app, can do more. Growers Ground asks a wider one: where can I grow, and who can I grow with? That includes community gardens, shared backyards and the people around you.",
    sections: [
      {
        title: "Community garden maps by city",
        body:
          "Our [community garden directory](/cities) maps community growing spaces in major US and Canadian metros, from urban community gardens and community food gardens to neighborhood gardens, with garden names, map pins and the official sources for how plots work locally. A garden on the map does not always have open plots, so contact it before you visit. The guide on [how to find a community garden near you](/guides/how-to-find-a-community-garden) explains how to get a plot.",
      },
      {
        title: "Beyond a community garden finder",
        body: "What the app adds to a standard community garden map.",
        visual: {
          type: "compare",
          cornerLabel: "",
          columns: ["Community garden directory", "Growers Ground"],
          rows: [
            { label: "Community gardens", cells: ["Yes", "Yes"] },
            { label: "Private backyards to share", cells: ["No", "Yes, from local hosts"] },
            { label: "Local gardeners and profiles", cells: ["No", "Yes"] },
            { label: "Seed swaps, tool libraries, compost drops", cells: ["Sometimes", "Yes, on the Community layer"] },
            { label: "Message before you visit", cells: ["Rarely", "Yes"] },
          ],
        },
      },
      {
        title: "When the community garden is full",
        body:
          "Community garden space is in high demand: waitlists for community garden plots can run a year or more in big cities. While you wait, a shared backyard can get you growing this season. See [find garden space near you](/find-garden-space) and [garden space for rent](/garden-space-for-rent) for the options.",
      },
      {
        title: "Start or host a community garden",
        body:
          "If there is no garden near you, you can start one. Our step-by-step guide on [how to start a community garden](/guides/how-to-start-a-community-garden) covers finding land, organizing people and setting rules. A host with a large yard can also host a community garden, such as a small community vegetable garden or shared vegetable garden for the street, and list it on Growers Ground.\n\n" +
          appStatus,
      },
    ],
    faqs: [
      {
        q: "How do I find a community garden near me?",
        a: "Use a directory such as the American Community Gardening Association's Find-a-Garden search, your city parks department, or our community garden maps by city. Then contact the garden about open plots.",
      },
      {
        q: "Is there a community garden map?",
        a: "Yes. This site has free community garden maps for more than 30 US and Canadian metros, and the Growers Ground app adds private garden space and local gardeners.",
      },
      {
        q: "What is the difference between a community garden and a yard share?",
        a: "A community garden is run by a city, nonprofit or association with shared rules and often a waitlist. A yard share is a private agreement between a host and a gardener, who set their own terms.",
      },
    ],
    related: ["find-garden-space", "local-gardeners", "garden-space-for-rent", "how-it-works"],
    updatedAt: UPDATED,
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}
