import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Target, BarChart3, Users, Zap, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Smart Targeting",
    description: "AI-powered audience targeting to reach the right customers at the right time"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance with detailed analytics and actionable insights"
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description: "Automate bid management and budget optimization for maximum ROI"
  },
  {
    icon: Users,
    title: "Multi-Platform",
    description: "Manage campaigns across Google, Facebook, Instagram, and more"
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Advanced brand safety controls to protect your reputation"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous optimization to improve campaign performance"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and insights to help you create winning campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <IconComponent className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}