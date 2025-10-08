import {WithTanstakRouter} from "./_with-tanstak-router.tsx";
import {WithTanstakQuery} from "./_with-tanstak-query";
import {composeProviders} from "@/shared/helpers";
import {WithJotai} from "./_with-jotai";

export const WithProviders = composeProviders(WithTanstakQuery, WithJotai)

export const Providers = () => {
	return <WithProviders>
			<WithTanstakRouter/>
	</WithProviders>
}
