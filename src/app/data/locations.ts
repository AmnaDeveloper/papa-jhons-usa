export type DayHours = {
    day: string;
    open: string;
    close: string;
};

export type Location = {
    id: string;
    slug: string;
    city: string;
    state: string;
    stateCode: string;
    zipCode: string;
    address: string;
    phone: string;
    hours: string;
    weeklyHours: DayHours[];
    latitude: number;
    longitude: number;
    mapsUrl: string;
};

const std: DayHours[] = [
    { day: 'Monday',    open: '3:00 PM',  close: '10:00 PM' },
    { day: 'Tuesday',   open: '3:00 PM',  close: '10:00 PM' },
    { day: 'Wednesday', open: '3:00 PM',  close: '10:00 PM' },
    { day: 'Thursday',  open: '3:00 PM',  close: '10:00 PM' },
    { day: 'Friday',    open: '11:00 AM', close: '11:00 PM' },
    { day: 'Saturday',  open: '11:00 AM', close: '11:00 PM' },
    { day: 'Sunday',    open: '11:00 AM', close: '10:00 PM' },
];

const ext: DayHours[] = [
    { day: 'Monday',    open: '10:00 AM', close: '11:00 PM' },
    { day: 'Tuesday',   open: '10:00 AM', close: '11:00 PM' },
    { day: 'Wednesday', open: '10:00 AM', close: '11:00 PM' },
    { day: 'Thursday',  open: '10:00 AM', close: '11:00 PM' },
    { day: 'Friday',    open: '10:00 AM', close: '12:00 AM' },
    { day: 'Saturday',  open: '10:00 AM', close: '12:00 AM' },
    { day: 'Sunday',    open: '11:00 AM', close: '11:00 PM' },
];

export const locations: Location[] = [
    { id: 'al-1', slug: 'birmingham-al', city: 'Birmingham', state: 'Alabama', stateCode: 'AL', zipCode: '35205', address: '1429 11th Ave South, Birmingham, AL 35205', phone: '(205) 933-6900', hours: 'Mon–Thu: 10AM–11PM | Fri–Sat: 10AM–12AM | Sun: 10AM–11PM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=1429+11th+Ave+South+Birmingham+AL+35205' },
    { id: 'al-2', slug: 'montgomery-al', city: 'Montgomery', state: 'Alabama', stateCode: 'AL', zipCode: '36107', address: '2545 Madison Ave, Montgomery, AL 36107', phone: '(334) 262-7272', hours: 'Mon–Thu: 10AM–11PM | Fri–Sat: 10AM–12AM | Sun: 10AM–11PM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=2545+Madison+Ave+Montgomery+AL+36107' },
    { id: 'ak-1', slug: 'anchorage-ak', city: 'Anchorage', state: 'Alaska', stateCode: 'AK', zipCode: '99504', address: '360 Boniface Pkwy, Anchorage, AK 99504', phone: '(907) 333-7272', hours: 'Mon–Thu: 10AM–12AM | Fri–Sat: 10AM–1AM | Sun: 10AM–12AM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=360+Boniface+Pkwy+Anchorage+AK+99504' },
    { id: 'az-1', slug: 'phoenix-az', city: 'Phoenix', state: 'Arizona', stateCode: 'AZ', zipCode: '85018', address: '4501 E Thomas Rd, Ste 127, Phoenix, AZ 85018', phone: '(602) 667-0600', hours: 'Mon–Thu: 9:30AM–12AM | Fri–Sat: 9:30AM–1AM | Sun: 9:30AM–12AM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=4501+E+Thomas+Rd+Phoenix+AZ+85018' },
    { id: 'az-2', slug: 'tucson-az', city: 'Tucson', state: 'Arizona', stateCode: 'AZ', zipCode: '85748', address: '9505 E Broadway Blvd, Tucson, AZ 85748', phone: '(520) 296-3434', hours: 'Mon–Thu: 10AM–11PM | Fri–Sat: 10AM–12AM | Sun: 10AM–11PM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=9505+E+Broadway+Blvd+Tucson+AZ+85748' },
    { id: 'ar-1', slug: 'little-rock-ar', city: 'Little Rock', state: 'Arkansas', stateCode: 'AR', zipCode: '72204', address: '2000 S University Ave, Ste C, Little Rock, AR 72204', phone: '(501) 671-6300', hours: 'Mon–Thu: 9:30AM–12AM | Fri–Sat: 9:30AM–1AM | Sun: 9:30AM–12AM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=2000+S+University+Ave+Little+Rock+AR+72204' },
    { id: 'ca-1', slug: 'san-francisco-ca', city: 'San Francisco', state: 'California', stateCode: 'CA', zipCode: '94109', address: '969 Sutter St, San Francisco, CA 94109', phone: '(415) 440-7272', hours: 'Sun–Thu: 10AM–12AM | Fri–Sat: 10AM–2AM', weeklyHours: std, latitude: 0, longitude: 0, mapsUrl: 'https://maps.google.com/?q=969+Sutter+St+San+Francisco+CA+94109' }
];

export const getLocationBySlug = (slug: string) => {
    return locations.find((loc) => loc.slug === slug);
};

export const getLocationsByState = (stateCode: string) => {
    return locations.filter((loc) => loc.stateCode === stateCode);
};

export const getUniqueStates = () => {
    const seen = new Set<string>();
    return locations
        .filter(loc => {
            if (seen.has(loc.stateCode)) return false;
            seen.add(loc.stateCode);
            return true;
        })
        .map(loc => ({ name: loc.state, code: loc.stateCode }))
        .sort((a, b) => a.name.localeCompare(b.name));
};
