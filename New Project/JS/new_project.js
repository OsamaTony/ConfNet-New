document.addEventListener("DOMContentLoaded", function () {
  function updateSelectOptions() {
    const allInterfaces = ["interface0", "interface1", "interface2"];
    const selectedIPs = [];

    // Gather selected IPs
    allInterfaces.forEach((interfaceId) => {
      const selectElement = document.getElementById(interfaceId);
      if (selectElement) {
        const selectedValue = selectElement.value;
        if (selectedValue) {
          selectedIPs.push(selectedValue);
        }
      }
    });

    // Disable options already selected in other interfaces
    allInterfaces.forEach((interfaceId) => {
      const selectElement = document.getElementById(interfaceId);
      if (!selectElement) return;

      const options = selectElement.querySelectorAll("option");
      options.forEach((option) => {
        if (
          selectedIPs.includes(option.value) &&
          option.value !== selectElement.value
        ) {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      });
    });

    // console.log("Selected IPs:", selectedIPs);
  }

  // Expose the function to the global scope for `onchange`
  window.updateSelectOptions = updateSelectOptions;
});

//================================R2=====================================
document.addEventListener("DOMContentLoaded", function () {
  function updateSelectOptions2() {
    const allInterfaces2 = ["interface02", "interface12", "interface22"];
    const selectedIPs2 = [];

    allInterfaces2.forEach((interfaceId) => {
      const selectElement2 = document.getElementById(interfaceId);
      if (selectElement2) {
        const selectedValue2 = selectElement2.value;
        if (selectedValue2) {
          selectedIPs2.push(selectedValue2);
        }
      }
    });

    allInterfaces2.forEach((interfaceId) => {
      const selectElement2 = document.getElementById(interfaceId);
      if (!selectElement2) return;

      const options2 = selectElement2.querySelectorAll("option");
      options2.forEach((option2) => {
        if (selectedIPs2.includes(option2.value) && option2.value !== "") {
          option2.disabled = true;
        } else {
          option2.disabled = false;
        }
      });
    });

    // console.log("Selected IPs:", selectedIPs2);
  }

  // Expose function to global scope so HTML can access it
  window.updateSelectOptions2 = updateSelectOptions2;
});

//====================R3===================================
document.addEventListener("DOMContentLoaded", function () {
  function updateSelectOptions3() {
    const allInterfaces3 = ["interface03", "interface13", "interface23"];
    const selectedIPs3 = [];

    allInterfaces3.forEach((interfaceId) => {
      const selectElement3 = document.getElementById(interfaceId);
      if (selectElement3) {
        const selectedValue3 = selectElement3.value;
        if (selectedValue3) {
          selectedIPs3.push(selectedValue3);
        }
      }
    });

    allInterfaces3.forEach((interfaceId) => {
      const selectElement3 = document.getElementById(interfaceId);
      if (!selectElement3) return;

      const options3 = selectElement3.querySelectorAll("option");
      options3.forEach((option3) => {
        if (selectedIPs3.includes(option3.value) && option3.value !== "") {
          option3.disabled = true;
        } else {
          option3.disabled = false;
        }
      });
    });

    // console.log("Selected IPs:", selectedIPs3);
  }

  // Expose function to global scope so HTML can access it
  window.updateSelectOptions3 = updateSelectOptions3;
});

//========================HostName=====================
function generateHostName() {
  globalThis.HostName = document.getElementById("RouterHostName").value;
  globalThis.configCommandsHN = `
        enable
        conf t
        hostname ${HostName}

        banner motd 1
================================
This Router is configured by 
           Conf Net 
================================
1

        exit

        wr
        log


    `;
}
function generateHostName2() {
  globalThis.HostName2 = document.getElementById("RouterHostName2").value;
  globalThis.configCommandsHN2 = `
        enable
        conf t
        hostname ${HostName2}

        banner motd 1
================================
This Router is configured by 
           Conf Net 
================================
1

        exit

        wr
        log


    `;
}
function generateHostName3() {
  globalThis.HostName3 = document.getElementById("RouterHostName3").value;
  globalThis.configCommandsHN3 = `
        enable
        conf t
        hostname ${HostName3}

        banner motd 1
================================
This Router is configured by 
           Conf Net 
================================
1

        exit

        wr
        log


    `;
}

//======================ip address================================
function generateIPaddress() {
  globalThis.configCommandsIP = ""; // Initialize as an empty string
  for (var i = 0; i < 3; i++) {
    var interfacenum = `GigabitEthernet0/${i}`;
    var interfaceip = document.getElementById("interface" + i).value;
    globalThis.configCommandsIP += `
                    enable
                    configure terminal
                    Interface ${interfacenum}
                    ip address ${interfaceip}
                    no shutdown
                    exit
                    exit

                    wr
                    log


                `;
  }
}
function generateIPaddress2() {
  globalThis.configCommandsIP2 = ""; // Initialize as an empty string
  for (var i = 0; i < 3; i++) {
    var interfacenum2 = `GigabitEthernet0/${i}`;
    var interfaceip2 = document.getElementById("interface" + i + "2").value;
    globalThis.configCommandsIP2 += `
                    enable
                    configure terminal
                    Interface ${interfacenum2}
                    ip address ${interfaceip2}
                    no shutdown
                    exit
                    exit

                    wr
                    log


                `;
  }
}
function generateIPaddress3() {
  globalThis.configCommandsIP3 = ""; // Initialize as an empty string
  for (var i = 0; i < 3; i++) {
    var interfacenum3 = `GigabitEthernet0/${i}`;
    var interfaceip3 = document.getElementById("interface" + i + "3").value;
    globalThis.configCommandsIP3 += `
                    enable
                    configure terminal
                    Interface ${interfacenum3}
                    ip address ${interfaceip3}
                    no shutdown
                    exit
                    exit

                    wr
                    log


                `;
  }
}

//========================ssh=====================
function generateSSH() {
  var HostName = document.getElementById("RouterHostName")?.value.trim();
  var password0 = document.getElementById("pass")?.value.trim();
  var user_name0 = document.getElementById("user_name")?.value.trim();
  var fir_num = document.getElementById("first_number")?.value.trim();
  var end_num = document.getElementById("end_number")?.value.trim();
  var dom_name = document.getElementById("domain_name")?.value.trim();

  globalThis.configSSH = "";
  globalThis.configSSH += `
    enable
    conf t
    hostname ${HostName}
    ip domain-name ${dom_name}
    crypto key generate rsa
    1024

    username ${user_name0} privilege 15 secret ${password0}
    ip ssh version 2
    line vty ${fir_num} ${end_num}
    transport input ssh
    login local

    banner motd 1
================================
This Router is configured by 
           Conf Net 
================================
1

    ex

    wr
    log


    `;

  // console.log(configSSH);
}

function generateSSH2() {
  var HostName2 = document.getElementById("RouterHostName2")?.value.trim();
  var password02 = document.getElementById("pass2")?.value.trim();
  var user_name02 = document.getElementById("user_name2")?.value.trim();
  var fir_num2 = document.getElementById("first_number2")?.value.trim();
  var end_num2 = document.getElementById("end_number2")?.value.trim();
  var dom_name2 = document.getElementById("domain_name2")?.value.trim();

  globalThis.configSSH2 = "";
  globalThis.configSSH2 += `
    enable
    conf t
    hostname ${HostName2}
    ip domain-name ${dom_name2}
    crypto key generate rsa
    1024

    username ${user_name02} privilege 15 secret ${password02}
    ip ssh version 2
    line vty ${fir_num2} ${end_num2}
    transport input ssh
    login local

    banner motd 1
================================
This Router is configured by 
           Conf Net 
================================
1

    ex

    wr
    log


    `;

  // console.log(configSSH2);
}
function generateSSH3() {
  var HostName3 = document.getElementById("RouterHostName3")?.value.trim();
  var password03 = document.getElementById("pass3")?.value.trim();
  var user_name03 = document.getElementById("user_name3")?.value.trim();
  var fir_num3 = document.getElementById("first_number3")?.value.trim();
  var end_num3 = document.getElementById("end_number3")?.value.trim();
  var dom_name3 = document.getElementById("domain_name3")?.value.trim();

  globalThis.configSSH3 = "";
  globalThis.configSSH3 += `
    enable
    conf t
    hostname ${HostName3}
    ip domain-name ${dom_name3}
    crypto key generate rsa
    1024

    username ${user_name03} privilege 15 secret ${password03}
    ip ssh version 2
    line vty ${fir_num3} ${end_num3}
    transport input ssh
    login local

    banner motd 1
================================
This Router is configured by 
           Conf Net 
================================
1

    ex

    wr
    log


    `;

  // console.log(configSSH3);
}

//========================Telnet=====================
function generateTelnet() {
  var HostName = document.getElementById("RouterHostName")?.value.trim();
  var password1 = document.getElementById("pass")?.value.trim();
  var user_name01 = document.getElementById("user_name")?.value.trim();
  var fir_num0 = document.getElementById("first_number")?.value.trim();
  var end_num0 = document.getElementById("end_number")?.value.trim();
  var dom_name0 = document.getElementById("domain_name")?.value.trim();

  globalThis.configTelnet = "";
  configTelnet += `
 
    enable
    conf t
    hostname ${HostName}
    ip domain-name ${dom_name0}
    crypto key generate rsa


    username ${user_name01} privilege 15 secret ${password1}
    line vty ${fir_num0} ${end_num0}
    transport input Telnet
    login local
    banner motd 1
    ================================
    This Router is configured by 
               Conf Net 
    ================================
    1
    
        ex
    
        wr
        log
    
    



    `;

  // console.log(configTelnet);
}

function generateTelnet2() {
  var HostName2 = document.getElementById("RouterHostName2")?.value.trim();
  var password12 = document.getElementById("pass2")?.value.trim();
  var user_name012 = document.getElementById("user_name2")?.value.trim();
  var fir_num02 = document.getElementById("first_number2")?.value.trim();
  var end_num02 = document.getElementById("end_number2")?.value.trim();
  var dom_name02 = document.getElementById("domain_name2")?.value.trim();

  globalThis.configTelnet2 = "";
  configTelnet2 += `
 
    enable
    conf t
    hostname ${HostName2}
    ip domain-name ${dom_name02}
    crypto key generate rsa


    username ${user_name012} privilege 15 secret ${password12}
    line vty ${fir_num02} ${end_num02}
    transport input Telnet
    login local
    banner motd 1
    ================================
    This Router is configured by 
               Conf Net 
    ================================
    1
    
        ex
    
        wr
        log
    
    



    `;

  // console.log(configTelnet2);
}

function generateTelnet3() {
  var HostName3 = document.getElementById("RouterHostName3")?.value.trim();
  var password13 = document.getElementById("pass3")?.value.trim();
  var user_name013 = document.getElementById("user_name3")?.value.trim();
  var fir_num03 = document.getElementById("first_number3")?.value.trim();
  var end_num03 = document.getElementById("end_number3")?.value.trim();
  var dom_name03 = document.getElementById("domain_name3")?.value.trim();

  globalThis.configTelnet3 = "";
  configTelnet3 += `
 
    enable
    conf t
    hostname ${HostName3}
    ip domain-name ${dom_name03}
    crypto key generate rsa


    username ${user_name013} privilege 15 secret ${password13}
    line vty ${fir_num03} ${end_num03}
    transport input Telnet
    login local
    banner motd 1
    ================================
    This Router is configured by 
               Conf Net 
    ================================
    1
    
        ex
    
        wr
        log
    
    



    `;

  // console.log(configTelnet3);
}

//=========================DHCP=============================
function generateDHCP() {
  var DHCPTest = document.getElementById("DHCPcheck");
  if (DHCPTest && DHCPTest.checked) {
    var poolName = document.getElementById("poolname").value;
    var dnsServer = document.getElementById("dns").value;
    var networkName = document.getElementById("networkname").value;
    var interfaceNumber = document.getElementById("default-route").value;
    var interfaceIP = document.getElementById(
      "interface" + interfaceNumber
    )?.value; // Safe access to the input value

    if (!interfaceIP) {
      console.error("interfaceIP is undefined or empty");
      return; // Exit the function if the IP is invalid
    }

    var splitIP = interfaceIP.split(" "); // Split only if interfaceIP is a valid string
    var onlyIP = splitIP[0]; // Take the first part of the split IP

    globalThis.configCommandsDHCP = "";
    globalThis.configCommandsDHCP += `
        enable
        conf t
        ip dhcp pool ${poolName}
        network ${networkName}
        default-router ${onlyIP}
        dns-server ${dnsServer}
        ex
        banner motd 1
        ================================
        This Router is configured by 
                   Conf Net 
        ================================
        1
        
            ex
        
            wr
            log
        
        
       


    `;

    // console.log(globalThis.configCommandsDHCP);
  } else {
    globalThis.configCommandsDHCP = "";
  }
}
function generateDHCP2() {
  var DHCPTest2 = document.getElementById("DHCPcheck2");
  if (DHCPTest2 && DHCPTest2.checked) {
    var poolName2 = document.getElementById("poolname2").value;
    var dnsServer2 = document.getElementById("dns2").value;
    var networkName2 = document.getElementById("networkname2").value;
    var interfaceNumber2 = document.getElementById("default-route2").value;
    var interfaceIP2 = document.getElementById(
      "interface" + interfaceNumber2 + "2"
    )?.value; // Safe access to the input value

    if (!interfaceIP2) {
      console.error("interfaceIP is undefined or empty");
      return; // Exit the function if the IP is invalid
    }

    var splitIP2 = interfaceIP2.split(" "); // Split only if interfaceIP is a valid string
    var onlyIP2 = splitIP2[0]; // Take the first part of the split IP

    globalThis.configCommandsDHCP2 = "";
    globalThis.configCommandsDHCP2 += `
        enable
        conf t
        ip dhcp pool ${poolName2}
        network ${networkName2}
        default-router ${onlyIP2}
        dns-server ${dnsServer2}
        ex
        banner motd 1
        ================================
        This Router is configured by 
                   Conf Net 
        ================================
        1
        
            ex
        
            wr
            log
        
        
       


    `;

    // console.log(globalThis.configCommandsDHCP);
  } else {
    globalThis.configCommandsDHCP2 = "";
  }
}

function generateDHCP3() {
  var DHCPTest3 = document.getElementById("DHCPcheck3");
  if (DHCPTest3 && DHCPTest3.checked) {
    var poolName3 = document.getElementById("poolname3").value;
    var dnsServer3 = document.getElementById("dns3").value;
    var networkName3 = document.getElementById("networkname3").value;
    var interfaceNumber3 = document.getElementById("default-route3").value;
    var interfaceIP3 = document.getElementById(
      "interface" + interfaceNumber3 + "3"
    )?.value; // Safe access to the input value

    if (!interfaceIP3) {
      console.error("interfaceIP is undefined or empty");
      return; // Exit the function if the IP is invalid
    }

    var splitIP3 = interfaceIP3.split(" "); // Split only if interfaceIP is a valid string
    var onlyIP3 = splitIP3[0]; // Take the first part of the split IP

    globalThis.configCommandsDHCP3 = "";
    globalThis.configCommandsDHCP3 += `
        enable
        conf t
        ip dhcp pool ${poolName3}
        network ${networkName3}
        default-router ${onlyIP3}
        dns-server ${dnsServer3}
        ex
        banner motd 1
        ================================
        This Router is configured by 
                   Conf Net 
        ================================
        1
        
            ex
        
            wr
            log
        
        
       


    `;

    // console.log(globalThis.configCommandsDHCP);
  } else {
    globalThis.configCommandsDHCP3 = "";
  }
}
//===================Routing Handel==========================
//========================ospf=====================
function generateOSPF() {
  globalThis.RoutingTest;
  globalThis.configOSPF = "";
  globalThis.configOSPF += `
enable
configure terminal
router ospf 1
`;

  for (var i = 0; i < 3; i++) {
    let interfaceSelect = document.getElementById("interface" + i);
    let ospfRadio = document.getElementById("ospf");

    // Run function only if the radio button exists and is checked
    if (ospfRadio && ospfRadio.checked && interfaceSelect) {
      let selectedValue = interfaceSelect.value.trim(); // Trim extra spaces
      let [ip, subnetMask] = selectedValue.split(" "); // Split into IP and subnet mask
      let ipParts = ip.split("."); // Split IP into octets
      let formattedIp = `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.0`; // Format as X.Y.Z.0
      RoutingTest = 1;
      configOSPF += `
          network ${formattedIp} ${subnetMask} area 0 `;
    } else {
      RoutingTest = 0;
    }
  }
  configOSPF += `
      exit
      banner motd 1
      ================================
      This Router is configured by 
                 Conf Net 
      ================================
      1
      
          ex
      
          wr
          log
      
      

      
      `;

  globalThis.configOSPF;

  // console.log(configOSPF);
}

function generateOSPF2() {
  globalThis.RoutingTest2;
  globalThis.configOSPF2 = "";
  globalThis.configOSPF2 += `
enable
configure terminal
router ospf 1
`;

  for (var i = 0; i < 3; i++) {
    let interfaceSelect2 = document.getElementById("interface" + i + "2");
    let ospfRadio2 = document.getElementById("ospf2");

    // Run function only if the radio button exists and is checked
    if (ospfRadio2 && ospfRadio2.checked && interfaceSelect2) {
      let selectedValue2 = interfaceSelect2.value.trim(); // Trim extra spaces
      let [ip2, subnetMask2] = selectedValue2.split(" "); // Split into IP and subnet mask
      let ipParts2 = ip2.split("."); // Split IP into octets
      let formattedIp2 = `${ipParts2[0]}.${ipParts2[1]}.${ipParts2[2]}.0`; // Format as X.Y.Z.0
      RoutingTest2 = 1;
      configOSPF2 += `
          network ${formattedIp2} ${subnetMask2} area 0 `;
    } else {
      RoutingTest2 = 0;
    }
  }
  configOSPF2 += `
      exit
      banner motd 1
      ================================
      This Router is configured by 
                 Conf Net 
      ================================
      1
      
          ex
      
          wr
          log
      
      

      
      `;

  globalThis.configOSPF2;

  // console.log(configOSPF2);
}

function generateOSPF3() {
  globalThis.RoutingTest3;
  globalThis.configOSPF3 = "";
  globalThis.configOSPF3 += `
enable
configure terminal
router ospf 1
`;

  for (var i = 0; i < 3; i++) {
    let interfaceSelect3 = document.getElementById("interface" + i + "3");
    let ospfRadio3 = document.getElementById("ospf3");

    // Run function only if the radio button exists and is checked
    if (ospfRadio3 && ospfRadio3.checked && interfaceSelect3) {
      let selectedValue3 = interfaceSelect3.value.trim(); // Trim extra spaces
      let [ip3, subnetMask3] = selectedValue3.split(" "); // Split into IP and subnet mask
      let ipParts3 = ip3.split("."); // Split IP into octets
      let formattedIp3 = `${ipParts3[0]}.${ipParts3[1]}.${ipParts3[2]}.0`; // Format as X.Y.Z.0
      RoutingTest3 = 1;
      configOSPF3 += `
          network ${formattedIp3} ${subnetMask3} area 0 `;
    } else {
      RoutingTest3 = 0;
    }
  }
  configOSPF3 += `
      exit
      banner motd 1
      ================================
      This Router is configured by 
                 Conf Net 
      ================================
      1
      
          ex
      
          wr
          log
      
      

      
      `;

  globalThis.configOSPF3;

  // console.log(configOSPF3);
}

//========================eigrp=====================
function generateEIGRP() {
  globalThis.RoutingTest2 = 0;
  globalThis.configEIGRP = "";
  globalThis.configEIGRP += `
enable
configure terminal
router eigrp 1
`;

  for (var i = 0; i < 3; i++) {
    let interfaceSelect = document.getElementById("interface" + i);
    let ospfRadio = document.getElementById("eigrp");

    // Run function only if the radio button exists and is checked
    if (ospfRadio && ospfRadio.checked && interfaceSelect) {
      let selectedValue = interfaceSelect.value.trim(); // Trim extra spaces
      let [ip, subnetMask] = selectedValue.split(" "); // Split into IP and subnet mask
      let ipParts = ip.split("."); // Split IP into octets
      let formattedIp = `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.0`; // Format as X.Y.Z.0
      RoutingTest2 = 1;
      configEIGRP += `
          network ${formattedIp} ${subnetMask} `;
    } else {
      RoutingTest2 = 0;
    }
  }

  configEIGRP += `
  exit
  banner motd 1
  ================================
  This Router is configured by 
             Conf Net 
  ================================
  1
  
      ex
  
      wr
      log
  
  
 
  `;

  // console.log(configEIGRP);
}

function generateEIGRP2() {
  globalThis.RoutingTest3 = 0;
  globalThis.configEIGRP2 = "";
  globalThis.configEIGRP2 += `
enable
configure terminal
router eigrp 1
`;

  for (var i = 0; i < 3; i++) {
    let interfaceSelect2 = document.getElementById("interface" + i + "2");
    let ospfRadio2 = document.getElementById("eigrp2");

    // Run function only if the radio button exists and is checked
    if (ospfRadio2 && ospfRadio2.checked && interfaceSelect2) {
      let selectedValue2 = interfaceSelect2.value.trim(); // Trim extra spaces
      let [ip2, subnetMask2] = selectedValue2.split(" "); // Split into IP and subnet mask
      let ipParts2 = ip2.split("."); // Split IP into octets
      let formattedIp2 = `${ipParts2[0]}.${ipParts2[1]}.${ipParts2[2]}.0`; // Format as X.Y.Z.0
      RoutingTest3 = 1;
      configEIGRP2 += `
          network ${formattedIp2} ${subnetMask2} `;
    } else {
      RoutingTest3 = 0;
    }
  }

  configEIGRP2 += `
  exit
  banner motd 1
  ================================
  This Router is configured by 
             Conf Net 
  ================================
  1
  
      ex
  
      wr
      log
  
  
 
  `;

  // console.log(configEIGRP2);
}

function generateEIGRP3() {
  globalThis.RoutingTest4 = 0;
  globalThis.configEIGRP3 = "";
  globalThis.configEIGRP3 += `
enable
configure terminal
router eigrp 1
`;

  for (var i = 0; i < 3; i++) {
    let interfaceSelect3 = document.getElementById("interface" + i + "3");
    let ospfRadio3 = document.getElementById("eigrp3");

    // Run function only if the radio button exists and is checked
    if (ospfRadio3 && ospfRadio3.checked && interfaceSelect3) {
      let selectedValue3 = interfaceSelect3.value.trim(); // Trim extra spaces
      let [ip3, subnetMask3] = selectedValue3.split(" "); // Split into IP and subnet mask
      let ipParts3 = ip3.split("."); // Split IP into octets
      let formattedIp3 = `${ipParts3[0]}.${ipParts3[1]}.${ipParts3[2]}.0`; // Format as X.Y.Z.0
      RoutingTest4 = 1;
      configEIGRP3 += `
          network ${formattedIp3} ${subnetMask3} `;
    } else {
      RoutingTest4 = 0;
    }
  }

  configEIGRP3 += `
  exit
  banner motd 1
  ================================
  This Router is configured by 
             Conf Net 
  ================================
  1
  
      ex
  
      wr
      log
  
  
  
  `;

  // console.log(configEIGRP3);
}



//==================================================================
globalThis.RChosse = document.getElementById("pickRouter");
const Router1Pick = document.getElementById("outrouter1");
const Router2Pick = document.getElementById("outrouter2");
const Router3Pick = document.getElementById("outrouter3");
globalThis.OUTR1 = document.getElementById("Output");
globalThis.OUTR2 = document.getElementById("Output2");
globalThis.OUTR3 = document.getElementById("Output3");
globalThis.Leftarrow = document.getElementById("leftArrowBtn");

Leftarrow.addEventListener("click", () => {
  RChosse.style.display = "block";
  OUTR1.style.display = "none";
  OUTR2.style.display = "none";
  OUTR3.style.display = "none";
  Leftarrow.style.display = "none";
});

Router1Pick.addEventListener("click", () => {
  RChosse.style.display = "none";
  OUTR1.style.display = "block";
  Leftarrow.style.display = "block";
});
Router2Pick.addEventListener("click", () => {
  RChosse.style.display = "none";
  OUTR2.style.display = "block";
  Leftarrow.style.display = "block";
});
Router3Pick.addEventListener("click", () => {
  RChosse.style.display = "none";
  OUTR3.style.display = "block";
  Leftarrow.style.display = "block";
});

function generateConfigPopup() {
  RChosse.style.display = "block";
  OUTR1.style.display = "none";
  OUTR2.style.display = "none";
  OUTR3.style.display = "none";
  Leftarrow.style.display = "none";
  globalThis.Routing = "";

  // Combine HostName and IP config commands
  generateHostName();
  generateIPaddress();
  var IPs_HostName = configCommandsHN + configCommandsIP;
  IPs_HostName = IPs_HostName.split("                       ").join("\n");

  //==============================================================
  generateSSH();
  generateTelnet();
  var SSHTest = document.getElementById("SSHRadio");
  var TelnetTest = document.getElementById("TelnetRadio");
  var Remote;
  if (SSHTest && SSHTest.checked) {
    Remote = configSSH;
    Remote = Remote.split("                       ").join("\n");
  } else if (TelnetTest && TelnetTest.checked) {
    Remote = configTelnet;
    Remote = Remote.split("                       ").join("\n");
  } else {
    Remote = "";
  }
  //==============================================================
  generateDHCP();
  var DHCP = configCommandsDHCP;
  DHCP = DHCP.split("                       ").join("\n");
  //==============================================================
  generateOSPF();
  generateEIGRP();
  if (RoutingTest == 1 && RoutingTest2 == 0) {
    var OSPF = configOSPF;
    Routing = OSPF;
  }

  if (RoutingTest == 0 && RoutingTest2 == 1) {
    var EIGRP = configEIGRP;
    Routing = EIGRP;
  }
  //==============================================================

  //==============================================================
  //==============================================================
  var Total = IPs_HostName + Remote + DHCP + Routing;
  Total = Total.split("                       ").join("\n");
  //==============================================================
  // Set the value for each of the textareas
  document.getElementById("ConfOutText").value = IPs_HostName;
  document.getElementById("ConfOutText1").value = Remote;
  document.getElementById("ConfOutText2").value = DHCP;
  document.getElementById("ConfOutText3").value = Routing;
  document.getElementById("ConfOutText4").value = Total;

  // Show the modal
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("ConfOut").style.display = "block";
  //==============================R2=================================
  globalThis.Routing2 = "";

  // Combine HostName and IP config commands
  generateHostName2();
  generateIPaddress2();
  var IPs_HostName2 = configCommandsHN2 + configCommandsIP2;
  IPs_HostName2 = IPs_HostName2.split("                       ").join("\n");

  //==============================================================
  generateSSH2();
  generateTelnet2();
  var SSHTest2 = document.getElementById("SSHRadio2");
  var TelnetTest2 = document.getElementById("TelnetRadio2");
  var Remote2;
  if (SSHTest2 && SSHTest2.checked) {
    Remote2 = configSSH2;
    Remote2 = Remote2.split("                       ").join("\n");
  } else if (TelnetTest2 && TelnetTest2.checked) {
    Remote2 = configTelnet2;
    Remote2 = Remote2.split("                       ").join("\n");
  } else {
    Remote2 = "";
  }
  //==============================================================
  generateDHCP2();
  var DHCP2 = configCommandsDHCP2;
  DHCP2 = DHCP2.split("                       ").join("\n");
  //==============================================================
  generateOSPF2();
  generateEIGRP2();
  if (RoutingTest2 == 1 && RoutingTest3 == 0) {
    var OSPF2 = configOSPF2;
    Routing2 = OSPF2;
  }

  if (RoutingTest2 == 0 && RoutingTest3 == 1) {
    var EIGRP2 = configEIGRP2;
    Routing2 = EIGRP2;
  }

  var Total2 = IPs_HostName2 + Remote2 + DHCP2 + Routing2;
  Total2 = Total2.split("                       ").join("\n");
  document.getElementById("ConfOutText5").value = IPs_HostName2;
  document.getElementById("ConfOutText6").value = Remote2;
  document.getElementById("ConfOutText7").value = DHCP2;
  document.getElementById("ConfOutText8").value = Routing2;
  document.getElementById("ConfOutText9").value = Total2;

  //==============================R3=================================
  globalThis.Routing3 = "";

  // Combine HostName and IP config commands
  generateHostName3();
  generateIPaddress3();
  var IPs_HostName3 = configCommandsHN3 + configCommandsIP3;
  IPs_HostName3 = IPs_HostName3.split("                       ").join("\n");

  //==============================================================
  generateSSH3();
  generateTelnet3();
  var SSHTest3 = document.getElementById("SSHRadio3");
  var TelnetTest3 = document.getElementById("TelnetRadio3");
  var Remote3;
  if (SSHTest3 && SSHTest3.checked) {
    Remote3 = configSSH3;
    Remote3 = Remote3.split("                       ").join("\n");
  } else if (TelnetTest3 && TelnetTest3.checked) {
    Remote3 = configTelnet3;
    Remote3 = Remote3.split("                       ").join("\n");
  } else {
    Remote3 = "";
  }
  //==============================================================
  generateDHCP3();
  var DHCP3 = configCommandsDHCP3;
  DHCP3 = DHCP3.split("                       ").join("\n");
  //==============================================================
  generateOSPF3();
  generateEIGRP3();
  if (RoutingTest3 == 1 && RoutingTest4 == 0) {
    var OSPF3 = configOSPF3;
    Routing3 = OSPF3;
  }

  if (RoutingTest3 == 0 && RoutingTest4 == 1) {
    var EIGRP3 = configEIGRP3;
    Routing3 = EIGRP3;
  }

  var Total3 = IPs_HostName3 + Remote3 + DHCP3 + Routing3;
  Total3 = Total3.split("                       ").join("\n");
  document.getElementById("ConfOutText10").value = IPs_HostName3;
  document.getElementById("ConfOutText11").value = Remote3;
  document.getElementById("ConfOutText12").value = DHCP3;
  document.getElementById("ConfOutText13").value = Routing3;
  document.getElementById("ConfOutText14").value = Total3;
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("ConfOut").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  // Add close functionality to close the modal
  document.querySelectorAll("[data-close-button]").forEach((button) => {
    button.addEventListener("click", closePopup);
  });

  // Attach the generateConfigPopup function to the Configuration button
  document
    .getElementById("Configuration")
    .addEventListener("click", generateConfigPopup);
});

