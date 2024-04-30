import React from "react";
import { graphql } from "gatsby";



const PdfPage = ({ data }) => {
  const { pdf } = data;

  if (!pdf) {
    return <div>No PDF file found.</div>;
  }

  return (
    <div>
      <h1>PDF Page</h1>
      <embed src={pdf.publicURL} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export const query = graphql`
  query($relativePath: String) {
    pdf: file(relativePath: { eq: $relativePath }) {
      publicURL
    }
  }
`;

export default PdfPage;
