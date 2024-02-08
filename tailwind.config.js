/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Manrope": ["Manrope", 'sans-serif']
    },
     screens: {

      'mobile': {'min': '234px', 'max': '640px'},
      //  => @media (min-width: 234px) and (max-width: 640px) 

      'tablet': '640px',
      // => @media (min-width: 640px) 

      'laptop': '1024px',
      // => @media (min-width: 1024px) 

      'desktop': '1280px',
      // => @media (min-width: 1280px) 
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('src/components/HeroSection/Images/hero-mobile.png')",
        'hero-tablet': "url('src/components/HeroSection/Images/hero-tablet.png')",
        'hero-desktop': "url('src/components/HeroSection/Images/hero-desktop.png')",

                // secondary background images for home page
                'mobile': "url('resources/assets/home/mobile/image-speaker-zx7.jpg')",
                'tablet': "url('resources/assets/home/tablet/image-speaker-zx7.jpg')",
                'laptop': "url('resources/assets/home/desktop/image-speaker-zx7.jpg')",
        
                // textiary background images for home page
                't-mobile': "url('resources/assets/home/mobile/image-earphones-yx1.jpg')",
                't-tablet': "url('resources/assets/home/tablet/image-earphones-yx1.jpg')",
                't-laptop': "url('resources/assets/home/desktop/image-earphones-yx1.jpg')",

                // images background images for ads section
                'bestgear1': "url('resources/assets/shared/mobile/image-best-gear.jpg')",
                'bestgear2': "url('resources/assets/shared/tablet/image-best-gear.jpg')",
                'bestgear3': "url('resources/assets/shared/desktop/image-best-gear.jpg')",

        // category images headphones
        'head-mobile': "url('resources/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg')",
        'head-tablet': "url('resources/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg')",
        'head-laptop': "url('resources/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')",
           
          // second images section for headphones devices
            'head-2-mobile': "url('resources/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')",
            'head-3-tablet': "url('resources/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')",
            'head-4-laptop': "url('resources/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')",

              // third images section for headphones devices 
              'head-5-mobile': "url('resources/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg')",
              'head-6-tablet': "url('resources/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg')",
              'head-7-laptop': "url('resources/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg')",


        // category images speakers

        'speaker-mobile': "url('resources/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg')",
        'speaker-tablet': "url('resources/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg')",
        'speaker-laptop': "url('resources/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg')",

            // second images for speakers
            'speaker-2-mobile': "url('resources/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg')",
            'speaker-3-tablet': "url('resources/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg')",
            'speaker-4-laptop': "url('resources/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg')",

        // category images earphones
        'earphone-mobile': "url('resources/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg')",
        'earphone-tablet': "url('resources/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg')",
        'earphone-laptop': "url('resources/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')",
      }
    },
  },
  plugins: [],
}

