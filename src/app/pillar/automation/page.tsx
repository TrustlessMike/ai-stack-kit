import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Best Marketing Automation AI Tools 2026 - Make.com, Zapier Compared",
  description: "Compare AI-powered marketing automation platforms. Expert reviews of Make.com, Zapier, and workflow automation tools.",
  keywords: "marketing automation, AI workflows, automation tools, Make.com, Zapier, workflow automation",
};

export default function AutomationPillar() {
  const automationTools = [
    {
      name: "Make.com",
      description: "Visual automation platform with AI capabilities for complex workflows.",
      pricing: "Free plan available. Core from $9/month",
      bestFor: "Complex multi-step automations with visual builder",
      features: ["Visual workflow builder", "1000+ integrations", "AI modules", "Error handling", "Scheduling"],
      affiliateLink: "https://make.com?ref=aistack",
      rating: 4.7,
    },
    {
      name: "Zapier",
      description: "Industry-leading automation platform with 5000+ app integrations.",
      pricing: "Free plan available. Starter from $19.99/month",
      bestFor: "Simple automations and widest app integrations",
      features: ["5000+ integrations", "Multi-step Zaps", "AI actions", "Webhooks", "Team collaboration"],
      affiliateLink: "https://zapier.com?ref=aistack",
      rating: 4.8,
    },
    {
      name: "HubSpot",
      description: "All-in-one CRM with marketing automation and AI features.",
      pricing: "Free CRM. Marketing Hub from $45/month",
      bestFor: "Inbound marketing and CRM integration",
      features: ["Email automation", "Lead nurturing", "CRM integration", "Landing pages", "Analytics"],
      affiliateLink: "https://hubspot.com?ref=aistack",
      rating: 4.6,
    },
    {
      name: "ActiveCampaign",
      description: "Email marketing automation with advanced segmentation and AI.",
      pricing: "Lite from $15/month",
      bestFor: "Email marketing and customer experience automation",
      features: ["Email automation", "Site tracking", "Lead scoring", "CRM", "Machine learning"],
      affiliateLink: "https://activecampaign.com?ref=aistack",
      rating: 4.5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Best Marketing Automation AI Tools (2026)</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover AI-powered marketing automation platforms to streamline your workflows. 
          Compare Make.com, Zapier, HubSpot, and more.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Affiliate Disclosure:</strong> Contains affiliate links. We earn commissions from Make.com, Zapier, and partners.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 text-left">Tool</th>
                <th className="border p-3 text-left">Best For</th>
                <th className="border p-3 text-left">Pricing</th>
                <th className="border p-3 text-left">Rating</th>
                <th className="border p-3">Try</th>
              </tr>
            </thead>
            <tbody>
              {automationTools.map((tool) => (
                <tr key={tool.name} className="hover:bg-gray-50">
                  <td className="border p-3 font-semibold">{tool.name}</td>
                  <td className="border p-3">{tool.bestFor}</td>
                  <td className="border p-3">{tool.pricing}</td>
                  <td className="border p-3">⭐ {tool.rating}/5</td>
                  <td className="border p-3">
                    <a href={tool.affiliateLink} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" target="_blank" rel="noopener noreferrer">Visit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Detailed Reviews</h2>
        <div className="space-y-8">
          {automationTools.map((tool) => (
            <div key={tool.name} className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="space-y-1">
                    {tool.features.map((f) => (
                      <li key={f} className="flex gap-2"><Check className="text-green-600" size={16} />{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pricing</h4>
                  <p className="text-gray-600">{tool.pricing}</p>
                  <p className="text-gray-600 mt-2">{tool.bestFor}</p>
                </div>
              </div>
              <a href={tool.affiliateLink} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 inline-block" target="_blank" rel="noopener noreferrer">
                Try {tool.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/ai-automation-tools-2026" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">AI Automation Tools 2026 - Complete Guide</h3>
            <p className="text-gray-600">Full comparison and implementation tips</p>
          </Link>
          <Link href="/blog/best-marketing-automation-ai" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">Best Marketing Automation AI</h3>
            <p className="text-gray-600">In-depth marketing automation review</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
