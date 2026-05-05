import image2 from '../assets/Design Sytem.png'
import rbacImage from '../assets/RBAC system.png'
import usageBillingImage from '../assets/Usage and Billing.png'

const projects = [
  {
    slug: 'dashboard-ui',
    title: 'Design System',
    image: image2,
    description:
      'A data-rich admin dashboard with real-time charts, filterable tables, and a dark/light theme toggle.',
    longDescription:
      'This project involved designing and building a comprehensive admin dashboard from scratch. The main challenges were handling large datasets efficiently, creating intuitive data visualizations, and ensuring a smooth experience across devices. The theme toggle was implemented using CSS custom properties for instant switching without any flash.',
    tags: ['React', 'Recharts', 'CSS Modules'],
    color: '#7c3aed',
    emoji: '📊',
  },
  {
    slug: 'e-commerce-store',
    title: 'RBAC System',
    image: rbacImage,
    description:
      'Full-featured online shop with cart, product pages, and Stripe checkout integration.',
    longDescription:
      'A complete e-commerce experience built with React and Node.js. Features include a dynamic product catalog, persistent shopping cart, user authentication, and a seamless Stripe-powered checkout flow. Special attention was paid to the UX of the purchase funnel to maximize conversion.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: '#0ea5e9',
    emoji: '🛍️',
  },
  {
    slug: 'blog-platform',
    title: 'Usage and Billing',
    image: usageBillingImage,
    description:
      'Markdown-powered blog with syntax highlighting, tag filtering, and an RSS feed.',
    longDescription:
      'A lightweight yet powerful blogging platform that renders MDX content with full syntax highlighting support. Authors can tag posts for easy filtering, and readers can subscribe via the auto-generated RSS feed. The entire site is statically generated for blazing-fast load times.',
    tags: ['Vite', 'MDX', 'Tailwind'],
    color: '#059669',
    emoji: '✍️',
  },
  {
    slug: 'mobile-app',
    title: 'Identity Resolution',
    description:
      'A cross-platform mobile app design with onboarding flow, home feed, and user profile screens.',
    longDescription:
      'This project focused on creating a cohesive and intuitive mobile experience across iOS and Android. The design system was built from scratch, covering typography, color, spacing, and component patterns. Particular care was taken to make the onboarding flow frictionless to improve user retention.',
    tags: ['Figma', 'Prototyping', 'iOS'],
    color: '#f59e0b',
    emoji: '📱',
  },
  {
    slug: 'design-system',
    title: 'AI Segment Builder',
    description:
      'A scalable component library with tokens, documentation, and Storybook integration.',
    longDescription:
      'Built a full design system from the ground up to unify the visual language across a suite of products. Includes a token architecture for color, typography, and spacing, a component library in Figma, and a live Storybook for developer handoff. Reduced design-to-dev time significantly across teams.',
    tags: ['Figma', 'Storybook', 'Tokens'],
    color: '#ec4899',
    emoji: '🎨',
  },
  {
    slug: 'landing-page',
    title: 'Measurement Tools',
    description:
      'High-converting landing page for a SaaS product with animated sections and A/B tested CTAs.',
    longDescription:
      'Designed and built a marketing landing page focused on conversion. The page features scroll-triggered animations, a pricing section, testimonials, and multiple CTA variants tested via A/B experiments. The redesign led to a measurable increase in trial sign-ups within the first month.',
    tags: ['React', 'Framer Motion', 'Analytics'],
    color: '#06b6d4',
    emoji: '🚀',
  },
]

export default projects
