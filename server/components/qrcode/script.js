/* @flow */

import { join } from 'path';
import { readFileSync } from 'fs';

import { getFile } from '@krakenjs/grabthar';
import { ENV } from '@paypal/sdk-constants';

import type { CacheType, SDKVersionManager } from '../../types';
import { QRCODE_CLIENT_JS, QRCODE_CLIENT_MIN_JS, WEBPACK_CONFIG, SMART_BUTTONS_MODULE } from '../../config';
import { isLocalOrTest, compileWebpack, babelRequire, resolveScript, type LoggerBufferType } from '../../lib';

const ROOT = join(__dirname, '../../..');

type SmartQRCodeClientScript = {|
    script : string,
    version : string
|};

export async function compileLocalSmartQRCodeClientScript() : Promise<?SmartQRCodeClientScript> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const { WEBPACK_CONFIG_QRCODE_DEBUG } = babelRequire(webpackScriptPath);
        const script = await compileWebpack(WEBPACK_CONFIG_QRCODE_DEBUG, ROOT);
        return { script, version: ENV.LOCAL };
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, QRCODE_CLIENT_JS));

    if (distScriptPath) {
        const script = readFileSync(distScriptPath).toString();
        return { script, version: ENV.LOCAL };
    }
}

type GetSmartQRCodeClientScriptOptions = {|
    debug : boolean,
    logBuffer : ?LoggerBufferType,
    cache : ?CacheType,
    useLocal? : boolean,
    spbVersionManager : SDKVersionManager
|};

export async function getSmartQRCodeClientScript({ logBuffer, cache, debug = false, useLocal = isLocalOrTest(), spbVersionManager } : GetSmartQRCodeClientScriptOptions = {}) : Promise<SmartQRCodeClientScript> {
    if (useLocal) {
        const script = await compileLocalSmartQRCodeClientScript();

        if (script) {
            return script;
        }
    }

    const moduleDetails = await spbVersionManager.getOrInstallSDK({
        flat:         true,
        dependencies: false,
        logger:       logBuffer,
        cache
    })

    return getFile({
        moduleDetails,
        path: debug ? QRCODE_CLIENT_JS : QRCODE_CLIENT_MIN_JS
    })
}
