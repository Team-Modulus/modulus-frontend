import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, RotateCcw, Clock, DollarSign, Trash2, CheckCircle, XCircle } from 'lucide-react';

const RefundsReturnsPage = () => {
  const [returns, setReturns] = useState([
    {
      id: 'R001',
      customer: 'Alex Johnson',
      product: 'Wireless Headphones',
      reason: 'Defective',
      amount: 89.99,
      status: 'Processing',
      refundAmount: 89.99
    },
    {
      id: 'R002',
      customer: 'Maria Garcia',
      product: 'Smart Watch',
      reason: 'Wrong Size',
      amount: 199.99,
      status: 'Approved',
      refundAmount: 199.99
    },
    {
      id: 'R003',
      customer: 'Tom Wilson',
      product: 'Laptop Stand',
      reason: 'Not as expected',
      amount: 45.00,
      status: 'Completed',
      refundAmount: 45.00
    },
    {
      id: 'R004',
      customer: 'Sophie Brown',
      product: 'Phone Case',
      reason: 'Changed mind',
      amount: 24.99,
      status: 'Processing',
      refundAmount: 24.99
    }
  ]);

  const metrics = [
    {
      title: 'Return Rate',
      value: '8.2%',
      change: '-1.1% vs last month',
      positive: true,
      icon: RotateCcw
    },
    {
      title: 'Pending Returns',
      value: '23',
      change: '+5 this week',
      positive: false,
      icon: Clock
    },
    {
      title: 'Refund Amount',
      value: '$2,847',
      change: '+$350 this month',
      positive: false,
      icon: DollarSign
    }
  ];

  const returnReasons = [
    { reason: 'Defective', count: 45, percentage: 34.1, color: 'bg-red-400', hoverColor: 'bg-red-500' },
    { reason: 'Wrong Size', count: 32, percentage: 24.2, color: 'bg-orange-400', hoverColor: 'bg-orange-500' },
    { reason: 'Not as expected', count: 28, percentage: 21.2, color: 'bg-yellow-400', hoverColor: 'bg-yellow-500' },
    { reason: 'Changed mind', count: 15, percentage: 11.4, color: 'bg-blue-400', hoverColor: 'bg-blue-500' },
    { reason: 'Damaged in shipping', count: 12, percentage: 9.1, color: 'bg-green-400', hoverColor: 'bg-green-500' }
  ];

  const [hoveredReason, setHoveredReason] = useState(null);

  const getStatusBadge = (status) => {
    const statusConfig = {
      Processing: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
      Approved: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
      Completed: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' }
    };
    
    const config = statusConfig[status] || statusConfig.Processing;
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.text} ${config.border}`}>
        {status}
      </span>
    );
  };

  const handleApprove = (id) => {
    setReturns(returns.map(ret => 
      ret.id === id ? { ...ret, status: 'Approved' } : ret
    ));
  };

  const handleDelete = (id) => {
    setReturns(returns.filter(ret => ret.id !== id));
  };

  const maxCount = Math.max(...returnReasons.map(r => r.count));

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refunds & Returns</h1>
        <p className="text-gray-600">Manage customer returns and refund requests</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
                <Icon className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
                <div className={`flex items-center text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.positive ? (
                    <ArrowDownLeft className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Returns */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Recent Returns</h2>
          <p className="text-sm text-gray-600">Manage refund and return requests</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Return ID</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Customer</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Product</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Amount</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {returns.map((returnItem) => (
                <tr key={returnItem.id} className="border-b border-gray-100">
                  <td className="py-4">
                    <div className="flex items-center">
                      <RotateCcw className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">{returnItem.id}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm font-medium text-gray-900">{returnItem.customer}</div>
                    <div className="text-xs text-gray-500">Reason: {returnItem.reason}</div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm text-gray-900">{returnItem.product}</div>
                    <div className="text-xs text-gray-500">Refund Amount</div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm font-medium text-gray-900">${returnItem.amount}</div>
                    <div className="text-xs text-gray-500">${returnItem.refundAmount}</div>
                  </td>
                  <td className="py-4">
                    {getStatusBadge(returnItem.status)}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      {returnItem.status === 'Processing' && (
                        <button
                          onClick={() => handleApprove(returnItem.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                        >
                          Approve
                        </button>
                      )}
                      {returnItem.status !== 'Processing' && (
                        <button
                          disabled
                          className="bg-gray-100 text-gray-400 px-3 py-1 rounded text-xs font-medium cursor-not-allowed"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(returnItem.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Return Reasons Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Return Reasons</h2>
          <p className="text-sm text-gray-600">Common reasons for returns</p>
        </div>

        {/* Vertical Bar Chart */}
        <div className="relative">
          {/* Y-axis labels */}
          <div className="flex">
            <div className="flex flex-col justify-between h-64 w-8 text-xs text-gray-500 pr-2">
              <span>60</span>
              <span>45</span>
              <span>30</span>
              <span>15</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="flex-1 relative h-64">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[0, 25, 50, 75, 100].map((percentage) => (
                  <div
                    key={percentage}
                    className="absolute w-full border-t border-gray-100"
                    style={{ bottom: `${percentage}%` }}
                  />
                ))}
              </div>

              {/* Bars container */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4">
                {returnReasons.map((item, index) => (
                  <div key={index} className="flex flex-col items-center" style={{ width: '18%' }}>
                    {/* Bar */}
                    <div className="w-full relative group mb-3">
                      <div
                        className="bg-red-400 hover:bg-red-500 transition-colors duration-200 rounded-t cursor-pointer relative w-full"
                        style={{
                          height: `${(item.count / 60) * 256}px`
                        }}
                        onMouseEnter={() => setHoveredReason(index)}
                        onMouseLeave={() => setHoveredReason(null)}
                      >
                        {/* Hover tooltip */}
                        {hoveredReason === index && (
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                            {item.count} returns
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="absolute -bottom-16 left-0 right-0 flex justify-between px-4">
                {returnReasons.map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 text-center" style={{ width: '18%' }}>
                    <div className="leading-tight">{item.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Summary */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-gray-900">
                {returnReasons.reduce((sum, r) => sum + r.count, 0)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Total Returns</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-red-600">
                {returnReasons[0].count}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Highest Count</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-blue-600">
                {Math.round(returnReasons.reduce((sum, r) => sum + r.count, 0) / returnReasons.length)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Average</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundsReturnsPage;