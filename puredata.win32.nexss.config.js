let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Pure Data";
languageConfig.description =
  "Pure Data (or just Pd) is an open source visual programming language for multimedia.";
languageConfig.url = "https://puredata.info";
languageConfig.founders = ["Miller S. Puckette"];
languageConfig.developers = [""];
languageConfig.years = ["1996"];
languageConfig.extensions = [".pd"];
languageConfig.builders = {};
languageConfig.compilers = {
  pd: {
    install: `nexss install/PureData`,
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "pd",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.puredata.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: `PowerShell.exe -File ${__dirname}/install/installPureData.ps1`,
    messageAfterInstallation: "",
    installed: "installed",
    search: "search",
    install: `nexss ${__dirname}/install/deken-plugin.tcl`,
    uninstall: "composer remove",
    help: "composer",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
