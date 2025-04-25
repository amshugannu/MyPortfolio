import React from "react";
import Link from "next/link";
import Image from "next/image";

const CertificateCard = ({ imgUrl, title, issuer, certUrl }) => (
  <div className="rounded-xl bg-[#181818] p-4 shadow-lg flex flex-col items-center">
    <Image
      src={imgUrl}
      alt={title}
      width={240}
      height={160}
      className="rounded-lg mb-4"
    />
    <h5 className="text-xl font-semibold text-white mb-2 text-center">{title}</h5>
    <p className="text-[#ADB7BE] mb-3 text-center">{issuer}</p>
    <Link
      href={certUrl}
      target="_blank"
      className="bg-primary-500 hover:bg-secondary-500 text-white px-4 py-2 rounded-full text-sm"
    >
      View Certificate
    </Link>
  </div>
);

export default CertificateCard;
