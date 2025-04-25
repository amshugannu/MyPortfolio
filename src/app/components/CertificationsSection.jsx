"use client";
import React from "react";
import CertificateCard from "./CertificateCard";

const certificatesData = [
  {
    title: "Meta Certified Android Developer",
    issuer: "Meta",
    imgUrl: "/certificates/meta-android.png",
    certUrl: "https://www.credly.com/badges/meta-android-cert-link",
  },
  {
    title: "NPTEL Certified Course in Machine Learning",
    issuer: "NPTEL",
    imgUrl: "/certificates/nptel-ml.png",
    certUrl: "https://archive.nptel.ac.in/content/noc/NOC23/ML-cert-link",
  },
  {
    title: "Advanced Concepts in DSA",
    issuer: "Board Infinity",
    imgUrl: "/certificates/boardinfinity-dsa.png",
    certUrl: "https://boardinfinity.com/certificate/dsa-cert-link",
  },
  // Add more certificates as needed
];

const CertificationsSection = () => (
  <section id="certifications" className="py-12">
    <h2 className="text-center text-4xl font-bold text-white mb-8">
      Certifications
    </h2>
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {certificatesData.map((cert, idx) => (
        <CertificateCard key={idx} {...cert} />
      ))}
    </div>
  </section>
);

export default CertificationsSection;
