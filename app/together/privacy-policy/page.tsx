import PageLayout from '../../ui/PageLayout';
import BackToProcjectsButton from '../../ui/BackToProcjectsButton';

export default function Page() {
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <h2 className="p-4 md:p-0 text-3xl mb-4">Effective Date: 2025.07.20</h2>
        <h2 className="p-4 md:p-0 text-3xl mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Together (&ldquo;the App&ldquo;). Your privacy is important
          to us. This Privacy Policy explains how we handle your data when you
          use our mobile application.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">
          2. Data Collection and Usage
        </h2>
        <p className="mb-4">
          We do not collect or store personal user data. However, we use
          third-party services that may collect data to improve the app
          experience.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">3. Third-Party Services</h2>
        <p className="mb-4">The App uses the following third-party services:</p>
        <ul className="mb-4 list-disc list-inside">
          <li className="mb-2">
            <strong>AdMob (Google AdSense):</strong> We use AdMob to display
            ads. AdMob may collect user data for ad personalization, analytics,
            and fraud prevention. You can learn more by visiting Google&apos;s
            Privacy Policy:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary"
            >
              Google Privacy Policy
            </a>
            .
          </li>
          <li className="mb-2">
            <strong>Firebase Analytics:</strong> We use Firebase Analytics to
            understand user interactions and improve the app. Firebase may
            collect information such as device identifiers, usage statistics,
            and app interactions. Learn more about Firebase&apos;s data
            collection practices:{' '}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary"
            >
              Firebase Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Firebase Crashlytics:</strong> Firebase Crashlytics collects
            crash reports to help identify and fix issues within the app. Crash
            reports may include device and performance information.
          </li>
        </ul>

        <h2 className="p-4 md:p-0 text-3xl mb-4">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          AdMob and Firebase may use cookies and similar tracking technologies
          to collect and analyze user data. You can manage ad personalization
          &apos;s ad settings:{' '}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Google Ad Settings
          </a>
          .
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">5. Children&apos;s Privacy</h2>
        <p className="mb-4">
          Our app is not directed at children under the age of 13. If you are a
          parent or guardian and believe that your child has provided personal
          data, please contact us, and we will take appropriate action.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">
          6. User Rights and Data Control
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            You can opt out of personalized ads through your device settings.
          </li>
          <li>
            For more information on managing your data preferences, visit
            Google&apos;s and Firebase&apos;s privacy resources.
          </li>
        </ul>

        <h2 className="p-4 md:p-0 text-3xl mb-4">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted within the app or on our official website. Your continued
          use of the App constitutes acceptance of the updated Privacy Policy.
        </p>

        <h2 className="p-4 md:p-0 text-3xl mb-4">8. Contact Information</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:{' '}
          <a className="text-tertiary" href="mailto:svetlin.dev@gmail.com">
            svetlin.dev@gmail.com
          </a>
          .
        </p>
      </div>
    </PageLayout>
  );
}
