import { GoogleGenAI, Type, type Schema } from '@google/genai';
import { type SubNiche, type SiteCopy } from './types';

// Generic fallback copy
const genericCopy: SiteCopy = {
  brandName: 'Brand',
  tagline: 'Modern Solutions',
  heroHeadline: 'Build Something Amazing',
  heroSub: 'The modern platform for modern teams.',
  heroCTA: 'Get Started',
  heroSecondaryCTA: 'Learn More',
  navLinks: [{ label: 'Features', href: '#features' }, { label: 'Pricing', href: '#pricing' }, { label: 'Contact', href: '#contact' }],
  footerTagline: 'Empowering teams worldwide.'
};

const copyMap: Partial<Record<SubNiche, SiteCopy>> = {
  beauty_store: {
    brandName: 'Lumière',
    tagline: 'Clean Beauty & Skincare',
    heroHeadline: 'Reveal Your Natural Radiance',
    heroSub: 'Clean, cruelty-free beauty essentials designed to enhance your natural glow.',
    heroCTA: 'Shop Collection',
    heroSecondaryCTA: 'Take Skin Quiz',
    navLinks: [{ label: 'Skincare', href: '/skincare' }, { label: 'Makeup', href: '/makeup' }, { label: 'About', href: '/about' }],
    footerTagline: 'Beauty without compromise.'
  },
  sneaker_store: {
    brandName: 'SoleShift',
    tagline: 'Premium Kicks & Streetwear',
    heroHeadline: 'Step Into The Future',
    heroSub: 'Exclusive drops, limited editions, and the latest silhouettes from top brands.',
    heroCTA: 'Shop Latest Drops',
    heroSecondaryCTA: 'View Collections',
    navLinks: [{ label: 'New Arrivals', href: '/new' }, { label: 'Brands', href: '/brands' }, { label: 'Sale', href: '/sale' }],
    footerTagline: 'Your destination for rare sneakers.'
  },
  gadget_store: {
    brandName: 'TechNova',
    tagline: 'Next-Gen Electronics',
    heroHeadline: 'Technology That Empowers',
    heroSub: 'Discover the latest innovations in smart devices, computing, and audio.',
    heroCTA: 'Shop Devices',
    heroSecondaryCTA: 'Compare Specs',
    navLinks: [{ label: 'Laptops', href: '/laptops' }, { label: 'Audio', href: '/audio' }, { label: 'Accessories', href: '/accessories' }],
    footerTagline: 'The future of technology, today.'
  },
  perfume_store: {
    brandName: 'Aura',
    tagline: 'Fine Fragrances',
    heroHeadline: 'Find Your Signature Scent',
    heroSub: 'Artisan crafted perfumes blending rare botanicals and exotic woods.',
    heroCTA: 'Explore Fragrances',
    heroSecondaryCTA: 'Discover Notes',
    navLinks: [{ label: 'Perfumes', href: '/perfumes' }, { label: 'Collections', href: '/collections' }, { label: 'Gifts', href: '/gifts' }],
    footerTagline: 'Evoke emotion with every spray.'
  },
  saas_generic: {
    brandName: 'Nexus',
    tagline: 'Workflow Automation',
    heroHeadline: 'Work Smarter, Not Harder',
    heroSub: 'Automate your team\'s workflow with our intelligent platform.',
    heroCTA: 'Start Free Trial',
    heroSecondaryCTA: 'View Demo',
    navLinks: [{ label: 'Product', href: '/product' }, { label: 'Pricing', href: '/pricing' }, { label: 'Log In', href: '/login' }],
    footerTagline: 'The leading workflow automation tool.'
  },
  hospital_general: {
    brandName: 'CarePlus',
    tagline: 'Healthcare Excellence',
    heroHeadline: 'Compassionate Care for You',
    heroSub: 'World-class medical professionals dedicated to your health and well-being.',
    heroCTA: 'Book Appointment',
    heroSecondaryCTA: 'Our Services',
    navLinks: [{ label: 'Doctors', href: '/doctors' }, { label: 'Departments', href: '/departments' }, { label: 'Contact', href: '/contact' }],
    footerTagline: 'Your health is our priority.'
  }
};

const getAiClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') return null;
  return new GoogleGenAI({ apiKey });
};

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    brandName: { type: Type.STRING, description: "A creative brand name based on the prompt." },
    tagline: { type: Type.STRING, description: "A short, catchy tagline (2-4 words)." },
    heroHeadline: { type: Type.STRING, description: "A highly relevant, engaging hero headline." },
    heroSub: { type: Type.STRING, description: "A detailed sub-headline expanding on the headline (1-2 sentences)." },
    heroCTA: { type: Type.STRING, description: "Primary Call-to-Action button text (e.g. 'Get Started', 'Order Now')." },
    heroSecondaryCTA: { type: Type.STRING, description: "Secondary Call-to-Action button text (e.g. 'Learn More', 'View Menu')." },
    footerTagline: { type: Type.STRING, description: "A short tagline for the footer." },
    navLinks: {
      type: Type.ARRAY,
      description: "Exactly 3 navigation links relevant to the business.",
      items: {
        type: Type.OBJECT,
        properties: {
          label: { type: Type.STRING },
          href: { type: Type.STRING }
        },
        required: ["label", "href"]
      }
    }
  },
  required: ["brandName", "tagline", "heroHeadline", "heroSub", "heroCTA", "heroSecondaryCTA", "footerTagline", "navLinks"]
};

export const generateCopy = async (prompt: string, subNiche: SubNiche): Promise<SiteCopy> => {
  const ai = getAiClient();
  
  // Try to extract brand name from prompt "called X" or "name X"
  const brandMatch = prompt.match(/(?:called|named?|titled?)\s+["']?([^"'.]+)["']?/i);
  const extractedName = brandMatch ? brandMatch[1].trim() : null;

  if (ai) {
    try {
      const systemInstruction = `You are an expert website copywriter. Generate compelling, highly relevant website copy based on the user's prompt. The niche is '${subNiche}'. ${extractedName ? `The brand is named '${extractedName}'.` : ''} Return the copy perfectly matching the required JSON schema.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: responseSchema,
          systemInstruction: systemInstruction,
          temperature: 0.7
        }
      });
      
      if (response.text) {
        const generated = JSON.parse(response.text) as SiteCopy;
        if (extractedName) generated.brandName = extractedName;
        return generated;
      }
    } catch (e: any) {
      console.error("Gemini API Error:", e);
      throw new Error(`Gemini API Error: ${e.message || 'Failed to generate copy'}`);
    }
  }

  // Fallback if AI fails or no API key
  const baseCopy = copyMap[subNiche] || genericCopy;
  return {
    ...baseCopy,
    brandName: extractedName || baseCopy.brandName
  };
};
