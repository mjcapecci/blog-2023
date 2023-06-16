import React from 'react';

import { format } from 'date-fns';

import { Content } from '../../../content/Content';
import { Meta } from '../../../layout/Meta';
import { Main } from '../../../templates/Main';

const PrivacyPolicy = () => {
  return (
    <Main
      meta={
        <Meta
          title={'Simple Pomodoro Privacy Policy'}
          description={'Simple Pomodoro Privacy Policy'}
        />
      }
    >
      <h1 className="text-center font-bold text-3xl text-gray-200">
        Simple Pomodoro Privacy Policy
      </h1>
      <div className="text-center text-sm mb-8">
        {format(new Date('June 15, 2023'), 'LLLL d, yyyy')}
      </div>
      <Content>
        <div>
          <h2>1. Introduction</h2>
          <p>
            This privacy policy governs your use of the software application
            Simple Pomodoro ("Application") for mobile devices that was created
            by Michael Capecci Development. We at Michael Capecci Development
            recognize the importance of your privacy and have outlined our
            policy as it pertains to the collection, use, and disclosure of any
            information you provide while using our Application.
          </p>
          <h2>2. Information Collection and Use</h2>
          <p>
            The Simple Pomodoro Application does not collect or transmit any
            personally identifiable information about you, such as your name,
            address, phone number or email address. The Application does store
            certain non-personal identifiable information locally on your
            device. This is strictly limited to your usage history within the
            Application itself, such as the number of Pomodoro cycles you have
            completed, to facilitate functionality like productivity tracking.
            This data does not leave your device and is not accessible by us,
            the Application developers, or any third parties.
          </p>
          <h2>3. Data Security</h2>
          <p>
            We are committed to ensuring the security of your information. To
            prevent unauthorized access, maintain data accuracy, and ensure the
            appropriate use of information, we have put in place appropriate
            physical, electronic, and managerial procedures to safeguard and
            secure the information we collect.
          </p>
          <h2>4. Children's Privacy</h2>
          <p>
            This Application does not address anyone under the age of 13. We do
            not knowingly collect personally identifiable information from
            children under 13. If a parent or guardian becomes aware that his or
            her child has provided us with personal information without their
            consent, they should contact us at michael@michaelcapecci.com.
          </p>
          <h2>5. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at michael@michaelcapecci.com..
          </p>
          <h2>Last updated on June 15th, 2023</h2>
        </div>
      </Content>
    </Main>
  );
};

export default PrivacyPolicy;
