import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-3 items-center">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Launch Your SaaS Faster
              </h1>
              <p className="flex-1 text-gray-500 md:text-xl dark:text-gray-400">
                Our boilerplate gives you the perfect foundation to build your next big idea. Start coding in minutes, not hours.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="lg" asChild>
                <Link href="/#pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Live Demo
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="text-green-500" />
              <span>14-day free trial</span>
              <CheckCircle className="text-green-500" />
              <span>No credit card required</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <div className="">
              <Image
                src="/hero.png"
                alt="Hero"
                className="h-auto rounded-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}