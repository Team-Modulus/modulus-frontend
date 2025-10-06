import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Privacy Policy - Modulus.ai
        </h1>

        <p className="mb-4 text-gray-700">
          At <span className="font-semibold">Modulus.ai</span>, we value your privacy. 
          This Privacy Policy explains how we collect, use, and protect your information 
          when you use our services, including integrations with platforms such as 
          Facebook Ads, Google Ads, and others.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Your name, email address, and contact details.</li>
          <li>Access tokens and account information from connected platforms (e.g., Facebook, Google).</li>
          <li>Usage analytics and interaction data within our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>To provide insights and analytics for your connected ad accounts.</li>
          <li>To enhance user experience and improve our services.</li>
          <li>To ensure account security and prevent unauthorized access.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Sharing & Disclosure</h2>
        <p className="mb-4 text-gray-700">
          We do not sell your personal information. We may share your data only with:
        </p>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Service providers who assist us in running our platform securely.</li>
          <li>Facebook, Google, and other integrated platforms — as authorized by you.</li>
          <li>Legal authorities, if required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Retention</h2>
        <p className="mb-4 text-gray-700">
          We retain your data only as long as necessary to provide our services 
          or as required by applicable law. You may request deletion of your data 
          anytime by following the process in our Data Deletion Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Security</h2>
        <p className="mb-4 text-gray-700">
          We use modern encryption, secure storage, and best practices to protect 
          your data from unauthorized access or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
        <p className="mb-4 text-gray-700">
          You can access, update, or delete your personal information by contacting us 
          at <a href="mailto:support@modulus.ai" className="text-blue-600 hover:underline">support@modulus.ai</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Updates to This Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy periodically. All updates will be posted on this page 
          with a revised date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
        <p className="text-gray-700">
          For any questions or concerns about this Privacy Policy, contact us at: <br />
          <a href="mailto:support@modulus.ai" className="text-blue-600 hover:underline">
            support@modulus.ai
          </a>
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Last Updated: October 2025
        </p>
      </div>
    </div>
  );
}
