/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    // Your other configurations...
  
    // Add this to enable static HTML export
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other paths as needed
      };
    },
  };
  
  