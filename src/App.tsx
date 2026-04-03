/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Crown, 
  MapPin, 
  Menu as MenuIcon, 
  Flame, 
  Smartphone, 
  TrendingUp, 
  Clock, 
  ChevronRight,
  Star,
  Search,
  User,
  X,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Goal {
  emoji: string;
  label: string;
  text: string;
}

interface KPI {
  value: string;
  label: string;
}

interface PageRoute {
  name: string;
  purpose: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
}

// --- Data ---
const GOALS: Goal[] = [
  { emoji: "🛵", label: "Drive Online Orders", text: "Maximize digital order volume with frictionless flow from hero CTA to checkout in under 3 taps." },
  { emoji: "👑", label: "BK Crown Loyalty", text: "Capture signups and logins above the fold. Loyalty members spend 3× more — make joining unmissable." },
  { emoji: "📍", label: "Restaurant Discovery", text: "AI-powered location engine surfaces the nearest BK with live hours, wait times, and delivery ETA." },
  { emoji: "🍔", label: "Menu Engagement", text: "Immersive menu browsing with dynamic upsells, bundles, and AI-generated food photography." },
  { emoji: "📣", label: "Promotions & Deals", text: "Flash deal banners and personalized offers push time-sensitive urgency across all sessions." },
  { emoji: "📱", label: "App Download", text: "Persistent smart app banners with one-tap install. App is the highest-LTV conversion channel." },
];

const KPIS: KPI[] = [
  { value: "4.5%", label: "Online Order Conversion Rate" },
  { value: "<2s", label: "Page Load Time (LCP)" },
  { value: "38%", label: "Bounce Rate Ceiling" },
  { value: "22%", label: "Loyalty Signup Rate" },
  { value: "3.2×", label: "Return Visitor Rate" },
  { value: "92", label: "Lighthouse Score" },
];

