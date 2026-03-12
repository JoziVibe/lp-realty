'use server';
/**
 * @fileOverview An AI agent that generates engaging and brand-aligned property descriptions.
 *
 * - generateListingDescription - A function that generates a property description.
 * - GenerateListingDescriptionInput - The input type for the generateListingDescription function.
 * - GenerateListingDescriptionOutput - The return type for the generateListingDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateListingDescriptionInputSchema = z.object({
  title: z.string().describe('The main title or catchy headline for the property.'),
  suburb: z.string().describe('The suburb where the property is located.'),
  city: z.enum(['Johannesburg', 'Cape Town']).describe('The city where the property is located.'),
  price: z.number().describe('The selling price of the property.'),
  bedrooms: z.number().int().positive().describe('The number of bedrooms.'),
  bathrooms: z.number().int().positive().describe('The number of bathrooms.'),
  sizeM2: z.number().positive().describe('The internal size of the property in square meters.'),
  plotM2: z.number().positive().optional().describe('The plot size of the property in square meters, if applicable.'),
  type: z.enum(['House', 'Apartment', 'Estate', 'Penthouse', 'Townhouse']).describe('The type of property.'),
  uniqueFeatures: z.string().optional().describe('Comma-separated unique selling points or features, e.g., "infinity pool, panoramic views, smart home system".'),
});
export type GenerateListingDescriptionInput = z.infer<typeof GenerateListingDescriptionInputSchema>;

const GenerateListingDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated engaging and brand-aligned property description.'),
});
export type GenerateListingDescriptionOutput = z.infer<typeof GenerateListingDescriptionOutputSchema>;

export async function generateListingDescription(input: GenerateListingDescriptionInput): Promise<GenerateListingDescriptionOutput> {
  return generateListingDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateListingDescriptionPrompt',
  input: { schema: GenerateListingDescriptionInputSchema },
  output: { schema: GenerateListingDescriptionOutputSchema },
  prompt: `You are an expert real estate copywriter for LP Realty, a high-end, media-first real estate agency in South Africa. Your task is to generate a concise, engaging, and persuasive property description based on the provided details, strictly adhering to LP Realty's brand voice and writing rules.

LP Realty Brand Voice Guidelines:
- Authoritative: Earned confidence, backed by data.
- Relationship-First: Warm, long-term, personal.
- Media-Forward: Platform reach is a differentiator.
- South African: Local roots, global reach.
- Premium, Not Pretentious: Aspirational without being exclusionary.
- Action-Oriented: Urgency through opportunity, not pressure.

Writing Rules:
- Avoid words like "cheapest", "deal", "discount". Instead, use "value", "opportunity", "investment".
- Use CTA verbs such as "Book", "Discover", "Explore", "Enquire", "Connect".
- Format prices as "R X,XXX,XXX" (e.g., R 4,250,000).
- Format locations as "Suburb, City" (e.g., Sea Point, Cape Town).

Property Details:
- Title: {{{title}}}
- Location: {{{suburb}}}, {{{city}}}
- Price: R {{formatCurrency price}}
- Type: {{{type}}}
- Bedrooms: {{{bedrooms}}}
- Bathrooms: {{{bathrooms}}}
- Interior Size: {{{sizeM2}}}m²
{{#if plotM2}}- Plot Size: {{{plotM2}}}m²{{/if}}
{{#if uniqueFeatures}}- Unique Features: {{{uniqueFeatures}}}{{/if}}

Generate a compelling property description that highlights its unique selling points while reflecting LP Realty's premium and authoritative brand image. Conclude with a strong call to action.
`,
});

const generateListingDescriptionFlow = ai.defineFlow(
  {
    name: 'generateListingDescriptionFlow',
    inputSchema: GenerateListingDescriptionInputSchema,
    outputSchema: GenerateListingDescriptionOutputSchema,
  },
  async (input) => {
    // Helper for currency formatting within the prompt. Genkit automatically handles `ai.definePrompt` with helper functions.
    const formatCurrency = (value: number) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value).replace('R', '');

    const { output } = await prompt({ ...input, formatCurrency });
    return output!;
  }
);
