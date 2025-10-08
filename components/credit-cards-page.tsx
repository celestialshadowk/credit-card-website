"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const creditCards = [
  {
    id: 1,
    name: "UOB Lady's Solitaire Card",
    bank: "Best for Ladies and Families",
    image: "/uob-lady-solitaire-credit-card-purple.jpg",
    rating: 4.5,
    reviews: 234,
    rewardRate: "Up to 10% UOB$",
    rewardRateLabel: "Reward Rate",
    minSalary: "S$30,000 annually",
    minSalaryLabel: "Minimum Salary",
    annualFee: "S$192.60 (Incl. GST)",
    annualFeeLabel: "Annual Fee",
    whyChosen: "Premium miles",
    whyChosenLabel: "Why Chosen",
    benefits: ["Up to 10% UOB$", "Premium Benefits", "Higher Caps", "8 Miles / S$1 Spent"],
    allBenefits: [
      "Up to 10% UOB$",
      "Premium Benefits",
      "Higher Caps",
      "8 Miles / S$1 Spent",
      "Exclusive Dining",
      "Shopping Rewards",
      "Travel Insurance",
      "Concierge Service",
    ],
    tabs: {
      overview: {
        description:
          "The UOB Lady's Solitaire Card is designed for ladies who appreciate the finer things in life. Enjoy exclusive privileges and rewards tailored to your lifestyle.",
        highlights: [
          "Up to 10% UOB$ rebate on online shopping",
          "8 miles per S$1 spent on overseas transactions",
          "Premium benefits at selected merchants",
          "Higher spending caps for better rewards",
        ],
      },
      benefits: [
        {
          title: "Shopping Rewards",
          description: "Earn up to 10% UOB$ rebate on online shopping at participating merchants",
        },
        { title: "Travel Miles", description: "Earn 8 miles per S$1 spent on overseas transactions" },
        { title: "Dining Privileges", description: "Exclusive dining offers at premium restaurants" },
        { title: "Lifestyle Perks", description: "Special privileges at beauty, wellness, and fashion outlets" },
      ],
      fees: [
        { label: "Annual Fee", value: "S$192.60 (Incl. GST)" },
        { label: "Late Payment Fee", value: "S$100" },
        { label: "Cash Advance Fee", value: "6% of transaction amount (min S$15)" },
        { label: "Foreign Currency Transaction Fee", value: "3.25% of transaction amount" },
      ],
      requirements: [
        { label: "Minimum Annual Income", value: "S$30,000" },
        { label: "Age Requirement", value: "21 years and above" },
        { label: "Citizenship", value: "Singapore Citizens or Permanent Residents" },
        { label: "Employment Status", value: "Employed or Self-Employed" },
      ],
    },
  },
  {
    id: 2,
    name: "UOB PRVI Miles American Express Card",
    bank: "Best for Luxury and Premium",
    image: "/uob-prvi-miles-black-credit-card.jpg",
    rating: 4.4,
    reviews: 189,
    rewardRate: "Up to 4 miles per S$1",
    rewardRateLabel: "Reward Rate",
    minSalary: "S$120,000 annually",
    minSalaryLabel: "Minimum Salary",
    annualFee: "S$535.50 (Incl. GST)",
    annualFeeLabel: "Annual Fee",
    whyChosen: "Premium travel perks",
    whyChosenLabel: "Why Chosen",
    benefits: ["Airport Limo Transfers", "Unlimited Miles Earning", "Regional Bonus Miles", "Bonus Lifestyle Miles"],
    allBenefits: [
      "Airport Limo Transfers",
      "Unlimited Miles Earning",
      "Regional Bonus Miles",
      "Bonus Lifestyle Miles",
      "Travel Portal Points",
      "Lounge Access Included",
      "Priority Check-in",
      "Baggage Protection",
    ],
    tabs: {
      overview: {
        description:
          "The UOB PRVI Miles American Express Card offers premium travel perks and unlimited miles earning.",
        highlights: [
          "Unlimited miles earning on all transactions",
          "Regional bonus miles on selected purchases",
          "Bonus lifestyle miles on dining and shopping",
          "Airport limo transfers included",
        ],
      },
      benefits: [
        { title: "Airport Limo Transfers", description: "Enjoy complimentary airport limo transfers." },
        { title: "Unlimited Miles Earning", description: "Earn unlimited miles on all transactions." },
        { title: "Regional Bonus Miles", description: "Get additional bonus miles on selected regional purchases." },
        { title: "Bonus Lifestyle Miles", description: "Earn bonus miles on dining and shopping." },
      ],
      fees: [
        { label: "Annual Fee", value: "S$535.50 (Incl. GST)" },
        { label: "Late Payment Fee", value: "S$100" },
        { label: "Cash Advance Fee", value: "6% of transaction amount (min S$15)" },
        { label: "Foreign Currency Transaction Fee", value: "3.25% of transaction amount" },
      ],
      requirements: [
        { label: "Minimum Annual Income", value: "S$120,000" },
        { label: "Age Requirement", value: "21 years and above" },
        { label: "Citizenship", value: "Singapore Citizens or Permanent Residents" },
        { label: "Employment Status", value: "Employed or Self-Employed" },
      ],
    },
  },
  {
    id: 3,
    name: "Maybank World Mastercard",
    bank: "Best for Luxury World Travelers",
    image: "/maybank-world-mastercard-black-card.jpg",
    rating: 4.3,
    reviews: 156,
    rewardRate: "Up to 4 miles per dollar",
    rewardRateLabel: "Reward Rate",
    minSalary: "S$80,000 annually",
    minSalaryLabel: "Minimum Salary",
    annualFee: "S$196.20 (Incl. GST)",
    annualFeeLabel: "Annual Fee",
    whyChosen: "",
    whyChosenLabel: "",
    benefits: ["Golf Benefits", "6 Miles Earn Rate", "Airport Lounge", "Travel Perks"],
    allBenefits: [
      "Golf Benefits",
      "6 Miles Earn Rate",
      "Airport Lounge",
      "Travel Perks",
      "Fuel Savings",
      "Complimentary Insurance",
      "Priority Services",
      "Exclusive Offers",
    ],
    tabs: {
      overview: {
        description: "The Maybank World Mastercard is tailored for luxury world travelers.",
        highlights: [
          "Golf benefits at selected courses",
          "6 miles earn rate on all purchases",
          "Complimentary airport lounge access",
          "Travel perks and insurance included",
        ],
      },
      benefits: [
        { title: "Golf Benefits", description: "Enjoy golf benefits at selected courses." },
        { title: "6 Miles Earn Rate", description: "Earn 6 miles per dollar spent." },
        { title: "Airport Lounge", description: "Complimentary airport lounge access." },
        { title: "Travel Perks", description: "Includes travel perks and insurance." },
      ],
      fees: [
        { label: "Annual Fee", value: "S$196.20 (Incl. GST)" },
        { label: "Late Payment Fee", value: "S$100" },
        { label: "Cash Advance Fee", value: "6% of transaction amount (min S$15)" },
        { label: "Foreign Currency Transaction Fee", value: "3.25% of transaction amount" },
      ],
      requirements: [
        { label: "Minimum Annual Income", value: "S$80,000" },
        { label: "Age Requirement", value: "21 years and above" },
        { label: "Citizenship", value: "Singapore Citizens or Permanent Residents" },
        { label: "Employment Status", value: "Employed or Self-Employed" },
      ],
    },
  },
]

