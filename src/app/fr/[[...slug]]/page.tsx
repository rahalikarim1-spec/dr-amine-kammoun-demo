import { PageFor, metadataFor, staticParamsFor } from "@/lib/route";

export const dynamicParams = false;
export const generateStaticParams = () => staticParamsFor("fr");
export const generateMetadata = (props: Parameters<typeof metadataFor>[1]) => metadataFor("fr", props);

export default function Page(props: Parameters<typeof metadataFor>[1]) {
  return <PageFor lang="fr" {...props} />;
}
