import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-success">Terms and conditions</h2>
      <ul>
        <li>
          Acceptance of Terms: By accessing or using the news page, the user
          agrees to comply with these terms and conditions, as well as any other
          policies and guidelines applicable to the page.
        </li>
        <li>
          User Conduct: The user agrees to use the news page for lawful purposes
          only and not to engage in any activity that could harm the page, its
          users, or any third party.
        </li>
        <li>
          Intellectual Property: The news page and all its content, including
          but not limited to text, images, videos, and software, are protected
          by intellectual property laws and are the property of the page owner
          or its licensors. Users are prohibited from reproducing, modifying,
          distributing, or creating derivative works of the page's content
          without prior written consent.
        </li>
        <li>
          Accuracy of Information: The page owner strives to provide accurate
          and up-to-date information on the news page, but does not guarantee
          the accuracy, completeness, or timeliness of the information provided.
          The user acknowledges that any reliance on the information provided on
          the news page is at their own risk.
        </li>
        <li>
          Third-Party Links: The news page may contain links to third-party
          websites or resources. The page owner is not responsible for the
          content, products, or services offered by these third parties and does
          not endorse or warrant the accuracy of any information provided by
          them.
        </li>
        <li>
          Disclaimer of Warranties: The news page is provided "as is" and
          without warranties of any kind, whether express or implied. The page
          owner does not guarantee the uninterrupted or error-free operation of
          the page or its compatibility with any particular device or system.
        </li>
        <li>
          Limitation of Liability: The page owner will not be liable for any
          damages arising from the use or inability to use the news page,
          including but not limited to direct, indirect, incidental, or
          consequential damages.
        </li>
        <li>
          Termination: The page owner may terminate the user's access to the
          news page at any time and for any reason without prior notice.
        </li>
        <li>
          Governing Law: These terms and conditions are governed by the laws of
          the jurisdiction where the page owner is based.
        </li>
        <li>
          Amendments: The page owner reserves the right to modify or update
          these terms and conditions at any time without prior notice. The user
          is advised to check these terms and conditions regularly to stay
          informed of any changes.
        </li>
      </ul>
      <p>
        Go back to{" "}
        <Link className="text-decoration-none" to="/register">
          Register
        </Link>
      </p>
    </Container>
  );
};

export default Terms;
