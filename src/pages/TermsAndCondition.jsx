import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Terms and Conditions - Modulus.ai
        </h1>

        <p className="mb-4 text-gray-700">
          Welcome to <span className="font-semibold">Modulus.ai</span>. By using
          our platform, you agree to the following Terms and Conditions. Please
          read them carefully before using our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4 text-gray-700">
          By accessing or using Modulus.ai, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions, as
          well as our Privacy Policy. If you do not agree, please discontinue
          using our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. Description of Service
        </h2>
        <p className="mb-4 text-gray-700">
          Modulus.ai is a data-driven platform designed to help businesses
          analyze and manage their advertising data from multiple channels,
          including Facebook Ads, Google Ads, and other integrations. The
          services we provide may include analytics, automation, and insights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. User Responsibilities
        </h2>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>You must provide accurate information during registration.</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account and password.
          </li>
          <li>
            You agree not to misuse, reverse-engineer, or attempt to breach our
            systems.
          </li>
          <li>
            You are responsible for ensuring compliance with third-party
            platforms (e.g., Facebook, Google) you connect to Modulus.ai.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4. Third-Party Integrations
        </h2>
        <p className="mb-4 text-gray-700">
          Our services may connect with external platforms such as Facebook Ads
          or Google Ads. By authorizing these integrations, you allow Modulus.ai
          to access relevant data as permitted by the respective platform’s API
          and policies. We do not modify or post data on your behalf without
          your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          5. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-700">
          All content, software, trademarks, and materials provided through
          Modulus.ai are the intellectual property of Modulus.ai and may not be
          copied, modified, or distributed without written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          6. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700">
          Modulus.ai and its team are not liable for any direct, indirect, or
          incidental damages resulting from your use or inability to use the
          platform. We make no guarantees regarding data accuracy or availability
          of third-party APIs.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          7. Termination
        </h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to suspend or terminate access to Modulus.ai at
          any time if you violate these Terms or misuse our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Privacy</h2>
        <p className="mb-4 text-gray-700">
          Your use of our services is also governed by our{" "}
          <a
            href="/privacy-policy"
            className="text-blue-600 hover:underline font-medium"
          >
            Privacy Policy
          </a>
          , which explains how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          9. Modifications to Terms
        </h2>
        <p className="mb-4 text-gray-700">
          We may revise these Terms and Conditions from time to time. All
          changes will be posted on this page, and continued use of the service
          means you accept those updates.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          10. Governing Law
        </h2>
        <p className="mb-4 text-gray-700">
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of India. Any disputes arising from the use
          of our platform will be subject to the jurisdiction of Indian courts.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">11. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms, contact us at: <br />
          <a
            href="mailto:support@modulus.ai"
            className="text-blue-600 hover:underline"
          >
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
