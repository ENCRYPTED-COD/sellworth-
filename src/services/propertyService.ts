import { properties, Property } from "../data/properties";

/**
 * Service layer for fetching properties.
 * Designed to be easily swapped out for a CMS (Firebase, Supabase, etc.) in the future.
 */
export const propertyService = {
  /**
   * Fetch all properties
   */
  async getAllProperties(): Promise<Property[]> {
    // Simulate network delay if needed, currently resolving immediately
    return Promise.resolve(properties);
  },

  /**
   * Fetch a single property by slug
   */
  async getPropertyBySlug(slug: string): Promise<Property | undefined> {
    const property = properties.find(p => p.slug === slug);
    return Promise.resolve(property);
  },

  /**
   * Fetch properties by category (e.g. "new-launch", "residences")
   */
  async getPropertiesByCategory(category: string): Promise<Property[]> {
    const filtered = properties.filter(p => p.projectType === category || p.status === category);
    return Promise.resolve(filtered);
  },

  /**
   * Fetch new launch properties for a specific micro-market, limited to a certain number
   */
  async getFeaturedNewLaunchByMarket(microMarket: string, limit: number = 3): Promise<Property[]> {
    const filtered = properties
      .filter(p => p.newLaunch && p.microMarket === microMarket)
      .slice(0, limit);
    return Promise.resolve(filtered);
  },

  /**
   * Fetch all new launch properties for a specific micro-market
   */
  async getAllNewLaunchByMarket(microMarket: string): Promise<Property[]> {
    const filtered = properties.filter(p => p.newLaunch && p.microMarket === microMarket);
    return Promise.resolve(filtered);
  }
};
