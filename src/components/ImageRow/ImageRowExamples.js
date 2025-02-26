import React from 'react';
import ImageRow from './ImageRow';

// Example custom table component to embed
const DataTable = ({ data }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        {data.headers.map((header, index) => (
          <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#4CAF50', color: 'white' }}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// Example: Using ImageRow with a single image
export const SingleImageExample = () => {
  return (
    <ImageRow 
      headerImage={{
        src: "/api/placeholder/200/100",
        alt: "Company Logo"
      }}
      introSections={[
        {
          title: "Featured Product",
          content: "This is our flagship product, designed with premium materials and cutting-edge technology."
        }
      ]}
      singleImage={{
        src: "/api/placeholder/800/600",
        alt: "Product showcase",
        caption: "Our premium product in natural environment",
        maxWidth: "800px"
      }}
    />
  );
};

// Example: Using ImageRow with a YouTube video
export const YoutubeVideoExample = () => {
  return (
    <ImageRow 
      headerImage={{
        src: "/api/placeholder/200/100",
        alt: "Brand Logo"
      }}
      introSections={[
        {
          title: "Product Tutorial",
          content: "Watch this tutorial to learn how to get the most out of your purchase."
        }
      ]}
      youtubeVideo={{
        videoId: "dQw4w9WgXcQ", // This would be your actual YouTube video ID
        title: "Product Tutorial Video",
        caption: "Step-by-step guide to using our product",
        aspectRatio: "16:9",
        maxWidth: "800px"
      }}
    />
  );
};

// Example: Using ImageRow with a custom component (DataTable)
export const TableComponentExample = () => {
  const tableData = {
    headers: ['Product', 'Price', 'Stock', 'Rating'],
    rows: [
      ['Premium Widget', '$199.99', '15', '4.8/5'],
      ['Standard Widget', '$99.99', '42', '4.2/5'],
      ['Basic Widget', '$49.99', '78', '3.9/5']
    ]
  };

  return (
    <ImageRow 
      headerImage={{
        src: "/api/placeholder/200/100",
        alt: "Store Logo"
      }}
      introSections={[
        {
          title: "Product Comparison",
          content: "Compare our different models to find the right fit for your needs."
        }
      ]}
      customComponent={{
        component: DataTable,
        props: { data: tableData },
        title: "Product Comparison Table",
        maxWidth: "800px",
        wrapperClassName: "product-table-wrapper"
      }}
    />
  );
};

// Example: Combining multiple content types
export const CombinedExample = () => {
  // Image grid data
  const productImages = [
    {
      src: "/api/placeholder/300/300",
      alt: "Product front view",
      action: {
        type: "popup",
        tooltip: "Click to enlarge",
        largeImageSrc: "/api/placeholder/800/800"
      },
      caption: "Front view of the product"
    },
    {
      src: "/api/placeholder/300/300",
      alt: "Product side view",
      action: {
        type: "popup",
        tooltip: "Click to enlarge"
      }
    },
    {
      src: "/api/placeholder/300/300",
      alt: "Product in use",
      action: {
        type: "popup",
        tooltip: "Click to enlarge"
      }
    }
  ];

  // Table data for the custom component
  const specData = {
    headers: ['Specification', 'Value'],
    rows: [
      ['Dimensions', '10" x 8" x 2"'],
      ['Weight', '1.2 lbs'],
      ['Material', 'Aircraft-grade aluminum'],
      ['Battery Life', '12 hours']
    ]
  };

  return (
    <div>
      {/* First section with single image */}
      <ImageRow 
        headerImage={{
          src: "/api/placeholder/200/100",
          alt: "Product Logo"
        }}
        introSections={[
          {
            title: "Product Overview",
            content: "This premium product combines elegance with functionality."
          }
        ]}
        singleImage={{
          src: "/api/placeholder/800/400",
          alt: "Product hero image",
          caption: "Our flagship product",
          maxWidth: "800px"
        }}
      />

      {/* Second section with YouTube video */}
      <ImageRow 
        introSections={[
          {
            title: "See It In Action",
            content: "Watch our product demonstration video."
          }
        ]}
        youtubeVideo={{
          videoId: "dQw4w9WgXcQ",
          title: "Product Demo Video",
          caption: "Watch how our product works in real-world scenarios",
          aspectRatio: "16:9"
        }}
      />

      {/* Third section with image grid (original functionality) */}
      <ImageRow 
        introSections={[
          {
            title: "Product Gallery",
            content: "Explore our product from different angles."
          }
        ]}
        images={productImages}
        imagesPerRow={3}
      />

      {/* Fourth section with custom component */}
      <ImageRow 
        introSections={[
          {
            title: "Technical Specifications",
            content: "Detailed specifications of our product."
          }
        ]}
        customComponent={{
          component: DataTable,
          props: { data: specData },
          title: "Product Specifications",
          maxWidth: "600px"
        }}
      />
    </div>
  );
};