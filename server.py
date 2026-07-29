import http.server
import socketserver
import sys

PORT = 8000
# SECURITY COMPLIANCE: Must bind to localhost (127.0.0.1) and NOT 0.0.0.0
HOST = "127.0.0.1"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent Clickjacking and force Content-Type sniffing prevention
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

def run_server():
    Handler = CustomHandler
    
    # Allow port reuse to prevent address-already-in-use errors
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
            print(f"==================================================")
            print(f" Minimalist Launcher Local Server Active")
            print(f" Serving at: http://{HOST}:{PORT}")
            print(f" Press Ctrl+C to terminate the server")
            print(f"==================================================")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped. Exiting.")
        sys.exit(0)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_server()
