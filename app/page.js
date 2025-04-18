import FAQ from "@/components/FAQ";
import IpDetails from "@/components/IpDetails";
import IPLocation from "@/components/IPLocation";
import ProtectIP from "@/components/ProtectIP";

export default function Home() {
  return (
    <>
      <IpDetails />
      <ProtectIP />     
      <IPLocation  />
      <FAQ />
      
    </>
  );
}
