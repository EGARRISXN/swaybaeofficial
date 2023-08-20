export default function Sitemap() {
  const urls = [
    {
      url: "https://swaybae.net",
      lastModified: new Date(),
    },
    {
      url: "https://swaybae.net/about",
      lastModified: new Date(),
    },
    {
      url: "https://swaybae.net/socials",
      lastModified: new Date(),
    },
    {
      url: "https://swaybae.net/merch",
      lastModified: new Date(),
    },
    {
      url: "https://swaybae.net/mediakit",
      lastModified: new Date(),
    },
    {
      url: "https://swaybae.net/inquiries",
      lastModified: new Date(),
    },
    {
      url: "https://swaybae.net/subathon",
      lastModified: new Date(),
    },
  ];

  const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (entry) => `
          <url>
            <loc>${entry.url}</loc>
            <lastmod>${entry.lastModified.toISOString().split("T")[0]}</lastmod>
          </url>
        `
        )
        .join("")}
    </urlset>
  `;

  return (
    <div>
      <pre>{sitemapContent}</pre>
    </div>
  );
}
