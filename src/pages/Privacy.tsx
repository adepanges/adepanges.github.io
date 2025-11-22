import React from "react";
import Navbar from "../components/Navbar";

const Privacy: React.FC = () => {
  return (
    <main className="font-jost hyphens-manual">
      <Navbar />
      {/* Page */}
      <section className="p-3 my-auto mx-auto max-w-4xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-0 print:p-0 xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter print:w-full print:h-auto">
        {/* Header */}
        <header className="mb-8 text-center border-b-4 border-gray-300 pb-6 break-inside-avoid">
          <h1 className="mb-4 text-4xl font-bold text-gray-700">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* Content */}
        <section className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              Welcome to Ade Pangestu's Privacy Policy. This policy describes how we collect, use, and protect 
              your personal information when you visit our website.
            </p>
            <p className="leading-relaxed">
              By using our website, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Information Collection */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">2. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="pl-6 mb-4 space-y-2 list-disc">
              <li>
                <strong>Personal Information:</strong> When you contact us via email or LinkedIn, we may collect 
                your name, email address, and any other information you choose to provide.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect information about how you access and use our website, 
                including your IP address, browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track 
                activity on our website and hold certain information.
              </li>
            </ul>
          </section>

          {/* Use of Information */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">3. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">We use the collected information for various purposes:</p>
            <ul className="pl-6 mb-4 space-y-2 list-disc">
              <li>To provide and maintain our website</li>
              <li>To notify you about changes to our website</li>
              <li>To allow you to participate in interactive features when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our website</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">4. Data Protection</h2>
            <p className="mb-4 leading-relaxed">
              The security of your data is important to us. We implement appropriate technical and organizational 
              measures to protect your personal information against unauthorized or unlawful processing, 
              accidental loss, destruction, or damage.
            </p>
            <p className="leading-relaxed">
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your personal information, we cannot 
              guarantee its absolute security.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">5. Data Sharing and Disclosure</h2>
            <p className="mb-4 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside 
              parties except in the following circumstances:
            </p>
            <ul className="pl-6 mb-4 space-y-2 list-disc">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>To prevent or investigate possible wrongdoing in connection with the website</li>
              <li>To protect the personal safety of users of the website or the public</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">6. Cookies and Tracking Technologies</h2>
            <p className="mb-4 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain 
              information. Cookies are files with a small amount of data which may include an anonymous unique 
              identifier.
            </p>
            <p className="leading-relaxed">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">7. Third-Party Services</h2>
            <p className="mb-4 leading-relaxed">
              Our website may contain links to other sites that are not operated by us. If you click on a third-party 
              link, you will be directed to that third party's site. We strongly advise you to review the Privacy 
              Policy of every site you visit.
            </p>
            <p className="leading-relaxed">
              We have no control over and assume no responsibility for the content, privacy policies, or practices 
              of any third-party sites or services.
            </p>
          </section>

          {/* Your Rights */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">8. Your Data Protection Rights</h2>
            <p className="mb-4 leading-relaxed">
              Depending on your location, you may have the following data protection rights:
            </p>
            <ul className="pl-6 mb-4 space-y-2 list-disc">
              <li>The right to access, update, or delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="leading-relaxed">
              Please contact us if you wish to exercise any of these rights.
            </p>
          </section>

          {/* Data Retention */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">9. Data Retention</h2>
            <p className="leading-relaxed">
              We will retain your personal information only for as long as is necessary for the purposes set out 
              in this Privacy Policy. We will retain and use your information to the extent necessary to comply 
              with our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our website does not address anyone under the age of 13. We do not knowingly collect personally 
              identifiable information from anyone under the age of 13. If you are a parent or guardian and you 
              are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">11. Changes to This Privacy Policy</h2>
            <p className="mb-4 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="mt-2 leading-relaxed">
              <strong>Email:</strong> adepanges@gmail.com<br />
              <strong>LinkedIn:</strong> linkedin.com/in/adepanges
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Privacy;
