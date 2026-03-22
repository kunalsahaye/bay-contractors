import { Shield, Star, MapPin, Award, Clock, CheckCircle2 } from 'lucide-react';

export const SERVICES = [
  {
    category: "Repairs & Emergency",
    items: [
      { name: "Leak Detection & Repair", description: "Precision thermal imaging to find and fix leaks before they cause structural damage." },
      { name: "Storm Damage Repair", description: "Fast response to wind, hail, and storm-related roof failures." },
      { name: "Emergency Service", description: "24/7 rapid response for urgent roofing emergencies across San Francisco." },
      { name: "Animal Damage Repair", description: "Repairing damage caused by local wildlife to restore your roof's integrity." }
    ]
  },
  {
    category: "Replacement & Installation",
    items: [
      { name: "Full Roof Replacement", description: "Complete tear-off and installation of premium, long-lasting roofing systems." },
      { name: "Victorian Home Specialist", description: "Expert care for San Francisco's historic architecture and complex rooflines." },
      { name: "Flat Roof Systems", description: "Modern, durable solutions for the city's many flat-roofed residential buildings." },
      { name: "Premium Shingles & Tile", description: "High-end materials selected for durability and aesthetic appeal." }
    ]
  },
  {
    category: "Structural & Waterproofing",
    items: [
      { name: "Waterproofing", description: "Advanced sealing techniques designed for San Francisco's unique fog and moisture." },
      { name: "Flashing & Chimney Sealing", description: "Ensuring critical joints and penetrations are completely watertight." },
      { name: "Skylight Sealing", description: "Expert repair and installation of skylights for natural light without the leaks." },
      { name: "Soffit & Fascia Repair", description: "Protecting your home's eaves and maintaining proper attic ventilation." }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    neighborhood: "Noe Valley",
    text: "Bay Contractors handled our Victorian roof replacement with incredible care. They understood the historical requirements and the result is stunning.",
    rating: 5
  },
  {
    name: "James L.",
    neighborhood: "Richmond District",
    text: "After a major storm, they were the only ones who responded quickly. Fixed our leak the same day. Truly professional service.",
    rating: 5
  },
  {
    name: "Elena R.",
    neighborhood: "Pacific Heights",
    text: "Professional, clean, and transparent. The quote was exactly what we paid, and the crew was respectful of our property throughout.",
    rating: 5
  }
];

export const NEIGHBORHOODS = [
  "Richmond District", "Sunset District", "Noe Valley", "Mission District", 
  "Pacific Heights", "Marina District", "Outer Mission", "Bayview", "Haight-Ashbury",
  "North Beach", "Castro", "Potrero Hill"
];

export const FAQS = [
  {
    question: "How long does a roof replacement take in San Francisco?",
    answer: "Most residential roof replacements in SF take between 3 to 7 days, depending on the complexity of the roofline and weather conditions. Historic Victorians may require more time for specialized detailing."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide comprehensive, no-obligation inspections and detailed written estimates for all San Francisco homeowners."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed in the State of California, bonded, and carry comprehensive workers' comp and liability insurance specifically for roofing."
  },
  {
    question: "What roofing materials work best for SF fog and weather?",
    answer: "We recommend high-quality architectural shingles or synthetic slate for most SF homes. For flat roofs, we use advanced TPO or modified bitumen systems designed to handle moisture and salt air."
  }
];

export const TRUST_BADGES = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Star, text: "5-Star Rated" },
  { icon: Award, text: "Certified Master Shingle Applicator" },
  { icon: MapPin, text: "Local SF Experts" },
  { icon: Clock, text: "24/7 Emergency Response" },
  { icon: CheckCircle2, text: "Industry-Leading Warranty" }
];
