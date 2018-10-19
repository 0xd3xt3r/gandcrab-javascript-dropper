using System;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.Text;

public class a12 {
[return : MarshalAs(UnmanagedType.Bool)]

[DllImport(""user32.dll "", SetLastError = true, CharSet = CharSet.Auto)]
static extern bool PostMessage(IntPtr a15, uint Msg, IntPtr wParam, IntPtr lParam);

[DllImport(""user32.dll "", EntryPoint = ""FindWindowEx "", CharSet = CharSet.Auto)]
static extern IntPtr FindWindowEx(IntPtr a15Parent, IntPtr a15ChildAfter, string lpszClass, string lpszWindow);

[DllImport(""user32.dll "")]
public static extern bool IsWindowVisible(IntPtr a15);
[return : MarshalAs(UnmanagedType.Bool)]

[DllImport(""user32.dll "", SetLastError = true)]
static extern uint GetWindowThreadProcessId(IntPtr a15, out uint lpdwProcessId);

[DllImport(""user32.dll "")]
public static extern bool ShowWindow(IntPtr a15, Int32 nCmdShow);

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
}
