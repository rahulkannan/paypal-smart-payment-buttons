/* @flow */
import { getPayPalSDKWatcher } from '../../watchers';
import type { CacheType, InstanceLocationInformation, SDKLocationInformation } from '../../types';
import { type LoggerBufferType } from '../../lib';
import { LATEST_TAG, IDENTITY_COMPONENTS_MODULE } from '../../config/config';

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
    const button = await importDependency(IDENTITY_COMPONENTS_MODULE, 'dist/button.js', LATEST_TAG);

    // downloads and logs the deploy tag DEPLOY_TAG
    getDeployTag().catch(Function.prototype);

    return { button, version };
}
