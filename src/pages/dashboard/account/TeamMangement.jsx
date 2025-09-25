import { useState } from 'react';
import { UserPlus, MoreVertical, Trash2, ChevronDown } from 'lucide-react';

export default function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      role: 'Owner',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b5146ad8?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@company.com',
      role: 'Viewer',
      status: 'Pending',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    }
  ]);

  const [showDropdown, setShowDropdown] = useState(null);

  const handleRoleChange = (memberId, newRole) => {
    setTeamMembers(prev => 
      prev.map(member => 
        member.id === memberId ? { ...member, role: newRole } : member
      )
    );
    setShowDropdown(null);
  };

  const handleRemoveMember = (memberId) => {
    setTeamMembers(prev => prev.filter(member => member.id !== memberId));
    setShowDropdown(null);
  };

  const rolePermissions = [
    {
      role: 'Owner',
      permissions: [
        'Full access to all features',
        'Manage team and billing',
        'Delete account'
      ]
    },
    {
      role: 'Admin',
      permissions: [
        'View and edit all data',
        'Manage integrations',
        'Invite team members'
      ]
    },
    {
      role: 'Viewer',
      permissions: [
        'View dashboards and reports',
        'Export data',
        'No editing permissions'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
          <p className="text-gray-600">Manage team members and permissions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Team Members Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
              <p className="text-sm text-gray-600">Manage who has access to your account</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Member
            </button>
          </div>

          <div className="divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <div key={member.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowDropdown(showDropdown === member.id ? null : member.id)}
                      className="inline-flex items-center px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {member.role}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    {showDropdown === member.id && (
                      <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => handleRoleChange(member.id, 'Owner')}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Owner
                        </button>
                        <button
                          onClick={() => handleRoleChange(member.id, 'Admin')}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Admin
                        </button>
                        <button
                          onClick={() => handleRoleChange(member.id, 'Viewer')}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Viewer
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                    {member.status}
                  </span>
                  
                  {member.role !== 'Owner' && (
                    <button
                      onClick={() => handleRemoveMember(member.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Permissions Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Permissions</h3>
            <p className="text-sm text-gray-600">Role-based access control</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {rolePermissions.map((roleInfo, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{roleInfo.role}</h4>
                <ul className="space-y-2">
                  {roleInfo.permissions.map((permission, permIndex) => (
                    <li key={permIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span className="text-sm text-gray-700">{permission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Management Best Practices</h3>
          <p className="text-gray-600 mb-4">
            Assign the minimum permissions necessary for each team member's role. Regularly review and update 
            access permissions to maintain security and ensure team members have appropriate access levels.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}