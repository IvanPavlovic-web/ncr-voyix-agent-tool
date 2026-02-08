export const formatTicketSummary = (formData) => {
  const getValue = (key) => formData[key]?.trim() || "N/A";

  return `${getValue("summary")} // CN ${getValue("companyNumber")} // SN ${getValue("storeNumber")} // CMCID ${getValue("alohaKey")} // ${getValue("pinpadModel")} // FW ${getValue("firmwareVersion")} // APS ${getValue("apsVersion")}`;
};

export const formatTicketFull = (formData) => {
  const getValue = (key) => formData[key]?.trim() || "";

  return `
Callers First and Last Name: ${getValue("callerName")}
Callers Phone Number: ${getValue("callerPhone")}
Callers Email Address: ${getValue("callerEmail")}
Environment: ${getValue("environment")}
Group: ${getValue("group")}
Company Number: ${getValue("companyNumber")}
Store Number: ${getValue("storeNumber")}
Aloha Key: ${getValue("alohaKey")}
Summary: ${getValue("summary")}
Ticket Number: ${getValue("ticketNumber")}
Date when the issue was reported: ${getValue("issueDate")}
Lane(s) Affected: ${getValue("lanesAffected")}
Severity: ${getValue("severity")}
MTX_POS.dll version: ${getValue("mtxPos")}
MTX_EPS.dll version: ${getValue("mtxEps")}
Firmware version: ${getValue("firmwareVersion")}
OS version: ${getValue("osVersion")}
PIN Pad Model: ${getValue("pinpadModel")}
APS version: ${getValue("apsVersion")}
Aloha POS version: ${getValue("posVersion")}
Steps performed to resolve the issue:
${getValue("stepsPerformed")}
  `.trim();
};

export const formatRMASummary = (formData) => {
  const get = (key) => formData[key]?.trim() || "";
  return `${get("issueSummary")} // CN ${get("companyNumber")} // SN ${get("storeNumber")} // CMCID ${get("alohaKey")} // FW ${get("firmwareVersion")} // ${get("pinpadModel")}`;
};

export const formatRMATicket = (formData) => {
  const get = (key) => formData[key]?.trim() || "";

  return `
Callers First and Last Name: ${get("callerName")}  
Callers Phone Number: ${get("callerPhone")}  
Callers Email Address: ${get("callerEmail")}  

Company Number: ${get("companyNumber")}  
Store Number: ${get("storeNumber")}  
Aloha Key: ${get("alohaKey")}  
Issue Summary: ${get("issueSummary")}  
PIN Pad Model: ${get("pinpadModel")}  
Firmware version: ${get("firmwareVersion")}  
Cable Type: ${get("cableType")}  
Error message on the PIN Pad: ${get("errorMessage")}  
Contractual SLA: ${get("sla")}  

Is the PIN Pad visible under COM port?: ${get("comPort")}  
USB Drivers up-to-date?: ${get("usbDrivers")}  
PIN Pad Power Drained?: ${get("powerDrained")}  
PIN Pad Swapped to a different terminal?: ${get("swapped")}  
PIN Pad working on another Terminal?: ${get("workingAnother")}
  `.trim();
};

export const formatRMATeams = (formData) => {
  const get = (key) => formData[key]?.trim() || "";

  return `
@RMA Approvals  
Leadership please advise if I can proceed with creating a Dispatch (Work Order) or if there are additional steps that have to completed?  

Thanks in advance!  

Callers First and Last Name: ${get("callerName")}  
Callers Phone Number: ${get("callerPhone")}  
Callers Email Address: ${get("callerEmail")}  

Company Number: ${get("companyNumber")}  
Store Number: ${get("storeNumber")}  
Aloha Key: ${get("alohaKey")}  
Issue Summary: ${get("issueSummary")}  
PIN Pad Model: ${get("pinpadModel")}  
Firmware version: ${get("firmwareVersion")}  
Cable Type: ${get("cableType")}  
Error message on the PIN Pad: ${get("errorMessage")}  
Contractual SLA: ${get("sla")}  

Is the PIN Pad visible under COM port?: ${get("comPort")}  
USB Drivers up-to-date?: ${get("usbDrivers")}  
PIN Pad Power Drained?: ${get("powerDrained")}  
PIN Pad Swapped to a different terminal?: ${get("swapped")}  
PIN Pad working on another Terminal?: ${get("workingAnother")}
  `.trim();
};

export const formatSORRSummary = (formData) => {
  const getValue = (key) => formData[key]?.trim() || "N/A";
  return `${getValue("issueType")} // CN ${getValue("companyNumber")} // SN ${getValue("storeNumber")} // CMCID ${getValue("alohaKey")}`;
};

export const formatSORRFull = (formData) => {
  const getValue = (key) => formData[key]?.trim() || "N/A";

  let fullText = `
Caller's Name: ${getValue("callerName")}
Phone: ${getValue("callerPhone")}
Email: ${getValue("callerEmail")}

Company Number: ${getValue("companyNumber")}
Store Number: ${getValue("storeNumber")}
Aloha Key: ${getValue("alohaKey")}

Issue Type: ${getValue("issueType")}
  `.trim();

  if (formData.issueType === "Discrepancy") {
    fullText += `
Start Date: ${getValue("startDate")}
End Date: ${getValue("endDate")}
Missing Amount: ${getValue("missingAmount")}
    `;
  }

  return fullText;
};
