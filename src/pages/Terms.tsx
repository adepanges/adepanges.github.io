import React from "react";
import Navbar from "../components/Navbar";

const Terms: React.FC = () => {
  return (
    <main className="font-jost hyphens-manual">
      <Navbar />
      {/* Page */}
      <section className="p-3 my-auto mx-auto max-w-4xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-0 print:p-0 xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter print:w-full print:h-auto">
        {/* Header */}
        <header className="mb-8 text-center border-b-4 border-gray-300 pb-6 break-inside-avoid">
          <h1 className="mb-4 text-4xl font-bold text-gray-700">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Content */}
        <section className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              1. Introduction
            </h2>
            <p className="mb-4 leading-relaxed">
              Welcome to Ade Pangestu's personal website. These Terms and
              Conditions govern your use of this website. By accessing or using
              this website, you agree to be bound by these Terms and Conditions.
            </p>
            <p className="leading-relaxed">
              If you disagree with any part of these terms, please do not use
              our website.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              2. Intellectual Property Rights
            </h2>
            <p className="mb-4 leading-relaxed">
              Unless otherwise stated, Ade Pangestu and/or its licensors own the
              intellectual property rights for all material on this website. All
              intellectual property rights are reserved.
            </p>
            <p className="leading-relaxed">
              You may view and/or print pages from this website for your own
              personal use subject to restrictions set in these terms and
              conditions.
            </p>
          </section>

          {/* Restrictions */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              3. Restrictions
            </h2>
            <p className="mb-4 leading-relaxed">
              You are specifically restricted from all of the following:
            </p>
            <ul className="pl-6 mb-4 space-y-2 list-disc">
              <li>Publishing any website material in any other media</li>
              <li>
                Selling, sublicensing and/or otherwise commercializing any
                website material
              </li>
              <li>Publicly performing and/or showing any website material</li>
              <li>
                Using this website in any way that is or may be damaging to this
                website
              </li>
              <li>
                Using this website in any way that impacts user access to this
                website
              </li>
              <li>
                Using this website contrary to applicable laws and regulations
              </li>
            </ul>
          </section>

          {/* Your Content */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              4. Your Content
            </h2>
            <p className="mb-4 leading-relaxed">
              In these Terms and Conditions, "Your Content" shall mean any
              audio, video, text, images, or other material you choose to
              display on this website.
            </p>
            <p className="leading-relaxed">
              By displaying Your Content, you grant Ade Pangestu a
              non-exclusive, worldwide, irrevocable, royalty-free, sublicensable
              license to use, reproduce, adapt, publish, translate, and
              distribute it in any and all media.
            </p>
          </section>

          {/* No warranties */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              5. No Warranties
            </h2>
            <p className="mb-4 leading-relaxed">
              This website is provided "as is," with all faults, and Ade
              Pangestu expresses no representations or warranties of any kind
              related to this website or the materials contained on this
              website.
            </p>
          </section>

          {/* Limitation of liability */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              6. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed">
              In no event shall Ade Pangestu, nor any of its officers,
              directors, and employees, be held liable for anything arising out
              of or in any way connected with your use of this website.
            </p>
            <p className="leading-relaxed">
              Ade Pangestu shall not be liable for any indirect, consequential,
              or special liability arising out of or in any way related to your
              use of this website.
            </p>
          </section>

          {/* Indemnification */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              7. Indemnification
            </h2>
            <p className="leading-relaxed">
              You hereby indemnify to the fullest extent Ade Pangestu from and
              against any and/or all liabilities, costs, demands, causes of
              action, damages, and expenses arising in any way related to your
              breach of any of the provisions of these Terms.
            </p>
          </section>

          {/* Severability */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              8. Severability
            </h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be invalid under any
              applicable law, such provisions shall be deleted without affecting
              the remaining provisions herein.
            </p>
          </section>

          {/* Variation of Terms */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              9. Variation of Terms
            </h2>
            <p className="leading-relaxed">
              Ade Pangestu is permitted to revise these Terms at any time as it
              sees fit, and by using this website you are expected to review
              these Terms on a regular basis.
            </p>
          </section>

          {/* Assignment */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              10. Assignment
            </h2>
            <p className="leading-relaxed">
              Ade Pangestu is allowed to assign, transfer, and subcontract its
              rights and/or obligations under these Terms without any
              notification. However, you are not allowed to assign, transfer, or
              subcontract any of your rights and/or obligations under these
              Terms.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              11. Entire Agreement
            </h2>
            <p className="leading-relaxed">
              These Terms constitute the entire agreement between Ade Pangestu
              and you in relation to your use of this website and supersede all
              prior agreements and understandings.
            </p>
          </section>

          {/* Governing Law & Jurisdiction */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              12. Governing Law & Jurisdiction
            </h2>
            <p className="leading-relaxed">
              These Terms will be governed by and interpreted in accordance with
              the laws of Indonesia, and you submit to the non-exclusive
              jurisdiction of the state and federal courts located in Indonesia
              for the resolution of any disputes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="break-inside-avoid">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="mt-2 leading-relaxed">
              <strong>Email:</strong> adepanges@gmail.com
              <br />
              <strong>LinkedIn:</strong> linkedin.com/in/adepanges
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Terms;
