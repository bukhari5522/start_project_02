// Who We Work With — the networks whose standards our work is aligned with.
//
// Owner instruction 20 Nov 2026: Victorian distribution companies ONLY,
// plus NBN Co, each shown WITH its logo. All other states and telecom
// names were removed in this revision.
//
// Edit this one file to add, remove or reorder a network. Logos live in
// /public/networks/ — cropped by Muse from the owner's images
// (Victorian banner + NBN screenshot, sent 20 Nov 2026), white background,
// one file per company.
//
// The framing is deliberate: PigeonsPower prepares design, drafting and
// consultancy work in accordance with each network's standards,
// specifications and approval requirements.

const networks = [
  {
    region: "Victoria — Electricity Distribution",
    companies: [
      { name: "CitiPower", logo: "/networks/citipower.png" },
      { name: "Powercor", logo: "/networks/powercor.png" },
      { name: "AusNet Services", logo: "/networks/ausnet.png" },
      { name: "United Energy", logo: "/networks/united-energy.png" },
      { name: "Jemena", logo: "/networks/jemena.png" },
    ],
  },
  {
    region: "Telecommunications",
    companies: [{ name: "NBN Co", logo: "/networks/nbn.png" }],
  },
];

export default networks;
