import Link from 'next/link';
import { MessageSquare, PenTool, Video, Image, Cpu, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI Stack Kit | Best AI Tools for Business 2026',
  description: 'Expert reviews of AI chatbots, copywriting tools, video generators, image creation, and marketing automation platforms.',
  keywords: 'AI tools, AI chatbots, AI copywriting, AI video, image generation, marketing automation',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI Stack Kit",
  "url": "https://stackaikit.com",
  "description": "Expert reviews and comparisons of AI tools for business and content creation",
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stack Labs LLC",
    "url": "https://stackaikit.com"
  }
};

const categories = [
  { name: 'AI Chatbots', href: '/blog/best-ai-chatbots-business', icon: MessageSquare, desc: 'Conversational AI for customer support' },
  { name: 'AI Copywriting', href: '/blog/ai-copywriting-complete-guide-2026', icon: PenTool, desc: 'Content generation and writing tools' },
  { name: 'AI Video', href: '/blog/best-ai-video-generators', icon: Video, desc: 'Video creation and editing platforms' },
  { name: 'AI Image', href: '/blog/best-ai-image-generators', icon: Image, desc: 'Image generation and design tools' },
  { name: 'AI Automation', href: '/blog/ai-automation-tools-2026', icon: Cpu, desc: 'Workflow automation with AI' },
  { name: 'AI Research', href: '/blog/ai-research-tools', icon: Sparkles, desc: 'Market analysis and research tools' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero - Tech futuristic Indigo + Violet with code aesthetic */}
      <section className="bg-gradient-to-br from-indigo-950 via-violet-900 to-purple-950 text-white py-24 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="inline-block bg-violet-500/20 backdrop-blur px-4 py-2 rounded-full text-violet-300 text-sm font-medium mb-6 border border-violet-500/30">
            &lt;AI-Powered /&gt;
          </div>
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Best AI Tools<br/>
            <span className="text-violet-400">for Business</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Expert reviews of AI chatbots, copywriting tools, video generators, image creation, 
            and marketing automation. Build your AI stack with confidence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/blog/best-ai-chatbots-business-2026" className="bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-500 transition shadow-lg shadow-violet-600/30">
              Explore Tools
            </Link>
            <Link href="/blog" className="bg-white/5 backdrop-blur border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
              All Reviews
            </Link>
          </div>
          
          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-violet-400">30+</div>
              <div className="text-sm text-gray-400">AI tools reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-400">100%</div>
              <div className="text-sm text-gray-400">Unbiased analysis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-400">2026</div>
              <div className="text-sm text-gray-400">Latest data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Explore AI Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group p-6 border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-lg transition">
                <cat.icon className="w-10 h-10 text-violet-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-600">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/best-ai-chatbots-business-2026" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-violet-600 font-medium">Chatbots</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Best AI Chatbots for Business 2026</h3>
              <p className="text-gray-600 text-sm">Top conversational AI platforms.</p>
            </Link>
            <Link href="/blog/jasper-vs-copyai-ai-copywriting-comparison" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-violet-600 font-medium">Comparison</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Jasper vs Copy.ai: AI Copywriting</h3>
              <p className="text-gray-600 text-sm">Which AI writer wins?</p>
            </Link>
            <Link href="/blog/midjourney-vs-dalle-3-image-generation" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-violet-600 font-medium">Image</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Midjourney vs DALL-E 3</h3>
              <p className="text-gray-600 text-sm">Best AI image generators compared.</p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-violet-600 font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">AI Stack Kit</h4>
              <p className="text-sm">Expert AI tool reviews.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/best-ai-chatbots-business" className="hover:text-white">Chatbots</Link></li>
                <li><Link href="/blog/ai-copywriting-complete-guide-2026" className="hover:text-white">Copywriting</Link></li>
                <li><Link href="/blog/best-ai-video-generators" className="hover:text-white">Video</Link></li>
                <li><Link href="/blog/best-ai-image-generators" className="hover:text-white">Image</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal/about" className="hover:text-white">About</Link></li>
                <li><Link href="/legal/disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Stack Labs LLC</p>
              <p className="text-sm">malik@stack-labs.net</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            © 2026 Stack Labs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
