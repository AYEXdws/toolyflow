import { permanentRedirect } from "next/navigation";

import { defaultLocale } from "@/lib/i18n";
import { getHomePath } from "@/lib/paths";

export default function RootPage() {
  permanentRedirect(getHomePath(defaultLocale));
}
