import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export const metadata = {
  title: "Best AI Chatbots for Business 2026 - Complete Guide",
  description: "Compare the top AI chatbot platforms for customer support, lead generation, and business automation. Expert reviews of Chatbase, Crisp, and more.",
  keywords: "AI chatbots, business chatbots, customer support AI, chatbot platforms, live chat software",
};

export default function ChatbotsPillar() {
  const chatbotTools = [
    {
      name: "Chatbase",
      description: "AI chatbot builder trained on your data. Perfect for customer support and lead qualification.",
      pricing: "Free plan available. Paid plans from $19/month",
      bestFor: "Custom AI chatbots trained on your business data",
      features: ["Custom AI training", "Multi-channel support", "Analytics dashboard", "API access"],
      affiliateLink: "https://chatbase.co?ref=aistack",
      rating: 4.8,
    },
    {
      name: "Crisp",
      description: "All-in-one customer messaging platform with AI chatbot capabilities.",
      pricing: "Free plan for 2 seats. Pro from $25/month",
      bestFor: "Small to medium businesses needing full customer messaging suite",
      features: ["Live chat", "AI chatbot", "Email marketing", "Knowledge base", "Mobile apps"],
      affiliateLink: "https://crisp.chat?ref=aistack",
      rating: 4.7,
    },
    {
      name: "Intercom",
      description: "Enterprise customer messaging platform with advanced AI bots.",
      pricing: "Starter from $39/month",
      bestFor: "Enterprise teams needing sophisticated customer engagement",
      features: ["Product tours", "AI chatbot", "Help desk", "Messaging", "Analytics"],
      affiliateLink: "https://intercom.com?ref=aistack",
      rating: 4.6,
    },
    {
      name: "Drift",
      description: "Conversational marketing platform focused on sales conversations.",
      pricing: "Custom pricing",
      bestFor: "B2B sales teams wanting conversational marketing",
      features: ["Meeting booking", "Lead qualification", "Live chat", "Email integration"],
      affiliateLink: "https://drift.com?ref=aistack",
      rating: 4.5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Best AI Chatbots for Business (2026)</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover the top AI chatbot platforms for customer support, lead generation, and business automation. 
          Compare features, pricing, and find the perfect solution for your needs.
        </p>
      </header>

      {/* Affiliate Disclosure */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission 
          when you purchase through our links at no extra cost to you. We recommend Chatbase, Crisp, and other 
          partners based on thorough research and genuine value.
        </p>
      </div>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-3 text-left">Tool</th>
                <th className="border border-gray-300 p-3 text-left">Best For</th>
                <th className="border border-gray-300 p-3 text-left">Pricing</th>
                <th className="border border-gray-300 p-3 text-left">Rating</th>
                <th className="border border-gray-300 p-3 text-left">Try Now</th>
              </tr>
            </thead>
            <tbody>
              {chatbotTools.map((tool) => (
                <tr key={tool.name} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">{tool.name}</td>
                  <td className="border border-gray-300 p-3">{tool.bestFor}</td>
                  <td className="border border-gray-300 p-3">{tool.pricing}</td>
                  <td className="border border-gray-300 p-3">⭐ {tool.rating}/5</td>
                  <td className="border border-gray-300 p-3">
                    <a 
                      href={tool.affiliateLink} 
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Detailed Reviews</h2>
        <div className="space-y-8">
          {chatbotTools.map((tool) => (
            <div key={tool.name} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="text-green-600" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pricing & Best For</h4>
                  <p className="text-gray-600 mb-2">{tool.pricing}</p>
                  <p className="text-gray-600">{tool.bestFor}</p>
                </div>
              </div>
              
              <a 
                href={tool.affiliateLink} 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try {tool.name} Free
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Choose the Right AI Chatbot</h2>
        <div className="prose max-w-3xl">
          <h3>Key Considerations</h3>
          <ul>
            <li><strong>Use Case:</strong> Customer support vs lead generation vs internal tools</li>
            <li><strong>Integration:</strong> Does it connect with your existing tools (CRM, help desk, etc.)?</li>
            <li><strong>Customization:</strong> Can you train it on your specific business data?</li>
            <li><strong>Pricing:</strong> Free plans for testing, scalable pricing as you grow</li>
            <li><strong>Analytics:</strong> Track conversations, conversion rates, and customer satisfaction</li>
          </ul>
          
          <h3>Implementation Tips</h3>
          <ul>
            <li>Start with a free plan to test functionality</li>
            <li>Train your AI on FAQs, product info, and common customer questions</li>
            <li>Set up escalation paths to human agents when needed</li>
            <li>Monitor conversations and continuously improve responses</li>
            <li>A/B test different conversation flows for better conversion</li>
          </ul>
        </div>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/best-ai-chatbots-business" className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Best AI Chatbots for Business (2026)</h3>
            <p className="text-gray-600">In-depth comparison of top chatbot platforms</p>
          </Link>
          <Link href="/blog/chatbot-vs-copywriting-ai" className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Chatbot vs Copywriting AI: Which Do You Need?</h3>
            <p className="text-gray-600">Understanding different AI use cases</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
