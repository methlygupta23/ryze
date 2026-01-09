import React, { useState } from 'react';
import { Sparkles, TrendingUp, Zap, Clock, Target, BarChart3, ChevronRight, Menu, X, ArrowRight, Check, Star, Play } from 'lucide-react';

const RyzeWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('optimize');

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Ryze AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition transform">
              Get Started
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">AI-Powered Ad Management</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Let AI <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Manage</span> Your Ads
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Autonomous AI that optimizes campaigns across Google, Meta, ChatGPT, and more. Get better ROAS while your team focuses on strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition transform flex items-center justify-center space-x-2">
              <span>Start Free Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>2000+ clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>$500M+ ad spend managed</span>
            </div>
          </div>
        </div>

        {/* Platform Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-sm font-semibold text-gray-400">TRUSTED ON</div>
          <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">Google Ads</div>
          <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">Meta</div>
          <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">ChatGPT</div>
          <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">LinkedIn</div>
          <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">Perplexity</div>
        </div>
      </div>
    </section>
  );

  // Stats Section
  const StatsSection = () => (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '2000+', label: 'Active Clients' },
            { value: '700+', label: 'Agencies' },
            { value: '$500M+', label: 'Ad Spend Managed' },
            { value: '63%', label: 'Avg ROAS Increase' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need, Automated</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI that works 24/7 to optimize your campaigns, generate creatives, and maximize ROAS</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: '24/7 Optimization',
              description: 'AI continuously monitors performance and makes real-time adjustments to maximize ROAS across all platforms',
              color: 'purple'
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: 'Creative Generation',
              description: 'Generate high-performing ad creatives with AI-powered designs, copy, and asset recommendations',
              color: 'blue'
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Smart Insights',
              description: 'Get actionable recommendations on what to fix, pause, or scale based on performance data',
              color: 'indigo'
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: 'Budget Allocation',
              description: 'Automatically redistribute budget to top-performing campaigns and pause underperformers',
              color: 'violet'
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: 'Auto-Reports',
              description: 'Beautiful reports that build themselves, updated in real-time with key metrics and insights',
              color: 'pink'
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: 'Account Audits',
              description: 'Instant audits that identify wasted spend, tracking issues, and optimization opportunities',
              color: 'cyan'
            }
          ].map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition text-${feature.color}-600`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // How It Works Section
  const HowItWorksSection = () => (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Ryze Works</h2>
          <p className="text-xl text-gray-600">Connect your accounts and let AI do the heavy lifting</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: '01',
              title: 'Connect Your Accounts',
              description: 'Link your Google Ads, Meta, ChatGPT, and other advertising platforms in minutes'
            },
            {
              step: '02',
              title: 'AI Analyzes & Optimizes',
              description: 'Our AI continuously monitors performance, identifies issues, and implements optimizations automatically'
            },
            {
              step: '03',
              title: 'Watch ROAS Grow',
              description: 'Get better results with less effort. Track improvements in real-time dashboards and reports'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-bold text-purple-100 mb-4">{item.step}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
              {idx < 2 && (
                <ChevronRight className="hidden md:block absolute -right-6 top-12 w-8 h-8 text-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Interactive Demo Section
  const InteractiveDemoSection = () => (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See Ryze in Action</h2>
          <p className="text-xl text-gray-600">Choose what you want to see</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'optimize', label: 'Campaign Optimization' },
            { id: 'creative', label: 'Creative Generation' },
            { id: 'insights', label: 'AI Insights' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100">
          {activeTab === 'optimize' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Live Campaign Optimizations</h3>
              {[
                { action: 'Pause 27 queries burning $1.8k with 0 conversions', impact: '+$2.5k/mo', status: 'Applied' },
                { action: 'Split Brand (ROAS 8.2) from Non-Brand (ROAS 1.6)', impact: '+$3.7k/mo', status: 'Applied' },
                { action: 'Raise cap on Brand US (Lost IS Budget 62%)', impact: '+$3.2k/mo', status: 'Pending' }
              ].map((opt, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <p className="font-medium">{opt.action}</p>
                    <p className="text-sm text-green-600 font-semibold mt-1">{opt.impact}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    opt.status === 'Applied' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {opt.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'creative' && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">AI-Generated Creatives</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                      <p className="text-sm text-gray-600">Ad Creative {i}</p>
                      <p className="text-xs text-green-600 font-semibold mt-2">ROAS: {(3.2 + i * 0.3).toFixed(1)}x</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Insights</h3>
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="font-semibold text-blue-900 mb-2">💡 Opportunity Detected</p>
                  <p className="text-blue-800">Your Brand campaigns have 62% lost impression share due to budget. Increasing budget by 15% could generate an additional $3.2k/month.</p>
                </div>
                <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Issue Found</p>
                  <p className="text-red-800">27 search terms have generated 0 conversions while spending $1.8k in the last 30 days. These should be paused immediately.</p>
                </div>
                <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <p className="font-semibold text-green-900 mb-2">✅ Optimization Applied</p>
                  <p className="text-green-800">Split Brand and Non-Brand campaigns to optimize bidding strategies. Expected impact: +$3.7k/month.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Marketers Worldwide</h2>
          <p className="text-xl text-gray-600">See what our customers are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Mathilde Biggs',
              role: 'CEO, MotifDigital',
              content: "Ryze's AI-driven ads outperform human optimization by a huge margin. We saw a 63% increase in ROAS after switching.",
              rating: 5
            },
            {
              name: 'Roger Dunn',
              role: 'Global Performance Lead, Rivert',
              content: 'We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.',
              rating: 5
            },
            {
              name: 'Daniel Amezquita',
              role: 'Global Ads Strategy, Glava',
              content: 'Broke down performance by asset—thumbnails, headlines, everything. Our CTR basically doubled.',
              rating: 5
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '$299',
              period: '/month',
              features: ['Up to $10k ad spend', 'Google & Meta integration', 'Basic optimization', 'Email support'],
              cta: 'Start Free Trial'
            },
            {
              name: 'Professional',
              price: '$799',
              period: '/month',
              features: ['Up to $50k ad spend', 'All platform integrations', 'Advanced AI optimization', 'Creative generation', 'Priority support'],
              cta: 'Get Started',
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: '',
              features: ['Unlimited ad spend', 'White-label options', 'Dedicated account manager', 'Custom integrations', '24/7 phone support'],
              cta: 'Contact Sales'
            }
          ].map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl border-2 ${
              plan.popular ? 'border-purple-500 shadow-2xl scale-105' : 'border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Ad Performance?</h2>
        <p className="text-xl mb-8 text-purple-100">Start your free account audit today and see what AI can do for your campaigns</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition transform">
            Get Free Audit
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white/10 transition">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Ryze AI</span>
            </div>
            <p className="text-sm text-gray-400">AI-powered ad management that works 24/7 to maximize your ROAS</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2026 Ryze AI. Crafted in San Francisco.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InteractiveDemoSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default RyzeWebsite;