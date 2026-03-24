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
    // Alabama
    { id: 'al-1', slug: 'birmingham-al', city: 'Birmingham', state: 'Alabama', stateCode: 'AL', zipCode: '35203', address: '1800 5th Ave N, Birmingham, AL 35203', phone: '(205) 555-0101', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 33.5186, longitude: -86.8104, mapsUrl: 'https://maps.google.com/?q=1800+5th+Ave+N+Birmingham+AL' },
    { id: 'al-2', slug: 'montgomery-al', city: 'Montgomery', state: 'Alabama', stateCode: 'AL', zipCode: '36104', address: '303 Adams Ave, Montgomery, AL 36104', phone: '(334) 555-0102', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 32.3668, longitude: -86.2999, mapsUrl: 'https://maps.google.com/?q=303+Adams+Ave+Montgomery+AL' },
    // Alaska
    { id: 'ak-1', slug: 'anchorage-ak', city: 'Anchorage', state: 'Alaska', stateCode: 'AK', zipCode: '99501', address: '600 W 5th Ave, Anchorage, AK 99501', phone: '(907) 555-0201', hours: '11:00 AM - 10:00 PM', weeklyHours: std, latitude: 61.2181, longitude: -149.9003, mapsUrl: 'https://maps.google.com/?q=600+W+5th+Ave+Anchorage+AK' },
    // Arizona
    { id: 'az-1', slug: 'phoenix-az', city: 'Phoenix', state: 'Arizona', stateCode: 'AZ', zipCode: '85001', address: '2 N Central Ave, Phoenix, AZ 85004', phone: '(602) 555-0301', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 33.4484, longitude: -112.0740, mapsUrl: 'https://maps.google.com/?q=2+N+Central+Ave+Phoenix+AZ' },
    { id: 'az-2', slug: 'tucson-az', city: 'Tucson', state: 'Arizona', stateCode: 'AZ', zipCode: '85701', address: '100 N Stone Ave, Tucson, AZ 85701', phone: '(520) 555-0302', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 32.2226, longitude: -110.9747, mapsUrl: 'https://maps.google.com/?q=100+N+Stone+Ave+Tucson+AZ' },
    // Arkansas
    { id: 'ar-1', slug: 'little-rock-ar', city: 'Little Rock', state: 'Arkansas', stateCode: 'AR', zipCode: '72201', address: '500 President Clinton Ave, Little Rock, AR 72201', phone: '(501) 555-0401', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 34.7465, longitude: -92.2896, mapsUrl: 'https://maps.google.com/?q=500+President+Clinton+Ave+Little+Rock+AR' },
    // California
    { id: 'ca-1', slug: 'los-angeles-ca', city: 'Los Angeles', state: 'California', stateCode: 'CA', zipCode: '90028', address: '123 Hollywood Blvd, Los Angeles, CA 90028', phone: '(310) 555-0501', hours: '11:00 AM - 12:00 AM', weeklyHours: ext, latitude: 34.0522, longitude: -118.2437, mapsUrl: 'https://maps.google.com/?q=123+Hollywood+Blvd+Los+Angeles+CA' },
    { id: 'ca-2', slug: 'san-diego-ca', city: 'San Diego', state: 'California', stateCode: 'CA', zipCode: '92101', address: '456 Gaslamp Quarter, San Diego, CA 92101', phone: '(619) 555-0502', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 32.7157, longitude: -117.1611, mapsUrl: 'https://maps.google.com/?q=456+Gaslamp+Quarter+San+Diego+CA' },
    { id: 'ca-3', slug: 'san-francisco-ca', city: 'San Francisco', state: 'California', stateCode: 'CA', zipCode: '94102', address: '1 Market St, San Francisco, CA 94105', phone: '(415) 555-0503', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 37.7749, longitude: -122.4194, mapsUrl: 'https://maps.google.com/?q=1+Market+St+San+Francisco+CA' },
    // Colorado
    { id: 'co-1', slug: 'denver-co', city: 'Denver', state: 'Colorado', stateCode: 'CO', zipCode: '80202', address: '1600 Glenarm Pl, Denver, CO 80202', phone: '(720) 555-0601', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 39.7392, longitude: -104.9903, mapsUrl: 'https://maps.google.com/?q=1600+Glenarm+Pl+Denver+CO' },
    { id: 'co-2', slug: 'colorado-springs-co', city: 'Colorado Springs', state: 'Colorado', stateCode: 'CO', zipCode: '80903', address: '14 S Nevada Ave, Colorado Springs, CO 80903', phone: '(719) 555-0602', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 38.8339, longitude: -104.8214, mapsUrl: 'https://maps.google.com/?q=14+S+Nevada+Ave+Colorado+Springs+CO' },
    // Connecticut
    { id: 'ct-1', slug: 'hartford-ct', city: 'Hartford', state: 'Connecticut', stateCode: 'CT', zipCode: '06103', address: '185 Asylum St, Hartford, CT 06103', phone: '(860) 555-0701', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 41.7658, longitude: -72.6734, mapsUrl: 'https://maps.google.com/?q=185+Asylum+St+Hartford+CT' },
    // Delaware
    { id: 'de-1', slug: 'wilmington-de', city: 'Wilmington', state: 'Delaware', stateCode: 'DE', zipCode: '19801', address: '800 N King St, Wilmington, DE 19801', phone: '(302) 555-0801', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 39.7447, longitude: -75.5484, mapsUrl: 'https://maps.google.com/?q=800+N+King+St+Wilmington+DE' },
    // Florida
    { id: 'fl-1', slug: 'miami-fl', city: 'Miami', state: 'Florida', stateCode: 'FL', zipCode: '33132', address: '100 Biscayne Blvd, Miami, FL 33132', phone: '(305) 555-0901', hours: '11:00 AM - 12:00 AM', weeklyHours: ext, latitude: 25.7617, longitude: -80.1918, mapsUrl: 'https://maps.google.com/?q=100+Biscayne+Blvd+Miami+FL' },
    { id: 'fl-2', slug: 'orlando-fl', city: 'Orlando', state: 'Florida', stateCode: 'FL', zipCode: '32801', address: '201 S Orange Ave, Orlando, FL 32801', phone: '(407) 555-0902', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 28.5383, longitude: -81.3792, mapsUrl: 'https://maps.google.com/?q=201+S+Orange+Ave+Orlando+FL' },
    { id: 'fl-3', slug: 'tampa-fl', city: 'Tampa', state: 'Florida', stateCode: 'FL', zipCode: '33602', address: '400 N Ashley Dr, Tampa, FL 33602', phone: '(813) 555-0903', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 27.9477, longitude: -82.4584, mapsUrl: 'https://maps.google.com/?q=400+N+Ashley+Dr+Tampa+FL' },
    // Georgia
    { id: 'ga-1', slug: 'atlanta-ga', city: 'Atlanta', state: 'Georgia', stateCode: 'GA', zipCode: '30303', address: '190 Marietta St NW, Atlanta, GA 30303', phone: '(404) 555-1001', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 33.7490, longitude: -84.3880, mapsUrl: 'https://maps.google.com/?q=190+Marietta+St+NW+Atlanta+GA' },
    { id: 'ga-2', slug: 'savannah-ga', city: 'Savannah', state: 'Georgia', stateCode: 'GA', zipCode: '31401', address: '2 East Bryan St, Savannah, GA 31401', phone: '(912) 555-1002', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 32.0835, longitude: -81.0998, mapsUrl: 'https://maps.google.com/?q=2+East+Bryan+St+Savannah+GA' },
    // Hawaii
    { id: 'hi-1', slug: 'honolulu-hi', city: 'Honolulu', state: 'Hawaii', stateCode: 'HI', zipCode: '96813', address: '1450 Ala Moana Blvd, Honolulu, HI 96814', phone: '(808) 555-1101', hours: '11:00 AM - 10:00 PM', weeklyHours: std, latitude: 21.3069, longitude: -157.8583, mapsUrl: 'https://maps.google.com/?q=1450+Ala+Moana+Blvd+Honolulu+HI' },
    // Idaho
    { id: 'id-1', slug: 'boise-id', city: 'Boise', state: 'Idaho', stateCode: 'ID', zipCode: '83702', address: '850 W Main St, Boise, ID 83702', phone: '(208) 555-1201', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 43.6150, longitude: -116.2023, mapsUrl: 'https://maps.google.com/?q=850+W+Main+St+Boise+ID' },
    // Illinois
    { id: 'il-1', slug: 'chicago-il', city: 'Chicago', state: 'Illinois', stateCode: 'IL', zipCode: '60601', address: '456 Michigan Ave, Chicago, IL 60601', phone: '(312) 555-1301', hours: '10:00 AM - 11:00 PM', weeklyHours: ext, latitude: 41.8781, longitude: -87.6298, mapsUrl: 'https://maps.google.com/?q=456+Michigan+Ave+Chicago+IL' },
    { id: 'il-2', slug: 'naperville-il', city: 'Naperville', state: 'Illinois', stateCode: 'IL', zipCode: '60540', address: '75 W Jefferson Ave, Naperville, IL 60540', phone: '(331) 555-1302', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 41.7508, longitude: -88.1535, mapsUrl: 'https://maps.google.com/?q=75+W+Jefferson+Ave+Naperville+IL' },
    // Indiana
    { id: 'in-1', slug: 'indianapolis-in', city: 'Indianapolis', state: 'Indiana', stateCode: 'IN', zipCode: '46204', address: '200 E Market St, Indianapolis, IN 46204', phone: '(317) 555-1401', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 39.7684, longitude: -86.1581, mapsUrl: 'https://maps.google.com/?q=200+E+Market+St+Indianapolis+IN' },
    // Iowa
    { id: 'ia-1', slug: 'des-moines-ia', city: 'Des Moines', state: 'Iowa', stateCode: 'IA', zipCode: '50309', address: '400 Locust St, Des Moines, IA 50309', phone: '(515) 555-1501', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 41.5868, longitude: -93.6250, mapsUrl: 'https://maps.google.com/?q=400+Locust+St+Des+Moines+IA' },
    // Kansas
    { id: 'ks-1', slug: 'wichita-ks', city: 'Wichita', state: 'Kansas', stateCode: 'KS', zipCode: '67202', address: '100 N Main St, Wichita, KS 67202', phone: '(316) 555-1601', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 37.6872, longitude: -97.3301, mapsUrl: 'https://maps.google.com/?q=100+N+Main+St+Wichita+KS' },
    // Kentucky
    { id: 'ky-1', slug: 'louisville-ky', city: 'Louisville', state: 'Kentucky', stateCode: 'KY', zipCode: '40202', address: '500 W Jefferson St, Louisville, KY 40202', phone: '(502) 555-1701', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 38.2527, longitude: -85.7585, mapsUrl: 'https://maps.google.com/?q=500+W+Jefferson+St+Louisville+KY' },
    // Louisiana
    { id: 'la-1', slug: 'new-orleans-la', city: 'New Orleans', state: 'Louisiana', stateCode: 'LA', zipCode: '70112', address: '701 Convention Center Blvd, New Orleans, LA 70130', phone: '(504) 555-1801', hours: '11:00 AM - 12:00 AM', weeklyHours: ext, latitude: 29.9511, longitude: -90.0715, mapsUrl: 'https://maps.google.com/?q=701+Convention+Center+Blvd+New+Orleans+LA' },
    // Maine
    { id: 'me-1', slug: 'portland-me', city: 'Portland', state: 'Maine', stateCode: 'ME', zipCode: '04101', address: '100 Commercial St, Portland, ME 04101', phone: '(207) 555-1901', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 43.6591, longitude: -70.2568, mapsUrl: 'https://maps.google.com/?q=100+Commercial+St+Portland+ME' },
    // Maryland
    { id: 'md-1', slug: 'baltimore-md', city: 'Baltimore', state: 'Maryland', stateCode: 'MD', zipCode: '21202', address: '100 E Pratt St, Baltimore, MD 21202', phone: '(410) 555-2001', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 39.2904, longitude: -76.6122, mapsUrl: 'https://maps.google.com/?q=100+E+Pratt+St+Baltimore+MD' },
    // Massachusetts
    { id: 'ma-1', slug: 'boston-ma', city: 'Boston', state: 'Massachusetts', stateCode: 'MA', zipCode: '02101', address: '100 Causeway St, Boston, MA 02114', phone: '(617) 555-2101', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 42.3601, longitude: -71.0589, mapsUrl: 'https://maps.google.com/?q=100+Causeway+St+Boston+MA' },
    // Michigan
    { id: 'mi-1', slug: 'detroit-mi', city: 'Detroit', state: 'Michigan', stateCode: 'MI', zipCode: '48226', address: '1 Woodward Ave, Detroit, MI 48226', phone: '(313) 555-2201', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 42.3314, longitude: -83.0458, mapsUrl: 'https://maps.google.com/?q=1+Woodward+Ave+Detroit+MI' },
    { id: 'mi-2', slug: 'grand-rapids-mi', city: 'Grand Rapids', state: 'Michigan', stateCode: 'MI', zipCode: '49503', address: '50 Monroe Ave NW, Grand Rapids, MI 49503', phone: '(616) 555-2202', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 42.9634, longitude: -85.6681, mapsUrl: 'https://maps.google.com/?q=50+Monroe+Ave+NW+Grand+Rapids+MI' },
    // Minnesota
    { id: 'mn-1', slug: 'minneapolis-mn', city: 'Minneapolis', state: 'Minnesota', stateCode: 'MN', zipCode: '55402', address: '901 Nicollet Mall, Minneapolis, MN 55402', phone: '(612) 555-2301', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 44.9778, longitude: -93.2650, mapsUrl: 'https://maps.google.com/?q=901+Nicollet+Mall+Minneapolis+MN' },
    // Mississippi
    { id: 'ms-1', slug: 'jackson-ms', city: 'Jackson', state: 'Mississippi', stateCode: 'MS', zipCode: '39201', address: '200 S Lamar St, Jackson, MS 39201', phone: '(601) 555-2401', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 32.2988, longitude: -90.1848, mapsUrl: 'https://maps.google.com/?q=200+S+Lamar+St+Jackson+MS' },
    // Missouri
    { id: 'mo-1', slug: 'st-louis-mo', city: 'St. Louis', state: 'Missouri', stateCode: 'MO', zipCode: '63101', address: '1 Broadway, St. Louis, MO 63102', phone: '(314) 555-2501', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 38.6270, longitude: -90.1994, mapsUrl: 'https://maps.google.com/?q=1+Broadway+St+Louis+MO' },
    { id: 'mo-2', slug: 'kansas-city-mo', city: 'Kansas City', state: 'Missouri', stateCode: 'MO', zipCode: '64105', address: '1100 Main St, Kansas City, MO 64105', phone: '(816) 555-2502', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 39.0997, longitude: -94.5786, mapsUrl: 'https://maps.google.com/?q=1100+Main+St+Kansas+City+MO' },
    // Montana
    { id: 'mt-1', slug: 'billings-mt', city: 'Billings', state: 'Montana', stateCode: 'MT', zipCode: '59101', address: '2800 10th Ave N, Billings, MT 59101', phone: '(406) 555-2601', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 45.7833, longitude: -108.5007, mapsUrl: 'https://maps.google.com/?q=2800+10th+Ave+N+Billings+MT' },
    // Nebraska
    { id: 'ne-1', slug: 'omaha-ne', city: 'Omaha', state: 'Nebraska', stateCode: 'NE', zipCode: '68102', address: '1516 Dodge St, Omaha, NE 68102', phone: '(402) 555-2701', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 41.2565, longitude: -95.9345, mapsUrl: 'https://maps.google.com/?q=1516+Dodge+St+Omaha+NE' },
    // Nevada
    { id: 'nv-1', slug: 'las-vegas-nv', city: 'Las Vegas', state: 'Nevada', stateCode: 'NV', zipCode: '89101', address: '3800 S Las Vegas Blvd, Las Vegas, NV 89109', phone: '(702) 555-2801', hours: '11:00 AM - 2:00 AM', weeklyHours: [ { day: 'Monday', open: '11:00 AM', close: '12:00 AM' }, { day: 'Tuesday', open: '11:00 AM', close: '12:00 AM' }, { day: 'Wednesday', open: '11:00 AM', close: '12:00 AM' }, { day: 'Thursday', open: '11:00 AM', close: '12:00 AM' }, { day: 'Friday', open: '11:00 AM', close: '2:00 AM' }, { day: 'Saturday', open: '11:00 AM', close: '2:00 AM' }, { day: 'Sunday', open: '11:00 AM', close: '12:00 AM' } ], latitude: 36.1699, longitude: -115.1398, mapsUrl: 'https://maps.google.com/?q=3800+S+Las+Vegas+Blvd+Las+Vegas+NV' },
    // New Hampshire
    { id: 'nh-1', slug: 'manchester-nh', city: 'Manchester', state: 'New Hampshire', stateCode: 'NH', zipCode: '03101', address: '1000 Elm St, Manchester, NH 03101', phone: '(603) 555-2901', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 42.9956, longitude: -71.4548, mapsUrl: 'https://maps.google.com/?q=1000+Elm+St+Manchester+NH' },
    // New Jersey
    { id: 'nj-1', slug: 'newark-nj', city: 'Newark', state: 'New Jersey', stateCode: 'NJ', zipCode: '07102', address: '1 Raymond Plaza West, Newark, NJ 07102', phone: '(973) 555-3001', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 40.7357, longitude: -74.1724, mapsUrl: 'https://maps.google.com/?q=1+Raymond+Plaza+West+Newark+NJ' },
    // New Mexico
    { id: 'nm-1', slug: 'albuquerque-nm', city: 'Albuquerque', state: 'New Mexico', stateCode: 'NM', zipCode: '87102', address: '303 Roma Ave NW, Albuquerque, NM 87102', phone: '(505) 555-3101', hours: '11:00 AM - 10:00 PM', weeklyHours: std, latitude: 35.0853, longitude: -106.6504, mapsUrl: 'https://maps.google.com/?q=303+Roma+Ave+NW+Albuquerque+NM' },
    // New York
    { id: 'ny-1', slug: 'new-york-ny', city: 'New York', state: 'New York', stateCode: 'NY', zipCode: '10118', address: '350 5th Ave, New York, NY 10118', phone: '(212) 555-3201', hours: '10:00 AM - 12:00 AM', weeklyHours: ext, latitude: 40.7484, longitude: -73.9857, mapsUrl: 'https://maps.google.com/?q=350+5th+Ave+New+York+NY' },
    { id: 'ny-2', slug: 'brooklyn-ny', city: 'Brooklyn', state: 'New York', stateCode: 'NY', zipCode: '11201', address: '214 Flatbush Ave, Brooklyn, NY 11201', phone: '(718) 555-3202', hours: '10:00 AM - 11:00 PM', weeklyHours: ext, latitude: 40.6782, longitude: -73.9442, mapsUrl: 'https://maps.google.com/?q=214+Flatbush+Ave+Brooklyn+NY' },
    { id: 'ny-3', slug: 'buffalo-ny', city: 'Buffalo', state: 'New York', stateCode: 'NY', zipCode: '14202', address: '617 Main St, Buffalo, NY 14203', phone: '(716) 555-3203', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 42.8864, longitude: -78.8784, mapsUrl: 'https://maps.google.com/?q=617+Main+St+Buffalo+NY' },
    // North Carolina
    { id: 'nc-1', slug: 'charlotte-nc', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC', zipCode: '28202', address: '100 N Tryon St, Charlotte, NC 28202', phone: '(704) 555-3301', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 35.2271, longitude: -80.8431, mapsUrl: 'https://maps.google.com/?q=100+N+Tryon+St+Charlotte+NC' },
    { id: 'nc-2', slug: 'raleigh-nc', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC', zipCode: '27601', address: '200 S McDowell St, Raleigh, NC 27601', phone: '(919) 555-3302', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 35.7796, longitude: -78.6382, mapsUrl: 'https://maps.google.com/?q=200+S+McDowell+St+Raleigh+NC' },
    // North Dakota
    { id: 'nd-1', slug: 'fargo-nd', city: 'Fargo', state: 'North Dakota', stateCode: 'ND', zipCode: '58102', address: '314 N Broadway, Fargo, ND 58102', phone: '(701) 555-3401', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 46.8772, longitude: -96.7898, mapsUrl: 'https://maps.google.com/?q=314+N+Broadway+Fargo+ND' },
    // Ohio
    { id: 'oh-1', slug: 'columbus-oh', city: 'Columbus', state: 'Ohio', stateCode: 'OH', zipCode: '43215', address: '50 W Broad St, Columbus, OH 43215', phone: '(614) 555-3501', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 39.9612, longitude: -82.9988, mapsUrl: 'https://maps.google.com/?q=50+W+Broad+St+Columbus+OH' },
    { id: 'oh-2', slug: 'cleveland-oh', city: 'Cleveland', state: 'Ohio', stateCode: 'OH', zipCode: '44114', address: '100 Lakeside Ave, Cleveland, OH 44114', phone: '(216) 555-3502', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 41.4993, longitude: -81.6944, mapsUrl: 'https://maps.google.com/?q=100+Lakeside+Ave+Cleveland+OH' },
    // Oklahoma
    { id: 'ok-1', slug: 'oklahoma-city-ok', city: 'Oklahoma City', state: 'Oklahoma', stateCode: 'OK', zipCode: '73102', address: '200 N Walker Ave, Oklahoma City, OK 73102', phone: '(405) 555-3601', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 35.4676, longitude: -97.5164, mapsUrl: 'https://maps.google.com/?q=200+N+Walker+Ave+Oklahoma+City+OK' },
    // Oregon
    { id: 'or-1', slug: 'portland-or', city: 'Portland', state: 'Oregon', stateCode: 'OR', zipCode: '97201', address: '1000 SW Broadway, Portland, OR 97205', phone: '(503) 555-3701', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 45.5051, longitude: -122.6750, mapsUrl: 'https://maps.google.com/?q=1000+SW+Broadway+Portland+OR' },
    // Pennsylvania
    { id: 'pa-1', slug: 'philadelphia-pa', city: 'Philadelphia', state: 'Pennsylvania', stateCode: 'PA', zipCode: '19103', address: '1600 Market St, Philadelphia, PA 19103', phone: '(215) 555-3801', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 39.9526, longitude: -75.1652, mapsUrl: 'https://maps.google.com/?q=1600+Market+St+Philadelphia+PA' },
    { id: 'pa-2', slug: 'pittsburgh-pa', city: 'Pittsburgh', state: 'Pennsylvania', stateCode: 'PA', zipCode: '15222', address: '600 Grant St, Pittsburgh, PA 15219', phone: '(412) 555-3802', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 40.4406, longitude: -79.9959, mapsUrl: 'https://maps.google.com/?q=600+Grant+St+Pittsburgh+PA' },
    // Rhode Island
    { id: 'ri-1', slug: 'providence-ri', city: 'Providence', state: 'Rhode Island', stateCode: 'RI', zipCode: '02903', address: '1 Dorrance St, Providence, RI 02903', phone: '(401) 555-3901', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 41.8240, longitude: -71.4128, mapsUrl: 'https://maps.google.com/?q=1+Dorrance+St+Providence+RI' },
    // South Carolina
    { id: 'sc-1', slug: 'columbia-sc', city: 'Columbia', state: 'South Carolina', stateCode: 'SC', zipCode: '29201', address: '1350 Main St, Columbia, SC 29201', phone: '(803) 555-4001', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 34.0007, longitude: -81.0348, mapsUrl: 'https://maps.google.com/?q=1350+Main+St+Columbia+SC' },
    // South Dakota
    { id: 'sd-1', slug: 'sioux-falls-sd', city: 'Sioux Falls', state: 'South Dakota', stateCode: 'SD', zipCode: '57104', address: '200 N Dakota Ave, Sioux Falls, SD 57104', phone: '(605) 555-4101', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 43.5446, longitude: -96.7311, mapsUrl: 'https://maps.google.com/?q=200+N+Dakota+Ave+Sioux+Falls+SD' },
    // Tennessee
    { id: 'tn-1', slug: 'nashville-tn', city: 'Nashville', state: 'Tennessee', stateCode: 'TN', zipCode: '37013', address: '5560 Mt View Rd, Antioch, TN 37013', phone: '(615) 731-7427', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 36.1627, longitude: -86.7816, mapsUrl: 'https://maps.google.com/?q=5560+Mt+View+Rd+Antioch+TN' },
    { id: 'tn-2', slug: 'memphis-tn', city: 'Memphis', state: 'Tennessee', stateCode: 'TN', zipCode: '38133', address: '7840 US-64, Memphis, TN 38133', phone: '(901) 382-7427', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 35.1495, longitude: -90.0490, mapsUrl: 'https://maps.google.com/?q=7840+US-64+Memphis+TN' },
    { id: 'tn-3', slug: 'knoxville-tn', city: 'Knoxville', state: 'Tennessee', stateCode: 'TN', zipCode: '37919', address: '7206 Kingston Pike, Knoxville, TN 37919', phone: '(865) 584-7427', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 35.9606, longitude: -83.9207, mapsUrl: 'https://maps.google.com/?q=7206+Kingston+Pike+Knoxville+TN' },
    // Texas
    { id: 'tx-1', slug: 'houston-tx', city: 'Houston', state: 'Texas', stateCode: 'TX', zipCode: '77002', address: '789 Main St, Houston, TX 77002', phone: '(713) 555-4201', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 29.7604, longitude: -95.3698, mapsUrl: 'https://maps.google.com/?q=789+Main+St+Houston+TX' },
    { id: 'tx-2', slug: 'dallas-tx', city: 'Dallas', state: 'Texas', stateCode: 'TX', zipCode: '75201', address: '1000 Commerce St, Dallas, TX 75201', phone: '(214) 555-4202', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 32.7767, longitude: -96.7970, mapsUrl: 'https://maps.google.com/?q=1000+Commerce+St+Dallas+TX' },
    { id: 'tx-3', slug: 'austin-tx', city: 'Austin', state: 'Texas', stateCode: 'TX', zipCode: '78701', address: '512 Congress Ave, Austin, TX 78701', phone: '(512) 555-4203', hours: '3:00 PM - 11:00 PM', weeklyHours: std, latitude: 30.2672, longitude: -97.7431, mapsUrl: 'https://maps.google.com/?q=512+Congress+Ave+Austin+TX' },
    // Utah
    { id: 'ut-1', slug: 'salt-lake-city-ut', city: 'Salt Lake City', state: 'Utah', stateCode: 'UT', zipCode: '84101', address: '222 S Main St, Salt Lake City, UT 84101', phone: '(801) 555-4301', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 40.7608, longitude: -111.8910, mapsUrl: 'https://maps.google.com/?q=222+S+Main+St+Salt+Lake+City+UT' },
    // Vermont
    { id: 'vt-1', slug: 'burlington-vt', city: 'Burlington', state: 'Vermont', stateCode: 'VT', zipCode: '05401', address: '168 Battery St, Burlington, VT 05401', phone: '(802) 555-4401', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 44.4759, longitude: -73.2121, mapsUrl: 'https://maps.google.com/?q=168+Battery+St+Burlington+VT' },
    // Virginia
    { id: 'va-1', slug: 'virginia-beach-va', city: 'Virginia Beach', state: 'Virginia', stateCode: 'VA', zipCode: '23451', address: '2101 Parks Ave, Virginia Beach, VA 23451', phone: '(757) 555-4501', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 36.8529, longitude: -75.9780, mapsUrl: 'https://maps.google.com/?q=2101+Parks+Ave+Virginia+Beach+VA' },
    { id: 'va-2', slug: 'richmond-va', city: 'Richmond', state: 'Virginia', stateCode: 'VA', zipCode: '23219', address: '1001 E Broad St, Richmond, VA 23219', phone: '(804) 555-4502', hours: '11:00 AM - 11:00 PM', weeklyHours: std, latitude: 37.5407, longitude: -77.4360, mapsUrl: 'https://maps.google.com/?q=1001+E+Broad+St+Richmond+VA' },
    // Washington
    { id: 'wa-1', slug: 'seattle-wa', city: 'Seattle', state: 'Washington', stateCode: 'WA', zipCode: '98101', address: '1st Ave & Pike St, Seattle, WA 98101', phone: '(206) 555-4601', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 47.6062, longitude: -122.3321, mapsUrl: 'https://maps.google.com/?q=1st+Ave+Pike+St+Seattle+WA' },
    { id: 'wa-2', slug: 'spokane-wa', city: 'Spokane', state: 'Washington', stateCode: 'WA', zipCode: '99201', address: '808 W Main Ave, Spokane, WA 99201', phone: '(509) 555-4602', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 47.6588, longitude: -117.4260, mapsUrl: 'https://maps.google.com/?q=808+W+Main+Ave+Spokane+WA' },
    // West Virginia
    { id: 'wv-1', slug: 'charleston-wv', city: 'Charleston', state: 'West Virginia', stateCode: 'WV', zipCode: '25301', address: '1900 Kanawha Blvd E, Charleston, WV 25311', phone: '(304) 555-4701', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 38.3498, longitude: -81.6326, mapsUrl: 'https://maps.google.com/?q=1900+Kanawha+Blvd+E+Charleston+WV' },
    // Wisconsin
    { id: 'wi-1', slug: 'milwaukee-wi', city: 'Milwaukee', state: 'Wisconsin', stateCode: 'WI', zipCode: '53202', address: '790 N Water St, Milwaukee, WI 53202', phone: '(414) 555-4801', hours: '11:00 AM - 11:00 PM', weeklyHours: ext, latitude: 43.0389, longitude: -87.9065, mapsUrl: 'https://maps.google.com/?q=790+N+Water+St+Milwaukee+WI' },
    // Wyoming
    { id: 'wy-1', slug: 'cheyenne-wy', city: 'Cheyenne', state: 'Wyoming', stateCode: 'WY', zipCode: '82001', address: '2200 E Lincolnway, Cheyenne, WY 82001', phone: '(307) 555-4901', hours: '3:00 PM - 10:00 PM', weeklyHours: std, latitude: 41.1400, longitude: -104.8202, mapsUrl: 'https://maps.google.com/?q=2200+E+Lincolnway+Cheyenne+WY' },
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
