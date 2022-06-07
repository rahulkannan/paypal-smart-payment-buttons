/* @flow */
import { clientErrorResponse, htmlResponse, allowFrame, defaultLogger, sdkMiddleware, getCSPNonce, type ExpressMiddleware } from '../../lib';
import type { LoggerType, CacheType, InstanceLocationInformation } from '../../types';

import { getPayPalAuthButtonsRenderScript } from './script';
import { htmlTemplate } from './htmlTemplate';


type AuthButtonMiddlewareOptions = {|
    logger : LoggerType,
    cache : CacheType,
    getInstanceLocationInformation : () => InstanceLocationInformation,
|};

export function getAuthButtonMiddleware({ logger = defaultLogger, cache, getInstanceLocationInformation } : AuthButtonMiddlewareOptions) : ExpressMiddleware {
    const locationInformation = getInstanceLocationInformation();
    return sdkMiddleware({ logger, cache, locationInformation }, {
        app: async ({ req, res, params, meta, logBuffer }) => {
            const cspNonce = getCSPNonce(res);
            const {
                scopes,
                buttonType,
                responseType,
                clientID,
                returnurl,
                customLabel,
                locale,
                style = {}
            } = params;

            if (!clientID) {
                logger.info(req, 'smart_buttons_render');
                return clientErrorResponse(res, 'Please provide a clientID query parameter');
            }
            logger.info(req, `auth_button clientID: ${clientID}`);
            const script = await getPayPalAuthButtonsRenderScript({
                logBuffer,
                cache,
                locationInformation,
                sdkLocationInformation: {
                    sdkCDNRegistry: undefined,
                    sdkActiveTag: undefined
                },
            });
            logger.info(req, `auth_button script version ${script.version}`);
            const pageHTML = htmlTemplate({
                AuthButton: script.button.AuthButton,
                locale,
                buttonType,
                cspNonce,
                style,
                customLabel,
                clientID,
                scopes,
                returnUrl: returnurl,
                sdkMeta:   meta,
                responseType
            });
            allowFrame(res);
            return htmlResponse(res, pageHTML);
        }
    });
}