//======================================================
// Function to dynamically handle copy functionality
document.addEventListener("click", function (event) {
  if (event.target && event.target.id.startsWith("copyButton")) {
    const buttonId = event.target.id;
    const textareaId = buttonId.replace("copyButton", "ConfOutText");
    const textarea = document.getElementById(textareaId);

    if (textarea) {
      textarea.select();
      textarea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
      alert("Configuration copied to clipboard!");
    }
  }
});

// Function to dynamically handle copy functionality
document.addEventListener("click", function (event) {
  if (event.target && event.target.id.startsWith("copyButton")) {
    const buttonId = event.target.id;
    const textareaId = buttonId.replace("copyButton", "ConfOutText");
    const textarea = document.getElementById(textareaId);

    if (textarea) {
      textarea.select();
      textarea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
      alert("Configuration copied to clipboard!");
    }
  }
});

// Function to dynamically handle download functionality
document.addEventListener("click", function (event) {
  if (event.target && event.target.id.startsWith("DownloadButton")) {
    const buttonId = event.target.id;
    const textareaId = buttonId.replace("DownloadButton", "ConfOutText");
    const textarea = document.getElementById(textareaId);

    if (textarea) {
      const textContent = textarea.value;

      // Determine the router name dynamically
      let routername;
      if (buttonId.includes("5") || buttonId.includes("6") || buttonId.includes("7") || buttonId.includes("8") || buttonId.includes("9")) {
        routername = HostName2;
      } else if (buttonId.includes("10") || buttonId.includes("11") || buttonId.includes("12") || buttonId.includes("13") || buttonId.includes("14")) {
        routername = HostName3;
      } else {
        routername = HostName;
      }

      // Generate the file suffix dynamically based on buttonId
      const fileSuffixMap = {
        "DownloadButton": "_IPs_Hostname",
        "DownloadButton1": "_RemoteLogin",
        "DownloadButton2": "_DHCP",
        "DownloadButton3": "_Routing",
        "DownloadButton4": "_Configuration",
        "DownloadButton5": "_IPs_Hostname",
        "DownloadButton6": "_RemoteLogin",
        "DownloadButton7": "_DHCP",
        "DownloadButton8": "_Routing",
        "DownloadButton9": "_Configuration",
        "DownloadButton10": "_IPs_Hostname",
        "DownloadButton11": "_RemoteLogin",
        "DownloadButton12": "_DHCP",
        "DownloadButton13": "_Routing",
        "DownloadButton14": "_Configuration",
      };
      const suffix = fileSuffixMap[buttonId] || "_Configuration";

      // Create and download the file
      const blob = new Blob([textContent], { type: "text/plain" });
      const anchor = document.createElement("a");
      anchor.href = URL.createObjectURL(blob);
      anchor.download = routername + suffix + ".txt";
      anchor.click();
      URL.revokeObjectURL(anchor.href);
    }
  }
});




