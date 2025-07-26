import FAQ from "@/components/FAQ";
import IpDetails from "@/components/IpDetails";
import IPLocation from "@/components/IPLocation";
import ProtectIP from "@/components/ProtectIP";
import BannerAd from "@/components/bannerad"; // ✅ Correct import

export default function Home() {
  return (
    <>
      <IpDetails />
      <ProtectIP />

      <BannerAd /> {/* ✅ Use the component here to activate it */}

      <IPLocation />
      <FAQ />
    </>
  );
}
