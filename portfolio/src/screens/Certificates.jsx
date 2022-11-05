import React from "react";
import CertificateCard from "../components/certificate-card/CertificateCard";
import certificatesData from "../data/certificatesData";

function Certificates() {
  return (
    <div className="container mt-4 row gap-3 mx-auto justify-content-between align-items-center pb-5">
      {certificatesData.map((certificate) => (
        <CertificateCard {...certificate} key={certificate.date} />
      ))}
    </div>
  );
}

export default Certificates;
