/* @flow */

import { join, dirname } from 'path';
import { readFileSync } from 'fs';

import { getFile, importParent } from '@krakenjs/grabthar';
import { ENV, FUNDING } from '@paypal/sdk-constants';

import type { CacheType, SDKVersionManager } from '../../types';
import { NATIVE_POPUP_CLIENT_JS, NATIVE_POPUP_CLIENT_MIN_JS, NATIVE_FALLBACK_CLIENT_JS,
    NATIVE_FALLBACK_CLIENT_MIN_JS, SMART_BUTTONS_MODULE, WEBPACK_CONFIG } from '../../config';
import { isLocalOrTest, compileWebpack, babelRequire, resolveScript, evalRequireScript, dynamicRequire, type LoggerBufferType } from '../../lib';

const ROOT = join(__dirname, '../../..');

export async function compileNativePopupClientScript() : Promise<?string> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const { WEBPACK_CONFIG_NATIVE_POPUP_DEBUG } = babelRequire(webpackScriptPath);
        const script = await compileWebpack(WEBPACK_CONFIG_NATIVE_POPUP_DEBUG, ROOT);
        return script;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, NATIVE_POPUP_CLIENT_JS));

    if (distScriptPath) {
        const script = readFileSync(distScriptPath).toString();
        return script;
    }
}

type GetNativePopupClientScriptOptions = {|
    debug : boolean,
    logBuffer : ?LoggerBufferType,
    cache : ?CacheType,
    useLocal? : boolean,
    spbVersionManager : SDKVersionManager
|};

export async function getNativePopupClientScript({ logBuffer, cache, debug = false, useLocal = isLocalOrTest(), spbVersionManager } : GetNativePopupClientScriptOptions = {}) : Promise<string> {
    if (useLocal) {
        const script = await compileNativePopupClientScript();
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
        path: debug ? NATIVE_POPUP_CLIENT_JS : NATIVE_POPUP_CLIENT_MIN_JS
    })
}

export type NativePopupRenderScript = {|
    // eslint-disable-next-line no-undef
    NativePopup : <T>({| fundingSource : $Values<typeof FUNDING>, cspNonce : string |}) => T
|};


type GetNativePopupRenderScriptOptions = {|
    debug : boolean,
    logBuffer : LoggerBufferType,
    cache : CacheType,
    useLocal? : boolean,
    spbVersionManager : SDKVersionManager
|};

async function getLocalNativePopupRenderScript() : Promise<?NativePopupRenderScript> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const dir = dirname(webpackScriptPath);
        const { WEBPACK_CONFIG_NATIVE_POPUP } = babelRequire(webpackScriptPath);
        const popup = evalRequireScript(await compileWebpack(WEBPACK_CONFIG_NATIVE_POPUP, dir));
        return popup;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, NATIVE_POPUP_CLIENT_JS));

    if (distScriptPath) {
        const popup = dynamicRequire(distScriptPath);
        return popup;
    }
}

export async function getNativePopupRenderScript({ logBuffer, cache, debug, useLocal = isLocalOrTest(), spbVersionManager } : GetNativePopupRenderScriptOptions = {}) : Promise<NativePopupRenderScript> {
    if (useLocal) {
        const script = await getLocalNativePopupRenderScript();
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

    return importParent({
        moduleDetails,
        path: debug ? NATIVE_POPUP_CLIENT_JS : NATIVE_POPUP_CLIENT_MIN_JS
    })
}

export async function compileNativeFallbackClientScript() : Promise<?string> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const { WEBPACK_CONFIG_NATIVE_FALLBACK_DEBUG } = babelRequire(webpackScriptPath);
        const script = await compileWebpack(WEBPACK_CONFIG_NATIVE_FALLBACK_DEBUG, ROOT);
        return script;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, NATIVE_FALLBACK_CLIENT_JS));

    if (distScriptPath) {
        const script = readFileSync(distScriptPath).toString();
        return script;
    }
}

type GetNativeFallbackClientScriptOptions = {|
    debug : boolean,
    logBuffer : LoggerBufferType,
    cache : CacheType,
    useLocal? : boolean,
    spbVersionManager : SDKVersionManager
|};

export async function getNativeFallbackClientScript({ logBuffer, cache, debug = false, useLocal = isLocalOrTest(), spbVersionManager } : GetNativeFallbackClientScriptOptions = {}) : Promise<string> {
    if (useLocal) {
        const script = await compileNativeFallbackClientScript();
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
        path: debug ? NATIVE_FALLBACK_CLIENT_JS : NATIVE_FALLBACK_CLIENT_MIN_JS
    })
}

export type NativeFallbackRenderScript = {|
    // eslint-disable-next-line no-undef
    NativeFallback : <T>({| fundingSource : $Values<typeof FUNDING>, cspNonce : string |}) => T
|};


type GetNativeFallbackRenderScriptOptions = {|
    debug : boolean,
    logBuffer : LoggerBufferType,
    cache : CacheType,
    useLocal? : boolean,
    spbVersionManager : SDKVersionManager
|};

async function getLocalNativeFallbackRenderScript() : Promise<?NativeFallbackRenderScript> {
    const webpackScriptPath = resolveScript(join(ROOT, WEBPACK_CONFIG));

    if (webpackScriptPath && isLocalOrTest()) {
        const dir = dirname(webpackScriptPath);
        const { WEBPACK_CONFIG_NATIVE_FALLBACK } = babelRequire(webpackScriptPath);
        const fallback = evalRequireScript(await compileWebpack(WEBPACK_CONFIG_NATIVE_FALLBACK, dir));
        return fallback;
    }

    const distScriptPath = resolveScript(join(SMART_BUTTONS_MODULE, NATIVE_FALLBACK_CLIENT_JS));

    if (distScriptPath) {
        const fallback = dynamicRequire(distScriptPath);
        return fallback;
    }
}

export async function getNativeFallbackRenderScript({ logBuffer, cache, debug, useLocal = isLocalOrTest(), spbVersionManager } : GetNativeFallbackRenderScriptOptions = {}) : Promise<NativeFallbackRenderScript> {
    if (useLocal) {
        const script = await getLocalNativeFallbackRenderScript();
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

    return importParent({
        moduleDetails,
        path: debug ? NATIVE_FALLBACK_CLIENT_JS : NATIVE_FALLBACK_CLIENT_MIN_JS
    })
}
