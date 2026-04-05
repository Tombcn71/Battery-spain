import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@payloadcms/db-postgres", "drizzle-kit"],
};

export default nextConfig;