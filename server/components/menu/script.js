/* @flow */

import { join } from 'path';

import { getFile } from '@krakenjs/grabthar';

import type { CacheType, SDKVersionManager } from '../../types';
import { MENU_CLIENT_JS, MENU_CLIENT_MIN_JS, WEBPACK_CONFIG, SMART_BUTTONS_MODULE } from '../../config';
import { isLocalOrTest, compileWebpack, babelRequire, resolveScript, dynamicRequire, type LoggerBufferType } from '../../lib';

const ROOT = join(__dirname, '../../..');

export async function compileLocalSmartMenuClientScript() : Promise<?string> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const { WEBPACK_CONFIG_MENU_DEBUG } = babelRequire(webpackScriptPath);
        const script = await compileWebpack(WEBPACK_CONFIG_MENU_DEBUG, ROOT);
        return script;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, MENU_CLIENT_JS));

    if (distScriptPath) {
        const script = dynamicRequire(distScriptPath);
        return script;
    }
}

type GetSmartMenuClientScriptOptions = {|
    debug : boolean,
    logBuffer : ?LoggerBufferType,
    cache : ?CacheType,
    useLocal? : boolean,
    spbVersionManager : SDKVersionManager
|};

export async function getSmartMenuClientScript({ logBuffer, cache, debug = false, useLocal = isLocalOrTest(), spbVersionManager } : GetSmartMenuClientScriptOptions = {}) : Promise<string> {
    if (useLocal) {
        const script = await compileLocalSmartMenuClientScript();

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
        path: debug ? MENU_CLIENT_JS : MENU_CLIENT_MIN_JS
    })
}
