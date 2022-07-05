import React from 'react';
import ShellBox from '../../ShellBox';
import '../InstallTabs.scss';

const WindowsPanel = (): JSX.Element => {
  return (
    <div>
      <ShellBox>
        <span className="install__text__no-select"># Install the latest version</span>
        <br />
        <span className="install__text__no-select">$</span>
        <span className="install-text-command">winget install </span>EclipseAdoptium.Temurin.17
      </ShellBox>
      <br />
      <ShellBox>
        <span className="install__text__no-select"># Install a different version</span>
        <br />
        <span className="install__text__no-select">$</span>
        <span className="install-text-command">winget install </span>EclipseAdoptium.Temurin.11
      </ShellBox>
      <br />
      <ShellBox>
        <span className="install__text__no-select"># Upgrade the Winget package</span>
        <br />
        <span className="install__text__no-select">$</span>
        <span className="install-text-command">winget upgrade </span>EclipseAdoptium.Temurin.17
      </ShellBox>
      <br />
      <ShellBox>
        <span className="install__text__no-select"># Uninstall the Winget package</span>
        <br />
        <span className="install__text__no-select">$</span>
        <span className="install-text-command">winget uninstall </span>EclipseAdoptium.Temurin.17
      </ShellBox>
      <a
        className="install__docs-button"
        href="https://docs.microsoft.com/en-us/windows/package-manager/winget/"
      >
      Read documentation
      </a>
    </div>
  );
};

export default WindowsPanel;