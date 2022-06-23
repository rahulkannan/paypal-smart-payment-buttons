/* @flow */

import { join } from 'path';

import {  getFile } from '@krakenjs/grabthar'

import type { CacheType, SDKVersionManager}  from '../../types';
import { CARD_CLIENT_JS, CARD_CLIENT_MIN_JS, WEBPACK_CONFIG,  SMART_BUTTONS_MODULE } from '../../config';
import { isLocalOrTest, compileWebpack, babelRequire, resolveScript, dynamicRequire, type LoggerBufferType } from '../../lib';

const ROOT = join(__dirname, '../../..');

export async function compileLocalSmartCardClientScript() : Promise<?string> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const { WEBPACK_CONFIG_CARD_DEBUG } = babelRequire(webpackScriptPath);
        const script = await compileWebpack(WEBPACK_CONFIG_CARD_DEBUG, ROOT);
        return script;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, CARD_CLIENT_JS));

    if (distScriptPath) {
        const script = dynamicRequire(distScriptPath);
        return script;
    }
}

type GetSmartCardClientScriptOptions = {|
    debug : boolean,
    logBuffer : ?LoggerBufferType,
    cache : ?CacheType,
    useLocal? : boolean,
    buttonsVersionManager : SDKVersionManager
|};

export async function getSmartCardClientScript({ logBuffer, cache, debug = false, useLocal = isLocalOrTest(), buttonsVersionManager } : GetSmartCardClientScriptOptions = {}) : Promise<string> {
    if (useLocal) {
        const script = await compileLocalSmartCardClientScript();

        if (script) {
            return script;
        }
    }

    const moduleDetails = await buttonsVersionManager.getOrInstallSDK({
        flat:         true,
        dependencies: false,
        logger:       logBuffer,
        cache
    })

    return getFile({
        moduleDetails,
        path: debug ? CARD_CLIENT_JS : CARD_CLIENT_MIN_JS
    })
}
