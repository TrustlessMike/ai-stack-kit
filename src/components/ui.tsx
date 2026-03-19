import Link from 'next/link';
import { ArrowRight, Check, Star, ExternalLink, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  const content = (
    <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
      {icon && <div className="mb-4 text-purple-600">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  category?: string;
  date?: string;
  image?: string;
}

export function ArticleCard({ title, excerpt, href, category, date, image }: ArticleCardProps) {
  return (
    <Link href={href} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {image && (
        <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {category || 'Article'}
          </div>
        </div>
      )}
      <div className="p-5">
        {category && (
          <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-base font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{excerpt}</p>
        {date && <p className="text-gray-400 text-xs">{date}</p>}
      </div>
    </Link>
  );
}

interface ComparisonCardProps {
  title: string;
  excerpt: string;
  href: string;
}

export function ComparisonCard({ title, excerpt, href }: ComparisonCardProps) {
  return (
    <Link href={href} className="group block bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
      <h3 className="text-base font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{excerpt}</p>
    </Link>
  );
}

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export function CTAButton({ href, onClick, children, variant = 'primary', size = 'md', className = '', icon }: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-md',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    ghost: 'text-gray-600 hover:text-purple-600 hover:bg-gray-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
      {variant === 'primary' && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {content}
    </button>
  );
}

interface TrustSignalProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function TrustSignal({ value, label, icon }: TrustSignalProps) {
  return (
    <div className="text-center p-6">
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon && <div className="text-purple-600">{icon}</div>}
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          {value}
        </div>
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'green' | 'blue' | 'gray';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'purple', size = 'sm' }: BadgeProps) {
  const variantClasses = {
    purple: 'bg-purple-50 text-purple-700',
    green: 'bg-green-50 text-green-700',
    blue: 'bg-blue-50 text-blue-700',
    gray: 'bg-gray-100 text-gray-700',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 font-medium">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}

interface ComparisonTableProps {
  rows: Array<{
    feature: string;
    item1: string;
    item2: string;
    winner?: string;
  }>;
  item1Name: string;
  item2Name: string;
}

export function ComparisonTable({ rows, item1Name, item2Name }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
            <th className="px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900">{item1Name}</th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900">{item2Name}</th>
            <th className="px-4 py-3 text-center font-semibold text-gray-900">Winner</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3 text-gray-900 font-medium">{row.feature}</td>
              <td className="px-4 py-3 text-center text-gray-600">{row.item1}</td>
              <td className="px-4 py-3 text-center text-gray-600">{row.item2}</td>
              <td className="px-4 py-3 text-center">
                {row.winner && (
                  <Badge variant="green">{row.winner}</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface AffiliateCTAProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  badge?: string;
}

export function AffiliateCTA({ title, description, buttonText, href, badge }: AffiliateCTAProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 my-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            {badge && <Badge variant="purple">{badge}</Badge>}
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <CTAButton href={href} variant="primary" size="md">
          {buttonText}
        </CTAButton>
      </div>
    </div>
  );
}

interface TableOfContentsProps {
  items: Array<{
    id: string;
    title: string;
    level: number;
  }>;
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="toc">
      <h3>On this page</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginLeft: (item.level - 2) * 0.5 + 'rem' }}>
            <a href={`#${item.id}`} className="hover:text-purple-600 transition">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface RelatedArticlesProps {
  articles: Array<{
    title: string;
    href: string;
    excerpt?: string;
  }>;
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition"
          >
            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition">
              {article.title}
            </h4>
            {article.excerpt && (
              <p className="text-gray-600 text-xs mt-1 line-clamp-2">{article.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
