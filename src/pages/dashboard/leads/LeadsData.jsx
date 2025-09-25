import React, { useState } from 'react';
import { Plus, User, Phone, ExternalLink, TrendingUp } from 'lucide-react';

const LeadsPage = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Alex Thompson',
      company: 'TechCorp',
      dealValue: 5000,
      probability: 85,
      status: 'Negotiation',
      avatar: 'AT'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      company: 'StartupXYZ',
      dealValue: 2500,
      probability: 60,
      status: 'Proposal',
      avatar: 'MG'
    },
    {
      id: 3,
      name: 'David Lee',
      company: 'GrowthCo',
      dealValue: 8200,
      probability: 90,
      status: 'Closing',
      avatar: 'DL'
    },
    {
      id: 4,
      name: 'Sophie Brown',
      company: 'InnovateInc',
      dealValue: 3750,
      probability: 40,
      status: 'Qualification',
      avatar: 'SB'
    }
  ]);

  const metrics = [
    {
      title: 'Total Leads',
      value: '142',
      change: '+23 this month',
      positive: true
    },
    {
      title: 'Qualified Leads',
      value: '67',
      change: '+12 this month',
      positive: true
    },
    {
      title: 'Pipeline Value',
      value: '$89,450',
      change: '+$15K this month',
      positive: true
    },
    {
      title: 'Close Rate',
      value: '24.5%',
      change: '+3.2% this month',
      positive: true
    }
  ];

  const pipelineData = [
    { stage: 'Qualification', count: 45, color: 'bg-yellow-400' },
    { stage: 'Proposal', count: 32, color: 'bg-blue-400' },
    { stage: 'Negotiation', count: 28, color: 'bg-orange-400' },
    { stage: 'Closing', count: 15, color: 'bg-green-400' }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      Negotiation: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200' },
      Proposal: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200' },
      Closing: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
      Qualification: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' }
    };
    
    const config = statusConfig[status] || statusConfig.Qualification;
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.text} ${config.border}`}>
        {status}
      </span>
    );
  };

  const getProbabilityColor = (probability) => {
    if (probability >= 80) return 'text-green-600';
    if (probability >= 60) return 'text-blue-600';
    if (probability >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const handleNewLead = () => {
    console.log('Opening new lead form...');
  };

  const handleCallLead = (leadName) => {
    console.log(`Calling ${leadName}...`);
  };

  const handleViewLead = (leadName) => {
    console.log(`Viewing details for ${leadName}...`);
  };

  const maxCount = Math.max(...pipelineData.map(d => d.count));

  return (
    <div className="max-w-7xl mx-auto  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leads</h1>
          <p className="text-gray-600">Manage your sales pipeline and opportunities</p>
        </div>
        <button
          onClick={handleNewLead}
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Lead</span>
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
              <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
            </div>
            <div className={`flex items-center text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      {/* Active Leads */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Active Leads</h2>
          <p className="text-sm text-gray-600">Manage your sales pipeline</p>
        </div>

        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                  <div className="text-xs text-gray-500">{lead.company}</div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">
                    ${lead.dealValue.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">Deal Value</div>
                </div>
                
                <div className="text-right">
                  <div className={`text-sm font-medium ${getProbabilityColor(lead.probability)}`}>
                    {lead.probability}%
                  </div>
                  <div className="text-xs text-gray-500">Probability</div>
                </div>

                <div className="flex items-center space-x-3">
                  {getStatusBadge(lead.status)}
                  <button 
                    onClick={() => handleCallLead(lead.name)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleViewLead(lead.name)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Pipeline */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Sales Pipeline</h2>
          <p className="text-sm text-gray-600">Pipeline by stage</p>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="space-y-4">
          <div className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wide">
            <span className="w-24">Stage</span>
            <span className="flex-1 ml-4">Progress</span>
            <span className="w-16 text-right">Count</span>
          </div>
          
          {pipelineData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-24 text-sm text-gray-900">{item.stage}</div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className={`h-6 rounded-full ${item.color} transition-all duration-500`}
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                </div>
              </div>
              <div className="w-16 text-right text-sm font-medium text-gray-900">
                {item.count}
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Summary */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-gray-900">
                {pipelineData.reduce((sum, stage) => sum + stage.count, 0)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Total Pipeline</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-green-600">
                {pipelineData.find(stage => stage.stage === 'Closing')?.count || 0}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Ready to Close</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-blue-600">
                ${((leads.reduce((sum, lead) => sum + lead.dealValue, 0) * 1000)).toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Total Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;