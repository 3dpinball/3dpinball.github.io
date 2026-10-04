# Simple static web server for Road Rash web (no install / no admin needed).
# Run:  powershell -ExecutionPolicy Bypass -File serve.ps1
# Then open the printed address on your phone (same Wi-Fi network).
param([int]$Port = 8080)

$root = $PSScriptRoot
Add-Type -TypeDefinition @"
using System; using System.IO; using System.Net; using System.Net.Sockets; using System.Text; using System.Threading;
public static class MiniServer {
  static string Root;
  static string Mime(string p) {
    switch (Path.GetExtension(p).ToLowerInvariant()) {
      case ".html": return "text/html; charset=utf-8";
      case ".js": case ".mjs": return "text/javascript";
      case ".css": return "text/css";
      case ".wasm": return "application/wasm";
      case ".json": case ".map": return "application/json";
      default: return "application/octet-stream";
    }
  }
  public static void Run(string root, int port) {
    Root = Path.GetFullPath(root);
    var l = new TcpListener(IPAddress.Any, port); l.Start();
    while (true) { var c = l.AcceptTcpClient(); ThreadPool.QueueUserWorkItem(_ => Handle(c)); }
  }
  static void Handle(TcpClient c) {
    try {
      using (c) using (var s = c.GetStream()) {
        var r = new StreamReader(s, Encoding.ASCII);
        string line = r.ReadLine(); if (line == null) return;
        long start = -1, end = -1; string h;
        while (!string.IsNullOrEmpty(h = r.ReadLine())) {
          if (h.StartsWith("Range:", StringComparison.OrdinalIgnoreCase)) {
            var v = h.Substring(6).Trim().Replace("bytes=", "").Split('-');
            long.TryParse(v[0], out start); if (v.Length > 1 && v[1] != "") long.TryParse(v[1], out end);
          }
        }
        var parts = line.Split(' '); string method = parts[0];
        string url = Uri.UnescapeDataString(parts[1].Split('?')[0]);
        if (url.EndsWith("/")) url += "index.html";
        string path = Path.GetFullPath(Path.Combine(Root, url.TrimStart('/').Replace('/', Path.DirectorySeparatorChar)));
        if (!path.StartsWith(Root) || !File.Exists(path)) {
          var nf = Encoding.ASCII.GetBytes("HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\nConnection: close\r\n\r\n");
          s.Write(nf, 0, nf.Length); return;
        }
        using (var f = File.OpenRead(path)) {
          long len = f.Length; string status = "200 OK", extra = "";
          if (start >= 0) { if (end < 0 || end >= len) end = len - 1; status = "206 Partial Content"; extra = "Content-Range: bytes " + start + "-" + end + "/" + len + "\r\n"; f.Position = start; len = end - start + 1; }
          var hdr = Encoding.ASCII.GetBytes("HTTP/1.1 " + status + "\r\nContent-Type: " + Mime(path) + "\r\nContent-Length: " + len + "\r\nAccept-Ranges: bytes\r\n" + extra + "Cache-Control: no-cache\r\nConnection: close\r\n\r\n");
          s.Write(hdr, 0, hdr.Length);
          if (method == "HEAD") return;
          var buf = new byte[1 << 16]; long left = len; int n;
          while (left > 0 && (n = f.Read(buf, 0, (int)Math.Min(buf.Length, left))) > 0) { s.Write(buf, 0, n); left -= n; }
        }
      }
    } catch { }
  }
}
"@

$ips = [Net.Dns]::GetHostAddresses([Net.Dns]::GetHostName()) | Where-Object { $_.AddressFamily -eq 'InterNetwork' -and -not $_.ToString().StartsWith('169.254') }
Write-Host ""
Write-Host "Road Rash web dang chay. Mo tren dien thoai (cung Wi-Fi):" -ForegroundColor Green
foreach ($ip in $ips) { Write-Host "   http://$($ip):$Port/" -ForegroundColor Yellow }
Write-Host "Tren may tinh: http://localhost:$Port/"
Write-Host "Nhan Ctrl+C de dung."
Write-Host ""
[MiniServer]::Run($root, $Port)