//================================================================================
//======================================================
// Initialize router counter
var routerCounter = 0;

// Drag and drop functionality for devices
document.querySelectorAll(".device").forEach((device) => {
  device.addEventListener("dragstart", (event) => {
    const isWorkspace =
      event.target.getAttribute("data-in-workspace") === "true";
    event.dataTransfer.setData("id", event.target.id);
    event.dataTransfer.setData("isWorkspace", isWorkspace);
  });
});

const workspace = document.getElementById("workspace");
workspace.addEventListener("dragover", (event) => {
  event.preventDefault();
});

workspace.addEventListener("drop", (event) => {
  event.preventDefault();
  const deviceId = event.dataTransfer.getData("id");
  const isWorkspace = event.dataTransfer.getData("isWorkspace") === "true";

  if (isWorkspace) {
    // Move existing device
    const draggedElement = document.getElementById(deviceId);
    const rect = workspace.getBoundingClientRect();
    const x = event.clientX - rect.left - 30; // Adjust offset as needed
    const y = event.clientY - rect.top - 30;
    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
  } else {
    // Clone new device
    const originalDevice = document.getElementById(deviceId);
    const newDevice = originalDevice.cloneNode(true);
    newDevice.id = `device-${Date.now()}`; // Ensure unique ID for the cloned device
    newDevice.style.position = "absolute";
    const rect = workspace.getBoundingClientRect();
    const x = event.clientX - rect.left - 30; // Adjust offset as needed
    const y = event.clientY - rect.top - 30;
    newDevice.style.left = `${x}px`;
    newDevice.style.top = `${y}px`;
    newDevice.setAttribute("data-in-workspace", "true");
    workspace.appendChild(newDevice);

    // Enable dragging for the new device
    newDevice.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("id", e.target.id);
      e.dataTransfer.setData("isWorkspace", "true");
    });

    // Configure click handlers for the new device
    if (deviceId === "cable") {
      newDevice.addEventListener("click", () => {
        Routerform.style.display = "none";
        cableform.style.display = "block";
        simulationButton.style.display = "none";
        configurationButton.style.display = "none";
      });
    } else if (deviceId === "router1") {
      newDevice.addEventListener("click", () => {
        Routerform.style.display = "block";
        Routerform2.style.display = "none";
        Routerform3.style.display = "none";
        cableform.style.display = "none";
        simulationButton.style.display = "none";
        configurationButton.style.display = "none";
      });
    } else if (deviceId === "router2") {
      newDevice.addEventListener("click", () => {
        Routerform2.style.display = "block";
        Routerform.style.display = "none";
        Routerform3.style.display = "none";
        cableform.style.display = "none";
        simulationButton.style.display = "none";
        configurationButton.style.display = "none";
      });
    } else if (deviceId === "router3") {
      newDevice.addEventListener("click", () => {
        Routerform3.style.display = "block";
        Routerform2.style.display = "none";
        cableform.style.display = "none";
        simulationButton.style.display = "none";
        configurationButton.style.display = "none";
      });
    }
    routerCounter++;
    console.log(`Router counter: ${routerCounter}`);
  }
});

