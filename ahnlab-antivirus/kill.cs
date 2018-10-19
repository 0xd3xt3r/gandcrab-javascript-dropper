using System;
using System.Runtime.InteropServices;

public class WindowHelper {
      [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
      static extern bool PostMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);
      [return : MarshalAs(UnmanagedType.Bool)]

      [DllImport("user32.dll")]
      public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);

      const Int32 WM_KEYDOWN = 0x0100;
      const Int32 VK_RETURN = 0x0D;
      public static void SendKeysMe(int hWnd) {
              PostMessage(new IntPtr(hWnd), WM_KEYDOWN, new IntPtr(VK_RETURN), new IntPtr(0));
              ShowWindow(new IntPtr(hWnd), 0);
      }
}
