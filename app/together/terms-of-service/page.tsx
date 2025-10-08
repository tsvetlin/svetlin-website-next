import PageLayout from '../../ui/PageLayout';
import BackToProcjectsButton from '../../ui/BackToProcjectsButton';
import Link from 'next/link';

export default function Page() {
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <h2 className="p-4 md:p-0 text-3xl mb-4">Effective Date: 2025.10.11</h2>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          1. Introduction and Agreement to Terms
        </h2>
        <p className="mb-4">
          Welcome to Together (“the App,” “the Service”), a relationship
          companion mobile application developed and operated by{' '}
          <b>Szvetlin Tanyi</b>, an individual based in Hungary (“we,” “us,” or
          “our”).
        </p>
        <p className="mb-4">
          By downloading, installing, accessing, or using Together, you (“you,”
          “your,” or “User”) agree to be bound by these Terms of Service
          (“Terms”). If you do not agree to these Terms, you may not use the
          App.
        </p>
        <p className="mb-4">
          These Terms govern your access to and use of the App, including all
          features, services, and content made available through it.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">2. Definitions</h2>
        <p className="mb-4">
          For clarity, the following terms have these meanings throughout this
          Agreement:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">
            <b>“Account”</b> means the user profile created by registering with
            an email and password.
          </li>
          <li className="mb-2">
            <b>“Couple Link”</b> means the connection between two user accounts
            that allows them to share information and images privately.
          </li>
          <li className="mb-2">
            <b>“User Content”</b> means any data, text, photos, or other
            materials that you upload or enter into the App.
          </li>
          <li>
            <b>“Service”</b> means the Together mobile application, backend API,
            database, and related infrastructure operated by Szvetlin Tanyi.
          </li>
        </ul>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          3. Who We Are and Contact Information
        </h2>
        <p className="mb-4">The Together App is operated by:</p>
        <p>
          <b>Developer:</b> Szvetlin Tanyi
        </p>
        <p>
          <b>Location:</b> Hungary
        </p>
        <p className="mb-4">
          <b>Email: </b>
          <a className="text-tertiary" href="mailto:svetlin.dev@gmail.com">
            svetlin.dev@gmail.com
          </a>
        </p>
        <p className="mb-4">
          If you have any questions or concerns about these Terms or the App,
          please contact us at the email address above.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          4. Description of the Service
        </h2>
        <p className="mb-4">
          Together is a private relationship companion app that allows couples
          to:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">Track how long they have been together;</li>
          <li className="mb-2">Create and share “special dates”;</li>
          <li className="mb-4">
            Upload and share photos privately with their linked partner.
          </li>
          <p className="mb-4">
            The App requires account registration and allows users to link their
            accounts using a unique code. Linked accounts share a common couple
            profile and data privately.
          </p>
          <p className="mb-4">
            Together does <b>not</b> provide public sharing, location-based
            matching, or social networking features.
          </p>
        </ul>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          5. Eligibility and Age Requirement
        </h2>
        <p className="mb-4">
          You must be at least <b>18 years old</b> to use Together. By using the
          App, you confirm that you are 18 years of age or older and legally
          capable of entering into a binding contract.
        </p>
        <p className="mb-4">
          If you are under 18, you may not use or register for the Service.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          6. Account Registration and Security
        </h2>
        <p className="mb-4">
          To use Together, you must create an account using a valid email
          address and a password. You are responsible for:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">
            Maintaining the confidentiality of your login credentials;
          </li>
          <li className="mb-2">
            All activity that occurs under your account; and
          </li>
          <li className="mb-4">
            Notifying us immediately if you suspect unauthorized access.
          </li>
        </ul>
        <p className="mb-4">
          We are not liable for any loss or damage arising from your failure to
          safeguard your account information.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          7. Couple Linking and Shared Data
        </h2>
        <p className="mb-4">
          To link accounts, users must exchange and enter a{' '}
          <b>unique linking code</b>. Users are solely responsible for keeping
          their linking code private and sharing it only with the intended
          partner.
        </p>
        <p className="mb-4">
          Both users must agree to the link for data to be shared. Once linked,
          data such as special dates, shared images, and couple information are
          visible to both parties.
        </p>
        <p className="mb-4">
          Users may <b>unlink</b> at any time. After unlinking:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">
            The shared data remains stored for up to <b>six (6) months</b> to
            allow relinking and restoration;
          </li>
          <li className="mb-2">
            After six months, the shared data is <b>permanently deleted</b> and
            cannot be recovered.
          </li>
        </ul>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          8. User Content and Ownership
        </h2>
        <p className="mb-4">
          You retain all ownership rights to your User Content. By uploading or
          submitting content to the App, you grant us a limited, non-exclusive,
          revocable license to store, process, and display such content solely
          for the purpose of operating the Service and enabling your private
          sharing with your linked partner.
        </p>
        <p className="mb-4">
          You represent and warrant that you have all necessary rights to upload
          and share any content and that your content does not violate any laws
          or third-party rights.
        </p>
        <p className="mb-4">
          Because uploaded content is private between linked partners, we do not
          review or moderate User Content. However, we reserve the right to
          remove content or suspend accounts that violate these Terms or
          applicable laws if discovered.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          9. Prohibited Use and Conduct
        </h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="mb-4 list-disc list-inside">
          <li>
            Use the App for any illegal purpose or to promote unlawful activity;
          </li>
          <li>
            Share your account or linking code with anyone except your intended
            partner;
          </li>
          <li>
            Upload content that is defamatory, harassing, threatening, obscene,
            or otherwise inappropriate;
          </li>
          <li>
            Attempt to gain unauthorized access to the App, servers, or
            networks;
          </li>
          <li>Interfere with or disrupt the operation of the Service.</li>
        </ul>
        <p className="mb-4">
          We reserve the right to suspend or terminate accounts found to be in
          violation of this section.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          10. Privacy and Data Protection
        </h2>
        <p className="mb-4">
          Your privacy is important to us. Together collects and processes
          limited personal data, including your name, email address,
          relationship start date, device identifier (for push notifications),
          and uploaded photos or dates you choose to share.
        </p>
        <p className="mb-4">
          We do not collect or process your location, contacts, or analytics
          data.
        </p>
        <p className="mb-4">
          All data is stored securely on servers located in the European Union
          and processed in compliance with the{' '}
          <b>General Data Protection Regulation (GDPR)</b>.
        </p>
        <p className="mb-4">
          For more details about how we handle personal data, please refer to
          our{' '}
          <Link href="/together/privacy-policy">
            <span className="text-tertiary">Privacy Policy</span>
          </Link>
          , which forms part of these Terms.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          11. Data Retention and Account Deletion
        </h2>
        <p className="mb-4">
          When you delete your account,{' '}
          <b>
            all personal data and uploaded content are permanently deleted
            immediately
          </b>
          .
        </p>
        <p className="mb-4">
          When two users unlink, shared couple data is retained for{' '}
          <b>six (6) months</b> to allow re-linking. After this period, it is
          permanently deleted.
        </p>
        <p className="mb-4">
          We do not offer a data export feature. Once deleted, data cannot be
          recovered.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          12. Intellectual Property Rights
        </h2>
        <p className="mb-4">
          All software, text, graphics, user interfaces, and other content
          within the App (excluding User Content) are owned or licensed by
          Szvetlin Tanyi. You may not copy, reproduce, distribute, or create
          derivative works from any part of the App without prior written
          consent.
        </p>
        <p className="mb-4">
          You acknowledge that “Together” is the name of the App and is used to
          identify the Service developed by Szvetlin Tanyi, even though it is
          not a registered trademark.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          13. Third-Party Services and Infrastructure
        </h2>
        <p className="mb-4">
          Together uses the following third-party infrastructure:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">
            <b>Aruba Cloud</b> - for the backend;
          </li>
          <li className="mb-2">
            <b>Turso</b> - for the database;
          </li>
          <li className="mb-2">
            <b>Cloudflare R2</b> - for image storage.
          </li>
        </ul>
        <p className="mb-4">
          These providers act as data processors under GDPR and store
          information securely within the EU or other approved jurisdictions.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">14. Disclaimers</h2>
        <p className="mb-4">
          The Service is provided “<b>as is</b>” and “<b>as available,</b>”
          without warranties of any kind, express or implied.
        </p>
        <p className="mb-4">We do not warrant that:</p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">The App will be uninterrupted or error-free;</li>
          <li className="mb-2">The Service will meet your expectations; or</li>
          <li className="mb-2">
            Any data stored will be free from loss, corruption, or unauthorized
            access (though we take reasonable security measures).
          </li>
        </ul>
        <p className="mb-4">Use of the App is at your own risk.</p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          15. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the maximum extent permitted by law,{' '}
          <b>Szvetlin Tanyi shall not be liable</b> for any indirect,
          incidental, consequential, or punitive damages arising out of your use
          or inability to use the Service, including but not limited to data
          loss, deletion, or unauthorized access.
        </p>
        <p className="mb-4">
          In any case, the total liability to you shall not exceed the amount
          you paid (if any) for using the Service.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">16. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless Szvetlin Tanyi from any
          claims, damages, liabilities, and expenses (including legal fees)
          arising from:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">Your use of the App;</li>
          <li className="mb-2">Your violation of these Terms; or</li>
          <li className="mb-4">
            Your violation of any rights of another person.
          </li>
        </ul>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          17. Termination and Suspension
        </h2>
        <p className="mb-4">
          We may suspend or terminate your access to the App if we believe you
          have violated these Terms or engaged in any activity that may harm the
          Service or other users.
        </p>
        <p className="mb-4">
          You may stop using the App at any time. Account deletion will
          permanently remove all your data as described in Section 11.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">18. Changes to the Terms</h2>
        <p className="mb-4">
          We may modify these Terms from time to time. If we make significant
          changes, we will notify users through the App or by email.
        </p>
        <p className="mb-4">
          Continued use of the Service after changes take effect constitutes
          acceptance of the revised Terms.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          19. Governing Law and Dispute Resolution
        </h2>
        <p className="mb-4">
          These Terms and any disputes arising out of or related to them shall
          be governed by and construed in accordance with the{' '}
          <b>laws of Hungary</b>, unless otherwise required by applicable{' '}
          <b>European Union law</b>.
        </p>
        <p className="mb-4">
          Any disputes shall be resolved in the <b>courts of Hungary</b>. You
          agree to submit to the exclusive jurisdiction of those courts.
        </p>
        <h2 className="p-4 md:p-0 text-3xl mb-4">
          20. Severability and Entire Agreement
        </h2>
        <p className="mb-4">
          If any provision of these Terms is found invalid or unenforceable, the
          remaining provisions will remain in full force and effect.
        </p>
        <p className="mb-4">
          These Terms constitute the <b>entire agreement</b> between you and
          Szvetlin Tanyi regarding your use of the Together App and supersede
          any prior agreements or understandings.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">21. Contact Information</h2>
        <p>If you have any questions about these Terms or the Together App,</p>
        <p className="mb-4">
          <b>Email: </b>
          <a className="text-tertiary" href="mailto:svetlin.dev@gmail.com">
            svetlin.dev@gmail.com
          </a>
        </p>

        <p className="mb-4">
          <b>
            By creating an account or using Together, you acknowledge that you
            have read, understood, and agreed to these Terms of Service.
          </b>
        </p>
      </div>
    </PageLayout>
  );
}