// Form and button references
const cableform = document.getElementById("Cable-clicked");
const Routerform = document.getElementById("Router-clicked");
const Routerform2 = document.getElementById("Router-clicked2");
const Routerform3 = document.getElementById("Router-clicked3");
const simulationButton = document.getElementById("Simulation");
const configurationButton = document.getElementById("Configuration");
const saveButton = document.getElementById("save");
const save = document.getElementById("save-form");
const save2 = document.getElementById("save-form2");
const save3 = document.getElementById("save-form3");
const Routing_Button = document.getElementById("Routing-but");
const Routing_Button2 = document.getElementById("Routing-but2");
const Routing_Button3 = document.getElementById("Routing-but3");
const OSPF = document.getElementById("OSPF");
const OSPF2 = document.getElementById("OSPF2");
const OSPF3 = document.getElementById("OSPF3");
const EIGRP = document.getElementById("EIGRP");
const EIGRP2 = document.getElementById("EIGRP2");
const EIGRP3 = document.getElementById("EIGRP3");
const Static = document.getElementById("static");
const Static2 = document.getElementById("static2");
const Static3 = document.getElementById("static3");
const OSPF_BUT = document.getElementById("ospf_but");
const OSPF_BUT2 = document.getElementById("ospf_but2");
const OSPF_BUT3 = document.getElementById("ospf_but3");
const ERGRP_BUT = document.getElementById("eigrp_but");
const ERGRP_BUT2 = document.getElementById("eigrp_but2");
const ERGRP_BUT3 = document.getElementById("eigrp_but3");
const Static_BUT = document.getElementById("static_but");
const Static_BUT2 = document.getElementById("static_but2");
const Static_BUT3 = document.getElementById("static_but3");
const Remote_Button = document.getElementById("remote-but");
const Remote_Button2 = document.getElementById("remote-but2");
const Remote_Button3 = document.getElementById("remote-but3");
const SSH_Form = document.getElementById("RemoteLogin");
const SSH_Form2 = document.getElementById("RemoteLogin2");
const SSH_Form3 = document.getElementById("RemoteLogin3");
const SSH_button = document.getElementById("SSH-but");
const SSH_button2 = document.getElementById("SSH-but2");
const SSH_button3 = document.getElementById("SSH-but3");
const DHCP_Button = document.getElementById("DHCP-but");
const DHCP_Button2 = document.getElementById("DHCP-but2");
const DHCP_Button3 = document.getElementById("DHCP-but3");
const DHCP_Form = document.getElementById("DHCP-form");
const DHCP_Form2 = document.getElementById("DHCP-form2");
const DHCP_Form3 = document.getElementById("DHCP-form3");
const Back_buttons = document.querySelectorAll(".Back-button");
const Back_buttons2 = document.querySelectorAll(".Back-button2");
const Back_buttons3 = document.querySelectorAll(".Back-button3");
const save_conf_buttons = document.querySelectorAll(".save-button-router");
const save_conf_buttons2 = document.querySelectorAll(".save-button-router2");
const save_conf_buttons3 = document.querySelectorAll(".save-button-router3");

