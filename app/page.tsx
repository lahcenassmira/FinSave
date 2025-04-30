import Link from "next/link";
import { ArrowRight, PiggyBank, LineChart, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container">
        <MainNav />
        <MobileNav />
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Save Money <span className="text-primary">Automatically</span> With Every Purchase
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  FinSave rounds up your daily transactions and automatically saves the spare change, helping you build wealth without thinking about it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/register">
                    <Button size="lg" className="animate-slide-up" style={{animationDelay: "0.1s"}}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" size="lg" className="animate-slide-up" style={{animationDelay: "0.2s"}}>
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="relative w-full max-w-[500px] aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PiggyBank className="h-32 w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How FinSave Works</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Building wealth doesn't have to be complicated. We make saving effortless with our innovative features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-card rounded-lg p-6 shadow-sm card-hover animate-slide-up" style={{animationDelay: "0.1s"}}>
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
                  <PiggyBank className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Auto-Savings</h3>
                <p className="text-muted-foreground">
                  We round up every transaction to the nearest dollar and automatically save the difference in your vault.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm card-hover animate-slide-up" style={{animationDelay: "0.2s"}}>
                <div className="p-3 bg-secondary/10 rounded-lg inline-flex mb-4">
                  <LineChart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spending Insights</h3>
                <p className="text-muted-foreground">
                  Visualize your spending habits with intuitive charts and breakdowns by category.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm card-hover animate-slide-up" style={{animationDelay: "0.3s"}}>
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Tips</h3>
                <p className="text-muted-foreground">
                  Get personalized money-saving recommendations based on your spending patterns.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Building Wealth Effortlessly</h2>
                <p className="text-muted-foreground md:text-lg">
                  FinSave makes it easy to develop healthy financial habits without changing your lifestyle.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Secure Banking</h3>
                      <p className="text-sm text-muted-foreground">
                        Bank-level security protects your financial data and transactions at all times.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Watch Your Savings Grow</h3>
                      <p className="text-sm text-muted-foreground">
                        Track your progress in real-time and see how small amounts add up over time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Set It and Forget It</h3>
                      <p className="text-sm text-muted-foreground">
                        Once setup, the system works in the background without any manual intervention.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link href="/register">
                    <Button>Create Free Account</Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* App screenshot placeholder */}
                  <div className="w-3/4 h-3/4 rounded-lg bg-white dark:bg-card shadow-2xl overflow-hidden">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <div className="space-y-1">
                          <div className="h-4 w-20 bg-primary/20 rounded"></div>
                          <div className="h-6 w-32 bg-foreground/20 rounded"></div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="h-full bg-muted rounded-lg"></div>
                        <div className="h-full space-y-2">
                          <div className="h-24 bg-muted rounded-lg"></div>
                          <div className="h-24 bg-muted rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Users Love FinSave
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                See what our community says about how FinSave has changed their financial lives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I was never good at saving money, but FinSave changed that completely. The round-up feature is so effortless, I've saved $2,300 in just 10 months."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The spending analytics helped me identify where my money was going, and the smart tips gave me actionable advice that saved me over $200 monthly."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/20"></div>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I'm impressed by how simple yet powerful FinSave is. It feels like having a financial advisor in my pocket. The automatic savings has been a game-changer."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20"></div>
                  <div>
                    <p className="font-medium">Michael Taylor</p>
                    <p className="text-sm text-muted-foreground">Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Your Savings Journey Today
            </h2>
            <p className="max-w-[700px] mx-auto mt-4 mb-8 text-primary-foreground/90 md:text-lg">
              Join thousands of users who are saving money effortlessly with FinSave. Sign up in less than 2 minutes.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="animate-pulse">
                Create Your Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  );
}