import { Facebook, Instagram, Twitter, Youtube, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function SocialMediaDashboard() {
  // Sample data for engagement chart
  const engagementData = [
    { day: 'Mon', facebook: 4.1, instagram: 6.3, twitter: 3.2, youtube: 2.8 },
    { day: 'Tue', facebook: 3.8, instagram: 6.1, twitter: 2.9, youtube: 2.6 },
    { day: 'Wed', facebook: 4.3, instagram: 6.5, twitter: 2.4, youtube: 3.1 },
    { day: 'Thu', facebook: 3.9, instagram: 6.8, twitter: 2.7, youtube: 2.9 },
    { day: 'Fri', facebook: 4.4, instagram: 7.1, twitter: 3.2, youtube: 3.0 },
    { day: 'Sat', facebook: 4.1, instagram: 6.9, twitter: 2.6, youtube: 2.7 },
    { day: 'Sun', facebook: 3.8, instagram: 6.2, twitter: 2.8, youtube: 2.5 }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      followers: '12,500',
      growth: '+8.2%',
      engagement: '4.1%',
      posts: '15 posts',
      period: 'This month'
    },
    {
      name: 'Instagram', 
      icon: Instagram,
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200',
      followers: '8,900',
      growth: '+12.5%',
      engagement: '6.3%',
      posts: '22 posts',
      period: 'This month'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      iconColor: 'text-sky-500',
      borderColor: 'border-sky-200',
      followers: '3,200',
      growth: '+3.1%',
      engagement: '2.8%',
      posts: '8 posts',
      period: 'This month'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      iconColor: 'text-red-600',
      borderColor: 'border-red-200',
      followers: '1,850',
      growth: '+15.3%',
      engagement: '8.7%',
      posts: '4 posts',
      period: 'This month'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Social Media</h1>
            <p className="text-gray-600">Monitor your social media presence and engagement</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Post
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className={`bg-white rounded-lg p-6 shadow-sm border-2 ${platform.borderColor}`}>
              {/* Platform Header */}
              <div className="flex items-center mb-6">
                <platform.icon className={`w-5 h-5 ${platform.iconColor} mr-2`} />
                <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
              </div>

              {/* Followers */}
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-900 mb-1">{platform.followers}</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>

              {/* Growth and Engagement */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-semibold text-green-600">{platform.growth}</p>
                  <p className="text-xs text-gray-500">Growth</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{platform.engagement}</p>
                  <p className="text-xs text-gray-500">Engagement</p>
                </div>
              </div>

              {/* Posts */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-900">{platform.posts}</p>
                <p className="text-xs text-gray-500">{platform.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Social Media Engagement</h3>
            <p className="text-sm text-gray-600">Engagement rates across platforms over time</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  domain={[0, 8]}
                />
                <Line 
                  type="monotone" 
                  dataKey="instagram" 
                  stroke="#EC4899" 
                  strokeWidth={2}
                  dot={{ fill: '#EC4899', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="facebook" 
                  stroke="#2563EB" 
                  strokeWidth={2}
                  dot={{ fill: '#2563EB', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="twitter" 
                  stroke="#0EA5E9" 
                  strokeWidth={2}
                  dot={{ fill: '#0EA5E9', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="youtube" 
                  stroke="#DC2626" 
                  strokeWidth={2}
                  dot={{ fill: '#DC2626', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Instagram</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Facebook</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Twitter</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}