// Save button click handler
save.addEventListener("click", () => {
  Routerform.style.display = "none";
  Routerform2.style.display = "none";
  Routerform3.style.display = "none";
  simulationButton.style.display = "block";
  configurationButton.style.display = "block";
});
// Save button click handler
save2.addEventListener("click", () => {
  Routerform.style.display = "none";
  Routerform2.style.display = "none";
  Routerform3.style.display = "none";
  simulationButton.style.display = "block";
  configurationButton.style.display = "block";
});
// Save button click handler
save3.addEventListener("click", () => {
  Routerform.style.display = "none";
  Routerform2.style.display = "none";
  Routerform3.style.display = "none";
  simulationButton.style.display = "block";
  configurationButton.style.display = "block";
});

// Save button click handler for forms
saveButton.addEventListener("click", () => {
  cableform.style.display = "none";
  cableform2.style.display = "none";
  cableform3.style.display = "none";
  Routerform.style.display = "none";
  Routerform2.style.display = "none";
  Routerform3.style.display = "none";
  DHCP_Form.style.display = "none";
  DHCP_Form2.style.display = "none";
  DHCP_Form3.style.display = "none";
  Telnet_Form.style.display = "none";
  Telnet_Form2.style.display = "none";
  Telnet_Form3.style.display = "none";
  SSH_Form.style.display = "none";
  SSH_Form2.style.display = "none";
  SSH_Form3.style.display = "none";
  OSPF.style.display = "none";
  OSPF2.style.display = "none";
  OSPF3.style.display = "none";
  EIGRP.style.display = "none";
  EIGRP2.style.display = "none";
  EIGRP3.style.display = "none";
  Static.style.display = "none";
  Static2.style.display = "none";
  Static3.style.display = "none";
  simulationButton.style.display = "block";
  configurationButton.style.display = "block";
});

