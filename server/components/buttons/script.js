/* @flow */

import { join, dirname } from 'path';
import { readFileSync } from 'fs';

import { importDependency, getFile } from '@krakenjs/grabthar'

import type { CacheType,  SDKVersionManager } from '../../types';
import { BUTTON_RENDER_JS, BUTTON_CLIENT_JS, SMART_BUTTONS_MODULE, CHECKOUT_COMPONENTS_MODULE,
    BUTTON_CLIENT_MIN_JS, WEBPACK_CONFIG } from '../../config';
import { isLocalOrTest, compileWebpack, babelRequire, evalRequireScript, resolveScript,
    dynamicRequire, type LoggerBufferType } from '../../lib';


const ROOT = join(__dirname, '../../..');

export type SmartPaymentButtonsRenderScript = {|
    Buttons : ({||}) => {|
        // eslint-disable-next-line no-undef
        render : <T>(() => T) => T
    |},
    validateButtonProps : ({||}) => void
|};

export async function getLocalSmartPaymentButtonRenderScript() : Promise<?SmartPaymentButtonsRenderScript> {
    const webpackScriptPath = resolveScript(join(CHECKOUT_COMPONENTS_MODULE, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const dir = dirname(webpackScriptPath);
        const { WEBPACK_CONFIG_BUTTON_RENDER } = babelRequire(webpackScriptPath);
        return evalRequireScript(await compileWebpack(WEBPACK_CONFIG_BUTTON_RENDER, dir));
    }

    const distScriptPath = resolveScript(join(CHECKOUT_COMPONENTS_MODULE, BUTTON_RENDER_JS));

    if (distScriptPath) {
        return Promise.resolve(dynamicRequire(distScriptPath));
    }

    return Promise.resolve()
}

type GetPayPalSmartPaymentButtonsRenderScriptOptions = {|
    logBuffer : ?LoggerBufferType,
    cache : ?CacheType,
    useLocal? : boolean,
    sdkCDNRegistry : ?string,
    sdkVersionManager : SDKVersionManager
|};

export async function getPayPalSmartPaymentButtonsRenderScript({ logBuffer, cache, useLocal = isLocalOrTest(), sdkCDNRegistry, sdkVersionManager } : GetPayPalSmartPaymentButtonsRenderScriptOptions) : Promise<SmartPaymentButtonsRenderScript> {
    if (useLocal) {
        const script = await getLocalSmartPaymentButtonRenderScript();
        if (script) {
            return script;
        }
    }

    const moduleDetails = await sdkVersionManager.getOrInstallSDK({
        cdnRegistry:  sdkCDNRegistry || '',
        childModules: [ CHECKOUT_COMPONENTS_MODULE ],
        flat:         true,
        dependencies: true,
        logger:       logBuffer,
        cache
    })

    return importDependency({
        moduleDetails,
        dependencyName: CHECKOUT_COMPONENTS_MODULE,
        path: BUTTON_RENDER_JS
    });
}

export async function compileLocalSmartButtonsClientScript() : Promise<?string> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const { WEBPACK_CONFIG_BUTTONS_DEBUG } = babelRequire(webpackScriptPath);
        const script = await compileWebpack(WEBPACK_CONFIG_BUTTONS_DEBUG, ROOT);
        return script;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, BUTTON_CLIENT_JS));

    if (distScriptPath) {
        const script = readFileSync(distScriptPath).toString();
        return script;
    }
}

type GetSmartPaymentButtonsClientScriptOptions = {|
    debug : boolean,
    logBuffer : LoggerBufferType,
    cache : CacheType,
    useLocal? : boolean,
    buttonsVersionManager : SDKVersionManager
|};

export async function getSmartPaymentButtonsClientScript({ logBuffer, cache, debug = false, useLocal = isLocalOrTest(), buttonsVersionManager } : GetSmartPaymentButtonsClientScriptOptions = {}) : Promise<string> {
    if (useLocal) {
        const script = await compileLocalSmartButtonsClientScript();
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
        path: debug ? BUTTON_CLIENT_JS : BUTTON_CLIENT_MIN_JS
    })
}
