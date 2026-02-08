// Footer.jsx
import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Detect internal environment
  const isInternal =
    window.location.hostname === "localhost" ||
    window.location.hostname.endsWith(".ncrvoyix.com");

  useEffect(() => {
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
        {/* SERVER EPS */}
        <div className="footer-column">
          <h4>SERVER_EPS</h4>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://hspclient.servereps.com/ServerEPS/Login.aspx">
                ServerEPS Hospitality
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.servereps.com/ServerEPS/Login.aspx">
                ServerEPS Common / Retail
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cte.servereps.com/ServerEPS/Login.aspx">
                ServerEPS CTE / Lab
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.gov.servereps.com/ServerEPS/default.aspx">
                ServerEPS DeCa
              </a>
            </li>
          </ul>
        </div>

        {/* DATA MANAGER (PROTECTED) */}
        <div className="footer-column">
          <h4>DATA MANAGER</h4>
          <ul>
            {isInternal ? (
              <>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://10.1.115.50/DataManager/Login.aspx">
                    DataManager Hospitality
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://10.1.115.181/DataManager/Login.aspx">
                    DataManager Common / Retail
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://dm.cte.servereps.com/DataManager/Login.aspx">
                    DataManager CTE / Lab
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://10.201.110.13/DataManager/Login.aspx">
                    DataManager DeCa
                  </a>
                </li>
              </>
            ) : (
              <li className="internal-only">
                🔒 Internal system (VPN / NCR network only)
              </li>
            )}
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrvoyix.sharepoint.com/sites/npgbl/SitePages/Index.aspx">SharePoint</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrvoyix-saas.atlassian.net/wiki/home">Confluence</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrvoyix-saas.atlassian.net/jira/software/c/projects/CPCLIENTS/boards/36">Atlassian JIRA</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.myworkday.com/ncr/d/home.htmld">Workday</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrvoyix.service-now.com/hrcentral?id=hrc_sc_homepage">HR Central</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrvoyix.service-now.com/itcentral?id=it_central_sc_home">IT Central</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrvoyix.splunkcloud.com/">Splunk</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://okm.ncrvoyix.com/">OKM</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://filetransfer.ncrvoyix.com/aft/#/">AFT File Transfer</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://ncrsaas.cyberark.cloud/">CyberArk</a></li>
          </ul>
        </div>
      </div>

      {/* GITHUB */}
      <div className="github-section">
        <p>
          Open source project available on GitHub
        </p>
        <a
          href="https://github.com/IvanPavlovic-web/ncr-voyix-agent-tool"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View Repository
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo-text">AGENT TOOL</div>
        <p className="footer-legal">
          Independently created by Ivan Pavlovic to support colleagues and simplify daily workflows.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
