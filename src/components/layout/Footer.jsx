// Footer.jsx
import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repo data
    fetch("https://api.github.com/repos/IvanPavlovic-web/ncr-voyix-agent-tool")
      .then((res) => res.json())
      .then((data) => {
        setRepoData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch repo data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <h4>SERVER_EPS</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hspclient.servereps.com/ServerEPS/Login.aspx"
              >
                ServerEPS Hospitality
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.servereps.com/ServerEPS/Login.aspx"
              >
                ServerEPS Common / Retail
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cte.servereps.com/ServerEPS/Login.aspx"
              >
                ServerEPS CTE / Lab
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gov.servereps.com/ServerEPS/default.aspx"
              >
                ServerEPS DeCa
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>DATA MANAGER</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://10.1.115.50/DataManager/Login.aspx"
              >
                DataManager Hospitality
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://10.1.115.181/DataManager/Login.aspx?"
              >
                DataManager Common / Retail
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dm.cte.servereps.com/DataManager/Login.aspx"
              >
                DataManager CTE / Lab
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://10.201.110.13/DataManager/Login.aspx"
              >
                DataManager DeCa
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.sharepoint.com/sites/npgbl/SitePages/Index.aspx"
              >
                SharePoint
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.sharepoint.com/:o:/r/sites/npgbl/_layouts/15/Doc.aspx?sourcedoc=%7B7393e6ef-8497-4a8b-ab30-2c6388d464bb%7D&action=view&wd=target(PTO%20-%20AUX%20-%20OFFICE.one%7C01eac6ad-487b-472d-882b-553bb2a75748%2FVacation%20and%20Paid%20Leave%7Cd6258597-33da-4a9b-aed4-7a7ad3bc921f%2F)&wdorigin=NavigationUrl"
              >
                Team Notebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix-saas.atlassian.net/wiki/home"
              >
                Confluence
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix-saas.atlassian.net/jira/software/c/projects/CPCLIENTS/boards/36"
              >
                Atlassian JIRA
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.myworkday.com/ncr/d/home.htmld"
              >
                Workday
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.service-now.com/hrcentral?id=hrc_sc_homepage"
              >
                HR Central
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.service-now.com/itcentral?id=it_central_sc_home&sys_id=7e6390b713f0ef4084dad2f18144b0df"
              >
                IT Central
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.timesheet.ncrvoyix.com/"
              >
                NCR Voyix Timesheet
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.splunkcloud.com/en-US/account/login?return_to=%2Fen-US%2Fapp%2Fsearch%2Fsearch"
              >
                Splunk
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://okm.ncrvoyix.com/infocenter/index?page=content&id=PR17025"
              >
                OKM
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://filetransfer.ncrvoyix.com/aft/#/"
              >
                AFT Large File Transfer
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrsaas.cyberark.cloud/privilegecloud/Accounts"
              >
                Cyber ARK
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.alohaupdates.com/RadiantUpdatePortal/SignIn.aspx?ReturnUrl=%2fRadiantUpdatePortal%2fDownloadMSI.aspx"
              >
                Radiant Update
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.sharepoint.com/sites/npgbl/SitePages/PaymentsOvernight.aspx"
              >
                Payments Overnight
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>TICKETING APPLICATIONS</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.service-now.com/now/cwf/agent/list/params/list-id/b643621cc31b12500e2b5c43e40131e4/tiny-id/xf3WcTWN40gZR70nufJP8DS6B5itjmYv"
              >
                ServiceNOW
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.lightning.force.com/lightning/o/Case/list?filterName=HOS_Payments_L11"
              >
                SalesForce
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ncrvoyix.sharepoint.com/:x:/s/NCR_Payments_BL/Ee_8LY7mJRdIr4g9whFgSusB1hhJd1oGBS5x9P3Her2vcQ?e=QbVJ34"
              >
                NCR Voyix Schedule
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* GitHub Repository Section */}
      <div className="github-section">
        <div className="github-container">
          <div className="github-info">
            <h3>
              <svg
                viewBox="0 0 16 16"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Open Source
            </h3>
            <p>This project is open source and available on GitHub</p>

            {!loading && repoData && !repoData.message && (
              <div className="repo-stats">
                <div className="stat">
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                  </svg>
                  <span>{repoData.stargazers_count}</span>
                </div>
                <div className="stat">
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                  </svg>
                  <span>{repoData.forks_count}</span>
                </div>
                <div className="stat">
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path d="M8 0a8 8 0 113.5 6.5l-.15-.14A4.5 4.5 0 018 0zm0 1a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"></path>
                  </svg>
                  <span>{repoData.open_issues_count} issues</span>
                </div>
              </div>
            )}
          </div>

          <div className="github-actions">
            <a
              href="https://github.com/IvanPavlovic-web/ncr-voyix-agent-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button star-button"
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
              </svg>
              Star this Repository
            </a>

            <a
              href="https://github.com/IvanPavlovic-web/ncr-voyix-agent-tool/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button fork-button"
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
              Fork Repository
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo-text">AGENT TOOL</div>
        <div className="footer-legal">
          <p>
            This tool was independently created by Ivan Pavlovic, an agent of
            this company, with the sole purpose of supporting colleagues and
            simplifying daily workflows. No company resources were used in the
            development of this application. All rights of use are granted
            permanently and unconditionally to the company, without request,
            compensation, or expectation thereof.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
