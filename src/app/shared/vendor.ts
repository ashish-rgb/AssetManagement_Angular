import { Assettype } from "./assettype";
import { Vendortype } from "./vendortype";
export class Vendor {
vendorId:number=0;
vendorName:string='';
validFrom:Date;
validTo:Date;
vendorAddress:string='';
vendorTypeId:number=0;
assetTypeId:number=0;
vendorType:Vendortype;
assetType:Assettype;
}
