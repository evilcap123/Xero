import { restaurantConfig } from '../config';
import { publicAsset } from '../paths';
export default function Logo() { return <a className="brand" href={`${import.meta.env.BASE_URL}`} aria-label="XERO home"><img className="brand-logo" src={publicAsset('xero-logo.png')} alt={restaurantConfig.name}/></a>; }
