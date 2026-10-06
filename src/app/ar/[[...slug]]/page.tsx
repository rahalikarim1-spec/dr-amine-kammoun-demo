import { PageFor, metadataFor, staticParamsFor } from "@/lib/route";

export const dynamicParams = false;
export const generateStaticParams = () => staticParamsFor("ar");
export const generateMetadata = (props: Parameters<typeof metadataFor>[1]) => metadataFor("ar", props);

export default function Page(props: Parameters<typeof metadataFor>[1]) {
  return <PageFor lang="ar" {...props} />;
}
