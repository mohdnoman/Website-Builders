import React from "react";
import Service from "./service";

const ServiceList = () => {
  const services = [
    {
      H1: "WixPro 72-Inch Responsive Website Builder",
      primary:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainhighlight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      serviceName: "Builder 1",
      batchtype: "choice",
      rating: 9.8,
      comment: "Exceptional",
      stars: 5,
      num: 1,
    },
    {
      H1: "SiteCraft 68-Inch Ultimate Web Design Studio",
      primary:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      mainhighlight:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      serviceName: "Builder 2",
      batchtype: "value",
      rating: 9.5,
      comment: "Excellent",
      stars: 4.5,
      num: 2,
    },
    {
      H1: "WixPro 72-Inch Responsive Website Builder",
      primary:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainhighlight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      serviceName: "Builder 3",
      rating: 9.3,
      comment: "Exceptional",
      stars: 5,
      num: 3,
    },
    {
      H1: "CDK Resposive Builder:",
      primary:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      serviceName: "CDK",
      l1: [
        { rate: 9.9, name: "building responsive" },
        { rate: 8.9, name: "Cool" },
        { rate: 8.9, name: "Docs" },
      ],
      l2: [
        { name: "Documentation" },
        { name: "Easy Use" },
        { name: "Out of box" },
      ],
      rating: 9.1,
      comment: "Very Good",
      stars: 4.5,
      num: 4,
    },
  ];

  return (
    <div>
      {services.map((service, index) => (
        <div className="mb-10" key={index}>
          <Service {...service} />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
