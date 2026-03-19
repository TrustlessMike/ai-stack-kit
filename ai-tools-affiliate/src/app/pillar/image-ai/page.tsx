import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Best AI Image Generators 2026 - Midjourney, DALL-E, Stable Diffusion",
  description: "Compare top AI image generation tools for creating stunning visuals. Reviews of Midjourney, DALL-E 3, Stable Diffusion, and more.",
  keywords: "AI image generators, AI art, image creation tools, Midjourney, DALL-E, text to image",
};

export default function ImageAIPillar() {
  const imageTools = [
    {
      name: "Midjourney",
      description: "Industry-leading AI art generator with stunning artistic quality.",
      pricing: "Basic from $10/month. Standard from $30/month",
      bestFor: "High-quality artistic and creative images",
      features: ["Discord-based", "Artistic styles", "Upscaling", "Variations", "Community gallery"],
      affiliateLink: "https://midjourney.com?ref=aistack",
      rating: 4.8,
    },
    {
      name: "DALL-E 3",
      description: "OpenAI's image generator with excellent prompt understanding.",
      pricing: "Via ChatGPT Plus ($20/month) or API credits",
      bestFor: "Accurate prompt interpretation and realistic images",
      features: ["ChatGPT integration", "High accuracy", "Safety filters", "API access", "Commercial use"],
      affiliateLink: "https://openai.com/dall-e-3?ref=aistack",
      rating: 4.7,
    },
    {
      name: "Stable Diffusion",
      description: "Open-source AI image generator with maximum customization.",
      pricing: "Free (self-hosted) or via platforms from $10/month",
      bestFor: "Developers and custom workflows",
      features: ["Open-source", "Local deployment", "Custom models", "ControlNet", "Fine-tuning"],
      affiliateLink: "https://stability.ai?ref=aistack",
      rating: 4.6,
    },
    {
      name: "Adobe Firefly",
      description: "Adobe's AI image generator integrated with Creative Cloud.",
      pricing: "Free tier. Premium via Creative Cloud",
      bestFor: "Designers in Adobe ecosystem",
      features: ["Photoshop integration", "Commercial safe", "Generative fill", "Text effects", "Vector recolor"],
      affiliateLink: "https://firefly.adobe.com?ref=aistack",
      rating: 4.5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Best AI Image Generators (2026)</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Create stunning visuals with AI. Compare Midjourney, DALL-E 3, Stable Diffusion, and more 
          image generation platforms for every use case.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Affiliate Disclosure:</strong> Contains affiliate links. We earn commissions from Midjourney, Stability AI, and partners.
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
              {imageTools.map((tool) => (
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
          {imageTools.map((tool) => (
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
          <Link href="/blog/best-ai-image-generators" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">Best AI Image Generators - Complete Guide</h3>
            <p className="text-gray-600">In-depth comparison and tutorials</p>
          </Link>
          <Link href="/blog/ai-content-generators" className="border rounded-lg p-4 hover:shadow">
            <h3 className="font-semibold">AI Content Generators Compared</h3>
            <p className="text-gray-600">Multi-format creation tools</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
