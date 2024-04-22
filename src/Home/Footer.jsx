import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-blue-500 text-white text-center p-2 font-sans text-lg antialiased font-semibold">
      <span>©</span>
      <a
        href="https://www.linkedin.com/in/ansar-ibrahim"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 hover:underline"
      >
        AnsarIbrahim
      </a>{" "}
      2024
    </div>
  );
};

export default Footer;