//==================R1====================

Routing_Button.addEventListener("click", () => {
  Routerform.style.display = "none";
  OSPF.style.display = "block";
  EIGRP.style.display = "none";
  Static.style.display = "none";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  OSPF_BUT.style.color = "white";
  ERGRP_BUT.style.color = "black";
  Static_BUT.style.color = "black";
});
//==================R2====================
Routing_Button2.addEventListener("click", () => {
  Routerform2.style.display = "none";
  OSPF2.style.display = "block";
  EIGRP2.style.display = "none";
  Static2.style.display = "none";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  OSPF_BUT2.style.color = "white";
  ERGRP_BUT2.style.color = "black";
  Static_BUT2.style.color = "black";
});
//==================R3====================
Routing_Button3.addEventListener("click", () => {
  Routerform3.style.display = "none";
  OSPF3.style.display = "block";
  EIGRP3.style.display = "none";
  Static3.style.display = "none";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  OSPF_BUT3.style.color = "white";
  ERGRP_BUT3.style.color = "black";
  Static_BUT3.style.color = "black";
});

//=======================R1=============================
function showRoutingForm(formId, clickedButton) {
  const forms = ["OSPF", "EIGRP", "static"];
  forms.forEach((form) => {
    const formElement = document.getElementById(form);
    if (formElement) formElement.style.display = "none"; // Hide all forms
  });

  const formToShow = document.getElementById(formId);
  if (formToShow) formToShow.style.display = "block"; // Show selected form

  const buttons = document.querySelectorAll(
    "#ospf_but, #eigrp_but, #static_but"
  );
  buttons.forEach((button) => (button.style.color = "black")); // Reset button colors

  clickedButton.style.color = "white"; // Highlight the clicked button
}

