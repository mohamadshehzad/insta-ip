// app/privacy-policy/page.js

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for insta-ip.com</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: May 18, 2025</p>

      <p className="mb-4">
        At <strong>Insta-IP</strong>, accessible from https://insta-ip.com, your privacy is one of our top priorities.
        This privacy policy document outlines the types of information that is collected and recorded by Insta-IP and how we use it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Information We Collect</h2>
      <p className="mb-2">
        We do not collect personally identifiable information such as your name, email address, or contact number.
      </p>
      <p className="mb-2">When you use our tool, we may process the following temporarily:</p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Your IP address</li>
        <li>Browser type and version</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Approximate geolocation (used for display only, not stored)</li>
      </ul>
      <p className="mb-4">
        This data is used solely to provide you with the IP lookup results. We do not store or log this information on our servers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Cookies</h2>
      <p className="mb-4">
        Like most websites, we use cookies to enhance your browsing experience and serve relevant ads.
        Cookies are small text files stored on your device that help the website remember your preferences.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Vendors</h2>
      <p className="mb-2">
        We may use third-party services that may collect non-personally identifiable information through cookies, web beacons, or similar technologies:
      </p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li><strong>Google AdSense</strong> – to serve relevant ads based on your visits to this and other sites.</li>
        <li><strong>Google Analytics</strong> – for tracking user interaction and site performance (if enabled).</li>
      </ul>
      <p className="mb-4">
        Google may use cookies known as DART cookies to show you ads based on your visit to our website and other sites on the internet.
        You may opt out of personalized advertising by visiting Google Ads Settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Retention & Security</h2>
      <p className="mb-4">
        We do not store any IP addresses or user-agent data beyond what is necessary for immediate display.
        No personal or device-specific data is ever saved in our backend. We are committed to keeping our platform secure and lightweight.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. GDPR & CCPA Compliance</h2>
      <p className="mb-4">
        If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights.
        While we do not collect personal data, we honor your right to access, modify, or request deletion of any data (if collected in the future).
        For such inquiries, you may reach us at <strong>admin@insta-ip.com</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Children’s Information</h2>
      <p className="mb-4">
        Insta-IP does not knowingly collect any Personal Identifiable Information from children under the age of 13.
        If you think that your child has provided this kind of information, please contact us immediately, and we will do our best to remove it promptly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Links to External Websites</h2>
      <p className="mb-4">
        Our site may contain links to third-party websites. Please be aware that we are not responsible for the content or privacy practices of these external sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Consent</h2>
      <p className="mb-4">
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>

<h2 className="text-xl font-semibold mt-6 mb-2">9. Updates to This Policy</h2>
<p className="mb-4">
  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Effective Date&quot; at the top.
</p>


      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-4">
        For any questions, concerns, or requests, please contact us at:<br />
        📧 <strong>admin@insta-ip.com</strong><br />
        Or use our <a href="/contact" className="text-blue-600 underline">Contact Page</a>
      </p>
    </main>
  );
}