const PAGES: PageRoute[] = [
  { name: "🏠 Homepage", purpose: "Hero video loop with 'Order Now' CTA above the fold. Featured promotions. App download push. Loyalty module. Location finder widget.", priority: 'CRITICAL' },
  { name: "🍔 Menu", purpose: "Full menu browser with category filters, calorie info, allergy tags, AI-powered search. Dynamic upsell suggestions powered by Gemini.", priority: 'CRITICAL' },
  { name: "🛒 Order Flow", purpose: "Delivery vs. pickup toggle. Address autocomplete. Cart with live pricing. Checkout optimized for 3-tap completion.", priority: 'CRITICAL' },
  { name: "🏆 BK Rewards", purpose: "Loyalty dashboard. Points tracker. Available rewards. Referral system. Exclusive member deals.", priority: 'HIGH' },
  { name: "🔥 Deals", purpose: "All active promotions with countdown timers. Personalized offers based on order history (AI-driven).", priority: 'HIGH' },
  { name: "📍 Locations", purpose: "Interactive map. Search by postcode/city. Live hours, drive-thru & dine-in status, ETA, accessibility info.", priority: 'HIGH' },
  { name: "📖 Our Story", purpose: "Brand heritage and flame-grilling story. Sustainability commitments. Sourcing transparency.", priority: 'MEDIUM' },
  { name: "💼 Careers", purpose: "Job listings with AI-powered role matching. Application flow. Culture content.", priority: 'MEDIUM' },
  { name: "🤝 Franchise", purpose: "Franchise information and lead capture form. ROI calculators. Support materials.", priority: 'MEDIUM' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bk-dark/95 backdrop-blur-md py-3 border-b border-bk-gold/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-bk-flame rounded-full flex items-center justify-center shadow-lg shadow-bk-flame/20">
              <Flame className="text-white w-6 h-6" />
            </div>
            <span className="font-heading text-2xl text-bk-gold tracking-tight">BURGER KING</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['Menu', 'Offers', 'Rewards', 'Locations'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-condensed font-bold text-sm uppercase tracking-widest text-bk-cream/70 hover:text-bk-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 font-condensed font-bold text-sm uppercase tracking-widest text-bk-cream/70 hover:text-bk-gold transition-colors">
            <User className="w-4 h-4" />
            Sign In
          </button>
          <button className="bg-bk-flame hover:bg-bk-ember text-white font-condensed font-black px-6 py-2 rounded-sm text-sm uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-bk-flame/20">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden hero-gradient">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bk-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] flame-gradient blur-3xl opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <span className="inline-block bg-bk-flame text-white font-accent text-xs tracking-[0.3em] px-4 py-1.5 rounded-sm mb-8 uppercase">
          🔥 Full Build Specification
        </span>
        
        <h1 className="font-heading text-[clamp(4rem,12vw,8rem)] leading-[0.85] text-bk-gold uppercase mb-4 animate-flicker">
          Burger King<br />Website Plan
        </h1>
        
        <p className="font-condensed font-bold text-[clamp(1.25rem,3vw,2rem)] text-bk-cream/70 uppercase tracking-widest mb-6">
          High-Converting Digital Experience
        </p>
        
        <p className="max-w-2xl mx-auto text-bk-cream/50 text-lg leading-relaxed mb-12">
          A complete, structured blueprint for building a flame-grilled, revenue-driving website — engineered with Google AI Studio + Gemini 2.5 Pro.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['🤖 Google AI Studio', '✦ Gemini 2.5 Pro', '⚡ Antigravity 3.1', '📈 Conversion-First'].map((pill) => (
            <span key={pill} className="bg-bk-gold/10 border border-bk-gold/30 rounded-full px-5 py-2 text-xs font-semibold text-bk-gold tracking-wider uppercase">
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-bk-flame hover:bg-bk-ember text-white font-condensed font-black px-10 py-4 rounded-sm text-lg uppercase tracking-[0.15em] transition-all transform hover:scale-105 shadow-2xl shadow-bk-flame/30 flex items-center justify-center gap-3">
            Explore the Blueprint
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-condensed font-bold px-10 py-4 rounded-sm text-lg uppercase tracking-[0.15em] transition-all">
            View Live Demo
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-6 h-10 border-2 border-bk-cream rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-bk-cream rounded-full" />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="mb-16">
    <span className="font-accent text-xs tracking-[0.4em] text-bk-flame uppercase mb-3 block">
      {number}
    </span>
    <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-bk-gold uppercase mb-6">
      {title}
    </h2>
    <p className="text-bk-cream/50 max-w-xl text-lg leading-relaxed">
      {desc}
    </p>
  </div>
);

interface GoalCardProps {
  goal: Goal;
  index: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-gradient-to-br from-bk-brown/40 to-bk-dark/80 border border-bk-gold/10 rounded-lg p-8 hover:border-bk-gold/40 transition-all duration-500"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bk-flame to-bk-gold opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="text-4xl mb-6 block">{goal.emoji}</span>
    <h3 className="font-condensed font-black text-xl text-bk-cream uppercase tracking-wider mb-3 group-hover:text-bk-gold transition-colors">
      {goal.label}
    </h3>
    <p className="text-bk-cream/50 text-sm leading-relaxed">
      {goal.text}
    </p>
  </motion.div>
);

interface KPICardProps {
  kpi: KPI;
  index: number;
}

const KPICard: React.FC<KPICardProps> = ({ kpi, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-gradient-to-br from-bk-flame/10 to-bk-brown/30 border border-bk-flame/20 rounded-lg p-8 text-center"
  >
    <div className="font-heading text-5xl text-bk-gold mb-3 leading-none">
      {kpi.value}
    </div>
    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-bk-cream/40 leading-tight">
      {kpi.label}
    </div>
  </motion.div>
);

interface PageRowProps {
  page: PageRoute;
  index: number;
}

const PageRow: React.FC<PageRowProps> = ({ page, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="grid grid-cols-1 md:grid-cols-[240px_1fr_auto] gap-6 items-start bg-bk-brown/10 border border-bk-gold/5 rounded-lg p-6 hover:border-bk-gold/20 transition-all group"
  >
    <div className="font-condensed font-black text-lg text-bk-gold uppercase tracking-wider">
      {page.name}
    </div>
    <div className="text-bk-cream/60 text-sm leading-relaxed">
      {page.purpose}
    </div>
    <div className={`
      font-accent text-[10px] tracking-widest px-3 py-1 rounded-full border self-start
      ${page.priority === 'CRITICAL' ? 'bg-bk-flame/20 text-bk-flame border-bk-flame/40' : 
        page.priority === 'HIGH' ? 'bg-bk-gold/10 text-bk-gold border-bk-gold/30' : 
        'bg-white/5 text-white/40 border-white/10'}
    `}>
      {page.priority}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        <div className="container mx-auto px-6">
          {/* Section 01: Goals */}
          <section id="foundation" className="py-32">
            <SectionHeader 
              number="Section 01 — Foundation"
              title="Business Goals & Objectives"
              desc="Every pixel must serve a purpose. These are the four conversion pillars that every page decision is measured against."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GOALS.map((goal, i) => (
                <GoalCard key={goal.label} goal={goal} index={i} />
              ))}
            </div>
          </section>

          <div className="h-px bg-bk-gold/10" />

          {/* Section 02: KPIs */}
          <section id="metrics" className="py-32">
            <SectionHeader 
              number="Section 02 — Success Metrics"
              title="KPI Targets"
              desc="Baseline conversion benchmarks this website must hit within 90 days of launch. All tracked via Google Analytics 4."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {KPIS.map((kpi, i) => (
                <KPICard key={kpi.label} kpi={kpi} index={i} />
              ))}
            </div>
          </section>

          <div className="h-px bg-bk-gold/10" />

          {/* Section 03: Architecture */}
          <section id="architecture" className="py-32">
            <SectionHeader 
              number="Section 03 — Architecture"
              title="Site Map & Page Priority"
              desc="Full page inventory with conversion priority ratings and purpose for each route. Gemini 2.5 Pro generates content and personalization."
            />
            <div className="flex flex-col gap-4">
              {PAGES.map((page, i) => (
                <PageRow key={page.name} page={page} index={i} />
              ))}
            </div>
          </section>

          {/* Section 04: Conversion Blocks */}
          <section id="conversion" className="py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader 
                  number="Section 04 — Conversion"
                  title="The Flame-Grilled Checkout"
                  desc="We've optimized the ordering flow to be the fastest in the QSR industry. 3 taps from hunger to order confirmed."
                />
                <div className="space-y-6">
                  {[
                    { title: 'One-Tap Reorder', desc: 'AI remembers your last 3 orders and surfaces them on the homepage.' },
                    { title: 'Smart Upsells', desc: 'Gemini analyzes your cart to suggest the perfect pairing in real-time.' },
                    { title: 'Live Tracker', desc: 'Real-time GPS tracking from the broiler to your front door.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-bk-flame flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-condensed font-black text-bk-cream uppercase tracking-wider">{item.title}</h4>
                        <p className="text-bk-cream/40 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-bk-flame/20 to-bk-gold/10 rounded-2xl border border-bk-gold/20 overflow-hidden flex items-center justify-center group">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10 text-center"
                  >
                    <Crown className="w-32 h-32 text-bk-gold mx-auto mb-6 drop-shadow-[0_0_30px_rgba(245,166,35,0.5)]" />
                    <div className="font-heading text-4xl text-white uppercase tracking-tight">Join the Kingdom</div>
                    <div className="font-accent text-bk-gold tracking-widest mt-2">EARN CROWNS ON EVERY BITE</div>
                  </motion.div>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Footer */}
          <section className="pb-32">
            <div className="relative bg-gradient-to-br from-bk-flame to-bk-brown rounded-3xl p-12 md:p-24 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
              <div className="relative z-10">
                <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] leading-none text-white uppercase mb-8">
                  Ready to Rule<br />The Broiler?
                </h2>
                <p className="text-white/80 text-lg max-w-xl mx-auto mb-12">
                  Start building the next generation of Burger King's digital empire today. Powered by Google AI.
                </p>
                <button className="bg-white text-bk-flame font-condensed font-black px-12 py-5 rounded-sm text-xl uppercase tracking-widest hover:bg-bk-cream transition-all transform hover:scale-105 shadow-2xl">
                  Get Started Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-bk-dark border-t border-bk-gold/10 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-bk-flame rounded-full flex items-center justify-center">
                  <Flame className="text-white w-5 h-5" />
                </div>
                <span className="font-heading text-xl text-bk-gold tracking-tight">BURGER KING</span>
              </div>
              <p className="text-bk-cream/40 max-w-sm leading-relaxed">
                TM & Copyright 2026 Burger King Corporation. All Rights Reserved. Flame-grilled since 1954.
              </p>
            </div>
            <div>
              <h5 className="font-condensed font-black text-bk-cream uppercase tracking-widest mb-6">Company</h5>
              <ul className="space-y-3 text-bk-cream/40 text-sm">
                <li><a href="#" className="hover:text-bk-gold transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-bk-gold transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-bk-gold transition-colors">Franchising</a></li>
                <li><a href="#" className="hover:text-bk-gold transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-condensed font-black text-bk-cream uppercase tracking-widest mb-6">Support</h5>
              <ul className="space-y-3 text-bk-cream/40 text-sm">
                <li><a href="#" className="hover:text-bk-gold transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-bk-gold transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-bk-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-bk-gold transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-bk-gold/5 gap-6">
            <div className="flex gap-6">
              {/* Social Icons Placeholder */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-bk-flame/20 hover:border-bk-flame transition-all cursor-pointer">
                  <Star className="w-4 h-4 text-bk-cream/60" />
                </div>
              ))}
            </div>
            <div className="text-bk-cream/20 text-xs tracking-widest uppercase">
              Built with ✦ Gemini 2.5 Pro
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