//=====================R2=================================
function showRoutingForm2(formId, clickedButton2) {
  const forms = ["OSPF2", "EIGRP2", "static2"];

  forms.forEach((form) => {
    const formElement = document.getElementById(form);
    if (formElement) formElement.style.display = "none"; // Hide all forms
  });

  const formToShow = document.getElementById(formId);
  if (formToShow) formToShow.style.display = "block"; // Show selected form

  const buttons = document.querySelectorAll(
    "#ospf_but2, #eigrp_but2, #static_but2"
  );
  buttons.forEach((button) => (button.style.color = "black")); // Reset button colors

  clickedButton2.style.color = "white"; // Highlight the clicked button
}

//=========================R3========================
function showRoutingForm3(formId, clickedButton3) {
  const forms = ["OSPF3", "EIGRP3", "static3"];

  forms.forEach((form) => {
    const formElement = document.getElementById(form);
    if (formElement) formElement.style.display = "none"; // Hide all forms
  });

  const formToShow = document.getElementById(formId);
  if (formToShow) formToShow.style.display = "block"; // Show selected form

  const buttons = document.querySelectorAll(
    "#ospf_but3, #eigrp_but3, #static_but3"
  );
  buttons.forEach((button) => (button.style.color = "black")); // Reset button colors

  clickedButton3.style.color = "white"; // Highlight the clicked button
}

//===================================================
Remote_Button.addEventListener("click", () => {
  SSH_Form.style.display = "block";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  Routerform.style.display = "none";
});
Remote_Button2.addEventListener("click", () => {
  SSH_Form2.style.display = "block";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  Routerform2.style.display = "none";
});
Remote_Button3.addEventListener("click", () => {
  SSH_Form3.style.display = "block";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  Routerform3.style.display = "none";
});

// DHCP button click handler
DHCP_Button.addEventListener("click", () => {
  DHCP_Form.style.display = "block";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  Routerform.style.display = "none";
});
// DHCP button click handler
DHCP_Button2.addEventListener("click", () => {
  DHCP_Form2.style.display = "block";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  Routerform2.style.display = "none";
});
// DHCP button click handler
DHCP_Button3.addEventListener("click", () => {
  DHCP_Form3.style.display = "block";
  simulationButton.style.display = "none";
  configurationButton.style.display = "none";
  Routerform3.style.display = "none";
});

// Back button click handlers
Back_buttons.forEach((Back_button) => {
  Back_button.addEventListener("click", () => {
    DHCP_Form.style.display = "none";
    SSH_Form.style.display = "none";
    OSPF.style.display = "none";
    EIGRP.style.display = "none";
    Static.style.display = "none";
    Routerform.style.display = "block";
    simulationButton.style.display = "none";
    configurationButton.style.display = "none";
  });
});
Back_buttons2.forEach((Back_button2) => {
  Back_button2.addEventListener("click", () => {
    DHCP_Form2.style.display = "none";
    SSH_Form2.style.display = "none";
    OSPF2.style.display = "none";
    EIGRP2.style.display = "none";
    Static2.style.display = "none";
    Routerform2.style.display = "block";
    simulationButton.style.display = "none";
    configurationButton.style.display = "none";
  });
});
Back_buttons3.forEach((Back_button3) => {
  Back_button3.addEventListener("click", () => {
    DHCP_Form3.style.display = "none";
    SSH_Form3.style.display = "none";
    OSPF3.style.display = "none";
    EIGRP3.style.display = "none";
    Static3.style.display = "none";
    Routerform3.style.display = "block";
    simulationButton.style.display = "none";
    configurationButton.style.display = "none";
  });
});

// Save configuration button click handlers
save_conf_buttons.forEach((save_button) => {
  save_button.addEventListener("click", () => {
    DHCP_Form.style.display = "none";
    SSH_Form.style.display = "none";
    OSPF.style.display = "none";
    EIGRP.style.display = "none";
    Static.style.display = "none";
    Routerform.style.display = "block";
    simulationButton.style.display = "none";
    configurationButton.style.display = "none";
  });
});
save_conf_buttons2.forEach((save_button2) => {
  save_button2.addEventListener("click", () => {
    DHCP_Form2.style.display = "none";
    SSH_Form2.style.display = "none";
    OSPF2.style.display = "none";
    EIGRP2.style.display = "none";
    Static2.style.display = "none";
    Routerform2.style.display = "block";
    simulationButton.style.display = "none";
    configurationButton.style.display = "none";
  });
});
save_conf_buttons3.forEach((save_button3) => {
  save_button3.addEventListener("click", () => {
    DHCP_Form3.style.display = "none";
    SSH_Form3.style.display = "none";
    OSPF3.style.display = "none";
    EIGRP3.style.display = "none";
    Static3.style.display = "none";
    Routerform3.style.display = "block";
    simulationButton.style.display = "none";
    configurationButton.style.display = "none";
  });
});
const deleteButton = document.getElementById("delete-device");
const deleteButton2 = document.getElementById("delete-device2");
const deleteButton3 = document.getElementById("delete-device3");
const deleteButtonCable = document.getElementById("delete-deviceCable");

