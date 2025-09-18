import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
        <p className="text-xl text-gray-300 mb-10">
          Join thousands of businesses already using AI to scale their marketing efforts and drive unprecedented
          growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Free Trial
          </button>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
            Talk to Sales
          </Link>
        </div>
        <p className="mt-6 text-gray-400 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  )
}
