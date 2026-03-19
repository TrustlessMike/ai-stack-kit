import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Best AI Research Tools 2026 - Data Analysis & Market Research AI",
  description: "Compare AI research platforms for data analysis, market research, and business insights. Expert reviews of research automation tools.",
  keywords: "AI research tools, data analysis AI, market research, business intelligence AI, research automation",
};

export default function ResearchAIPillar() {
  const researchTools = [
    {
      name: "Consensus",
      description: "AI research assistant for finding and summarizing scientific papers.",
      pricing: "Free plan. Pro from $10/month",
      bestFor: "Academic research and literature reviews",
      features: ["Paper search", "AI summaries", "Citation extraction", "Research questions", "Chrome extension"],
      affiliateLink: "https://consensus.app?ref=aistack",
      rating: 4.6,
    },
    {
      name: "Elicit",
      description: "AI research tool for automating literature reviews and data extraction.",
      pricing: "Free tier. Plus from $100/month",
      bestFor: "Systematic reviews and research workflows",
      features: ["Paper discovery", "Data extraction", "Summarization", "Citation management", "Custom workflows"],
      affiliateLink: "https://elicit.org?ref=aistack",
      rating: 4.5,
    },
    {
      name: "Perplexity AI",
      description: "AI-powered search engine with research-grade citations and sources.",
      pricing: "Free plan. Pro from $20/month",
      bestFor: "Quick research with verified sources",
      features: ["Citation-backed answers", "Source tracking", "Follow-up questions", "Academic mode", "API access"],
      affiliateLink: "https://perplexity.ai?ref=aistack",
      rating: 4.7,
    },
    {
      name: "Scite.ai",
      description: "Smart citations platform showing how research has been cited.",
      pricing: "Free trial. Starter from $10/month",
      bestFor: "Understanding citation context and impact",
      features: ["Smart citations", "Citation statements", "Dashboard", "Browser extension", "API"],
      affiliateLink: "https://scite.ai?ref=aistack",
      rating: 4.4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Best AI Research Tools (2026)</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Accelerate your research with AI. Compare Consensus, Elicit, Perplexity, and more 
          platforms for data analysis, literature reviews, and market research.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Affiliate Disclosure:</strong> Contains affiliate links. We earn commissions from research tool partners.
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
              {researchTools.map((tool) => (
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
          {researchTools.map((tool) => (
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
          <Link href="/blog/ai-research-tools" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">Best AI Research Tools - Complete Guide</h3>
            <p className="text-gray-600">In-depth research tool comparison</p>
          </Link>
          <Link href="/blog/enterprise-ai-platforms" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">Enterprise AI Platforms</h3>
            <p className="text-gray-600">Business-grade AI solutions</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