// Delete device event listener for deleteButton
deleteButton.addEventListener("click", () => {
  const activeDevice = document.querySelector('.device[data-active="true"]');
  if (activeDevice) {
    activeDevice.remove();
    Routerform.style.display = "none";
    cableform.style.display = "none";
    simulationButton.style.display = "block";
    configurationButton.style.display = "block";
    routerCounter--;
    // console.log(`Router counter: ${routerCounter}`);
  } else {
    alert("No device selected to delete.");
  }
});
deleteButton2.addEventListener("click", () => {
  const activeDevice = document.querySelector('.device[data-active="true"]');
  if (activeDevice) {
    activeDevice.remove();
    Routerform2.style.display = "none";
    cableform.style.display = "none";
    simulationButton.style.display = "block";
    configurationButton.style.display = "block";
    routerCounter--;
    // console.log(`Router counter: ${routerCounter}`);
  } else {
    alert("No device selected to delete.");
  }
});
deleteButton3.addEventListener("click", () => {
  const activeDevice = document.querySelector('.device[data-active="true"]');
  if (activeDevice) {
    activeDevice.remove();
    Routerform3.style.display = "none";
    cableform.style.display = "none";
    simulationButton.style.display = "block";
    configurationButton.style.display = "block";
    routerCounter--;
    console.log(`Router counter: ${routerCounter}`);
  } else {
    alert("No device selected to delete.");
  }
});

// Delete device event listener for deleteButtonCable
deleteButtonCable.addEventListener("click", () => {
  const activeDevice = document.querySelector('.device[data-active="true"]');
  if (activeDevice) {
    activeDevice.remove();
    Routerform.style.display = "none";
    cableform.style.display = "none";
    simulationButton.style.display = "block";
    configurationButton.style.display = "block";
  } else {
    alert("No device selected to delete.");
  }
});

// Track active device selection
workspace.addEventListener("click", (event) => {
  const device = event.target.closest(".device");
  if (device) {
    document
      .querySelectorAll(".device")
      .forEach((dev) => dev.setAttribute("data-active", "false"));
    device.setAttribute("data-active", "true");
  }
});
// =======================================================

// JavaScript code here
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
var First = 0; // Initialize First variable

// Function to open modal
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

// Function to close modal
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  First = 1; // Set First variable to 1 when modal is closed
}

// Open modal if First variable is 0 when page loads
window.addEventListener("load", () => {
  if (First === 0) {
    const modal = document.querySelector("[data-modal-target]");
    if (modal) {
      openModal(document.querySelector("#modal")); // Correctly select modal by ID
    }
  }
});

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});


//=============Line===================
let selectedElement = null;
let isConnecting = false;
let firstElement = null;
let connections = [];

function selectElement(event) {
    // event.stopPropagation(); // Prevents event bubbling
    if (isConnecting) { // If in connecting mode
        if (!firstElement) { // First element selection
            firstElement = event.target;
            firstElement.classList.add('selected');
        } else { // Second element selected → create a line
            createLine(firstElement, event.target);
            firstElement.classList.remove('selected');
            firstElement = null;
            isConnecting = false; // Exit connecting mode
        }
        return;
    }
    // Regular selection mode (not connecting)
    if (selectedElement) selectedElement.classList.remove('selected');
    selectedElement = event.target;
    selectedElement.classList.add('selected');
}
//Function to delete the selected element and its associated lines.
function deleteSelected() {
    if (selectedElement) {
        // Remove all connections related to the selected element
        connections = connections.filter(conn => {
            if (conn.start === selectedElement || conn.end === selectedElement) {
                conn.line.remove(); // Remove the line
                return false; // Remove connection from the list
            }
            return true; // Keep other connections
        });
        selectedElement.remove(); // Remove the selected element
        selectedElement = null; // Clear selection
    }
}
//Function to start the connection mode.
function startConnecting() {
    isConnecting = true;
    firstElement = null;
}

//Function to create a line between two elements.
function createLine(start, end) {
    let line = document.createElement('div');
    line.className = 'line'; // Apply line styling
    document.getElementById('workspace').appendChild(line);

    // Store connection details in an array
    connections.push({ start, end, line });

    // Update the line's position and angle
    updateLine(line, start, end);
}
//Function to update the position and angle of a connection line.
function updateLine(line, start, end) {
    let startBox = start.getBoundingClientRect();
    let endBox = end.getBoundingClientRect();
    let workspaceBox = document.getElementById('workspace').getBoundingClientRect();

    // Calculate center positions of the elements
    let startX = startBox.left + startBox.width / 2 - workspaceBox.left;
    let startY = startBox.top + startBox.height / 2 - workspaceBox.top;
    let endX = endBox.left + endBox.width / 2 - workspaceBox.left;
    let endY = endBox.top + endBox.height / 2 - workspaceBox.top;

    // Calculate the direction vector (difference in X and Y)
    let dx = endX - startX;
    let dy = endY - startY;
    let distance = Math.sqrt(dx * dx + dy * dy); // Distance between points

    // Normalize the direction vector
    let nx = dx / distance;
    let ny = dy / distance;

    // Adjust start and end positions to align with element edges
    startX += nx * (startBox.width / 2);
    startY += ny * (startBox.height / 2);
    endX -= nx * (endBox.width / 2);
    endY -= ny * (endBox.height / 2);

    // Calculate line length and angle
    let length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    let angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    // Apply calculated styles to position the line
    line.style.width = `${length}px`;
    line.style.height = '2px';
    line.style.position = 'absolute';
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.transform = `rotate(${angle}deg)`;
}

//Function to update all connection lines when elements are moved.
function updateLines() {
    connections.forEach(({ start, end, line }) => updateLine(line, start, end));
}
//Function to handle dragging an element.
function startDrag(event, element) {
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;

    //Function to move the element while dragging.
    function moveAt(pageX, pageY) {
        element.style.left = `${pageX}-30px`;
        element.style.top = `${pageY} -30px`;
        updateLines(); // Update connected lines
    }
    //Mousemove event to move the element.
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // Add event listener for mouse movement
    document.addEventListener('mousemove', onMouseMove);

    // Remove event listener when mouse is released
    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
}


