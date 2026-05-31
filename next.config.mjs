import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      { source: "/about", destination: "/en/about", permanent: true },
      { source: "/services", destination: "/en/services", permanent: true },
      { source: "/projects", destination: "/en/projects", permanent: true },
      { source: "/blog", destination: "/en/blog", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/hizmetler", destination: "/tr/hizmetler", permanent: true },
      { source: "/projeler", destination: "/tr/projects", permanent: true },
      { source: "/sss", destination: "/tr/hizmetler", permanent: true },
      {
        source: "/hizmetler/fizibilite-ve-yatirim-danismanligi",
        destination: "/tr/services/yenilenebilir-enerji-yatirim-danismanligi",
        permanent: true
      },
      { source: "/en/hizmetler", destination: "/en/services", permanent: true },
      { source: "/tr/services", destination: "/tr/hizmetler", permanent: true },
      { source: "/en/iletisim", destination: "/en/contact", permanent: true },
      { source: "/tr/contact", destination: "/tr/iletisim", permanent: true }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default withMDX(nextConfig);
