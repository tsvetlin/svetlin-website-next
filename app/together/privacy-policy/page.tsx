import PageLayout from '../../ui/PageLayout';
import BackToProcjectsButton from '../../ui/BackToProcjectsButton';

export default function Page() {
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <h2 className="p-4 md:p-0 text-3xl mb-4">Effective Date: 2025.10.11</h2>
        <h2 className="p-4 md:p-0 text-3xl mb-4">1. Introduction</h2>
        <p className="mb-4">
          This Privacy Policy explains how Together (“the App,” “the Service”)
          collects, uses, and protects your personal data.
        </p>

        <p className="mb-4">
          The App is owned and operated by <b>Szvetlin Tanyi</b>, an individual
          based in Hungary (“we,” “us,” or “our”). We are committed to
          protecting your privacy and handling your data in compliance with the
          <b>General Data Protection Regulation (EU 2016/679)</b> (“GDPR”).
        </p>

        <p className="mb-4">
          By using Together, you agree to the practices described in this
          Privacy Policy.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">2. Data Controller</h2>
        <p>
          <b>Data Controller:</b> Szvetlin Tanyi
        </p>
        <p>
          <b>Country:</b> Hungary
        </p>
        <p>
          <b>Email: </b>
          <a className="text-tertiary" href="mailto:svetlin.dev@gmail.com">
            svetlin.dev@gmail.com
          </a>
        </p>

        <p className="mb-4">
          As the data controller, Szvetlin Tanyi determines the purposes and
          means of processing your personal data.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">3. Data We Collect</h2>
        <p className="mb-4">
          We only collect information that is necessary to provide the Together
          Service.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="">
                <th className="border-b border-gray-300 px-4 py-2 text-left font-bold">
                  Category
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left font-bold">
                  Data Collected
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left font-bold">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-500 px-4 py-2 font-bold">
                  Account Information
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  Name and Email Address
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  To create and manage your user account, authenticate login,
                  and communicate about your account.
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-500 px-4 py-2 font-bold">
                  Relationship Information
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  Date since becoming a couple, and linked partner ID
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  To calculate and display relationship duration and shared
                  couple data.
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-500 px-4 py-2 font-bold">
                  Device Information
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  Device identifier for push notifications
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  To deliver notifications to your device.
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-500 px-4 py-2 font-bold">
                  Uploaded Content
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  Photos and &quot;special dates&quot; you choose to add
                </td>
                <td className="border-b border-gray-500 px-4 py-2">
                  To store and display this data privately between you and your
                  linked partner.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold">
                  Technical Logs (minimal)
                </td>
                <td className="px-4 py-2">Timestamps, basic request logs</td>
                <td className="px-4 py-2">
                  For essential security and troubleshooting. No analytics or
                  tracking beyond what is required to operate the service.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          We <b>do not</b> collect location data, contact lists, advertising
          identifiers, or analytics data.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          4. How We Use Your Data
        </h2>
        <p className="mb-4">Your data is used strictly for:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Operating and maintaining the Together App and backend;
          </li>
          <li className="mb-2">
            Allowing account registration, login, and linking between partners;
          </li>
          <li className="mb-2">
            Storing and displaying your shared relationship data and photos;
          </li>
          <li className="mb-2">Sending push notifications (if enabled); and</li>
          <li className="mb-2">Ensuring service security and stability.</li>
        </ul>
        <p className="mb-4">
          We do not use your data for marketing, profiling, or advertising
          purposes.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          5. Legal Basis for Processing
        </h2>
        <p className="mb-4">
          We process your personal data under the following legal bases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <b>Article 6(1)(b) GDPR - Performance of a Contract</b>: to provide
            the Service you requested.
          </li>
          <li className="mb-2">
            <b>Article 6(1)(a) GDPR - Consent</b>: for processing optional data
            you upload (e.g., photos, special dates).
          </li>
          <li className="mb-2">
            <b>Article 6(1)(f) GDPR - Legitimate Interest</b>: to ensure
            security and proper functioning of the Service.
          </li>
        </ul>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          6. Data Storage and Hosting
        </h2>
        <p className="mb-4">
          All data is stored <b>within the European Union.</b>
        </p>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            The backend is hosted on <b>Aruba Cloud (VPS);</b>
          </li>
          <li className="mb-2">
            The database is hosted on <b>Turso;</b>
          </li>
          <li className="mb-2">
            Uploaded photos are stored in <b>Cloudflare R2.</b>
          </li>
        </ul>
        <p className="mb-4">
          All providers act as data processors and handle data under
          GDPR-compliant agreements.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          7. Data Sharing and Disclosure
        </h2>
        <p>
          We do <b>not</b> sell, rent, or trade your personal information.
        </p>
        <p className="mb-4">
          Your data is shared only in the following limited cases:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <b>With your linked partner</b>, to enable shared couple data;
          </li>
          <li className="mb-2">
            <b>With our hosting and storage providers</b>, solely for providing
            the infrastructure;
          </li>
          <li className="mb-2">
            <b>If required by law</b>, to comply with legal obligations or
            lawful requests by public authorities.
          </li>
        </ul>
        <p className="mb-4">No other third parties have access to your data.</p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">8. Data Retention</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Your personal data is retained{' '}
            <b>as long as your account remains active</b>.
          </li>
          <li className="mb-2">
            When you unlink from your partner, shared couple data is retained
            for <b>six (6) months</b> to allow restoration, then permanently
            deleted.
          </li>
          <li className="mb-2">
            When you <b>delete your account</b>, all personal data and uploaded
            content are <b>immediately and permanently deleted</b>.
          </li>
          <li className="mb-2">
            Routine backups (if any) are overwritten within a short operational
            period and not used for any purpose other than service recovery.
          </li>
        </ul>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          9. Your Rights Under GDPR
        </h2>
        <p className="mb-4">
          As an EU data subject, you have the following rights:
        </p>
        <ul className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <b>Right of Access</b> - Request a copy of your personal data we
            hold.
          </li>
          <li className="mb-2">
            <b>Right to Rectification</b> - Request correction of inaccurate or
            incomplete data.
          </li>
          <li className="mb-2">
            <b>Right to Erasure (“Right to be Forgotten”)</b> - Delete your
            account and data permanently.
          </li>
          <li className="mb-2">
            <b>Right to Restriction of Processing</b> - Request limitation of
            processing in specific cases.
          </li>
          <li className="mb-2">
            <b>Right to Data Portability</b> - Request transfer of your data to
            another controller.
          </li>
          <li className="mb-2">
            <b>Right to Object</b> - Object to certain processing activities.
          </li>
          <li className="mb-2">
            <b>Right to Lodge a Complaint</b> - File a complaint with your local
            Data Protection Authority (in Hungary, the{' '}
            <b>
              Hungarian National Authority for Data Protection and Freedom of
              Information,
            </b>{' '}
            NAIH).
          </li>
        </ul>

        <p className="mb-4">
          To exercise your rights, contact us at:{' '}
          <a className="text-tertiary" href="mailto:svetlin.dev@gmail.com">
            svetlin.dev@gmail.com
          </a>
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">10. Security Measures</h2>
        <p className="mb-4">
          We apply appropriate technical and organizational measures to protect
          your personal data, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Encrypted communication (HTTPS/TLS);</li>
          <li className="mb-2">Secure password hashing;</li>
          <li className="mb-2">Access controls and authentication;</li>
          <li className="mb-2">Restricted database access;</li>
          <li>Regular server maintenance.</li>
        </ul>
        <p className="mb-4">
          While we strive to protect your data, no system can be completely
          secure. You share information at your own risk.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          11. Children&apos;s Privacy
        </h2>
        <p>
          Together is intended only for users aged <b>18 and above</b>.
        </p>
        <p>We do not knowingly collect personal data from minors.</p>
        <p className="mb-4">
          If we learn that data from a person under 18 has been inadvertently
          collected, we will delete it promptly.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          12. International Transfers
        </h2>
        <p className="mb-4">
          We do <b>not</b> transfer personal data outside the European Economic
          Area (EEA).
        </p>
        <p>
          If such transfer becomes necessary in the future, we will ensure that
          adequate safeguards (such as Standard Contractual Clauses) are in
          place.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          13. Automated Decision-Making and Profiling
        </h2>
        <p className="mb-4">
          Together does <b>not</b> use automated decision-making or profiling of
          any kind.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          14. Changes to This Privacy Policy
        </h2>
        <p>We may update this Privacy Policy from time to time.</p>
        <p>
          When we make significant changes, we will notify users within the App
          or by email.
        </p>
        <p>The updated version will include a revised “Effective Date.”</p>

        <h2 className="p-4 md:p-0 text-3xl mb-4 mt-8">
          15. Contact Information
        </h2>
        <p className="mb-4">
          For privacy questions, data requests, or complaints, please contact:
        </p>
        <p>
          <b>Szvetlin Tanyi</b>
        </p>
        <p>
          <b>Email: </b>
          <a className="text-tertiary" href="mailto:svetlin.dev@gmail.com">
            svetlin.dev@gmail.com
          </a>
        </p>
        <p className="mb-4">
          <b>Country: </b>Hungary
        </p>

        <p className="mb-4">
          <b>
            By creating an account or using Together, you acknowledge that you
            have read and understood this Privacy Policy.
          </b>
        </p>
      </div>
    </PageLayout>
  );
}