export function CreditCardsPage() {
  console.log("[v0] CreditCardsPage component mounting")
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const [activeTabs, setActiveTabs] = useState<Record<number, string>>({})

  const toggleCard = (id: number) => {
    console.log("[v0] Toggling card:", id)
    setExpandedCards((prev) => {
      const newExpanded = prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
      if (!prev.includes(id)) {
        setActiveTabs((prevTabs) => ({ ...prevTabs, [id]: "overview" }))
      }
      return newExpanded
    })
  }

  const setActiveTab = (cardId: number, tab: string) => {
    console.log("[v0] Setting active tab:", cardId, tab)
    setActiveTabs((prev) => ({ ...prev, [cardId]: tab }))
  }

  console.log("[v0] Rendering with", creditCards.length, "cards")

  return (
    <div className="min-h-screen bg-[#e8f0f2]">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-0">
              <span className="text-[#2c3e50] font-bold text-[22px] tracking-tight">Wallet</span>
              <span className="text-[#ff6b4a] font-bold text-[22px] tracking-tight">WALK</span>
            </div>
            <nav className="hidden md:flex items-center gap-3 text-[13px]">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                🏠
              </a>
              <span className="text-gray-300">/</span>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                sg
              </a>
              <span className="text-gray-300">/</span>
              <a href="#" className="text-gray-700 font-medium">
                Credit cards
              </a>
            </nav>
          </div>
          <Button variant="ghost" className="text-gray-700 text-[13px] font-medium hover:bg-gray-50">
            Products
          </Button>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-[200px] flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-gray-700 hover:bg-gray-50 border-b border-gray-100">
                <div className="w-6 h-6 bg-[#ffe8e3] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#ff6b4a]" fill="currentColor" viewBox="0 0 20 20">
                    <rect x="3" y="4" width="14" height="2" />
                    <rect x="3" y="9" width="14" height="2" />
                    <rect x="3" y="14" width="14" height="2" />
                  </svg>
                </div>
                <span>Product List</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-gray-700 hover:bg-gray-50 border-b border-gray-100">
                <div className="w-6 h-6 bg-[#ffe8e3] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#ff6b4a]" fill="currentColor" viewBox="0 0 20 20">
                    <rect x="3" y="3" width="6" height="6" />
                    <rect x="11" y="3" width="6" height="6" />
                    <rect x="3" y="11" width="6" height="6" />
                    <rect x="11" y="11" width="6" height="6" />
                  </svg>
                </div>
                <span>Table of content</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-[#ff6b4a] bg-[#fff5f3] font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span>Filters</span>
              </button>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-5">
              <h1 className="text-[26px] font-bold text-gray-900 mb-2 leading-tight">
                Best Credit Cards Singapore 2025 | Compare All 80+ Cards
              </h1>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                Compare the best credit cards in seconds. Streamline comparison tool allows easy side-by-side
                comparison, revealing best cashback, miles, travel perks, and features from first-time applicants.
                Filter by features, benefits or amount to find your best match instantly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg py-3 px-4 mb-5">
              <p className="text-[13px] text-gray-700 text-center">
                We have found the Credit Cards for your choosing (0 of 0)
              </p>
            </div>

            <div className="space-y-4">
              {creditCards.map((card) => {
                const isExpanded = expandedCards.includes(card.id)
                const displayBenefits = isExpanded ? card.allBenefits : card.benefits
                const activeTab = activeTabs[card.id] || "overview"

                return (
                  <Card
                    key={card.id}
                    className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative pb-6"
                  >
                    <div className="p-5">
                      <div className="flex gap-5 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-[130px] h-[82px] bg-gray-100 rounded-md overflow-hidden relative mb-2">
                            <Image
                              src={card.image || "/placeholder.svg"}
                              alt={card.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(card.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-[11px] font-semibold text-gray-800 ml-0.5">{card.rating}</span>
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5">WalletWalk Rating</div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-[16px] font-semibold text-gray-900 mb-0.5 leading-tight">{card.name}</h3>
                          <p className="text-[12px] text-gray-500 mb-4">{card.bank}</p>

                          <div className="grid grid-cols-4 gap-x-6 gap-y-0 mb-0">
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-[11px] text-gray-500">Welcome Offer</span>
                                <svg
                                  className="w-3 h-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 16v-4m0-4h.01"
                                  />
                                </svg>
                              </div>
                              <div className="text-[12px] font-medium text-gray-900">
                                {card.id === 1
                                  ? "Paytm First Membership"
                                  : card.id === 2
                                    ? "1,499 NeuCoins on First Spend"
                                    : "Golf Benefits"}
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-[11px] text-gray-500">Reward Rate</span>
                                <svg
                                  className="w-3 h-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 16v-4m0-4h.01"
                                  />
                                </svg>
                              </div>
                              <div className="text-[12px] font-medium text-gray-900">{card.rewardRate}</div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-[11px] text-gray-500">
                                  {card.id === 1 ? "Joining Fee" : "Minimum Salary"}
                                </span>
                                <svg
                                  className="w-3 h-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 16v-4m0-4h.01"
                                  />
                                </svg>
                              </div>
                              <div className="text-[12px] font-medium text-gray-900">
                                {card.id === 1 ? "₹500" : card.minSalary}
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-[11px] text-gray-500">
                                  {card.id === 1 ? "Annual Fee" : card.id === 2 ? "Joining Fee" : "Annual Fee"}
                                </span>
                                <svg
                                  className="w-3 h-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 16v-4m0-4h.01"
                                  />
                                </svg>
                              </div>
                              <div className="text-[12px] font-medium text-gray-900">
                                {card.id === 1 ? "₹500" : card.id === 2 ? "₹1,499" : card.annualFee}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-shrink-0 flex items-start">
                          <Button className="bg-[#2c3e50] hover:bg-[#1a252f] text-white text-[13px] font-medium px-8 py-2 h-auto rounded-md shadow-sm">
                            Apply Now
                          </Button>
                        </div>
                      </div>

                      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
                        <button
                          onClick={() => toggleCard(card.id)}
                          className="inline-flex items-center gap-1.5 bg-white border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 text-[12px] font-medium px-4 py-1.5 rounded-full shadow-sm transition-colors"
                        >
                          <span>{isExpanded ? "Less" : "More"}</span>
                          {isExpanded ? (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {isExpanded && card.tabs && (
                        <div className="mt-5 pt-5 border-t border-gray-200 px-5">
                          <div className="flex gap-1 mb-4 border-b border-gray-200">
                            <button
                              onClick={() => setActiveTab(card.id, "overview")}
                              className={`px-4 py-2 text-[13px] font-medium transition-colors relative ${
                                activeTab === "overview"
                                  ? "text-[#ff6b4a] border-b-2 border-[#ff6b4a]"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              Overview
                            </button>
                            <button
                              onClick={() => setActiveTab(card.id, "benefits")}
                              className={`px-4 py-2 text-[13px] font-medium transition-colors relative ${
                                activeTab === "benefits"
                                  ? "text-[#ff6b4a] border-b-2 border-[#ff6b4a]"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              Benefits
                            </button>
                            <button
                              onClick={() => setActiveTab(card.id, "fees")}
                              className={`px-4 py-2 text-[13px] font-medium transition-colors relative ${
                                activeTab === "fees"
                                  ? "text-[#ff6b4a] border-b-2 border-[#ff6b4a]"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              Fees
                            </button>
                            <button
                              onClick={() => setActiveTab(card.id, "requirements")}
                              className={`px-4 py-2 text-[13px] font-medium transition-colors relative ${
                                activeTab === "requirements"
                                  ? "text-[#ff6b4a] border-b-2 border-[#ff6b4a]"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              Requirements
                            </button>
                          </div>

                          <div className="py-3">
                            {activeTab === "overview" && (
                              <div className="space-y-4">
                                <p className="text-[13px] text-gray-700 leading-relaxed">
                                  {card.tabs.overview.description}
                                </p>
                                <div>
                                  <h4 className="text-[14px] font-semibold text-gray-900 mb-2">Key Highlights</h4>
                                  <ul className="space-y-2">
                                    {card.tabs.overview.highlights.map((highlight, index) => (
                                      <li key={index} className="flex items-start gap-2 text-[13px] text-gray-700">
                                        <span className="text-[#ff6b4a] mt-1">•</span>
                                        <span>{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}

                            {activeTab === "benefits" && (
                              <div className="space-y-4">
                                {card.tabs.benefits.map((benefit, index) => (
                                  <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                                    <h4 className="text-[13px] font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                                    <p className="text-[13px] text-gray-600">{benefit.description}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {activeTab === "fees" && (
                              <div className="space-y-3">
                                {card.tabs.fees.map((fee, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0"
                                  >
                                    <span className="text-[13px] text-gray-700 font-medium">{fee.label}</span>
                                    <span className="text-[13px] text-gray-900 text-right">{fee.value}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {activeTab === "requirements" && (
                              <div className="space-y-3">
                                {card.tabs.requirements.map((req, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0"
                                  >
                                    <span className="text-[13px] text-gray-700 font-medium">{req.label}</span>
                                    <span className="text-[13px] text-gray-900 text-right">{req.value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 text-[13px] font-medium px-8 py-2 h-auto rounded-md"
              >
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
