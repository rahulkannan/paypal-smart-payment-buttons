/* @flow */
import { getPayPalSDKWatcher } from '../../watchers';
import type { CacheType, InstanceLocationInformation, SDKLocationInformation } from '../../types';
import { type LoggerBufferType } from '../../lib';

type GetPayPalAuthButtonsRenderScriptOptions = {|
    logBuffer : ?LoggerBufferType,
    cache : ?CacheType,
    useLocal? : boolean,
    locationInformation : InstanceLocationInformation,
    sdkLocationInformation : SDKLocationInformation
|};

export type AuthButtonRenderScript = {|
    button : {|
        AuthButton : ({||}) => {|
            // eslint-disable-next-line no-undef
            render : <T>(() => T) => T
        |},
        validateButtonProps : ({||}) => void
        |},
    version : string
        |};

export async function getPayPalAuthButtonsRenderScript({ logBuffer, cache, locationInformation, sdkLocationInformation }  : GetPayPalAuthButtonsRenderScriptOptions) : Promise<AuthButtonRenderScript> {
    const { getTag, getDeployTag, importDependency } = getPayPalSDKWatcher({ logBuffer, cache, locationInformation, sdkLocationInformation });
    const { version } = await getTag();
    const button = await importDependency('@paypal/identity-components', 'dist/button.js', 'latest');

    // non-blocking download of the DEPLOY_TAG
    getDeployTag().catch(Function.prototype);

    return { button, version };
}
