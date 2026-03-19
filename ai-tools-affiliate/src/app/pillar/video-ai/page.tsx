import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Best AI Video Generators 2026 - Synthesia, Runway, InVideo Compared",
  description: "Compare top AI video generation tools for creating professional videos without filming. Reviews of Synthesia, Runway, and more.",
  keywords: "AI video generators, video creation AI, synthetic video, AI video tools, text to video",
};

export default function VideoAIPillar() {
  const videoTools = [
    {
      name: "Synthesia",
      description: "AI video platform with realistic avatars and voiceovers for training and marketing.",
      pricing: "Starter from $22/month",
      bestFor: "Corporate training and explainer videos",
      features: ["140+ AI avatars", "120+ languages", "Custom avatars", "Screen recording", "API access"],
      affiliateLink: "https://synthesia.io?ref=aistack",
      rating: 4.7,
    },
    {
      name: "Runway",
      description: "AI-powered video editing and generation platform for creative professionals.",
      pricing: "Free plan. Pro from $15/month",
      bestFor: "Creative video editing and AI effects",
      features: ["Text to video", "Video inpainting", "Green screen", "Motion tracking", "Gen-2 AI"],
      affiliateLink: "https://runwayml.com?ref=aistack",
      rating: 4.6,
    },
    {
      name: "InVideo",
      description: "Online video editor with AI text-to-video and template library.",
      pricing: "Free plan. Business from $15/month",
      bestFor: "Marketing videos and social media content",
      features: ["5000+ templates", "Text to video", "Voiceovers", "Stock media", "Brand kit"],
      affiliateLink: "https://invideo.io?ref=aistack",
      rating: 4.5,
    },
    {
      name: "Pictory",
      description: "AI video creator for turning blog posts and scripts into videos.",
      pricing: "Starter from $19/month",
      bestFor: "Content repurposing and blog-to-video",
      features: ["Blog to video", "Auto captions", "Voiceovers", "Stock library", "Auto summarization"],
      affiliateLink: "https://pictory.ai?ref=aistack",
      rating: 4.4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Best AI Video Generators (2026)</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Create professional videos without filming. Compare Synthesia, Runway, InVideo, and more 
          AI video generation platforms.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Affiliate Disclosure:</strong> Contains affiliate links. We earn commissions from Synthesia, Runway, and partners.
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
              {videoTools.map((tool) => (
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
          {videoTools.map((tool) => (
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
          <Link href="/blog/best-ai-video-generators" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">Best AI Video Generators - Full Guide</h3>
            <p className="text-gray-600">Complete comparison and use cases</p>
          </Link>
          <Link href="/blog/ai-content-generators" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">AI Content Generators Compared</h3>
            <p className="text-gray-600">Multi-format content creation tools</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
