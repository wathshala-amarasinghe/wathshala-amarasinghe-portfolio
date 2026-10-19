export interface CaseStudyDecision {
  title: string;
  description: string;
}

export interface CaseStudyDetail {
  eyebrow: string;
  headline: string;
  introduction: string;
  challenge: string;
  contribution: string;
  decisions: CaseStudyDecision[];
  focusLabel: string;
  focusAreas: string[];
  resultTitle: string;
  result: string;
  nextSteps: string[];
}

export const caseStudies: Record<
  "lmt-go" | "lumi" | "smart-web-pos" | "nation-spice",
  CaseStudyDetail
> = {
  "lmt-go": {
    eyebrow: "Independent passenger-app redesign study",
    headline: "Show your QR, find the right bus and follow your journey",
    introduction:
      "LMT GO is an independent UX redesign concept for Lanka Metro Transit. The study prioritises everyday boarding through a travel-wallet card, with optional journey planning and clearer bus information. The Figma project documents the brief, evidence boundaries and reusable interface components.",
    challenge:
      "Regular passengers need quick access to their boarding QR, while new riders need help choosing a route and following the correct vehicle. The design challenge is to make these next steps clear, with explicit fares, transfer stops and honest distinctions between live estimates, scheduled arrivals and unavailable information.",
    contribution:
      "I developed the product-design direction and reusable Figma components for the travel wallet, QR access, top-ups, journey search, passes, transaction filters, maps and tracking. The project overview records a review of the supplied app walkthrough, screenshots and three accessible public reviews; passenger sessions and real service integrations remain pending.",
    decisions: [
      {
        title: "Put boarding first",
        description:
          "A travel-wallet card gives Show QR and Top Up direct prominence. Journey planning is optional, so the passenger does not need to choose a route simply to access the boarding credential.",
      },
      {
        title: "Explain each travel state",
        description:
          "Journey cards show duration, fare, route codes and transfer stops. Tracking distinguishes the selected bus, reported stops, upcoming stops and the meaning of an arrival estimate at each journey stage.",
      },
      {
        title: "Design for uncertainty",
        description:
          "Balance privacy, scheduled-only buses, unavailable live data, pass validity and recovery messages are represented as explicit component states. Text and icons support status colours.",
      },
    ],
    focusLabel: "Passenger experience coverage",
    focusAreas: [
      "Travel wallet",
      "Show QR",
      "Top-ups",
      "Journey planning",
      "Bus selection",
      "Stop progress",
      "Live and scheduled arrivals",
      "Passes",
      "Transaction filters",
      "Recovery states",
    ],
    resultTitle: "A documented redesign direction and reusable UI foundation",
    result:
      "The prepared design establishes a consistent wallet-first direction across boarding, planning and tracking. The shared file includes the project overview and component catalogues. It is an independent concept, not a commissioned or deployed transit service. Maps, vehicle movement, balances and fares are demonstration data; usability improvements have not yet been measured with passengers.",
    nextSteps: [
      "Test QR access, journey selection and recovery tasks with passengers.",
      "Verify scanner behaviour, fare rules and payment confirmation with the service.",
      "Validate stop reporting, vehicle identity and data freshness against real feeds.",
      "Check language coverage, accessibility and low-connectivity behaviour on devices.",
    ],
  },
  lumi: {
    eyebrow: "UI/UX design and prototype case study",
    headline:
      "A cinematic streaming experience designed for discovery and control",
    introduction:
      "LUMI is an online movie-watching website concept designed and prototyped in Figma. The experience connects browsing, title discovery, trailers and saved content through a dark cinematic interface.",
    challenge:
      "The main challenge was to present a large entertainment catalogue without making the interface feel crowded. The experience also needed clear paths between discovery and playback while keeping animation optional for people who prefer reduced motion.",
    contribution:
      "I created the UI/UX direction, reusable interface components and interactive desktop prototype. My work covered the character-led homepage, movie and series navigation, catalogue carousels, genre filtering, title details, trailers, saved titles, search, notifications and motion settings.",
    decisions: [
      {
        title: "Make discovery visual",
        description:
          "Large character artwork, poster-led collections and focused calls to action create a cinematic entry point without hiding the core browsing tools.",
      },
      {
        title: "Connect the viewing journey",
        description:
          "Navigation, search, title details, trailer actions and My List form a consistent path from finding a story to saving or watching it.",
      },
      {
        title: "Respect motion preferences",
        description:
          "The prototype includes full-motion and reduced-motion states so transitions can support the experience without becoming a barrier.",
      },
    ],
    focusLabel: "Prototype coverage",
    focusAreas: [
      "Homepage",
      "Movies",
      "Series",
      "Search",
      "Genre filters",
      "Title details",
      "Trailer playback",
      "My List",
      "Motion controls",
      "Reduced-motion states",
    ],
    resultTitle: "A connected high-fidelity viewing prototype",
    result:
      "The completed Figma prototype demonstrates a coherent desktop streaming journey from the opening brand moment through discovery, catalogue browsing, trailer viewing and saved content. Reusable cards, buttons, navigation and carousel patterns keep the experience consistent across its main states.",
    nextSteps: [
      "Test catalogue discovery and saved-title flows with representative viewers.",
      "Design and validate responsive tablet and mobile layouts.",
      "Check keyboard navigation, focus order and screen-reader labels in an implemented prototype.",
      "Validate reduced-motion behaviour and media-loading performance in production.",
    ],
  },
  "smart-web-pos": {
    eyebrow: "Retail operations case study",
    headline: "A modular point-of-sale system shaped around daily operations",
    introduction:
      "Smart Web POS brings billing, product and inventory management, customer and supplier records, reporting and administration into one connected web product.",
    challenge:
      "The design challenge was to organise a broad set of retail tasks without making the system feel crowded. Frequent billing actions needed to remain direct, while management tools still had to support stock monitoring, reporting, exports and controlled access.",
    contribution:
      "I designed and developed the product structure and interface patterns across the core modules. My work covered billing, products, inventory, customers, suppliers, sales reporting, role-based access, activity logging and data export.",
    decisions: [
      {
        title: "Keep billing task-focused",
        description:
          "The billing workspace is treated as the primary operational flow, keeping transaction work separate from deeper management tasks.",
      },
      {
        title: "Use repeatable module patterns",
        description:
          "Products, customers and suppliers follow a shared list-and-management structure so users do not need to relearn each area.",
      },
      {
        title: "Make oversight visible",
        description:
          "Stock monitoring, sales reporting, activity logs and exports give administrators a clearer view of operational data.",
      },
    ],
    focusLabel: "Product structure",
    focusAreas: [
      "Billing",
      "Products",
      "Inventory",
      "Customers",
      "Suppliers",
      "Sales reporting",
      "Role-based access",
      "Activity logging",
      "Data exports",
    ],
    resultTitle: "A connected retail-management foundation",
    result:
      "The finished product direction connects front-counter billing with the supporting management workflows in a consistent React interface backed by PostgreSQL. It demonstrates how I translate an operational feature set into a modular product structure without claiming unverified business metrics.",
    nextSteps: [
      "Test the complete billing flow with real retail scenarios.",
      "Validate permission boundaries for each staff role.",
      "Review low-stock, failed-payment and correction states.",
      "Measure whether reports and exports answer the most frequent operational questions.",
    ],
  },
  "nation-spice": {
    eyebrow: "Brand identity case study",
    headline: "A spice identity rooted in Sri Lankan place and flavour",
    introduction:
      "Nation Spice is a logo and identity concept that combines the shape of Sri Lanka with recognisable local spices and the line “The Taste of Ceylon.”",
    challenge:
      "The identity needed to communicate Sri Lankan origin, natural ingredients and a rich spice character in one memorable mark, while remaining warm and approachable rather than looking institutional.",
    contribution:
      "I created the central illustration, wordmark and visual direction. The composition brings cinnamon, chilli, curry leaves, cloves, cardamom and pepper into the island silhouette, supported by an earthy colour palette and a classic serif nameplate.",
    decisions: [
      {
        title: "Lead with place",
        description:
          "The Sri Lankan outline creates immediate geographic recognition and gives the ingredients a single organising shape.",
      },
      {
        title: "Show the product story",
        description:
          "Illustrated spices communicate variety directly, with cinnamon forming the central vertical element and chilli anchoring the base.",
      },
      {
        title: "Balance heritage and warmth",
        description:
          "A classic serif wordmark suggests heritage, while cream, cinnamon, green and chilli-red tones keep the identity natural and inviting.",
      },
    ],
    focusLabel: "Identity ingredients",
    focusAreas: [
      "Sri Lanka silhouette",
      "Cinnamon",
      "Chilli",
      "Curry leaves",
      "Cloves",
      "Cardamom",
      "Pepper",
      "Serif wordmark",
      "The Taste of Ceylon",
    ],
    resultTitle: "A recognisable identity foundation",
    result:
      "The final mark provides a clear visual foundation for the brand: origin, ingredients and name work together in one composition. The supplied artwork is presented as the completed identity concept; packaging performance and commercial outcomes have not been claimed without evidence.",
    nextSteps: [
      "Create simplified one-colour and small-size logo versions.",
      "Test legibility across labels and different package formats.",
      "Define spacing, minimum-size and background-use rules.",
      "Extend the identity into a consistent packaging and social system.",
    ],
  },
};
