import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Categories */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pillar/ai-writing" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  AI Writing
                </Link>
              </li>
              <li>
                <Link href="/pillar/ai-design" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  AI Design
                </Link>
              </li>
              <li>
                <Link href="/pillar/ai-coding" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  AI Coding
                </Link>
              </li>
              <li>
                <Link href="/pillar/ai-automation" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/pillar/ai-productivity" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Productivity
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Comparisons</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Jasper vs Copy.ai
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Midjourney vs DALL-E
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  GitHub Copilot vs Cursor
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  All Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/affiliate-disclosure" className="text-gray-600 hover:text-emerald-600 transition text-sm">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 Stack Labs LLC. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              We may earn commissions from qualifying purchases. This does not affect our reviews.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
