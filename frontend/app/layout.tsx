import "../styles/globals.css";

export const metadata = {
  title: "GPU Scheduler Dashboard",
  description: "AI-driven GPU scheduling visualizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
