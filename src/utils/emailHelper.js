export const createTechEscalationEmail = (formData) => {
  const getValue = (key) => formData[key]?.trim() || "N/A";

  const subject = encodeURIComponent(
    `L3 Tech Escalation // Ticket ${getValue("ticketNumber")} // CN ${getValue("companyNumber")} // SN ${getValue("storeNumber")} // CMCID ${getValue("alohaKey")}`,
  );

  const body = encodeURIComponent(
    `Environment: ${getValue("environment")}
Pillar: ${getValue("group")}
CompanyID: ${getValue("companyNumber")}
StoreID: ${getValue("storeNumber")}
Aloha Key: ${getValue("alohaKey")}
Ticket Number: ${getValue("ticketNumber")}
Issue Summary: ${getValue("summary")}
Date when it stopped working: ${getValue("issueDate")}
Number of affected lanes: ${getValue("lanesAffected")}
Severity: ${getValue("severity")}
MTX_POS.dll Version: ${getValue("mtxPos")}
MTX_EPS.dll Version: ${getValue("mtxEps")}
PIN Pad Firmware Version: ${getValue("firmwareVersion")}
PIN Pad OS Version: ${getValue("osVersion")}
PIN Pad Model: ${getValue("pinpadModel")}
APS Version: ${getValue("apsVersion")}
Aloha POS Version: ${getValue("posVersion")}

Steps taken to resolve the issue:

${getValue("stepsPerformed")}`,
  );

  return `mailto:SR230239@ncrvoyix.com?cc=CS230307@ncrvoyix.com&subject=${subject}&body=${body}`;
};

export const createCustomerEscalationEmail = (formData) => {
  return createTechEscalationEmail(formData).replace(
    "L3%20Tech%20Escalation",
    "L3%20Cust%20Escalation",
  );
};
