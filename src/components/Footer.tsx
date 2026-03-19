import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AI Stack</h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for AI tool reviews and comparisons.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/pillar/chatbots" className="text-gray-400 hover:text-white transition">AI Chatbots</Link></li>
              <li><Link href="/pillar/copywriting" className="text-gray-400 hover:text-white transition">AI Copywriting</Link></li>
              <li><Link href="/pillar/automation" className="text-gray-400 hover:text-white transition">Marketing Automation</Link></li>
              <li><Link href="/pillar/video-ai" className="text-gray-400 hover:text-white transition">AI Video</Link></li>
              <li><Link href="/pillar/image-ai" className="text-gray-400 hover:text-white transition">AI Image Generation</Link></li>
              <li><Link href="/pillar/research-ai" className="text-gray-400 hover:text-white transition">AI Research Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/legal/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/legal/disclosure" className="text-gray-400 hover:text-white transition">Affiliate Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Affiliate Partners</h4>
            <p className="text-gray-400 text-sm">
              We partner with leading AI tools including Jasper, Copy.ai, Writesonic, 
              Chatbase, Crisp, Make.com, Zapier, Synthesia, Runway, and Midjourney.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Stack. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This site contains affiliate links. We may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
