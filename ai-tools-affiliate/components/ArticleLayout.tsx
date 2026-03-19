import { TableOfContents, SocialShare, RelatedArticles, AffiliateCTA, ComparisonTable, Badge } from '@/components/ui';

interface ArticleLayoutProps {
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  children: React.ReactNode;
  tocItems?: Array<{
    id: string;
    title: string;
    level: number;
  }>;
  relatedArticles?: Array<{
    title: string;
    href: string;
    excerpt?: string;
  }>;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
    badge?: string;
  };
}

export default function ArticleLayout({
  title,
  excerpt,
  category,
  date,
  children,
  tocItems = [],
  relatedArticles = [],
  cta,
}: ArticleLayoutProps) {
  return (
    <article className="min-h-screen py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <header className="mb-12">
              {category && (
                <Badge variant="blue" size="md">{category}</Badge>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {date && <span>{date}</span>}
                <SocialShare url={typeof window !== 'undefined' ? window.location.href : ''} title={title} />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>

            {/* CTA Box */}
            {cta && (
              <AffiliateCTA
                title={cta.title}
                description={cta.description}
                buttonText={cta.buttonText}
                href={cta.href}
                badge={cta.badge}
              />
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <RelatedArticles articles={relatedArticles} />
            )}
          </div>

          {/* Sidebar with Table of Contents */}
          {tocItems.length > 0 && (
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
