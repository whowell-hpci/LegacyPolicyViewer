import { Document } from './Document';
import { Claim } from './claim';

export interface Policy {
  insuredName: string;
  policyNumber: string;
  documents: Document[];
  claims: Claim[];
}
