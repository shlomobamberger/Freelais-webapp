import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Freelais
            <span className="text-blue-600"> AI Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your intelligent companion for freelancing success. Powered by AI to help you work smarter, not harder.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Add to Chrome - It&#39;s Free
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features that empower freelancers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Freelais Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your freelancing journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of freelancers who are already using Freelais</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Install Freelais Now
          </button>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    icon: "💡",
    title: "Smart Suggestions",
    description: "Get real-time AI-powered suggestions for better client communication and project management."
  },
  {
    icon: "⚡",
    title: "Automated Tasks",
    description: "Automate repetitive tasks and focus on what matters most - delivering great work."
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description: "Track your productivity and earnings with detailed insights and recommendations."
  }
];

const steps = [
  {
    title: "Install Extension",
    description: "Add Freelais to Chrome with just one click"
  },
  {
    title: "Connect Your Tools",
    description: "Integrate with your favorite freelancing platforms"
  },
  {
    title: "Boost Productivity",
    description: "Let AI assist you in daily freelancing tasks"
  }
];