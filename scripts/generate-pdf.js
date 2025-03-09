import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Get absolute paths
    const htmlPath = resolve(__dirname, '../public/cv/cv.html');
    const pdfPath = resolve(__dirname, '../public/cv/Zaryab_Ahmar_CV.pdf');
    
    // Load the HTML file
    await page.goto(`file://${htmlPath}`);
    
    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      },
      printBackground: true
    });

    await browser.close();
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
})(); 