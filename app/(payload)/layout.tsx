import "@payloadcms/next/css";

export const metadata = {
  title: "Battery Spain - Admin",
  description: "Admin panel for Battery Spain",
};

export default function PayloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
