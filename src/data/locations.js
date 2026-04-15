import { createLookupMap } from "../utils/data";

const locations = [
  {
    slug: "london-uk",
    name: "London, UK",
    country: "United Kingdom",
    address: "221B Baker Street, London",
    phone: "+44 20 7946 0958",
    lat: 51.5074,
    lng: -0.1278,
    legacySource: "Contact.html",
    migrationStatus: "full",
  },
  {
    slug: "new-york-usa",
    name: "New York, USA",
    country: "United States",
    address: "123 Madison Ave, New York",
    phone: "+1 212 555 7890",
    lat: 40.7128,
    lng: -74.006,
    legacySource: "Contact.html",
    migrationStatus: "full",
  },
  {
    slug: "sydney-australia",
    name: "Sydney, Australia",
    country: "Australia",
    address: "45 George St, Sydney",
    phone: "+61 2 9876 5432",
    lat: -33.8688,
    lng: 151.2093,
    legacySource: "Contact.html",
    migrationStatus: "full",
  },
  {
    slug: "mumbai-india",
    name: "Mumbai, India",
    country: "India",
    address: "Bandra Kurla Complex, Mumbai",
    phone: "+91 22 4567 8901",
    lat: 19.076,
    lng: 72.8777,
    legacySource: "Contact.html",
    migrationStatus: "full",
  },
];

export const locationMap = createLookupMap(locations);

export default locations;
