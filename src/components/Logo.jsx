import { restaurantConfig } from '../config';
export default function Logo() { return <a className="brand" href="/" aria-label="XERO home"><img className="brand-logo" src="/images/xero-logo.png" alt={restaurantConfig.name}/></a>; }
