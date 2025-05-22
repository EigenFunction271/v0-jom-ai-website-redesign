import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, Download, Play, Upload, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">JOM AI</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
                Products
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                Testimonials
              </Link>
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#demo">Watch Demo</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Get Free CV Analysis</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Recruitment agencies and enterprise HR teams use JOM to screen 10x more candidates in half the time
                  </h1>
                  <p className="text-lg text-muted-foreground md:text-xl">
                    Join companies processing millions of CVs who've cut screening time by 70% and saved millions in
                    operational costs
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contact" className="gap-2">
                      Get Free CV Analysis
                      <Calendar className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#demo" className="gap-2">
                      Watch 2-Min Demo
                      <Play className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                      >
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          width={32}
                          height={32}
                          alt="Client logo"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">Trusted by Europe's largest job boards</div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg border shadow-lg md:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="JOM AI Platform"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="container mt-16">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 text-center">
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">CVs processed monthly</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 text-center">
                <div className="text-3xl font-bold text-primary">£5M+</div>
                <div className="text-sm text-muted-foreground">Saved in operational costs</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 text-center">
                <div className="text-3xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Reduction in screening time</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 text-center">
                <div className="text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Less manual processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="agencies" className="w-full">
              <div className="mb-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tailored Solutions for Your Business
                </h2>
                <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                  Choose the solution that fits your specific needs
                </p>
                <TabsList className="mt-8">
                  <TabsTrigger value="agencies">For Recruitment Agencies</TabsTrigger>
                  <TabsTrigger value="enterprises">For Enterprise HR</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="agencies" className="mt-0">
                <div className="rounded-lg border bg-blue-50 p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Win more clients by delivering shortlists 3x faster than competitors
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Process hundreds of CVs in minutes, not days",
                          "Automatically match candidates to job requirements",
                          "Deliver higher quality shortlists to clients",
                          "Scale your operations without increasing headcount",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-4 w-fit" asChild>
                        <Link href="#contact">Book Agency Demo</Link>
                      </Button>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="relative h-[300px] w-full overflow-hidden rounded-lg border shadow-lg">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Agency Dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="enterprises" className="mt-0">
                <div className="rounded-lg border bg-blue-50 p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Fill critical roles faster while reducing per-hire recruiting costs by 60%
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Automate CV screening and candidate ranking",
                          "Integrate with your existing ATS system",
                          "Reduce time-to-hire for critical positions",
                          "Improve quality of hire with better matching",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-4 w-fit" asChild>
                        <Link href="#contact">Book Enterprise Demo</Link>
                      </Button>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="relative h-[300px] w-full overflow-hidden rounded-lg border shadow-lg">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Enterprise Dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                See how our clients have transformed their recruitment processes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image src="/placeholder.svg?height=300&width=200" alt="Song Wei" fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="mb-4 text-lg italic">
                          "JOM AI has saved us £5 million in operational costs by automating our data entry processes.
                          The accuracy and speed are unmatched."
                        </blockquote>
                      </div>
                      <div>
                        <p className="font-bold">Song Wei</p>
                        <p className="text-sm text-muted-foreground">AI Lead at Europe's largest job board</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image src="/placeholder.svg?height=300&width=200" alt="How Jern" fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="mb-4 text-lg italic">
                          "We've automated our backoffice operations and saved 30% of manual processing time. JOM AI has
                          been a game-changer for our business."
                        </blockquote>
                      </div>
                      <div>
                        <p className="font-bold">How Jern</p>
                        <p className="text-sm text-muted-foreground">CTO at Asia's largest job board</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Products */}
        <section id="products" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Products</h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                Powerful AI solutions designed for recruitment professionals
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=500"
                    alt="AI CV Extraction"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">AI CV Extraction</h3>
                  <p className="mb-4 text-muted-foreground">
                    Extract detailed candidate information automatically and accurately
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Parse CVs in any format (PDF, Word, HTML)",
                      "Extract skills, experience, education and more",
                      "99% accuracy rate on structured data",
                      "Support for multiple languages",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6" variant="outline" asChild>
                    <Link href="#contact" className="gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=500"
                    alt="AI Candidate Matching"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">AI Candidate Matching</h3>
                  <p className="mb-4 text-muted-foreground">Match the best candidates to the best jobs automatically</p>
                  <ul className="space-y-2">
                    {[
                      "Semantic understanding of job requirements",
                      "Rank candidates by match score and fit",
                      "Identify skills gaps and training opportunities",
                      "Eliminate unconscious bias in screening",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6" variant="outline" asChild>
                    <Link href="#contact" className="gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                A simple 3-step process to transform your recruitment workflow
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative rounded-lg border bg-background p-6">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Upload CVs</h3>
                <p className="text-muted-foreground">
                  Upload CVs in bulk or connect your ATS system for seamless integration
                </p>
              </div>

              <div className="relative rounded-lg border bg-background p-6">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI extracts and analyzes candidate data with industry-leading accuracy
                </p>
              </div>

              <div className="relative rounded-lg border bg-background p-6">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Get Results</h3>
                <p className="text-muted-foreground">
                  Receive ranked shortlists with match scores and detailed candidate insights
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg" asChild>
                <Link href="#demo" className="gap-2">
                  Watch Demo <Play className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Calculate Your ROI</h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                See how much time and money you could save with JOM AI
              </p>
            </div>

            <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Number of CVs processed monthly</label>
                    <input type="range" min="100" max="10000" step="100" defaultValue="1000" className="w-full" />
                    <div className="mt-1 flex justify-between text-xs">
                      <span>100</span>
                      <span>1,000</span>
                      <span>10,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Average time spent per CV (minutes)</label>
                    <input type="range" min="1" max="30" step="1" defaultValue="10" className="w-full" />
                    <div className="mt-1 flex justify-between text-xs">
                      <span>1</span>
                      <span>10</span>
                      <span>30</span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Average hourly cost of recruiter (£)</label>
                    <input type="range" min="10" max="100" step="5" defaultValue="25" className="w-full" />
                    <div className="mt-1 flex justify-between text-xs">
                      <span>£10</span>
                      <span>£25</span>
                      <span>£100</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6 rounded-lg bg-blue-50 p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Time saved monthly</p>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <p className="text-2xl font-bold">116 hours</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Cost saved monthly</p>
                    <p className="text-2xl font-bold">£2,900</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Annual savings</p>
                    <p className="text-3xl font-bold text-primary">£34,800</p>
                  </div>

                  <Button size="lg" asChild>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Team */}
        <section id="about" className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                Experienced professionals from leading AI companies globally
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-64 w-full md:h-auto md:w-1/3">
                      <Image src="/placeholder.svg?height=300&width=200" alt="Song Wei" fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="mb-1 text-xl font-bold">Song Wei</h3>
                        <p className="mb-4 text-sm text-muted-foreground">Co-Founder & CEO</p>
                        <p className="text-muted-foreground">
                          Former AI Lead at Europe's largest job board with extensive experience in machine learning and
                          recruitment technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-64 w-full md:h-auto md:w-1/3">
                      <Image src="/placeholder.svg?height=300&width=200" alt="How Jern" fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="mb-1 text-xl font-bold">How Jern</h3>
                        <p className="mb-4 text-sm text-muted-foreground">Co-Founder & CTO</p>
                        <p className="text-muted-foreground">
                          Technical leader with a background in AI and automation systems for Asia's largest job
                          platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section id="demo" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See JOM AI in Action</h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                Watch our 2-minute demo to see how JOM AI transforms recruitment
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-video overflow-hidden rounded-lg border shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 rounded-full bg-white/10 px-6 text-white hover:bg-white/20"
                  >
                    <Play className="h-6 w-6" />
                    <span>Watch Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform your recruitment process?
                </h2>
                <p className="text-lg text-primary-foreground/80">
                  Book a free consultation with our team to see how JOM AI can help you screen more candidates in less
                  time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Free consultation always provided before any project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Custom demo for your specific use case</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="#" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Book a Call
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="#" className="gap-2">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Get in Touch</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">First Name</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">Last Name</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Company</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">I'm interested in</label>
                    <select className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                      <option>AI CV Extraction</option>
                      <option>AI Candidate Matching</option>
                      <option>Both Products</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900">Message</label>
                    <textarea
                      className="h-24 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-8 md:py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <span className="text-xl font-bold">JOM AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered CV screening and candidate matching solutions for recruitment agencies and enterprise HR
                teams.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    AI CV Extraction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    AI Candidate Matching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Agency Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} JOM AI. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
