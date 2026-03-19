import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Best AI Copywriting Tools 2026 - Jasper, Copy.ai, Writesonic Compared",
  description: "Compare top AI copywriting tools for marketing, sales, and content creation. Expert reviews of Jasper, Copy.ai, Writesonic, and more.",
  keywords: "AI copywriting, AI writing tools, content generation, marketing copy AI, sales copy tools",
};

export default function CopywritingPillar() {
  const copywritingTools = [
    {
      name: "Jasper",
      description: "Enterprise AI writing platform with brand voice, workflows, and 50+ templates.",
      pricing: "Creator from $49/month. Teams from $125/month",
      bestFor: "Marketing teams needing brand consistency and collaboration",
      features: ["Brand voice", "50+ templates", "SEO mode", "Plagiarism checker", "Team collaboration"],
      affiliateLink: "https://jasper.ai?ref=aistack",
      rating: 4.8,
    },
    {
      name: "Copy.ai",
      description: "AI copywriter for marketing campaigns, social media, and sales content.",
      pricing: "Free plan available. Pro from $49/month",
      bestFor: "Solo marketers and small businesses",
      features: ["90+ templates", "Blog post wizard", "Social media generator", "Workflow automation"],
      affiliateLink: "https://copy.ai?ref=aistack",
      rating: 4.6,
    },
    {
      name: "Writesonic",
      description: "AI writing tool with SEO optimization and article generation.",
      pricing: "Free plan available. Pro from $20/month",
      bestFor: "Content marketers and SEO writers",
      features: ["Article writer", "Landing page generator", "Product descriptions", "API access"],
      affiliateLink: "https://writesonic.com?ref=aistack",
      rating: 4.5,
    },
    {
      name: "Grammarly",
      description: "AI writing assistant for grammar, tone, and clarity improvements.",
      pricing: "Free plan available. Premium from $12/month",
      bestFor: "Writers needing editing and proofreading",
      features: ["Grammar checking", "Tone detection", "Clarity suggestions", "Plagiarism detection"],
      affiliateLink: "https://grammarly.com?ref=aistack",
      rating: 4.7,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Best AI Copywriting Tools (2026)</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover the top AI copywriting tools for marketing, sales, and content creation. 
          Compare Jasper, Copy.ai, Writesonic, and more to find the perfect AI writing assistant.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn commissions 
          from Jasper, Copy.ai, Writesonic, and other partners at no extra cost to you.
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
                <th className="border p-3">Try Now</th>
              </tr>
            </thead>
            <tbody>
              {copywritingTools.map((tool) => (
                <tr key={tool.name} className="hover:bg-gray-50">
                  <td className="border p-3 font-semibold">{tool.name}</td>
                  <td className="border p-3">{tool.bestFor}</td>
                  <td className="border p-3">{tool.pricing}</td>
                  <td className="border p-3">⭐ {tool.rating}/5</td>
                  <td className="border p-3">
                    <a href={tool.affiliateLink} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
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
          {copywritingTools.map((tool) => (
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
          <Link href="/blog/best-ai-copywriting-tools" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">Best AI Copywriting Tools - Full Guide</h3>
            <p className="text-gray-600">Complete comparison and recommendations</p>
          </Link>
          <Link href="/blog/ai-content-generators" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">AI Content Generators Compared</h3>
            <p className="text-gray-600">Beyond copywriting: full content creation</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
